import React from "react";
// ** Reactstrap Imports
import {
  Row,
  Col,
  CardTitle,

} from "reactstrap";

import { lazy } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Wizard = lazy(() => import("./profileDivider"));

const DesignProfileCompletion = () => {
  return (
    <div className="container-lg container-md mt-2">
      <Row xs="1">
        <Col>
          <CardTitle tag="h2" className="fw-bold mb-1">
            Welcome to Piombo. Please complete your profile:
          </CardTitle>
        </Col>
      </Row>
      <Wizard />
    </div>
  );
};

export default DesignProfileCompletion;
