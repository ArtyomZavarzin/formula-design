import { keyframes } from 'styled-components';

export const slide = keyframes`
    0% {
      opacity: 0;
      transform: translateX(-150px);

    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const slide2 = keyframes`
    0% {
      opacity: 0;
      transform: translateY(-30px);

    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;
