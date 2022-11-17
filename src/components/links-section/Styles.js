import { keyframes } from 'styled-components';

export const slide = (from = 'left', borderColor) => keyframes`
    0% {
      opacity: 0;
      border-color: transparent;
      transform: translateX(${`${from === 'left' ? '-150px' : '150px'}`});

    }
    40% {
      border-color: transparent;
    }
    100% {
        opacity: 1;
        transform: translateX(0);
        border-color: ${borderColor};
    }
`;

export const scale = keyframes`
    0% {
        transform: scaleY(0)
    }
    100% {
        transform: scaleY(1)
    }
`;
