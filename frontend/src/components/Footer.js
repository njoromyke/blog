import React from "react";
import "./Footer";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
const Footer = () => {
  const date = new Date();
  return (
    <>
      <MDBContainer>
        <MDBRow>
            <br />
          <hr className="text-white-50" />
          <MDBCol
            className="d-flex justify-content-center align-items-center text-white pt-5 pb-5 fw-light"
            md={12}
          >
            <div className="footer">
              <h4>
                {" "}
                &copy; copy right mykesoftware 
                <br />
                {date.getFullYear()}
              </h4>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Footer;
