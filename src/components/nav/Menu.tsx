import { Menu as MuiMenu, MenuItem } from "@mui/material";
import { iioBlue } from "~/constants/colors";

interface MenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

const menuItems = [
  { label: "API", href: "/api" },
  { label: "Demos", href: "/demos" },
  { label: "Tutorials", href: "/tutorials" },
  { label: "Github", href: "https://github.com/iio-engine" },
];

const Menu = ({ anchorEl, onClose }: MenuProps) => {
  const open = Boolean(anchorEl);

  return (
    <MuiMenu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      sx={{
        "& .MuiPaper-root": {
          minWidth: "150px",
          marginTop: "8px",
        },
      }}
    >
      {menuItems.map((item) => (
        <MenuItem
          key={item.label}
          onClick={onClose}
          component="a"
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          sx={{
            color: iioBlue,
            "&:hover": {
              backgroundColor: `${iioBlue}10`,
            },
          }}
        >
          {item.label}
        </MenuItem>
      ))}
    </MuiMenu>
  );
};

export default Menu;
