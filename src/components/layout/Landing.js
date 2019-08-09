import React, { Fragment } from "react";
import Posts from "../posts/Posts";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Fragment>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Transplant Support Community</h1>
            <p className="lead">
              Join the community, share posts, ask questions, get support. Find
              your community.
              <br />A community for anyone who is dealing with organ failure,
              pre-transplant, post-transplant, care-givers, friends and family.
            </p>

            <div className="buttons">
              <Link to="/login" className=" btn btn-success">
                login
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Posts />
    </Fragment>
  );
};

export default Landing;
