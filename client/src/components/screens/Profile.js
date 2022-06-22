import React, { useEffect, useContext } from "react";
import { UserContext } from "../../App";
const Profile = () => {
  const [myPics, setPics] = React.useState([]);
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    fetch("/myPost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        console.log(state);
        setPics(result.myposts);
      });
  }, []);
  return (
    // console.log(state);
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
            src={state ? state.pic : "loading"}
            alt=""
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "80px",
            }}
          />
        </div>
        <div>
          <h4>{state ? state.name : "Loading"}</h4>
          <h4>{state ? state.email : "Loading"}</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
            }}
          >
            <h5>{myPics.length} Posts</h5>
            <h5>{state ? state.followers.length : "0"} followers</h5>
            <h5>{state ? state.following.length : "0"} Following</h5>
          </div>
        </div>
      </div>

      <div className="gallery">
        {myPics &&
          myPics.map((item) => {
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
  );
};

export default Profile;
