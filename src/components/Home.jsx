import React from "react";
import "./home.css";
import { FaFigma } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home_container">
      <div className="home_page">
        <div className="gradient1" />
        <div className="header">
          <div className="details">
            <h3>Loupa</h3>
            <ul>
              <li>About</li>
              <li>Work</li>
              <li>Blog</li>
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
      </div>
    </div>
  );
};

export default Home;
