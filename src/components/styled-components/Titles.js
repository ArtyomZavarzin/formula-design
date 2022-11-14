import styled from 'styled-components';

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
