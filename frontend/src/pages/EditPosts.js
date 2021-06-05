import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import "./EditPost.css";
const EditPosts = () => {
  const [heading, setHeading] = useState("");
  const [img, setImg] = useState("");
  const [post, setPost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol md={12}>
            <div className='add__post text-center'>
              <form onSubmit={handleSubmit}>
                <h2>Edit Post</h2>
                <br />
                <input
                  type='text'
                  placeholder='Enter title'
                  className='form-control'
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                />
                <br />

                <input
                  type='file'
                  className='form-control'
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                />
                <br />
                <textarea className='form-control text__area'>
                  Enter your text here
                </textarea>
                <br />
                <MDBBtn outline block type='submit' className='button__sub '>
                  {" "}
                  Submit{" "}
                </MDBBtn>
              </form>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default EditPosts;
