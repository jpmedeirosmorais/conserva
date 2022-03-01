import styled from "styled-components";

export const Content = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 7.4rem;
  padding: 0 19.5rem;
`;

export const LabelMessage = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
`;

export const Heart = styled.div`
  display: flex;
  align-items: center;
  color: #11827e;
  margin-left: 0.5rem;
`;

export const SocialMedias = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 6.5rem;
`;

export const SocialMedia = styled.div`
  :hover {
    cursor: pointer;
  }
`;
