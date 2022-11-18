import styled, { css } from 'styled-components';

const animation = (anim, delay = 1.5) => {
  return css`
    animation: ${anim} 0.8s forwards;
    animation-delay: ${delay}s;
    opacity: 0;
  `;
};

export const Title = styled.p`
  color: ${({ color = 'white' }) => color};
  padding-left: ${({ withPadding = false }) => (withPadding ? '16px' : '0')};
  font-size: 18px;
  font-weight: 900;
  font-family: 'Ultramono wide black';
  line-height: 28px;
  text-transform: ${({ isUppercase = false }) =>
    !isUppercase ? 'none' : 'uppercase'};
  white-space: pre-line;
  ${({ marginStyles }) => marginStyles}

  ${({ anim, delay }) => anim && animation(anim, delay)}
`;

export const SubTitle = styled.p`
  color: ${({ color = 'white' }) => color};
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 8px;
  height: 11px;
  vertical-align: baseline;
`;

export const Text = styled.p`
  color: white;
  margin-top: 8px;
  margin-bottom: 24px;
  ${({ fontFamily }) =>
    fontFamily &&
    css`
      font-family: ${fontFamily};
    `}
  ${({ anim, delay }) => anim && animation(anim, delay)}
`;
