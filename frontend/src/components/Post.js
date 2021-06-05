import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "./Post.css";
import { Link, useHistory } from "react-router-dom";
const Post = () => {
  const history = useHistory();
  const submitHandler = (id) => {
    history.push("/posts");
  };
  return (
    <>
      <div className='latest__section'>
        <img
          src='https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg'
          alt=''
          className='latest__img'
        />

        <div className='post__holder'>
          {" "}
          <Link to='/'>
            <h3>Lorem ipsum dolor sit.</h3>
          </Link>
          <div className='calendar__holder'>
            <i className='fa fa-calendar'></i> 01-10-2021
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas beatae
            ut voluptatem labore excepturi fuga, necessitatibus aliquam cumque
            aperiam esse mollitia provident, nostrum deleniti obcaecati
            perferendis, delectus animi ullam distinctio explicabo dolorem.
            Maiores, architecto ullam itaque eligendi fugiat dolorum nostrum,
            amet blanditiis ipsam asperiores id dolor nemo ratione quas
            voluptatibus. Sunt cupiditate incidunt id excepturi fugit ab
            explicabo! Tempore unde perferendis quibusdam. Magnam sint eos
            architecto perferendis quidem maxime odio rem vel dolorum quos
            aliquam labore, provident dolore deleniti consequuntur atque
            distinctio quis natus laboriosam, ea, exercitationem commodi sequi.
            Aliquid, expedita facere dignissimos ipsum autem facilis.
            Perspiciatis mollitia ipsum repellat molestias amet quod ipsam
            laboriosam obcaecati culpa eveniet. Debitis laudantium nostrum,
            soluta sint tenetur, sunt, laboriosam maiores labore repellendus
            quos eum quasi ut perferendis quibusdam eius distinctio dolor illum?
            Eos dicta dolor quod ex placeat deleniti! Possimus cupiditate,
            labore iste rerum corrupti voluptatibus nihil quisquam adipisci
            cumque accusamus aut voluptate tempora incidunt vero molestiae
            minima debitis tempore aspernatur. Quo nulla sapiente, iste in eius
            aut ratione architecto illo! Illo commodi repellat quae placeat
            culpa impedit incidunt deserunt esse sit dolorem cumque ex, eum,
            facere nisi eius maiores odio quas temporibus itaque. Nihil ut
            tempora sed, in inventore consectetur alias deleniti animi harum
            tenetur facere aspernatur consequuntur quam accusantium magnam
            quisquam corporis quia ullam porro vitae aliquid voluptatibus quidem
            explicabo dolore? Possimus provident saepe nostrum culpa quaerat
            voluptate neque sunt beatae hic, veritatis dignissimos quia veniam
            tenetur maiores consequuntur eum quo nam soluta corporis earum rem
            doloremque. Eum molestiae incidunt autem natus? Asperiores sequi,
            quibusdam porro, facilis saepe at ullam omnis quasi, debitis
            deserunt sed dolores magni ab eligendi quas aspernatur nobis dolore
            provident illum officiis quos neque! Quidem laborum necessitatibus,
            beatae vitae, error amet ut dicta commodi qui inventore
            exercitationem ex quod aperiam modi ullam dolor quasi iure
            repudiandae reprehenderit? Architecto dolorum tempora dignissimos
            repudiandae recusandae, consequatur, unde, illum minus atque vero
            libero molestiae magnam consectetur tempore a dicta adipisci quod
            debitis optio? Tempora, tempore aspernatur nesciunt repellendus ipsa
            sit placeat officiis deleniti quis veniam ratione sed obcaecati at!
            Veritatis incidunt deleniti at reprehenderit! Commodi suscipit
            tempora magnam! Harum nemo, aliquid non in necessitatibus numquam
            quis exercitationem perferendis inventore sunt placeat quasi ut
            temporibus iure autem est officiis corporis aliquam consequuntur vel
            odit? Rerum cum repellendus a commodi dolores laborum! Ea fuga
            asperiores perspiciatis vitae similique velit ducimus eius a
            doloremque quod dolor, provident eum et, voluptatibus vel excepturi
            delectus?
          </p>
          <MDBBtn
            outline
            className='mx- button__sub'
            type='button'
            onClick={() => submitHandler()}
          >
            Read More
          </MDBBtn>
        </div>
      </div>
    </>
  );
};

export default Post;
