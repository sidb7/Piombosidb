// **
import "@styles/react/libs/flatpickr/flatpickr.scss";

// ** Reactstrap Imports
import {
  ListGroup,
  ListGroupItem,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Label,
  Row,
  Col,
  Form,
  Input,
  Button,
} from "reactstrap";

import { Fragment, useState } from "react";
import {
  FileText,
  X,
  DownloadCloud,
  ArrowLeft,
  ArrowRight,
} from "react-feather";
import { useDropzone } from "react-dropzone";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";

const ProductDetails = ({ stepper, type }) => {
  return (
    <Fragment>
      {/* <div className="content-header">
        <h5 className="mb-0">Product Details</h5>
        <small>Enter Product Details of Case, if applicable.</small>
      </div>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Row>
          <Col md="6" className="mb-1">
            <Label className="form-label" for={`city-${type}`}>
              Warranty
            </Label>
            <div className="demo-inline-spacing" style={{ marginTop: "-1rem" }}>
              <div className="form-check">
                <Input type="radio" id="ex1-active" name="ex1" />
                <Label className="form-label" for="ex1-active">
                  Yes
                </Label>
              </div>
              <div className="form-check">
                <Input type="radio" id="ex1-active" name="ex1" />
                <Label className="form-label" for="ex1-active">
                  No
                </Label>
              </div>
            </div>
          </Col>
          <Col md="6" className="mb-1">
            <Label className="form-label" for="signup-details-GST-card-copy">
              Warranty Card
            </Label>
            <Input
              type="file"
              id="signup-details-GST-card-copy"
              placeholder=""
            />
          </Col>
        </Row>

        <div className="d-flex justify-content-between">
          <Button
            color="primary"
            className="btn-prev"
            onClick={() => stepper.previous()}
          >
            <ArrowLeft
              size={14}
              className="align-middle me-sm-25 me-0"
            ></ArrowLeft>
            <span className="align-middle d-sm-inline-block d-none">
              Previous
            </span>
          </Button>
          <Button
            color="primary"
            className="btn-next"
            onClick={() => stepper.next()}
          >
            <span className="align-middle d-sm-inline-block d-none">Next</span>
            <ArrowRight
              size={14}
              className="align-middle ms-sm-25 ms-0"
            ></ArrowRight>
          </Button>
        </div>
      </Form> */}
    </Fragment>
  );
};

export default ProductDetails;
