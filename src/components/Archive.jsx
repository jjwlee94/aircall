import React from "react";
import { CardContent, Divider, IconButton } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import InfoIcon from "@mui/icons-material/Info";
import VoicemailIcon from "@mui/icons-material/Voicemail";
import "../css/activity-feed.css";

const ActivityFeed = ({ allCalls, setAllCalls }) => {
  return (
    <div className="call-container">
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
                        <IconButton size="small">
                          <InfoIcon />
                        </IconButton>
                        <IconButton size="small">
                          <ArchiveIcon />
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
                        <IconButton size="small">
                          <InfoIcon />
                        </IconButton>
                        <IconButton size="small">
                          <ArchiveIcon />
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
                <div className="call-time">
                  <div>
                    {call.created_at.split("T").join(" at ").slice(0, 19)}
                  </div>
                  <div>{call.duration} seconds </div>
                </div>
              </div>
            )}
          </CardContent>
        );
      })}
    </div>
  );
};

export default ActivityFeed;
