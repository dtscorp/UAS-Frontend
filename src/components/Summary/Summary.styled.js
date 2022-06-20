import styled from "styled-components";

const SummaryStyled = styled.div`
  margin: 5rem 1rem;
  padding: 1rem;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    text-align: center;
  }

  img {
    max-width: 100%;
    border-radius: 25px;
    height: auto;
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 5rem auto;
    position: relative;

    section {
      display: flex;
      margin: 20px;
    }
  }
`;
export default SummaryStyled;
