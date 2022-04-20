import styled from "styled-components";

export const Content = styled.div`
  text-align: center;
  margin-bottom: 8rem;
`;

export const Title = styled.div`
  color: #11827e;
  font-size: 1.4rem;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 2rem;

  @media (max-width: 400px) {
    font-size: 1.2rem;
  }

`;

export const SubTitle = styled.div`
  font-size: 4rem;
  color: #051e1d;
  font-weight: bold;
  margin-bottom: 2rem;

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

export const Details = styled.div`
  font-size: 1.4rem;
  color: #737373;

  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
`;
