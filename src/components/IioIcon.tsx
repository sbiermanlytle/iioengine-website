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
        width: "104px",
        height: "108px",
        lineHeight: 0,
        textAlign: "center",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "#fff",
          "& .iio-text": {
            color: iioBlue,
            borderTop: `1px solid ${iioBlue}`,
          },
        },
      }}
    >
      <Typography
        className="iio-text"
        sx={{
          borderTop: "1px solid #fff",
          marginTop: "0px",
          fontSize: "82px",
          color: "#fff",
          transition: "color 0.3s ease",
          lineHeight: 1,
          paddingTop: "14px",
        }}
      >
        iio
      </Typography>
    </Box>
  );
};

export default IioIcon;
