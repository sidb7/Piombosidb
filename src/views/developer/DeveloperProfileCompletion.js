import React from "react";
// ** Reactstrap Imports
import {
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { lazy } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Wizard = lazy(() => import("./profileDivider"));

const DeveloperProfileCompletion = (props) => {
  return (
    <div >
      <Row xs="1">
        <Col>
          <CardTitle tag="h2" className="fw-bold mb-1">
            Welcome to Piombo. Please complete your profile:
          </CardTitle>
        </Col>
      </Row>
      <Wizard site = {props.site} />
    </div>
  );
};

export default DeveloperProfileCompletion;
