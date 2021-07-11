import { useEffect } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "./Post.css";
import { Link,withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../actions/postsActions";
const Post = ({match}) => {
  const keyword = match.params.keyword;
  const dispatch = useDispatch();
  const postsList = useSelector((state) => state.postsList);

  const { loading, posts, error } = postsList;

  useEffect(() => {
    dispatch(listPosts(keyword));
  }, [dispatch, keyword]);

  return (
    <>
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
    </>
  );
};

export default Post;
