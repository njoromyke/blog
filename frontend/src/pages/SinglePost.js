import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
const SinglePost = () => {
  const url = "https://me.com";
  const title = "title";
  const deleteHandler = (id) => {
    window.confirm("Do you want to delete this post?");
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md={12}>
          <div className='text__holder'>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
              ullam?{" "}
            </h2>
            <br />
            <img
              src='https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg'
              alt=''
            />
            <h2>Get Social</h2>
            <div className='social__tab'>
              <FacebookShareButton url={url} title={title}>
                <FacebookIcon
                  className='social__icons'
                  size={32}
                  round={true}
                ></FacebookIcon>
              </FacebookShareButton>
              <TelegramShareButton url={url} title={title}>
                <TelegramIcon
                  className='social__icons'
                  size={32}
                  round={true}
                ></TelegramIcon>
              </TelegramShareButton>
              <TwitterShareButton url={url} title={title}>
                <TwitterIcon
                  className='social__icons'
                  size={32}
                  round={true}
                ></TwitterIcon>
              </TwitterShareButton>
              <LinkedinShareButton url={url} title={title}>
                <LinkedinIcon
                  className='social__icons'
                  size={32}
                  round={true}
                ></LinkedinIcon>
              </LinkedinShareButton>
              <EmailShareButton url={url} title={title}>
                <EmailIcon
                  className='social__icons'
                  size={32}
                  round={true}
                ></EmailIcon>
              </EmailShareButton>
            </div>
            <div className='edit__icons'>
              <button onClick={() => deleteHandler()} className='my btn'>
                <i className='fas fa-trash'></i>
              </button>

              <Link to='/posts/:id'>
                <i class='fas fa-edit'></i>
              </Link>
              <Link to='/addpost'>
                <i className='fas fa-plus-circle'></i>
              </Link>
            </div>
            <div className='text__area'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                laudantium voluptatem reiciendis incidunt. Ducimus, amet, a, id
                dolorum iusto vel consequuntur est voluptatibus ipsum facere
                autem nisi et natus temporibus? Quaerat fuga aspernatur quam
                corporis nihil recusandae culpa esse suscipit repellat labore.
                Doloremque architecto, libero delectus consequuntur mollitia
                voluptas explicabo hic tenetur! Corporis, sunt optio vitae a
                reiciendis, tempore dolorem, aut velit sed earum aperiam
                quisquam itaque similique veniam excepturi cumque? Porro, neque
                facere alias reiciendis reprehenderit delectus in repellat
                quisquam ipsam ab et eum iure quasi rerum odit voluptates
                blanditiis! Officiis, earum culpa laboriosam saepe recusandae
                totam dolore quis minus ea dolorum ipsam provident veritatis
                eaque magnam soluta tempora laudantium iusto, rem adipisci
                exercitationem consequuntur sunt quod omnis harum. Explicabo
                saepe suscipit distinctio tenetur p raesentium quaerat non
                aspernatur? Earum, nostrum expedita mollitia architecto
                similique, accusantium ratione vero, officiis blanditiis quasi
                reprehenderit molestiae inventore debitis. Tempora totam error
                dolorum at, sed aliquam! Facilis enim, molestiae sapiente natus
                accusantium beatae mollitia earum similique suscipit eaque
                voluptate necessitatibus voluptas dolore odio iste obcaecati id.
                Quidem recusandae, iure temporibus minus perspiciatis maiores
                soluta ratione esse sapiente repudiandae ex qui incidunt nemo?
                Molestiae, repudiandae natus? Ipsam magnam et necessitatibus
                corrupti esse at iusto porro dolor, enim quas laudantium?
                Repellendus totam inventore, asperiores ullam ut corporis
                molestiae doloribus rerum cupiditate, officia, quod rem atque
                nulla quae repellat commodi laboriosam non magnam! Repellat
                distinctio impedit molestiae, odit tempora, saepe pariatur at
                obcaecati cumque, in veritatis libero incidunt. Minus soluta
                iusto fugit enim impedit! Aperiam corrupti aliquid quod cum
                voluptatibus facere error dolorum nihil nam, sequi explicabo in
                totam eum ullam eligendi ipsa quas quibusdam dolorem eius
                deserunt sunt porro. Temporibus architecto, culpa magni cumque
                sunt quae ipsum repellendus eum esse doloremque qui libero
                nulla, nihil facere!
              </p>
            </div>
            <div className='more__posts'>
              <Post />
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SinglePost;
