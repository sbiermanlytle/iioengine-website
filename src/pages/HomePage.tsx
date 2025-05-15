import Typography from "@mui/material/Typography";
import BasePage from "~/components/BasePage";
import DemoCanvas from "~/components/DemoCanvas";
import { add } from "iioengine";

const HomePage = () => {
  const result = add(4, 20);
  return (
    <BasePage>
      <Typography variant="h4" component="h1" sx={{ mt: 3, mb: 2 }}>
        HomePage - RESULTS: {result}
      </Typography>
      <DemoCanvas width={100} height={100} />
    </BasePage>
  );
};

export default HomePage;
