import { Box, Container } from "@mui/material";

type Props = {
  id?: string;
  children: React.ReactNode;
  bg?: "default" | "paper" | "inverse";
};

export default function Section({ id, children, bg = "default" }: Props) {
  return (
    <Box
      id={id}
      sx={{
        py: { xs: 8, sm: 9, md: 10 },
        backgroundColor: `background.${bg}`,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ px: { xs: 2.5, sm: 3, md: 4, lg: 5 } }}
      >
        {children}
      </Container>
    </Box>
  );
}