import React, { useEffect, useState } from "react";
import logo from "../images/logo.jpg";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = ({ history }) => {
  const [showBasic, setShowBasic] = useState(false);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    }
  });

  return (
    <>
      <div className="container mt-3">
        <div className="row ">
          <div className="col-md-12 my__header">
            <img src={logo} className="navbar__img" alt="logo" />
            <div className="search__box  d-none d-md-block">
              <input
                className="form__search"
                placeholder="input anything"
                type="text"
                onChange={(e) => setKeyword(e.target.value)}
                value={keyword}
              />
              <i class="fas fa-search"></i>
            </div>
          </div>
        </div>
      </div>
      <MDBNavbar expand="lg" dark containerFluid className="bg-color" sticky>
        <MDBContainer fluid>
          {/* <MDBNavbarBrand href='#'>
            <img
              src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png'
              alt='text'
              className='img-fluid'
            />
          </MDBNavbarBrand> */}

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="my__navBar  mb-2 mb-lg-0">
              <MDBNavbarItem>
                <Link className="my__link" to="/">
                  {" "}
                  <MDBNavbarLink>Home</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="my__link" to="/TECHNOLOGY">
                  <MDBNavbarLink>Technology</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="my__link" to="/gossip">
                  <MDBNavbarLink>Gossip</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="my__link" to="/trending">
                  <MDBNavbarLink>Trending</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="my__link" to="/fashion">
                  <MDBNavbarLink>Fashion</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="my__link" to="/business">
                  <MDBNavbarLink>Business</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="my__link" to="/lifestyle">
                  <MDBNavbarLink>Lifestyle</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="my__link" to="/creative">
                  <MDBNavbarLink>Creative</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem></MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Header;
