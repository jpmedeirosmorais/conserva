import styled from "styled-components";

export const Container = styled.div``;

export const ProductContainer = styled.div`
  padding: 1.5rem;
`;

export const Header = styled.div``;

export const MessageSection = styled.div`
  margin-bottom: 8rem;
  font-family: 'Neo Sans Pro', sans-serif;
  font-size: 4.8rem;
  font-weight: bold;
  text-align: center;
  color: #11827E;

  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;

export const Products = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
`;
