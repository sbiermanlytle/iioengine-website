import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CounterButton from "~/components/CounterButton";
import { BackgroundColor } from "~/components/BackgroundColor";
import { bgBlack } from "~/constants/colors";
import Menu from "~/components/Menu";
import ColorBar from "~/components/ColorBar";
import VerticalMenu from "~/components/VerticalMenu";
import { useState } from "react";

const ApiPage = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ColorBar position="top" />
      <ColorBar position="bottom" />
      <Container maxWidth="sm">
        <VerticalMenu onIconClick={handleClick} />
        <Menu anchorEl={anchorEl} onClose={handleClose} />
        <Box sx={{ marginLeft: "120px" }}>
          <Typography variant="h4" component="h1" sx={{ mt: 3, mb: 2 }}>
            iio Engine API
          </Typography>
          <CounterButton title={"press me"} />
        </Box>
      </Container>
    </>
  );
};

export default ApiPage;
