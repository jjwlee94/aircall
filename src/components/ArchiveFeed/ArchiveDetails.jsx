import React from "react";
import axios from "axios";

// MUI
import { IconButton } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import UnarchiveIcon from "@mui/icons-material/Unarchive";

// Internal files
import "../../styles/details.css";

const ArchiveDetails = ({ setAllCalls, call }) => {
  // Get all call data
  const getData = () => {
    axios
      .get("https://aircall-job.herokuapp.com/activities")
      .then((res) => {
        setAllCalls(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Function to unarchive a call
  const unarchive = (id, getData) => {
    axios
      .post(`https://aircall-job.herokuapp.com/activities/${id}`, {
        is_archived: false,
      })
      .then((res) => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="call-time">
      <div className="call-info">
        <div className="call-date">
          <CalendarTodayIcon fontSize="10px" />
          <div className="text">
            {call.created_at.split("T").join(" at ").slice(0, 19)}
          </div>
        </div>
        <div className="call-duration">
          <AccessTimeIcon fontSize="10px" />
          <div className="text">{call.duration} seconds</div>
        </div>
      </div>
      <div className="unarchive">
        <IconButton
          size="small"
          onClick={() => {
            unarchive(call.id, getData);
          }}>
          <UnarchiveIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ArchiveDetails;
