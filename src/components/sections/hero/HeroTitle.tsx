import { Typography } from '@mui/material';
import { gradientPrimaryTextStrong } from '@/theme/utils';
import { ElementType, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  gradient?: boolean;
  component?: ElementType;
};

export default function HeroTitle({ children, gradient, component = 'p' }: Props) {
  return (
    <Typography
      component={component}
      sx={(theme) => ({
        display: 'block',
        fontSize: {
          xs: '2.25rem',
          sm: '3.8rem',
          md: '5rem',
          lg: '6rem',
        },
        fontWeight: 800,
        lineHeight: { xs: 1.15, md: 1.05 },
        letterSpacing: { xs: '-0.02em', md: '-0.03em' },
        color: gradient ? undefined : 'common.white',
        ...(gradient && gradientPrimaryTextStrong(theme)),
      })}
    >
      {children}
    </Typography>
  );
}
