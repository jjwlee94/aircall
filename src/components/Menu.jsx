import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Tab } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import DialpadIcon from "@mui/icons-material/Dialpad";
import PhoneIcon from "@mui/icons-material/Phone";
import "../css/menu.css";

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
      <Tab icon={<PhoneIcon />} label="CALLS" onClick={navigateActivityFeed} />
      <IconButton id="keypad">
        <DialpadIcon />
      </IconButton>
      <Tab icon={<ArchiveIcon />} label="ARCHIVE" onClick={navigateArchive} />
    </footer>
  );
};

export default Menu;
