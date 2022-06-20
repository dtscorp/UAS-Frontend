import styled from "styled-components";

const GlobalStyled = styled.div`
  .container {
    margin: 5rem auto;
  }

  section {
    text-align: center;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 2.44rem;
    color: #06d6a0;
  }

  p {
    color: #073b4c;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  .global__container {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .global__container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 1200px;
    }
  }
`;

export default GlobalStyled;
