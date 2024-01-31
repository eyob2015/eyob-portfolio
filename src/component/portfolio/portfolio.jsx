import React from 'react';
import './portfolio.css';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="container" id="portfolio">
      <h2 className="text-center my-5">Projects I Have Built</h2>
      <div className="card-grid">
        <div className="card">
          <img
            src={require("../../assets/netflix2.jpeg")}
            alt="Netflix Clone"
          />
          <div className="card-body">
            <h5 className="card-title">
              A Netflix Clone with React and Movie API Integration
            </h5>
            <p className="card-text">
              a web application that replicates the core functionalities of
              Netflix, React for the frontend and leveraging a movie API for
              dynamic content.{" "}
            </p>
            <div className="button-container">
              <a
                href="https://eyob-netflix-clone.vercel.app"
                className="btn btn-primary mr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
              <Link to="/project/netflix">
                <a className="btn btn-secondary">Details</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={require("../../assets/amazone2.jpeg")} alt="Amazone App " />
          <div className="card-body">
            <h5 className="card-title">Full Stack Amazone Web App</h5>
            <p className="card-text">
              Full stack App Using React ,nodejs , express , Firebase and maore
              Amazing features like payment integration using Stripe
            </p>
            <div className="button-container">
              <a
                href="https://amazone-eyobs-clone.vercel.app/"
                className="btn btn-primary mr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>

              <Link to="/project/amazone">
                <a className="btn btn-secondary">Details</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={require("../../assets/forum.png")} alt="Evangadi Forum" />
          <div className="card-body">
            <h5 className="card-title">Evangadi Forum Web App</h5>
            <p className="card-text">
              Full stack App Using React ,nodejs , express , Vite and many more
              frameworks and libraries are used features
            </p>
            <div className="button-container">
              <a
                href="https://evangadi-forum-owx6.vercel.app"
                className="btn btn-primary mr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
              <Link to="/project/forum">
                <a className="btn btn-secondary">Details</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
