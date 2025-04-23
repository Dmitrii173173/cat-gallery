import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #ffb6b9;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 2rem;
  margin: 0;
`;

export const LightShotInfo = styled.div`
  color: white;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const DownloadButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #45a049;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

export const SocialIcon = styled.a`
  color: white;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const LoginLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;
