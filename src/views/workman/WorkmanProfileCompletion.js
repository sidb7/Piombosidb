// ** Reactstrap Imports
import { Row, Col, CardTitle } from "reactstrap";

import { lazy } from "react";

const Wizard = lazy(() => import("./profileDivider"));

const ProfileCompletion = () => {
  return (
    <div className="container-lg mt-3">
      <Row xs="1">
        <Col>
          <CardTitle tag="h2" className="fw-bold mb-1">
            Welcome to Piombo. Please fill in the empty fields!
          </CardTitle>
        </Col>
      </Row>
      <Wizard />
    </div>
  );
};

export default ProfileCompletion;
