import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <div>
      <div style={{ display: "block", width: 700, padding: 30 }}>
        <Spinner animation="grow" variant="warning" />
      </div>
    </div>
  );
};

export default Loading;
