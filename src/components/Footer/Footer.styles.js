import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #ffe0ac;
  padding: 15px 20px;
  text-align: center;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 5px;
`;

export const FooterLink = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;

  &:hover {
    color: #333;
    cursor: pointer;
  }
`;

export const Copyright = styled.span`
  color: #888;
  font-size: 14px;
  margin-left: 10px;
`; 