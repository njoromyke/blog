import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import Post from "../components/Post.js";
import SideBar from "../components/SideBar.js";
import Top from "../components/Top.js";
const Home = () => {
  return (
    <>
      <Top />
      <br />
      <MDBContainer>
        <MDBRow>
          <MDBCol md={8}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
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
