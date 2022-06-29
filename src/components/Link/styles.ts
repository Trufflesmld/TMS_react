import styled from "styled-components";

export const LinkText = styled.a`
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: #313037;
  :hover {
    color: #2231aa;
  }
`;
export const LinkContainer = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  background: transparent;
  border: none;
  :disabled {
    & ${LinkText} {
      pointer-events: none;
      cursor: default;
      color: #8d8e97;
    }
  }
`;
