// ** React Imports
import { Fragment } from "react";

// ** Third Party Components
import Select from "react-select";
import { useState } from "react";

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

const AdditionalDetails = ({ stepper, type }) => {
  const [cin, setCin] = useState(false);
  const [msme, setMsme] = useState(false);
  const [pf, setPf] = useState(false);
  const [esic, setEsic] = useState(false);

  const [aadharNumber, setAadharNumber] = useState("");
  //handle aadhar number
  const handleAadharFormat = (val) => {
    setAadharNumber(val);
    let i = 4;
    while (i < val.length) {
      if (val[i] != "-") {
        setAadharNumber(val.slice(0, i).concat("-", val.slice(i, val.length)));
      }
      i += 5;
    }
  };

  const [showReg, setShowReg] = useState(true);
  const [showBank, setShowBank] = useState(true);

  return (
    <div>
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
            <Col xs="11">
              <div className="content-header">
                <h3 className="mb-0">Registration Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="1">
              {showReg ? (
                <ArrowUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowReg(!showReg)}
                ></ArrowUp>
              ) : (
                <ArrowDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowReg(!showReg)}
                ></ArrowDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showReg ? (
          <CardBody>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-mobile">
                    Pan Card Number
                  </Label>
                  <Input
                    type="Number"
                    id="register-mobile"
                    placeholder="XXXXXXXX"
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label
                    className="form-label"
                    for="signup-details-pan-card-copy"
                  >
                    PAN Card
                  </Label>
                  <Input
                    type="file"
                    id="signup-details-pan-card-copy"
                    placeholder=""
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-mobile">
                    GST Registration Number
                  </Label>
                  <Input
                    type="Number"
                    id="register-mobile"
                    placeholder="XXXXXXX"
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label
                    className="form-label"
                    for="signup-details-GST-card-copy"
                  >
                    GST certificate
                  </Label>
                  <Input
                    type="file"
                    id="signup-details-GST-card-copy"
                    placeholder=""
                  />
                </Col>
              </Row>
              {cin ? (
                <Row>
                  <Col xs="12" sm="4" md="2" className="mb-1">
                    <Label className="form-label" for={`city-${type}`}>
                      CIN
                    </Label>
                    <div
                      className="demo-inline-spacing"
                      style={{ marginTop: "-1rem" }}
                    >
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex0-active"
                          name="ex0"
                          checked={cin}
                          onClick={() => {
                            if (!cin) {
                              setCin(!cin);
                            }
                          }}
                        />
                        <Label className="form-label" for="ex0-active">
                          Yes
                        </Label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex0-active"
                          name="ex0"
                          checked={!cin}
                          onClick={() => {
                            if (cin) {
                              setCin(!cin);
                            }
                          }}
                        />
                        <Label className="form-label" for="ex0-active">
                          No
                        </Label>
                      </div>
                    </div>
                  </Col>
                  <Col xs="12" md="4" className="mb-1">
                    <Label className="form-label" for="register-mobile">
                      CIN
                    </Label>
                    <Input
                      type="Number"
                      id="register-mobile"
                      placeholder="9875461258"
                    />
                  </Col>
                  <Col xs="12" md="6" className="mb-1">
                    <Label
                      className="form-label"
                      for="signup-details-photo-copy"
                    >
                      CIN Document
                    </Label>
                    <Input
                      type="file"
                      id="signup-details-photo-copy"
                      placeholder=""
                    />
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col xs="12" className="mb-1">
                    <Label className="form-label" for={`city-${type}`}>
                      CIN
                    </Label>
                    <div
                      className="demo-inline-spacing"
                      style={{ marginTop: "-1rem" }}
                    >
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex0-active"
                          name="ex0"
                          checked={cin}
                          onClick={() => {
                            if (!cin) {
                              setCin(!cin);
                            }
                          }}
                        />
                        <Label className="form-label" for="ex0-active">
                          Yes
                        </Label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex0-active"
                          name="ex0"
                          checked={!cin}
                          onClick={() => {
                            if (cin) {
                              setCin(!cin);
                            }
                          }}
                        />
                        <Label className="form-label" for="ex0-active">
                          No
                        </Label>
                      </div>
                    </div>
                  </Col>
                </Row>
              )}
              {msme ? (
                <Row>
                  <Col xs="12" sm="4" md="2" className="mb-1">
                    <Label className="form-label" for={`city-${type}`}>
                      MSME
                    </Label>
                    <div
                      className="demo-inline-spacing"
                      style={{ marginTop: "-1rem" }}
                    >
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex1-active"
                          name="ex1"
                          checked={msme}
                          onClick={() => {
                            if (!msme) {
                              setMsme(!msme);
                            }
                          }}
                        />
                        <Label className="form-label" for="ex1-active">
                          Yes
                        </Label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex1-active"
                          name="ex1"
                          checked={!msme}
                          onClick={() => {
                            if (msme) {
                              setMsme(!msme);
                            }
                          }}
                        />
                        <Label className="form-label" for="ex1-active">
                          No
                        </Label>
                      </div>
                    </div>
                  </Col>
                  <Col xs="12" md="4" className="mb-1">
                    <Label className="form-label" for="register-mobile">
                      MSME
                    </Label>
                    <Input
                      type="Number"
                      id="register-mobile"
                      placeholder="9875461258"
                    />
                  </Col>
                  <Col xs="12" md="6" className="mb-1">
                    <Label
                      className="form-label"
                      for="signup-details-photo-copy"
                    >
                      MSME Document
                    </Label>
                    <Input
                      type="file"
                      id="signup-details-photo-copy"
                      placeholder=""
                    />
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col xs="12" className="mb-1">
                    <Label className="form-label" for={`city-${type}`}>
                      MSME
                    </Label>
                    <div
                      className="demo-inline-spacing"
                      style={{ marginTop: "-1rem" }}
                    >
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex1-active"
                          name="ex1"
                          checked={msme}
                          onClick={() => {
                            if (!msme) {
                              setMsme(!msme);
                            }
                          }}
                        />
                        <Label className="form-label" for="ex1-active">
                          Yes
                        </Label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex1-active"
                          name="ex1"
                          checked={!msme}
                          onClick={() => {
                            if (msme) {
                              setMsme(!msme);
                            }
                          }}
                        />
                        <Label className="form-label" for="ex1-active">
                          No
                        </Label>
                      </div>
                    </div>
                  </Col>
                </Row>
              )}
              {/* {pf ? (
                <Row>
                  <Col xs="12" sm="4" md="2" className="mb-1">
                    <Label className="form-label" for={`city-${type}`}>
                      PF
                    </Label>
                    <div
                      className="demo-inline-spacing"
                      style={{ marginTop: "-1rem" }}
                    >
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex2-active"
                          name="ex2"
                          checked={pf}
                          onClick={() => {
                            if (!pf) {
                              setPf(!pf);
                            }
                          }}
                        />
                        <Label className="form-label" for="ex1-active">
                          Yes
                        </Label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex2-active"
                          name="ex2"
                          checked={!pf}
                          onClick={() => {
                            if (pf) {
                              setPf(!pf);
                            }
                          }}
                        />
                        <Label className="form-label" for="ex1-active">
                          No
                        </Label>
                      </div>
                    </div>
                  </Col>
                  <Col xs="12" md="4" className="mb-1">
                    <Label className="form-label" for="register-mobile">
                      PF
                    </Label>
                    <Input
                      type="Number"
                      id="register-mobile"
                      placeholder="9875461258"
                    />
                  </Col>
                  <Col xs="12" md="6" className="mb-1">
                    <Label
                      className="form-label"
                      for="signup-details-photo-copy"
                    >
                      PF Document
                    </Label>
                    <Input
                      type="file"
                      id="signup-details-photo-copy"
                      placeholder=""
                    />
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col xs="12" className="mb-1">
                    <Label className="form-label" for={`city-${type}`}>
                      PF
                    </Label>
                    <div
                      className="demo-inline-spacing"
                      style={{ marginTop: "-1rem" }}
                    >
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex2-active"
                          name="ex2"
                          checked={pf}
                          onClick={() => {
                            if (!pf) {
                              setPf(!pf);
                            }
                          }}
                        />
                        <Label className="form-label" for="ex1-active">
                          Yes
                        </Label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex2-active"
                          name="ex2"
                          checked={!pf}
                          onClick={() => {
                            if (pf) {
                              setPf(!pf);
                            }
                          }}
                        />
                        <Label className="form-label" for="ex1-active">
                          No
                        </Label>
                      </div>
                    </div>
                  </Col>
                </Row>
              )} */}
              {/* {esic ? (
                <Row>
                  <Col xs="12" sm="4" md="2" className="mb-1">
                    <Label className="form-label" for={`city-${type}`}>
                      ESIC
                    </Label>
                    <div
                      className="demo-inline-spacing"
                      style={{ marginTop: "-1rem" }}
                    >
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex3-active"
                          name="ex3"
                          checked={esic}
                          onClick={() => {
                            if (!esic) {
                              setEsic(!esic);
                            }
                          }}
                        />
                        <Label className="form-label" for="ex1-active">
                          Yes
                        </Label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex3-active"
                          name="ex3"
                          checked={!esic}
                          onClick={() => {
                            if (esic) {
                              setEsic(!esic);
                            }
                          }}
                        />
                        <Label className="form-label" for="ex1-active">
                          No
                        </Label>
                      </div>
                    </div>
                  </Col>
                  <Col xs="12" md="4" className="mb-1">
                    <Label className="form-label" for="register-mobile">
                      ESIC
                    </Label>
                    <Input
                      type="Number"
                      id="register-mobile"
                      placeholder="9875461258"
                    />
                  </Col>
                  <Col xs="12" md="6" className="mb-1">
                    <Label
                      className="form-label"
                      for="signup-details-photo-copy"
                    >
                      ESIC Document
                    </Label>
                    <Input
                      type="file"
                      id="signup-details-photo-copy"
                      placeholder=""
                    />
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col xs="12" className="mb-1">
                    <Label className="form-label" for={`city-${type}`}>
                      ESIC
                    </Label>
                    <div
                      className="demo-inline-spacing"
                      style={{ marginTop: "-1rem" }}
                    >
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex3-active"
                          name="ex3"
                          checked={esic}
                          onClick={() => {
                            if (!esic) {
                              setEsic(!esic);
                            }
                          }}
                        />
                        <Label className="form-label" for="ex1-active">
                          Yes
                        </Label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex3-active"
                          name="ex3"
                          checked={!esic}
                          onClick={() => {
                            if (esic) {
                              setEsic(!esic);
                            }
                          }}
                        />
                        <Label className="form-label" for="ex1-active">
                          No
                        </Label>
                      </div>
                    </div>
                  </Col>
                </Row>
              )} */}
            </Form>
          </CardBody>
        ) : (
          <p />
        )}
      </Card>
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
            <Col xs="11">
              <div className="content-header">
                <h3 className="mb-0">Bank Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="1">
              {showBank ? (
                <ArrowUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowBank(!showBank)}
                ></ArrowUp>
              ) : (
                <ArrowDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowBank(!showBank)}
                ></ArrowDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showBank ? (
          <CardBody>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-name">
                    Bank Name
                  </Label>
                  <Input
                    type="text"
                    id="register-name"
                    placeholder="bank name"
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-name">
                    Branch Detail
                  </Label>
                  <Input
                    type="text"
                    id="register-name"
                    placeholder="branch name"
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Account number
                  </Label>
                  <Input
                    type="number"
                    id="register-email"
                    placeholder="XXXXXXX"
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    IFSC Code
                  </Label>
                  <Input
                    type="text"
                    id="register-email"
                    placeholder="XXXXXX"
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-name">
                    MICR Code
                  </Label>
                  <Input
                    type="text"
                    id="register-name"
                    placeholder="XXXXXXXXXXXX"
                    value={aadharNumber}
                    onChange={(e) => handleAadharFormat(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="signup-details-photo-copy">
                    Cancelled Cheque
                  </Label>
                  <Input
                    type="file"
                    id="signup-details-photo-copy"
                    placeholder=""
                  />
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
              color="primary"
              className="btn-next"
              onClick={() => stepper.next()}
            >
              <span className="align-middle d-sm-inline-block d-none">
                Next
              </span>
              <ArrowRight
                size={14}
                className="align-middle ms-sm-25 ms-0"
              ></ArrowRight>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AdditionalDetails;
