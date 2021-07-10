import React from "react";
import { MDBSpinner } from "mdb-react-ui-kit";

export default function Loader() {
  return (
    <>
      <MDBSpinner
        grow
        className="d-flex justify-content-center align-items-center"
        color="warning"
      >
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    </>
  );
}
