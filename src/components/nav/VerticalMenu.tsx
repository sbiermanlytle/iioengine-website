import { Box } from "@mui/material";
import IioIcon from "../IioIcon";
import MenuLink from "./MenuLink";
import { useNavigate } from "react-router-dom";

interface VerticalMenuProps {
  onIconClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const menuItems = [
  { label: "API", path: "/api" },
  { label: "Demos", path: "/demos" },
  { label: "Tutorials", path: "/tutorials" },
  { label: "Github", path: "/github" },
];

const VerticalMenu = ({ onIconClick }: VerticalMenuProps) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ m: "-19px", p: 0, position: "fixed", zIndex: 1001 }}>
      <div onClick={onIconClick}>
        <IioIcon title="Menu" />
      </div>
      <Box>
        {menuItems.map((item) => (
          <MenuLink
            key={item.label}
            label={item.label}
            onClick={() => navigate(item.path)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default VerticalMenu;
