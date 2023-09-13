import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
} from "reactstrap";

import CardMedal from "../ui-elements/cards/advance/CardMedal";
import UserTimeline from "../ui-elements/cards/advance/CardUserTimeline";
import Sales2 from "../ui-elements/cards/analytics/Sales2";
import StatsCard from "../ui-elements/cards/statistics/StatsCard";

const WorkmanDashboard = () => {
  return (
    <div>
      <Row xs="2">
        <Col>
          <StatsCard cols={{ xl: "3", sm: "6" }} />
        </Col>
        
      </Row>
    </div>
  );
};

export default WorkmanDashboard;
