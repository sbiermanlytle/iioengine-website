import { Box } from "@mui/material";

interface ColorBarProps {
  position: "top" | "bottom";
  color?: string;
  height?: string;
  zIndex?: number;
}

const ColorBar = ({
  position,
  color = "#fff",
  height = "5px",
  zIndex = 1000,
}: ColorBarProps) => {
  return (
    <Box
      sx={{
        position: "fixed",
        [position]: 0,
        left: 0,
        right: 0,
        height,
        backgroundColor: color,
        zIndex,
      }}
    />
  );
};

export default ColorBar;
