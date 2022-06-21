import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  /* background-color: #073b4c; */
  color: #fff;
  background-color: ${({ variant, theme }) =>
    theme.colors[variant] || theme.colors["primary"]};

  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}
`;

export default Button;
