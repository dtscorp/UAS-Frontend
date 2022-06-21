import Button from "../UI/Button";
import image1 from "./../../asset/image1.png";
import HeroStyled from "./Hero.styled";
function Hero() {
  return (
    <HeroStyled>
      <section>
        <div className="hero__left">
          <h2>Covid ID</h2>
          <h3>Monitoring Perkembangan Covid</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus.
          </p>
          {/* <button>Vaccine</button>
           */}
          <Button>Vaccine</Button>
        </div>
        <div className="hero__right">
          <img src={image1} alt="" />
        </div>
      </section>
    </HeroStyled>
  );
}
export default Hero;
