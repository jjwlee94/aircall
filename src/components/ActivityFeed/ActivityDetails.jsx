import React from "react";
import axios from "axios";

// MUI
import { IconButton } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArchiveIcon from "@mui/icons-material/Archive";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

// Internal files
import "../../styles/details.css";
import capitalize from "../../helpers/helpers.js";

const ActivityDetails = ({ setAllCalls, call }) => {
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

  // Function to archive a call
  const archive = (id, getData) => {
    axios
      .post(`https://aircall-job.herokuapp.com/activities/${id}`, {
        is_archived: true,
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
        <div className="call-type">
          <InfoOutlinedIcon fontSize="10px" />
          <div className="text">
            {capitalize(call.direction)}, {call.call_type}
          </div>
        </div>
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
      <div className="archive">
        <IconButton
          size="small"
          onClick={() => {
            archive(call.id, getData);
          }}>
          <ArchiveIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ActivityDetails;
