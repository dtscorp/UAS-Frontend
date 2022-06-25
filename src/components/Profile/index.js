import ProfileStyled from "./Profile.styled";
import about from "../../asset/about2.jpeg";

function Profile() {
  return (
    <ProfileStyled>
      <section>
        <div className="hero__left">
          <h2>About developer</h2>
          <h3>Danang Tri Saputro</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus.
          </p>
          {/* <button>Vaccine</button>
           */}
        </div>
        <div className="hero__right">
          <img src={about} alt="" />
        </div>
      </section>
    </ProfileStyled>
  );
}

export default Profile;
