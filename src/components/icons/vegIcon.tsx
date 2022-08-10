import type { FC, SVGProps } from 'react';

export const VegIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  const { style, ...rest } = props;
  return (
    <svg
      viewBox="0 0 91.47 122.88"
      style={{ fill: '#008300', ...style }}
      {...rest}
    >
      <path d="M2.94,0h88.53v91.82H0V0H2.94L2.94,0z M65.72,108.73h-5.65v-1.97c0-1.24-0.05-2.02-0.16-2.33 c-0.11-0.32-0.36-0.47-0.75-0.47c-0.34,0-0.57,0.13-0.7,0.4c-0.12,0.27-0.18,0.96-0.18,2.06v10.41c0,0.97,0.06,1.61,0.18,1.92 c0.13,0.31,0.37,0.46,0.73,0.46c0.4,0,0.67-0.17,0.82-0.52c0.14-0.35,0.21-1.03,0.21-2.04v-2.57h-1.1v-3.29h6.58v11.63h-3.55 l-0.52-1.55c-0.38,0.67-0.87,1.17-1.45,1.51c-0.58,0.34-1.28,0.51-2.07,0.51c-0.95,0-1.83-0.23-2.66-0.69 c-0.82-0.46-1.45-1.03-1.88-1.71c-0.43-0.68-0.69-1.39-0.8-2.13c-0.1-0.75-0.16-1.87-0.16-3.36v-6.45c0-2.07,0.11-3.58,0.33-4.51 c0.22-0.94,0.87-1.8,1.92-2.58c1.06-0.78,2.42-1.17,4.1-1.17c1.65,0,3.02,0.34,4.11,1.02c1.09,0.68,1.8,1.49,2.13,2.42 c0.33,0.94,0.49,2.29,0.49,4.07V108.73L65.72,108.73z M41.4,100.72h9.41v4.33h-3.76v4.14h3.51v4.11h-3.51v4.77h4.14v4.33H41.4 V100.72L41.4,100.72z M40.43,100.72l-2.86,21.7h-8.54l-3.27-21.7h5.95c0.67,5.98,1.16,11.05,1.47,15.18 c0.3-4.18,0.61-7.9,0.93-11.14l0.37-4.05H40.43L40.43,100.72z M45.73,19.96c14.33,0,25.95,11.62,25.95,25.95 c0,14.33-11.62,25.94-25.95,25.94c-14.33,0-25.95-11.62-25.95-25.94C19.79,31.58,31.4,19.96,45.73,19.96L45.73,19.96z M85.59,5.88 H5.88v80.06h79.71V5.88L85.59,5.88z" />
    </svg>
  );
};
