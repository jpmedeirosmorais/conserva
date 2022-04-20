import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 9.1rem;
  background-color: #fcece8;
  color: #11827e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vw;
  font-size: 1.8rem;
  font-weight: bold;

  @media (max-width: 400px) {
    padding: 0 1vw;
  }
`;

export const Brand = styled.div`
  :hover {
    cursor: pointer;
  }

  @media (max-width: 400px) {
    a {
      svg {
        path {
          width: 10px;
          height: 10px;
        }
      }
    }
  }
`;

export const Items = styled.div`
  display: flex;
`;

export const Item = styled.div`
  margin: 0 1rem;

  a {
    text-decoration: none;
  }

  :hover {
    cursor: pointer;
  }
`;
