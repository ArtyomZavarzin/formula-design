import { useMemo } from 'react';

export const HeartIcon = ({ colors }) => {
  console.log(colors);
  const gradientComponents = useMemo(() => {
    if (colors.length > 1) {
      let step = 1 / (colors.length - 1);
      return colors.map((color, index) => (
        <stop offset={step * index} stop-color={color} />
      ));
    } else {
      return <stop stop-color={colors[0]} />;
    }
  }, [colors]);

  return (
    <svg
      width='76'
      height='71'
      viewBox='0 0 76 71'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M70.3633 10.1425V4.50084H66.5002V0H45.0302V4.50084H40.5335V10.1425H35.4665V4.50084H30.4V0H9.5V4.50084H5.06649V10.1425H0V30.429H5.06649V40.572L9.5 40.5715V46.2137H14.5665V51.3486H20.2665V55.7858H25.3335V60.8575H30.4V65.9288H35.4665V71H40.533L40.5335 65.9288H45.0301V60.8575H50.6665V55.7858H56.3034V51.3486H60.8V46.2774L66.5 46.2769V40.5715H70.4268V30.4291H76V10.1425L70.3633 10.1425ZM25.3332 10.1425H15.1997V29.8571H9.49973V10.1425H15.1997V4.50084H25.3332V10.1425Z'
        fill='url(#paint0_linear_459_452)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_459_452'
          x1='-4.95464e-07'
          y1='35.5'
          x2='76'
          y2='35.5'
          gradientUnits='userSpaceOnUse'
        >
          {gradientComponents}
        </linearGradient>
      </defs>
    </svg>
  );
};
