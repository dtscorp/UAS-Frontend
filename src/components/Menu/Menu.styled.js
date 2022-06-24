import styled from "styled-components";

const MenuStyled = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    margin-bottom: 1rem;
  }
  a {
    color: white;
    text-decoration: none;
  }

  @media (max-width: 756px) {
    .hide {
      display: none;
    }
    ul {
      margin-top: 1rem;
    }
  }
  /* medium screen  */
  @media (min-width: 768px) {
    ul {
      flex-direction: row;
    }
    li {
      margin: 0 1rem;
    }
  }
`;
export default MenuStyled;
