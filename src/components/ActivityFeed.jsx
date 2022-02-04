import React, { useState } from "react";
import { Button, ButtonGroup, Typography } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import VoicemailIcon from "@mui/icons-material/Voicemail";
import ActivityDetails from "./ActivityDetails.jsx";
import "../css/activity-feed.css";

const ActivityFeed = ({ allCalls, setAllCalls }) => {
  const [details, setDetails] = useState(false);
  const [id, setId] = useState("");

  const handleClick = (id) => {
    setDetails(!details);
    setId(id);
  };

  return (
    <div className="call-container">
      <Typography textAlign="center">All Calls</Typography>
      <ButtonGroup
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "center",
        }}
        size="small">
        <Button color="success">Archive All</Button>
        <Button color="secondary">Reset Archive</Button>
      </ButtonGroup>
      {allCalls.map((call) => {
        return (
          <div className="all-calls" onClick={() => handleClick(call.id)}>
            {call.is_archived === false && (
              <div className="call-details">
                {call.direction === "outbound" ? (
                  <div className="icons">
                    <div className="icon-static">
                      {call.call_type === "answered" ? (
                        <CallMadeIcon />
                      ) : (
                        <CallMissedOutgoingIcon />
                      )}
                    </div>
                    <div className="caller-details">
                      <div>{call.to}</div>
                      <div>From {call.from}</div>
                    </div>
                    {details && id === call.id ? (
                      <ActivityDetails
                        id={id}
                        call={call}
                        allCalls={allCalls}
                        setAllCalls={setAllCalls}
                      />
                    ) : null}
                  </div>
                ) : (
                  <div className="icons">
                    <div className="icon-static">
                      {call.call_type === "voicemail" ? (
                        <CallReceivedIcon />
                      ) : (
                        <VoicemailIcon />
                      )}
                    </div>
                    <div className="caller-details">
                      <div className="main-number">
                        {!call.from ? "Unknown" : call.from}
                      </div>
                      <div className="sub-number">
                        To {!call.to ? "Unknown" : call.to}
                      </div>
                    </div>
                    {details && id === call.id ? (
                      <ActivityDetails
                        id={id}
                        call={call}
                        allCalls={allCalls}
                        setAllCalls={setAllCalls}
                      />
                    ) : null}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ActivityFeed;
