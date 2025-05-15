import Typography from "@mui/material/Typography";
import CounterButton from "~/components/misc/CounterButton";
import BasePage from "~/components/BasePage";

const HomePage = () => {
  const value = import.meta.env.VITE_VISIBLE_VAR;

  return (
    <BasePage>
      <Typography variant="h4" component="h1" sx={{ mt: 3, mb: 2 }}>
        iio Engine: {value}
      </Typography>
      <CounterButton title={"press me"} />
    </BasePage>
  );
};

export default HomePage;
