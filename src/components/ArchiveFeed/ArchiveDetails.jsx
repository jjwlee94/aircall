import React from "react";
import axios from "axios";
import { IconButton } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import "../../styles/details.css";

const ArchiveDetails = ({ allCalls, setAllCalls, id, call }) => {
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
      <div>
        <div>Via: {call.via} </div>
        <div>
          <CalendarTodayIcon fontSize="10px" />
          {call.created_at.split("T").join(" at ").slice(0, 19)}
        </div>
        <div>
          <AccessTimeIcon fontSize="10px" />
          {call.duration} seconds
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
