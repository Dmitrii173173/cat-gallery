import styled from 'styled-components';

export const LanguageDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const LanguageButton = styled.button`
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  min-width: 120px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  border-radius: 4px;
  margin-top: 5px;
  display: ${props => props.isOpen ? 'block' : 'none'};
  z-index: 1000;
`;

export const LanguageOption = styled.button`
  width: 100%;
  padding: 8px 15px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #f5f5f5;
  }

  &.active {
    background-color: #ffb6b9;
    color: white;
  }
`; 