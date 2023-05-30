import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const CheckboxChecked: FC<SvgIconProps> = ({ sx, ...props }) => (
  <SvgIcon
    {...props}
    viewBox="0 0 24 24"
    sx={{
      ...sx,
      width: '24px',
      height: '24px',
    }}
  >
    <rect width="24" height="24" rx="8" fill="#2DF6DE" />
    <g clipPath="url(#clip0_2552_24054)">
      <g filter="url(#filter0_d_2552_24054)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.3851 5.49657C17.9392 4.8808 18.8877 4.83088 19.5034 5.38507C20.1192 5.93926 20.1691 6.88769 19.6149 7.50346L10.6149 17.5035C10.04 18.1422 9.04703 18.1684 8.43934 17.5607L4.43934 13.5607C3.85355 12.9749 3.85355 12.0251 4.43934 11.4394C5.02513 10.8536 5.97487 10.8536 6.56066 11.4394L9.44271 14.3214L17.3851 5.49657Z"
          fill="#1B1A3D"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_2552_24054"
        x="4"
        y="5"
        width="16"
        height="13.75"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="0.75" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2552_24054" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2552_24054" result="shape" />
      </filter>
      <clipPath id="clip0_2552_2405423">
        <rect width="16" height="13" fill="red" transform="translate(4 5)" />
      </clipPath>
    </defs>
  </SvgIcon>
);
