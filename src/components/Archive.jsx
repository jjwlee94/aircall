import React, { useState } from "react";
import axios from "axios";
import { CardContent, IconButton, Typography } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import InfoIcon from "@mui/icons-material/Info";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import VoicemailIcon from "@mui/icons-material/Voicemail";
import "../css/activity-feed.css";

const ActivityFeed = ({ allCalls, setAllCalls }) => {
  const [details, setDetails] = useState(false);

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

  const onClick = () => (details ? setDetails(false) : setDetails(true));

  return (
    <div className="call-container">
      <Typography textAlign="center">Archived Calls</Typography>
      {allCalls.map((call) => {
        return (
          <CardContent key={call}>
            {call.is_archived === true && (
              <div className="call-details">
                {call.direction === "outbound" ? (
                  <div>
                    <div className="icons">
                      <div className="icon-static">
                        {call.call_type === "answered" ? (
                          <CallMadeIcon />
                        ) : (
                          <CallMissedOutgoingIcon />
                        )}
                      </div>
                      <div className="icon-actions">
                        <IconButton size="small" onClick={onClick}>
                          <InfoIcon />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => {
                            unarchive(call.id, getData);
                          }}>
                          <UnarchiveIcon />
                        </IconButton>
                      </div>
                    </div>
                    <div className="caller-details">
                      <div>
                        {call.to} via {call.via}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="icons">
                      <div className="icon-static">
                        {call.call_type === "voicemail" ? (
                          <CallReceivedIcon />
                        ) : (
                          <VoicemailIcon />
                        )}
                      </div>
                      <div className="icon-actions">
                        <IconButton size="small" onClick={onClick}>
                          <InfoIcon />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => {
                            unarchive(call.id, getData);
                          }}>
                          <UnarchiveIcon />
                        </IconButton>
                      </div>
                    </div>
                    <div className="caller-details">
                      <div>
                        {call.from} via {call.via}
                      </div>
                    </div>
                  </div>
                )}
                {details ? (
                  <div className="call-time">
                    <div>
                      {call.created_at.split("T").join(" at ").slice(0, 19)}
                    </div>
                    <div>{call.duration} seconds </div>
                  </div>
                ) : null}
              </div>
            )}
          </CardContent>
        );
      })}
    </div>
  );
};

export default ActivityFeed;
