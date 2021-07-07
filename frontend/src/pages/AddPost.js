import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import Select from "react-select";
import "./Addpost.css";
const AddPost = () => {
  const options = [
    { value: "technology", label: "Technology" },
    { value: "gossip", label: "Gossip" },
    { value: "trending", label: "Trending" },
    { value: "fashion", label: "Fashion" },
    { value: "business", label: "Business" },
    { value: "lifestyle", label: "Lifestyle" },
    { value: "creative", label: "Creative" },
  ];
  const [heading, setHeading] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [post, setPost] = useState("");

  const onChangeInput = (value) => {
    console.log(value.value);
    setCategory(value.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol md={12}>
            <div className="add__post text-center">
              <form onSubmit={handleSubmit}>
                <h2>Add Post</h2>
                <br />
                <input
                  type="text"
                  placeholder="Enter title"
                  className="form-control"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                />
                <br />

                <input
                  type="file"
                  className="form-control"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                />
                <br />
                <Select
                className="input__select"
                  options={options}
                  label="Choose category"
                  onChange={onChangeInput}
                />
                <br />
                <textarea className="form-control text__area">
                  Enter your text here
                </textarea>
                <br />
                <MDBBtn outline block type="submit" className="button__sub ">
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

export default AddPost;
