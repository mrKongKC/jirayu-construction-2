import { TextField, TextFieldProps } from "@mui/material";

type Props = TextFieldProps & {
  name: string;
};

export default function FormField(props: Props) {
  return (
    <TextField
      fullWidth
      size="small"
      {...props}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
        },
        ...props.sx,
      }}
    />
  );
}
