import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
} from "react-share";
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import Post from "../components/Post";
import "./SinglePost.css";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, listPost } from "../actions/postsActions";
import { toast } from "react-toastify";
import Message from "../components/Message";
import { POST_DELETE_RESET } from "../constants/postsContants";

const SinglePost = ({ history, match }) => {
  const dispatch = useDispatch();
  const postsDetails = useSelector((state) => state.postsDetails);
  const { loading, post, error } = postsDetails;
  const postsDelete = useSelector((state) => state.postsDelete);
  const { deleted, error: errorDelete } = postsDelete;
  const userLogin = useSelector((state) => state.userLogin);
  const { loading: loadingLogin, userInfo, error: errorLogin } = userLogin;

  const url = `http://localhost:5000/api/posts/${match.params.id}`;
  useEffect(() => {
    if (deleted) {
      history.push("/");
      dispatch({ type: POST_DELETE_RESET });
    } else {
      dispatch(listPost(match.params.id));
    }
  }, [dispatch, match, userInfo, history, deleted]);

  const deleteHandler = (id) => {
    if (window.confirm("Do you want to delete this post?")) {
      dispatch(deletePost(id));
    }
  };

  return (
    <MDBContainer>
      {deleted && toast("Post deleted successfully")}

      {loading ? (
        <Loader className=" d-flex justify-content-center align-items-center" />
      ) : (
        post && (
          <MDBRow>
            <MDBCol md={12}>
              <div className="text__holder">
                <h2> {post.title} </h2>
                <br />
                <img src={post.image} alt="" />
                <h2>Get Social</h2>
                <div className="social__tab">
                  <FacebookShareButton url={url} title={post.title}>
                    <FacebookIcon
                      className="social__icons"
                      size={32}
                      round={true}
                    ></FacebookIcon>
                  </FacebookShareButton>
                  <TelegramShareButton url={url} title={post.title}>
                    <TelegramIcon
                      className="social__icons"
                      size={32}
                      round={true}
                    ></TelegramIcon>
                  </TelegramShareButton>
                  <TwitterShareButton url={url} title={post.title}>
                    <TwitterIcon
                      className="social__icons"
                      size={32}
                      round={true}
                    ></TwitterIcon>
                  </TwitterShareButton>
                  <LinkedinShareButton url={url} title={post.title}>
                    <LinkedinIcon
                      className="social__icons"
                      size={32}
                      round={true}
                    ></LinkedinIcon>
                  </LinkedinShareButton>
                  <EmailShareButton url={url} title={post.title}>
                    <EmailIcon
                      className="social__icons"
                      size={32}
                      round={true}
                    ></EmailIcon>
                  </EmailShareButton>
                </div>
                <div> {errorDelete && toast(errorDelete)}</div>
                {userInfo && userInfo?.isAdmin && (
                  <div className="edit__icons">
                    <button
                      onClick={() => deleteHandler(match.params.id)}
                      className="my btn"
                    >
                      <i className="fas fa-trash"></i>
                    </button>

                    <Link to={`/posts/${match.params.id}`}>
                      <i class="fas fa-edit"></i>
                    </Link>
                    <Link to="/addpost">
                      <i className="fas fa-plus-circle"></i>
                    </Link>
                  </div>
                )}
                <div className="text__area">
                  <p>{post.post}</p>
                </div>
                <div className="more__posts"></div>
              </div>
            </MDBCol>
          </MDBRow>
        )
      )}
    </MDBContainer>
  );
};

export default SinglePost;
