import { Box, Typography } from "@mui/material";
import { iioBlue } from "~/constants/colors";

interface MenuLinkProps {
  label: string;
  onClick?: () => void;
}

const MenuLink = ({ label, onClick }: MenuLinkProps) => {
  return (
    <Box sx={{}}>
      <Typography
        component="p"
        onClick={onClick}
        sx={{
          fontSize: "26px",
          fontWeight: "bold",
          padding: "5px 15px 5px 16px",
          paddingTop: "10px",
          borderBottom: "1px solid gainsboro",
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#fff",
            color: iioBlue,
          },
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default MenuLink;
