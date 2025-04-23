import styled from 'styled-components';

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const SocialButtons = styled.div`
  display: flex;
  gap: 15px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 12px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  background: ${props => props.variant === 'outlined' ? 'transparent' : '#f0f0f0'};
  border: ${props => props.variant === 'outlined' ? '1px solid #ddd' : 'none'};
  color: ${props => props.variant === 'danger' ? '#ff4444' : '#333'};

  &:hover {
    background: ${props => props.variant === 'danger' ? '#ffebeb' : '#e8e8e8'};
  }

  svg {
    width: 16px;
    height: 16px;
  }

  &.liked {
    color: #e0245e;
    svg {
      fill: #e0245e;
    }
  }
`;

export const LikeCount = styled.span`
  font-size: 12px;
  color: #666;
  margin-left: 5px;
`; 