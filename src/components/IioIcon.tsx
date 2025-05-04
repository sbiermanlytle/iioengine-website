import { Box, Typography } from "@mui/material";
import { iioBlue } from "~/constants/colors";

interface IioIconProps {
  title: string;
}

const IioIcon = ({ title }: IioIconProps) => {
  return (
    <Box
      sx={{
        backgroundColor: iioBlue,
        width: "60px",
        height: "60px",
        lineHeight: 0,
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "40px",
        }}
      >
        iio
      </Typography>
    </Box>
  );
};

export default IioIcon;
