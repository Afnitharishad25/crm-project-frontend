import React from "react";
import { useParams } from "react-router-dom";

import MeetingDetails from "../../../../Tickets/components/Tabs/Meeting/MeetingDetails";
import { getLeadTabs } from "../LeadTabs";

export default function LeadMeeting() {
  const { leadId } = useParams();

  return (
    <div>
      <MeetingDetails tabs={getLeadTabs(leadId)} />
    </div>
  );
}
