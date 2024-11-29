import { Link } from "react-router-dom";
import "../Style/About.css";
const About = () => {
  return (
    <>
      {/* <div className="container w-full ">
        <div className="content">
          <p className="heading ">
            we invite you
            <br /> to our
            <br /> Restaurant
          </p>
          <p className="small">
            In our restaurant you are sure to find something for yourself <br />
            --We serve dishes from all over the world
          </p>
          <Link to={"/"}>
            <button className="btni  ">Order Now</button>
          </Link>
        </div>
        <div className="imgae-container">
          <img
            className="image"
            src="https://rakskitchen.net/wp-content/uploads/2021/09/dabeli.jpg"
            alt="img"
          />
        </div>
      </div> */}
      <div className="main w-full bg-[#229f86] min-h-[80vh] flex ">
        <div className="content w-[60%] min-h-[100%]   ">
          <p className="heading ">
            we invite you
            <br /> to our
            <br /> Restaurant
          </p>
          <p className="small">
            In our restaurant you are sure to find something for yourself <br />
            --We serve dishes from all over the world
          </p>
          <Link to={"/"}>
            <button className="btni  active:scale-95">Order Now</button>
          </Link>
        </div>
        <div className="Image-container   w-[40%]  min-h-[100%]">
        <img
            className="image"
            src="https://rakskitchen.net/wp-content/uploads/2021/09/dabeli.jpg"
            alt="img"
          />
        </div>
      </div>
    </>
  );
};

export default About;
