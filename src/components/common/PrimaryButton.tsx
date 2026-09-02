import { Button, ButtonProps } from '@mui/material';
import { shadowPrimarySoft } from '@/theme/utils';

export default function PrimaryButton(props: ButtonProps) {
  const { sx, ...rest } = props;

  return (
    <Button
      variant="contained"
      size="large"
      {...rest}
      sx={[
        (theme) => ({
          fontSize: '0.875rem',
          py: { xs: 1.75, md: 2 },
          px: { xs: 3, md: 3.5 },
          boxShadow: shadowPrimarySoft(theme),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}