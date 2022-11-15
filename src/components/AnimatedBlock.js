import styled from 'styled-components';
import video from '../assets/videos/animation.mp4';

const StyledBlock = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: auto;
  height: calc(100vw + 42px);
  max-height: calc(45vh + 40px);
  position: relative;
  & video {
    width: auto;
    height: 100%;
  }
`;

export const AnimatedBlock = () => {
  return (
    <StyledBlock>
      <video
        loop='loop'
        autoplay='autoplay'
        muted='muted'
        id='myVideo'
        playsInline='playsInline'
      >
        <source src={`${video}`} type='video/mp4' />
      </video>
    </StyledBlock>
  );
};
