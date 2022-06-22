import React, { useEffect, useContext } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";
const Profile = () => {
  const [userProfile, setProfile] = React.useState(null);

  const { state, dispatch } = useContext(UserContext);
  const { userId } = useParams();
  const [showFollow, setShoFollow] = React.useState(
    state ? !state.following.includes(userId) : true
  );
  console.log(userId);
  useEffect(() => {
    fetch(`/user/${userId}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);

        setProfile(result);
      });
  }, []);
  const followUser = () => {
    fetch("/follow", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        followId: userId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "UPDATE",
          payload: { following: data.following, followers: data.followers },
        });
        localStorage.setItem("user", JSON.stringify(data));
        setProfile((prevState) => {
          return {
            ...prevState,
            user: {
              ...prevState.user,
              followers: [...prevState.user.followers, data._id],
            },
          };
        });
        setShoFollow(false);
      });
  };
  const unfollowUser = () => {
    fetch("/unfollow", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        unfollowId: userId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "UPDATE",
          payload: { following: data.following, followers: data.followers },
        });
        localStorage.setItem("user", JSON.stringify(data));
        setProfile((prevState) => {
          const newFollower = prevState.user.followers.filter(
            (item) => item !== data._id
          );
          return {
            ...prevState,
            user: {
              ...prevState.user,
              followers: newFollower,
            },
          };
        });
        setShoFollow(true);
      });
  };
  return (
    <>
      {userProfile ? (
        <div style={{ maxWidth: "550px", margin: "0px auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "10px 0px",
              borderBottom: "1px solid grey",
            }}
          >
            <div>
              <img
                src={userProfile.user.pic}
                alt=""
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "80px",
                }}
              />
            </div>
            <div>
              <h4>{userProfile.user.name}</h4>
              <h4>{userProfile.user.email}</h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "108%",
                }}
              >
                <h5>{userProfile.posts.length} Posts</h5>
                <h5>{userProfile.user.followers.length} followers</h5>
                <h5>{userProfile.user.following.length} Following</h5>
              </div>
              {showFollow ? (
                <button
                  style={{ margin: "10px" }}
                  className="btn waves-effect waves-light #64b5f6 blue darken-1"
                  onClick={() => {
                    followUser();
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  style={{ margin: "10px" }}
                  className="btn waves-effect waves-light #64b5f6 blue darken-1"
                  onClick={() => {
                    unfollowUser();
                  }}
                >
                  unFollow
                </button>
              )}
            </div>
          </div>

          <div className="gallery">
            {userProfile.posts &&
              userProfile.posts.map((item) => {
                return (
                  <img
                    key={item._id}
                    className="item"
                    src={item.photo}
                    alt={item.title}
                  />
                );
              })}
          </div>
        </div>
      ) : (
        <h2>Loading... : </h2>
      )}
    </>
  );
};

export default Profile;
