import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Menu from "~/components/nav/Menu";
import ColorBar from "~/components/ColorBar";
import VerticalMenu from "~/components/nav/VerticalMenu";
import { useState, ReactNode } from "react";

interface BasePageProps {
  children: ReactNode;
}

const BasePage = ({ children }: BasePageProps) => {
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
        <Box sx={{ marginLeft: "120px" }}>{children}</Box>
      </Container>
    </>
  );
};

export default BasePage;
