import styled, { css } from 'styled-components';
import { SubTitle, Title } from '../styled-components/Titles';
import { scale, slide } from './Styles';

const animation = (from, delay = 1.5, borderColor) => {
  return css`
    animation: ${slide(from, borderColor)} 0.7s forwards;
    animation-delay: ${delay + 0.1}s;
    opacity: 0;
    /* border-color: transparent; */
    & > div {
      animation: ${scale} 1s forwards;
      animation-delay: ${delay + 0.1 + 0.1}s;
      transform: scaleY(0);
    }
  `;
};

const StyledLink = styled.div`
  cursor: pointer;
  /* border-bottom: ${({ borderColor }) => '1px solid ' + borderColor}; */
  display: flex;
  margin-left: -10px;
  margin-right: -10px;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 10px;
  padding-top: 10px;
  overflow: hidden;
  position: relative;

  ${({ from, delay, borderColor }) =>
    from && animation(from, delay, borderColor)}

  & svg {
    bottom: -29px;
    right: 16px;
    position: absolute;
    & .gradient__brand {
      stop-color: transparent;
    }
  }

  &::after {
    position: absolute;
    content: '';
    height: 1px;
    bottom: 0;
    left: -10px;
    right: -10px;
    background-color: ${({ borderColor }) => borderColor};
  }
`;

export const Link = ({
  title,
  subtitle = ' ',
  icon,
  link,
  textColor,
  from,
  delay,
}) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <StyledLink
      onClick={handleClick}
      borderColor={textColor}
      from={from}
      delay={delay}
    >
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
