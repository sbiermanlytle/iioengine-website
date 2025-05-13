import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CounterButton from "./components/CounterButton";
import "./App.css";
import { BackgroundColor } from "./components/BackgroundColor";
import { bgBlack } from "./constants/colors";
import IioIcon from "./components/IioIcon";
import Menu from "./components/Menu";
import ColorBar from "./components/ColorBar";
import MenuLink from "./components/MenuLink";
import { useState } from "react";

function App() {
  const value = import.meta.env.VITE_VISIBLE_VAR;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <BackgroundColor color={bgBlack} />
      <ColorBar position="top" />
      <ColorBar position="bottom" />
      <Container maxWidth="sm">
        <Box sx={{ m: "-19px", p: 0, position: "fixed", zIndex: 1001 }}>
          <div onClick={handleClick}>
            <IioIcon title="Menu" />
          </div>
          <Box>
            <MenuLink label="API" />
            <MenuLink label="Demos" />
            <MenuLink label="Tutorials" />
            <MenuLink label="Github" />
          </Box>
          <Menu anchorEl={anchorEl} onClose={handleClose} />
        </Box>
        <Box sx={{ marginLeft: "120px" }}>
          <Typography variant="h4" component="h1" sx={{ mt: 3, mb: 2 }}>
            iio Engine: {value}
          </Typography>
          <CounterButton title={"press me"} />
        </Box>
      </Container>
    </>
  );
}

export default App;
