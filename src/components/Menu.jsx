import React from "react";
import { IconButton, Tab } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import DialpadIcon from "@mui/icons-material/Dialpad";
import PhoneIcon from "@mui/icons-material/Phone";
import "../css/menu.css";

const Menu = () => {
  return (
    <footer>
      <Tab icon={<PhoneIcon />} label="CALLS" />
      <IconButton id="keypad">
        <DialpadIcon />
      </IconButton>
      <Tab icon={<ArchiveIcon />} label="ARCHIVE" />
    </footer>
  );
};

export default Menu;
