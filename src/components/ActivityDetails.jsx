import React from "react";
import axios from "axios";
import { IconButton } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArchiveIcon from "@mui/icons-material/Archive";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const ActivityDetails = ({ allCalls, setAllCalls, id, call }) => {
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
