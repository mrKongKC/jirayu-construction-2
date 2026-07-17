import { Box } from '@mui/material';
import { borderPrimarySoft } from '@/theme/utils';

export default function GlassBar({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={(theme) => ({
        zIndex: 3,
        background: theme.palette.custom.overlayGlass,
        backdropFilter: 'blur(16px)',
        borderTop: borderPrimarySoft(theme),
      })}
    >
      {children}
    </Box>
  );
}
