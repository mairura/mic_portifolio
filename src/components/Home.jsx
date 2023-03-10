import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home_container">
      <div className="home_page">
        <div className="header">
          <div className="details">
            <h3>Loupa</h3>
            <ul>
              <li>About</li>
              <li>Work</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="socials">
            <p>IG</p>
            <p>Twitter</p>
            <p>Whatsapp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
