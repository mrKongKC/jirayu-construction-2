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
        py: { xs: 6, md: 7 },
        backgroundColor: `background.${bg}`,
      }}
    >
      <Container maxWidth="xl">
        {children}
      </Container>
    </Box>
  );
}