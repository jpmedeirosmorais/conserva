import styled from "styled-components";

export const Content = styled.div`
  width: 100vw;
  height: 9.1rem;
  background-color: #fcece8;
  color: #11827e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4.4rem;
  font-size: 1.8rem;
  font-weight: bold;
`;

export const Brand = styled.div`
  :hover {
    cursor: pointer;
  }
`;

export const Items = styled.div`
  display: flex;
`;

export const Item = styled.div`
  margin: 0 1rem;
  :hover {
    cursor: pointer;
  }
`;
