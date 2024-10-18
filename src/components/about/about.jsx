import { useNavigate } from "react-router";
import "./about.scss";
import restaurentImage from "../../images/saiaruna restaurent.jpeg";

export default function About() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/more-about");
  };
  {
    /* <button onClick={handleClick}>hi</button>  */
  }
  return (
    <section className="about-section1 welcome-element">
      <div className="section1-left-con flex">
        <div className="section1-textTop-con">
          <p className="posterFont">WELCOME SAI ARUNA RESTAURENT</p>
          <h1 className="section1-left-con-heading">
            {" "}
            We make the best South Indian Dishes in Karol Bagh{" "}
          </h1>
        </div>
        <div className="section1-textBottom-con">
          <p className="section1-textBottom-text">
            South Indian food is the most favorite Indian cuisine for Delhiites.
            People of Delhi just don’t know how to say “No ” to crispy steaming
            Dosa accompanied by Sambhar, the coconut chutney, and the red tomato
            chutney on the sides.
          </p>
        </div>
      </div>
      <div className="section1-right-con">
        <div className="section-right-img-con">
          <img src={restaurentImage} />
        </div>
      </div>
    </section>
  );
}
