import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import "./Top.css";
const Home = () => {
  return (
    <>
      <section className='main'>
        <MDBContainer>
          <MDBRow>
            <MDBCol md={8}>
              {" "}
              <Link to='/'>
                <div className='category'>
                  <span> Fashion </span>
                </div>
              </Link>
              <Link to='/'>
                <img
                  src='https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg'
                  className='img__main img-fluid'
                  alt=''
                />
              </Link>
              <Link to='/'>
                <h2>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quia, voluptas!
                </h2>
              </Link>
              <br />
              <div className='date__holder'>
                <i className='fa fa-calendar'></i> 12-01-2021
              </div>
              <div className='para__area'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus obcaecati assumenda, temporibus soluta aliquam quasi
                  quas quibusdam quaerat voluptatum, quos natus recusandae
                  dignissimos voluptatem officiis! Dicta aliquid voluptate
                  recusandae reprehenderit quo, nisi quaerat quibusdam fuga modi
                  quae nobis placeat consectetur, labore excepturi. Temporibus
                  quas id dolores tenetur vero aliquid et, at beatae autem
                  impedit possimus nam enim consequatur cumque quo corporis
                  quod, ea dignissimos aliquam quisquam cupiditate laboriosam
                  veritatis. In vero voluptatum obcaecati sint incidunt officiis
                  esse, atque aliquid earum non amet asperiores deserunt porro
                  laboriosam minima nihil, cumque dicta facere excepturi
                  provident nulla id illo sit reprehenderit. Quia quos
                  distinctio itaque corrupti unde temporibus voluptatem beatae
                  at ratione eveniet, obcaecati quidem! Nemo temporibus tempore
                  saepe vel vitae exercitationem tempora laboriosam rem enim
                  recusandae ducimus porro perspiciatis expedita qui minus ea
                  commodi, neque alias odit nisi molestiae sunt deleniti ipsa
                  illum. Reiciendis officiis ratione obcaecati sunt consequuntur
                  facilis, excepturi qui dolor modi minima rem velit illo quas
                  eum, consectetur soluta at in? Maiores, voluptates dicta
                  dolorum inventore sit dolore. Quasi alias dolor amet tempora
                  beatae ab rerum ipsam dolore blanditiis, quidem provident
                  laboriosam possimus. Perferendis, provident eos. Aliquid
                  libero natus blanditiis quam error asperiores similique earum
                  commodi. Aliquam, repellat nemo.
                </p>
              </div>
            </MDBCol>
            <MDBCol md={4}>
              <MDBRow>
                <div className='side__row mt-4'>
                  <span>sports</span>
                  <img
                    src='https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg'
                    className='img__row'
                    alt=''
                  />

                  <Link to='/'>
                    <h4>Lorem ipsum dolor sit amet.</h4>
                  </Link>
                  <div className='calendar__holder text-white'>
                    <i className='fa fa-calendar'></i> 1-01-2020
                  </div>
                </div>
              </MDBRow>

              <MDBRow>
                <div className='side__row2 pt-2'>
                  <span>lifestyle</span>
                  <img
                    src='https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg'
                    alt=''
                  />
                  <Link to='/'>
                    <h4>Lorem ipsum dolor sit amet.</h4>
                  </Link>
                  <div className='calendar__holder2 text-white'>
                    <i className='fa fa-calendar'></i> 1-01-2020
                  </div>
                </div>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default Home;
