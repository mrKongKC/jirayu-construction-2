import { Box, Typography } from '@mui/material';
import { bgPrimaryGradientSoft, borderPrimarySoft } from '@/theme/utils';
import { SvgIconComponent } from '@mui/icons-material';

export interface FeatureItemProps {
  icon: SvgIconComponent;
  label: string;
  value: string;
  href: string;
}

export default function FeatureItem({ icon: Icon, label, value, href }: FeatureItemProps) {
  return (
    <Box
      component="a"
      href={href}
      sx={(theme) => ({
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        p: 2,
        borderRadius: 2,
        border: '1px solid transparent',
        textDecoration: 'none',

        '&:hover': {
          border: borderPrimarySoft(theme),
          background: theme.palette.custom.amberHover,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          width: 44,
          height: 44,
          borderRadius: 2.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: bgPrimaryGradientSoft(theme),
          border: borderPrimarySoft(theme),
        })}
      >
        <Icon sx={{ color: 'primary.main' }} />
      </Box>

      <Box>
        <Typography
          sx={(theme) => ({
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            color: theme.palette.text.secondary,
          })}
        >
          {label}
        </Typography>
        <Typography sx={{ color: 'text.primary' }}>
          {value}
        </Typography>
      </Box>
    </Box>
  );
}
