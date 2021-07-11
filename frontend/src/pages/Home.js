import { MDBCol, MDBContainer, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader.js";
import Post from "../components/Post.js";
import SideBar from "../components/SideBar.js";
import Top from "../components/Top.js";
import { Link } from "react-router-dom";
import { listPosts } from "../actions/postsActions.js";
import { useEffect } from "react";
import Paginate from "../components/Paginate.js";
const Home = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();
  const postsList = useSelector((state) => state.postsList);
  const { loading, posts, page, pages } = postsList;

  useEffect(() => {
    dispatch(listPosts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Top />
      <br />
      <MDBContainer>
        <MDBRow>
          <MDBCol md={8}>
            {loading && <Loader />}

            {posts.map((post) => (
              <div className="latest__section">
                <img src={post.image} alt="" className="latest__img" />

                <div className="post__holder">
                  {" "}
                  <Link to="/">
                    <h3>{post.title}</h3>
                  </Link>
                  <div className="calendar__holder">
                    <i className="fa fa-calendar"></i>{" "}
                    {post.createdAt.substring(0, 10)}
                  </div>
                  <p>{post.post}</p>
                  <MDBBtn outline className="mx- button__sub" type="button">
                    <Link to={`/post/${post._id}`}>Read More</Link>
                  </MDBBtn>
                </div>
              </div>
            ))}
          </MDBCol>
          <MDBCol md={4}>
            <SideBar />
          </MDBCol>
        </MDBRow>
        <Paginate page={page} pages={pages}  keyword={keyword? keyword :""} />
      </MDBContainer>
    </>
  );
};

export default Home;
