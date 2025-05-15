import { Box } from "@mui/material";

interface DemoCanvasProps {
  width: number;
  height: number;
}

const DemoCanvas = ({ width, height }: DemoCanvasProps) => {
  return (
    <Box sx={{ border: "2px solid white", display: "inline-block" }}>
      <canvas id="canvas" width={width} height={height}></canvas>
    </Box>
  );
};

export default DemoCanvas;
