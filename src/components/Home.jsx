import React from "react";
import "./home.css";
import { FaFigma } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home_container">
      <div className="home_page">
        <div className="gradient1" />
        <div className="header">
          <div className="details">
            <h3>Loupa</h3>
            <ul>
              <li>nft</li>
              <li>about</li>
              <li>work</li>
              <li>blog</li>
              <li>Tech&nbsp;Stack</li>
              <li>more</li>
            </ul>
          </div>
          <div className="gradient2" />
          <div className="socials">
            <ul>
              <li>
                <a href="#" alt="figmaicon">
                  <FaFigma />{" "}
                </a>
              </li>
              <li>
                <a href="#" alt="twitter">
                  <FaInstagram />{" "}
                </a>
              </li>
              <li>
                <a href="#" alt="ig">
                  <CiTwitter />{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="#" alt="ig">
                  <FaWhatsapp />{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="gradient3" />
          <div className="gradient4" />
        </div>
        <div className="about">
          <div className="profile">
            <img src="/src/assets/Polygon2.png" alt="polygon" />
            <p>Michael Loupa</p>
            <i>michaelloupa.me</i>
          </div>
          <div className="profile_details">
            Lorem ipsum dolor sit amet consectetur. At non rutrum vitae platea
            quam. A eget magna quis sed. Eget a maecenas felis ipsum. Mi commodo
            viverra pharetra ornare adipiscing ridiculus id eu dui.
          </div>
        </div>
        <div className="featured">
          <h3>Featured Projects</h3>
          <div className="cards">
            <div className="card">
              <img src="/src/assets/Rectangle1.png" alt="" />
              <p>Watch Maker</p>
              <p>Customize your watch design.</p>
            </div>
            <div className="card">
              <img src="/src/assets/Rectangle1.png" alt="" />
              <p>Watch Maker</p>
              <p>Customize your watch design.</p>
            </div>
            <div className="card">
              <img src="/src/assets/Rectangle1.png" alt="" />
              <p>Watch Maker</p>
              <p>Customize your watch design.</p>
            </div>
            <div className="card">
              <img src="/src/assets/Rectangle1.png" alt="" />
              <p>Watch Maker</p>
              <p>Customize your watch design.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
