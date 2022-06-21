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
        // console.log(result);
        setPics(result.myposts);
      });
  }, []);
  return (
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
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
            }}
          >
            <h5>40 Posts</h5>
            <h5>40 followers</h5>
            <h5>40 Following</h5>
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
