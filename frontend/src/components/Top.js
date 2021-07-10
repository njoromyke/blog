import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { listBiz, listTop, listTrend } from "../actions/postsActions";
import Loader from "./Loader";
import "./Top.css";
const Home = () => {
  const dispatch = useDispatch();
  const postTop = useSelector((state) => state.postTop);
  const { topPost, loading } = postTop;

  const postBusiness = useSelector((state) => state.postBusiness);
  const { bizPost, loading: loadingBiz } = postBusiness;

  const postTrending = useSelector((state) => state.postTrending);
  const { trendPost, loading: loadingTrend } = postTrending;

  useEffect(() => {
    dispatch(listTop());
    dispatch(listBiz());
    dispatch(listTrend());
  }, [dispatch]);
  return (
    <>
      <section className="main">
        <MDBContainer>
          {loading ? (
            <Loader />
          ) : (
            topPost.map((post) => (
              <MDBRow>
                <MDBCol md={8}>
                  {" "}
                  <Link to={`/post/${post._id}`}>
                    <div className="category">
                      <span>{post.category}</span>
                    </div>
                  </Link>
                  <Link to={`/post/${post._id}`}>
                    <img src={post.image} className="img__main " alt="" />
                  </Link>
                  <Link to={`/post/${post._id}`}>
                    <h2>{post.title} </h2>
                  </Link>
                  <br />
                  <div className="date__holder">
                    <i className="fa fa-calendar"></i>{" "}
                    {post.createdAt.substring(0, 9)}
                  </div>
                  <div className="para__area">
                    <p>{post.post}</p>
                  </div>
                </MDBCol>
                <MDBCol md={4}>
                  <MDBRow>
                    {bizPost.map((biz) => (
                      <div className="side__row mt-4">
                        <span>{biz.category}</span>
                        <img src={biz.image} className="img__row" alt="" />

                        <Link to={`/post/${biz._id}`}>
                          <h4>{biz.title}</h4>
                        </Link>
                        <div className="calendar__holder text-white">
                          <i className="fa fa-calendar"></i>{" "}
                          {biz.createdAt.substring(0, 9)}
                        </div>
                      </div>
                    ))}
                  </MDBRow>

                  <MDBRow>
                    {trendPost.map((trend) => (
                      <div className="side__row2 pt-2">
                        <span>{trend.category}</span>
                        <img src={trend.image} alt="" />
                        <Link to={`/post/${trend._id}`}>
                          <h4>{trend.title}</h4>
                        </Link>
                        <div className="calendar__holder2 text-white">
                          <i className="fa fa-calendar"></i>{" "}
                          {trend.createdAt.substring(0, 9)}
                        </div>
                      </div>
                    ))}
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            ))
          )}
        </MDBContainer>
      </section>
    </>
  );
};

export default Home;
