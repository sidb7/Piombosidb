import React from 'react'

import CardMedal from "../ui-elements/cards/advance/CardMedal";
import UserTimeline from "../ui-elements/cards/advance/CardUserTimeline";
import Sales2 from "../ui-elements/cards/analytics/Sales2";
import StatsCard from "../ui-elements/cards/statistics/StatsCard";
import { Col, Row } from 'reactstrap';
export default function Dashboard() {
  return (
    <div>
      <Row xs="1" md={2} >
        <Col>
          <StatsCard cols={{ xl: "3", sm: "6" }} />
         
        </Col>
        <Col> <UserTimeline/></Col>
      </Row>
    </div>
  )
}
