import { Typography } from '@mui/material';
import { gradientPrimaryTextStrong } from '@/theme/utils';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  gradient?: boolean;
};

export default function HeroTitle({ children, gradient }: Props) {
  return (
    <Typography
      sx={(theme) => ({
        fontSize: {
          xs: '2.8rem',
          sm: '3.8rem',
          md: '5rem',
          lg: '6rem',
        },
        padding:1 ,
        fontWeight: 800,
        lineHeight: 1.05,
        color: gradient ? undefined : 'common.white',
        ...(gradient && gradientPrimaryTextStrong(theme)),
      })}
    >
      {children}
    </Typography>
  );
}

