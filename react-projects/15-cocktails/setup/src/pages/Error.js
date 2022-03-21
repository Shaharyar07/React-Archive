import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <section className="error-page section">
        <div className="error-container">
          <h1>Oops, It's an DeadEnd!</h1>
          <Link className="btn btn-primary" to="/">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Error;
