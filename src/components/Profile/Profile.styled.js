import styled from "styled-components";

const ProfileStyled = styled.div`
  margin: 5rem auto;
  padding: 1rem;
  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .hero__right {
    margin-bottom: 1rem;
  }
  h2 {
    color: #06d6a0;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }
  h3 {
    color: #073b4c;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }
  p {
    color: #06d6a0;
    margin-bottom: 1rem;
  }
  img {
    width: 536px;
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  @media (min-width: 992px) {
    max-width: 1200px;
    section {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }
    .hero__left {
      flex-basis: 60%;
    }
    .hero__right {
      flex-basis: 40%;
    }
  }
`;
export default ProfileStyled;
