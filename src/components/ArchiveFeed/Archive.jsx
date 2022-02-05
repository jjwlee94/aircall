import React, { useState } from "react";
import { Button, ButtonGroup, Typography } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import VoicemailIcon from "@mui/icons-material/Voicemail";
import ArchiveDetails from "./ArchiveDetails.jsx";
import "../../styles/feed.css";

const Archive = ({ allCalls, setAllCalls }) => {
  const [details, setDetails] = useState(false);
  const [id, setId] = useState("");

  const handleClick = (id) => {
    setDetails(!details);
    setId(id);
  };

  return (
    <div className="call-container">
      <Typography textAlign="center">Archived Calls</Typography>
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
            {call.is_archived === true && (
              <div className="call-details">
                {call.direction === "outbound" ? (
                  <div className="icons">
                    <div className="caller-display">
                      {call.call_type === "answered" ? (
                        <CallMadeIcon />
                      ) : (
                        <CallMissedOutgoingIcon />
                      )}
                      <div className="caller-details">
                        <div className="main-number">
                          {!call.to ? "Unknown" : call.to}
                        </div>
                        <div className="sub-number">
                          From {!call.from ? "Unknown" : call.from} (via{" "}
                          {call.via})
                        </div>
                      </div>
                    </div>
                    {details && id === call.id ? (
                      <ArchiveDetails
                        id={id}
                        call={call}
                        allCalls={allCalls}
                        setAllCalls={setAllCalls}
                      />
                    ) : null}
                  </div>
                ) : (
                  <div className="icons">
                    <div className="caller-display">
                      {call.call_type === "voicemail" ? (
                        <CallReceivedIcon />
                      ) : (
                        <VoicemailIcon />
                      )}
                      <div className="caller-details">
                        <div className="main-number">
                          {!call.from ? "Unknown" : call.from}
                        </div>
                        <div className="sub-number">
                          To {!call.to ? "Unknown" : call.to} (via {call.via})
                        </div>
                      </div>
                    </div>
                    {details && id === call.id ? (
                      <ArchiveDetails
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

export default Archive;
