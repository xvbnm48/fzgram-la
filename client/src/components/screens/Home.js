import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <div className="card home-card">
        <h5>Airi</h5>
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6>title</h6>
          <p>this is japan!</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
      <div className="card home-card">
        <h5>Airi</h5>
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGphcGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>
          <h6>title</h6>
          <p>this is japan!</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
      <div className="card home-card">
        <h5>Airi</h5>
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1522623349500-de37a56ea2a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGphcGFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="card-content">
          <i className="material-icons" style={{ color: "red" }}>
            favorite
          </i>

          <h6>title</h6>
          <p>this is japan!</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
    </div>
  );
};

export default Home;
