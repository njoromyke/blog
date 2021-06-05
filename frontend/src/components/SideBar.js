import { MDBBtn, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const SideBar = () => {
  return (
    <>
      <div className='side__bar'>
        <h4>Juja Blog</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem deserunt ipsum officia voluptatibus debitis? Ducimus
          repellat error enim excepturi amet.
        </p>
        <div className='form__holder'>
          <form>
            <input
              className='form__input'
              type='text'
              placeholder='Enter Email'
            />
            <MDBBtn outline type='submit' className='button__sub'>
              SUBSCRIBE
            </MDBBtn>
          </form>
        </div>
        <br />

        <h5 className='text-white text-center'>Tags for you</h5>
        <div className='tags'>
          <br />
          <span>sports</span>
          <span>Trending</span>
          <span>Latest</span>
          <span>Fashion</span>
          <span>Business</span>
          <span>Lifestyle</span>
          <span>Creative</span>
          <span>Business</span>
          <span>Creative</span>
        </div>
        <div className='important__links'>
          <h3>Latest Posts</h3>
          <Link to='/'>
            <div className='import__holder'>
              <img
                src='https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg'
                alt=''
                className='link__img'
              />
              <h5> Lorem ipsum dolor sit amet. </h5>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
