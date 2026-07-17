import { Box } from "@mui/material";
import { borderPrimaryLight, bgPrimarySoft } from "@/theme/utils";

type Variant = "default" | "paper" | "soft";

type Props = {
  children: React.ReactNode;
  variant?: Variant;
};

export default function SectionCard({
  children,
  variant = "default",
}: Props) {
  return (
    <Box
      sx={(theme) => {
        let background = theme.palette.background.default;

        if (variant === "paper") {
          background = theme.palette.background.paper;
        }

        if (variant === "soft") {
          background = bgPrimarySoft(theme);
        }

        return {
          p: { xs: 4, md: 6 },
          borderRadius: theme.shape.borderRadius,
          background,
          border: borderPrimaryLight(theme),
        };
      }}
    >
      {children}
    </Box>
  );
}