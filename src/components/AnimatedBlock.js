import styled from 'styled-components';
import video from '../assets/videos/anim1.mp4';
import photo from '../assets/videos/mock.jpg';

const StyledBlock = styled.div`
  /* flex-shrink: 0; */
  display: flex;
  justify-content: center;
  overflow: hidden;
  /* width: auto; */
  /* height: calc(100vw + 42px); */
  max-height: calc(100vh - 378px);
  position: relative;

  flex-shrink: 0;

  height: calc(100vw - 20px);

  & > * {
    width: 100vw;
    height: 100vw;
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
      {/* <img src={photo} alt='11' /> */}
    </StyledBlock>
  );
};
