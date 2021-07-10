import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBFile,
  MDBRow,
} from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./Addpost.css";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../actions/postsActions";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPost = ({ history }) => {
  const dispatch = useDispatch();
  const options = [
    { value: "technology", label: "Technology" },
    { value: "gossip", label: "Gossip" },
    { value: "trending", label: "Trending" },
    { value: "fashion", label: "Fashion" },
    { value: "business", label: "Business" },
    { value: "lifestyle", label: "Lifestyle" },
    { value: "creative", label: "Creative" },
  ];
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [post, setPost] = useState("");
  const [uploading, setUploading] = useState(false);

  const postsCreate = useSelector((state) => state.postsCreate);
  const { success, error } = postsCreate;
  const userLogin = useSelector((state) => state.userLogin);
  const { loading: loadingLogin, userInfo, error: errorLogin } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [userInfo, history,error,success]);

  const onChangeInput = (value) => {
    setCategory(value.value);
  };
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/upload", formData, config);
      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(title, image, category, post));
  };
  return (
    <>
      <MDBContainer>
        {success && toast("Post created successfully")}
        {error && toast(error)}
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <br />

                <input
                  type="text"
                  className="form-control"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                <MDBFile
                  id="image-file"
                  label="Chose File"
                  onChange={uploadFileHandler}
                ></MDBFile>
                <br />
                <Select
                  className="input__select"
                  options={options}
                  label="Choose category"
                  onChange={onChangeInput}
                />
                <br />
                <textarea
                  value={post}
                  onChange={(e) => {
                    setPost(e.target.value);
                  }}
                  className="form-control text__area"
                >
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
