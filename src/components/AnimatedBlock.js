import styled from 'styled-components';
import figure from '../assets/icons/figure-main-page.png';

export const AnimatedBlock = styled.div`
  padding-left: 32px;
  padding-right: 32px;
  margin-bottom: 42px;
  background-image: url('${figure}');
  height: 290px;
  background-position-x: center;
  background-repeat: no-repeat;
  background-position-y: center;
  background-size: min(100%, 460px) auto;
`;
