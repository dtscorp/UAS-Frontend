import { useState } from "react";
import Menu from "../Menu/index";
import NavbarStyled from "./Navbar.styled";

function Navbar() {
  const [isShow, setIsShow] = useState(false);

  function handleMenu() {
    setIsShow(!isShow);
  }

  return (
    <NavbarStyled>
      <nav>
        <div className="navbar__container">
          <div>
            <h1>Covid ID</h1>
          </div>
          <div className="navbar__toggle" onClick={handleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <Menu isShow={isShow} />
      </nav>
    </NavbarStyled>
  );
}

export default Navbar;
