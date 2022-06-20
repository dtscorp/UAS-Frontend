import styled from "styled-components";

const NavbarStyled = styled.div`
  background-color: #06d6a0;
  padding: 2rem;
  color: #fff;

  nav {
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-size: 1.5rem;
    /* margin-bottom: 1rem; */
    margin-right: 15px;
    font-weight: 500;
  }

  .navbar__list {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  .navbar__item {
    margin-bottom: 1rem;
  }
  @media (max-width: 756px) {
    .navbar__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .navbar__toggle span {
      display: block;
      width: 25px;
      height: 3px;
      background-color: #fff;
      margin-bottom: 5px;
    }
  }
  /* medium screen  */
  @media (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    h1 {
      margin-bottom: 0;
    }
  }
`;
export default NavbarStyled;
