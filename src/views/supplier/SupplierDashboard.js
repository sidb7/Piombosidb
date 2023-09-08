import {
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

const SupplierDashboard = () => {
  return (
    <div>
      <CardMedal />
      <UserTimeline />
      <Sales2 /> 
    </div>
  );
};

export default SupplierDashboard;
