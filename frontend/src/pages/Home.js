import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import Loader from "../components/Loader.js";
import Post from "../components/Post.js";
import SideBar from "../components/SideBar.js";
import Top from "../components/Top.js";
const Home = () => {
  const dispatch = useDispatch();
  const postsList = useSelector((state) => state.postsList);
  const { loading, posts, error } = postsList;
  return (
    <>
      <Top />
      <br />
      <MDBContainer>
        <MDBRow>
          
          <MDBCol md={8}>
          {loading &&<Loader/> }
            <Post />
          </MDBCol>
          <MDBCol md={4}>
            <SideBar />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Home;
