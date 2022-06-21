import styled from "styled-components";

const FormStyled = styled.div`
  /* Small Screen */
  margin: 5rem 1rem;
  padding: 1rem;

  section {
    display: flex;
    flex-direction: column;
  }

  .form__left {
    display: none;
  }

  img {
    max-width: 100%;
    border-radius: 25px;
    height: auto;
  }

  h2 {
    text-align: center;
    color: #06d6a0;
    font-size: 2.44rem;
    margin-bottom: 1rem;
  }

  .form__group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  label {
    margin-bottom: 1rem;
  }

  .form__input {
    outline: none;
    padding: 1rem 0.5rem;
    border-radius: 10px;
    border: 1px solid #06d6a0;
  }

  .form__input:focus {
    border: 1px solid #06d6a0;
  }

  /* button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #06d6a0;
    color: #fff;
    display: block;
    margin: 0 auto;
    width: 100%;
  } */
  .form__alert {
    max-width: 100%;
    height: auto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 30px;
    margin-right: 5%;
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 5rem auto;

    section {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .form__left {
      display: block;
      flex-basis: 60%;
    }

    .form__right {
      flex-basis: 40%;
    }
  }
`;

export default FormStyled;
