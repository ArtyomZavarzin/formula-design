import styled from 'styled-components';
import { SubTitle, Title } from '../styled-components/Titles';

const StyledLink = styled.div`
  cursor: pointer;
  border-bottom: 1px solid white;
  display: flex;
  margin-left: -10px;
  margin-right: -10px;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
  & svg {
    bottom: -20px;
    right: 16px;
    position: absolute;
  }
`;

export const Link = ({ title, subtitle = ' ', icon, link }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <StyledLink onClick={handleClick}>
      <div>
        <Title isUppercase={true}>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </div>
      {icon && icon}
    </StyledLink>
  );
};
