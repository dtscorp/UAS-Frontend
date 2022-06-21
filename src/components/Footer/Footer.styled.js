import styled from "styled-components";

const FooterStyled = styled.div`
  background-color: #06d6a0;
  padding: 2rem;
  color: #fff;

  footer {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-size: 1.5rem;
    /* margin-bottom: 1rem; */
    margin-right: 15px;
    font-weight: 500;
  }
  p {
    margin-bottom: 1rem;
  }

  /* medium screen  */
  @media (min-width: 768px) {
    footer {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    h2 {
      margin-bottom: 0;
    }
  }
`;

export default FooterStyled;
