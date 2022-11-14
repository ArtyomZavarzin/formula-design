import styled from 'styled-components';
import { SubTitle, Title } from '../styled-components/Titles';

const StyledLink = styled.div`
  cursor: pointer;
  border-bottom: ${({ borderColor }) => '1px solid ' + borderColor};
  display: flex;
  margin-left: -10px;
  margin-right: -10px;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 10px;
  padding-top: 10px;
  overflow: hidden;
  position: relative;
  & svg {
    bottom: -32px;
    right: 16px;
    position: absolute;
  }
`;

export const Link = ({ title, subtitle = ' ', icon, link, textColor }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <StyledLink onClick={handleClick} borderColor={textColor}>
      <div>
        <Title isUppercase={true} color={textColor}>
          {title}
        </Title>
        <SubTitle color={textColor}>{subtitle}</SubTitle>
      </div>
      {icon && icon}
    </StyledLink>
  );
};
