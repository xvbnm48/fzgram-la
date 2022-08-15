import React, { useEffect, useContext } from "react";
import { UserContext } from "../../App";
const Profile = () => {
  const [myPics, setPics] = React.useState([]);
  const { state, dispatch } = useContext(UserContext);
  const [image, setImage] = React.useState("");
  // const [url, setUrl] = React.useState("");
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
  console.log(state);
  useEffect(() => {
    if (image) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "Fzgram");
      data.append("cloud_name", "fariz123");
      fetch("https://api.cloudinary.com/v1_1/fariz123/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          // setUrl(data.url);
          console.log(data);
          fetch("/updatepic", {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
              pic: data.url,
            }),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              localStorage.setItem(
                "user",
                JSON.stringify({ ...state, pic: result.pic })
              );
              dispatch({ type: "UPDATEPIC", payload: result.pic });
              //window.location.reload()
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [image]);
  const updatePhoto = (file) => {
    setImage(file);
  };
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
          <div></div>
          <div className="file-field input-field" style={{ margin: "10px" }}>
            <div className="btn #64b5f6 blue darken-1">
              <span>Update pic</span>
              <input
                type="file"
                onChange={(e) => updatePhoto(e.target.files[0])}
              />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
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
