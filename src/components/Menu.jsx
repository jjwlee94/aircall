import React from "react";
import { Button, IconButton } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import DialpadIcon from "@mui/icons-material/Dialpad";
import PhoneIcon from "@mui/icons-material/Phone";
import "../css/menu.css";

const Menu = ({ state, setState }) => {
  return (
    <footer>
      <IconButton id="calls" onClick={state}>
        <PhoneIcon />
      </IconButton>
      <IconButton id="keypad">
        <DialpadIcon />
      </IconButton>
      <IconButton id="archived">
        <ArchiveIcon />
      </IconButton>
    </footer>
  );
};

export default Menu;
