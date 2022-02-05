import React from "react";
import { useNavigate } from "react-router-dom";

// MUI
import { Tab } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import DialpadIcon from "@mui/icons-material/Dialpad";
import PhoneIcon from "@mui/icons-material/Phone";

// Internal files
import "../styles/menu.css";

const Menu = () => {
  const navigate = useNavigate();

  const navigateActivityFeed = () => {
    navigate("/");
  };

  const navigateArchive = () => {
    navigate("/archive");
  };

  return (
    <footer>
      <Tab icon={<PhoneIcon />} onClick={navigateActivityFeed} />
      <Tab icon={<DialpadIcon />} />
      <Tab icon={<InventoryIcon />} onClick={navigateArchive} />
    </footer>
  );
};

export default Menu;
