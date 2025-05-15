import Typography from "@mui/material/Typography";
import CounterButton from "~/components/misc/CounterButton";
import BasePage from "~/components/BasePage";

const ApiPage = () => {
  return (
    <BasePage>
      <Typography variant="h4" component="h1" sx={{ mt: 3, mb: 2 }}>
        iio Engine API
      </Typography>
      <CounterButton title={"press me"} />
    </BasePage>
  );
};

export default ApiPage;
