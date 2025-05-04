import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CounterButton from "./components/CounterButton";
// import iio from "iioengine";
import "./App.css";
import { BackgroundColor } from "./components/BackgroundColor";
import { bgDark } from "./constants/colors";
import IioIcon from "./components/IioIcon";

function App() {
  const value = import.meta.env.VITE_VISIBLE_VAR;
  // iio.printMsg();

  return (
    <>
      <BackgroundColor color={bgDark} />
      <Container maxWidth="sm">
        <Box sx={{ my: 3 }}>
          <IioIcon />
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            iio Engine: {value}
          </Typography>
          <CounterButton title={"press me"} />
        </Box>
      </Container>
    </>
  );
}

export default App;
