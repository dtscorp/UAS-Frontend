import Menu from "../Menu/index";
import FooterStyled from "./Footer.styled";
function Footer() {
  return (
    <FooterStyled>
      <footer>
        <div>
          <h2>Covid ID</h2>
          <p>Developed by danang</p>
        </div>
        <Menu />
      </footer>
    </FooterStyled>
  );
}

export default Footer;
