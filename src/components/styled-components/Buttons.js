import styled, { css } from 'styled-components';

export const SendButton = styled.button`
  outline: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  width: 100%;
  /* background: linear-gradient(90deg, #ef4141 0%, #c241ef 52.08%, #6b41ef 100%); */
  background: ${({ colors }) => {
    if (colors.length > 1) {
      let step = 100 / (colors.length - 1);
      return (
        'linear-gradient(90deg,' +
        colors.map((color, index) => ` ${color} ${step * index}%`) +
        ')'
      );
    } else {
      return `linear-gradient(90deg, ${colors[0]}, ${colors[0]})`;
    }
  }};
  border-radius: 77px;
  font-family: 'Ultramono Wide Black';
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 42px;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
  border: 1px solid ${({ borderColor = '#1d1e1c' }) => borderColor};

  transition: all 0.3s;

  &:disabled {
    opacity: 0.5;
    border-color: #ffffff;
    ${({ alwaysBg = false }) =>
      !alwaysBg
        ? css`
            background: inherit;
          `
        : ''};
  }

  ${({ marginStyles }) => marginStyles}
`;

const StyledButton = styled.span`
  color: white;
  line-height: 40px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 108px;
  transition: 0.15s;
`;

const ServiceFilledButton = styled(StyledButton)`
  border: ${({ color }) => '1px solid ' + color};
  &.selected {
    background-color: ${({ color }) => color};
  }
`;

const ServiceGradientButton = styled(StyledButton)`
  position: relative;
  background-clip: padding-box;
  background-color: #1d1e1c;
  &::after {
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
    background: ${({ color }) => {
      if (color.length > 1) {
        let step = 100 / (color.length - 1);
        return (
          'linear-gradient(90deg,' +
          color.map((color, index) => ` ${color} ${step * index}%`) +
          ')'
        );
      } else {
        return color[0];
      }
    }};
    content: '';
    z-index: -1;
    border-radius: 108px;
  }
  &.selected {
    background: ${({ color }) => {
      if (color.length > 1) {
        let step = 100 / (color.length - 1);
        return (
          'linear-gradient(90deg,' +
          color.map((color, index) => ` ${color} ${step * index}%`) +
          ')'
        );
      } else {
        return color[0];
      }
    }};
  }
`;

export const ServiceButton = ({
  color,
  onClick,
  selected,
  isGradient = false,
  children,
}) => {
  if (isGradient) {
    return (
      <ServiceGradientButton
        color={color}
        onClick={onClick}
        className={selected ? 'selected' : ''}
      >
        {children}
      </ServiceGradientButton>
    );
  } else {
    return (
      <ServiceFilledButton
        color={color}
        onClick={onClick}
        className={selected ? 'selected' : ''}
      >
        {children}
      </ServiceFilledButton>
    );
  }
};
