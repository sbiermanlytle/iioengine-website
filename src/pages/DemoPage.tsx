import Typography from "@mui/material/Typography";
import BasePage from "~/components/BasePage";

const DemoPage = () => {
  return (
    <BasePage>
      <Typography variant="h4" component="h1" sx={{ mt: 3, mb: 2 }}>
        Demo Page
      </Typography>
    </BasePage>
  );
};

export default DemoPage;
