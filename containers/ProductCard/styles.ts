import styled from "styled-components";

export const Content = styled.div`
  width: 34.8rem;
  height: 61rem;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 350px) {
    width: 90vw;
    height: auto;
  }
`;

export const Body = styled.div`
  padding: 2.5rem;
  background-color: white;
  a{
    text-decoration: none;
  }
`;

export const TypeContent = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

export const FlavorContent = styled.div`
  margin-bottom: 1rem;
`;

export const DescriptionContent = styled.div`
  margin-bottom: 1rem;
`;

export const PriceContent = styled.div`
  margin-bottom: 1rem;
`;