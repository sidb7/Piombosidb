// ** Reactstrap Imports
import { Row, Col, CardTitle } from "reactstrap";

import { lazy } from "react";

const Wizard = lazy(() => import("./profileDivider"));

const ProfileCompletion = () => {
  return (
    <div>
      <Row xs="1">
        <Col>
          <CardTitle tag="h2" className="fw-bold mb-1">
          Complete your profile to become the future of service mobility.
          </CardTitle>
        </Col>
      </Row>
      <Wizard />
    </div>
  );
};

export default ProfileCompletion;
