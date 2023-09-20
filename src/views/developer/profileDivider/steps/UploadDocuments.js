// ** React Imports
import { Fragment, useState } from "react";

// ** Third Party Components
import Select from "react-select";

import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  X,
  Plus,
} from "react-feather";

// ** Utils
import { selectThemeColors } from "@utils";

// ** Custom Components
import Repeater from "@components/repeater";

// ** Reactstrap Imports
import {
  Label,
  Row,
  Col,
  Form,
  Input,
  Button,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
} from "reactstrap";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";

const CompanyDetails = ({ stepper, type, skin }) => {
  const cityOptions = [
    { value: "Mumbai", label: "Mumbai" },
    { value: "Pune", label: "Pune" },
    { value: "Bangalore", label: "Bangalore" },
    { value: "Delhi", label: "Delhi" },
    { value: "Pune", label: "Pune" },
    { value: "Bangalore", label: "Bangalore" },
    { value: "Delhi", label: "Delhi" },
    { value: "Pune", label: "Pune" },
    { value: "Bangalore", label: "Bangalore" },
    { value: "Delhi", label: "Delhi" },
  ];

  const countryOptions = [
    { value: "India", label: "India" },
    { value: "Japan", label: "Japan" },
    { value: "Norway", label: "Norway" },
  ];

  const stateOptions = [
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Kerala", label: "Kerala" },
    { value: "Punjab", label: "Punjab" },
  ];
  const companyTypeOptions = [
    { value: "Proprietorship", label: "Proprietorship" },
    { value: "Partnership", label: "Partnership" },
    { value: "LLP", label: "LLP" },
    { value: "Private Limited", label: "Private Limited" },
    { value: "Public Limited", label: "Public Limited" },
    { value: "LLC", label: "LLC" },
  ];

  const [authCount, setAuthCount] = useState(1);
  const [escCount, setEscCount] = useState(1);

  const increaseAuthCount = () => {
    setAuthCount(authCount + 1);
  };

  const increaseEscCount = () => {
    setEscCount(escCount + 1);
  };

  const deleteForm = (e) => {
    e.preventDefault();
    e.target.closest("form").remove();
  };

  const division = {
    padding: "1.5rem",
    borderRadius: "05px",
  };

  const [showBasic, setShowBasic] = useState(true);
  const [showAuth, setShowAuth] = useState(true);
  const [showEsc, setShowEsc] = useState(true);

  return (
    <div>
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
            {/* <Col xs="11">
              <div className="content-header">
                <h3 className="mb-0">Basic Details</h3>
                <small>Enter Your Company Details.</small>
              </div>
            </Col> */}
            <Col xs="1">
              {showBasic ? (
                <ArrowUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowBasic(!showBasic)}
                ></ArrowUp>
              ) : (
                <ArrowDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowBasic(!showBasic)}
                ></ArrowDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showBasic ? (
          <CardBody>
            <Form onSubmit={(e) => e.preventDefault()}>
            <Row style={division}>
          <Col md="6" className="mb-1">
            {/* <div className="mb-1">
              <Label className="form-label" for="signup-details-pan-card-copy">
                PAN card copy
              </Label>
              <Input
                type="file"
                id="signup-details-pan-card-copy"
                placeholder=""
              />
            </div>
            <div className="mb-1">
              <Label
                className="form-label"
                for="signup-details-gst-registration-certificate"
              >
                GST registration certificate
              </Label>
              <Input
                type="file"
                id="signup-details-gst-registration-certificate"
                placeholder=""
              />
            </div> */}
            <div className="mb-1">
              <Label className="form-label" for="signup-details-moa">
                Number of Certificate of Incorporation
              </Label>
              <Input type="text" id="signup-details-moa" placeholder="AB1234" />
            </div>

            <div className="mb-1">
              <Label
                className="form-label"
                for="signup-details-certificate-of-incorporation"
              >
                Certificate of Incorporation
              </Label>
              <Input
                type="file"
                id="signup-details-certificate-of-incorporation"
                placeholder=""
              />
            </div>
          </Col>
          <Col md="6" className="mb-1">
          
            <div className="mb-1">
              <Label className="form-label" for="signup-details-moa">
                Memorandum of Association
              </Label>
              <Input type="file" id="signup-details-moa" placeholder="" />
            </div>

            <div className="mb-1">
              <Label
                className="form-label"
                for="signup-details-article-of-association"
              >
                Article of association
              </Label>
              <Input
                type="file"
                id="signup-details-article-of-association"
                placeholder=""
              />
            </div>
          </Col>
        </Row>
            </Form>
          </CardBody>
        ) : (
          <p />
        )}
      </Card>
      <Row>
        <Col xs="12">
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
              color="success"
              className="btn-submit"
              onClick={() => alert("submitted")}
            >
              Submit
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CompanyDetails;
