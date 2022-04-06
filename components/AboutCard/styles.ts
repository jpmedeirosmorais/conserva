import styled from "styled-components";

export const Content = styled.div`
  max-width: 67rem;
  height: 36.1rem;
  padding: 2.5rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.div`
  width: 12.8rem;
  height: 12.8rem;
  border: none;
  margin-bottom: 3rem;
  .profile-image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #e6e6e6;
  }
`;

export const AboutMessageBox = styled.div`
  max-width: 55rem;
  height: auto;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  text-align: center;
  color: #3d4d4c;
  margin-bottom: 1.5rem;
`;

export const NameLabel = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.4rem;
  text-align: center;
  color: #11827e;
  margin-bottom: 0.5rem;
`;

export const RoleLabel = styled.div`
  color: #3d4d4c;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.4rem;
  text-align: center;
`;
