import Typography from "@mui/material/Typography";
import BasePage from "~/components/BasePage";

const ApiPage = () => {
  const value = import.meta.env.VITE_VISIBLE_VAR;
  return (
    <BasePage>
      <Typography variant="h4" component="h1" sx={{ mt: 3, mb: 2 }}>
        API Page: {value}
      </Typography>
    </BasePage>
  );
};

export default ApiPage;
