import styled from 'styled-components';
import figure from '../assets/icons/figure-main-page.png';
import video from '../assets/videos/animation.mp4';

const StyledBlock = styled.div`
  overflow: hidden;
  width: auto;
  height: 45vh;
  position: relative;
  & video {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
  }
`;

export const AnimatedBlock = () => {
  return (
    <StyledBlock>
      <video loop='loop' autoplay='autoplay' muted='muted' id='myVideo'>
        <source src={`${video}`} type='video/mp4' />
      </video>
    </StyledBlock>
  );
};
