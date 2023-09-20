// ** React Imports
import { Fragment } from "react";

// ** Third Party Components
import Select from "react-select";
import { useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
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

import data from "../../../pincodeData";

const AdditionalDetails = ({ stepper, type }) => {
  const [pf, setPf] = useState(false);

  const [aadharNumber, setAadharNumber] = useState("");
  //handle aadhar number
  const handleAadharFormat = (val) => {
    console.log(val.length);
    setAadharNumber(val);
    let i = 4;
    while (i < val.length) {
      if (val[i] != "-") {
        console.log(val.slice(0, i).concat("-", val.slice(i, val.length)));
        setAadharNumber(val.slice(0, i).concat("-", val.slice(i, val.length)));
      }
      i += 5;
    }
    if (val.length > 14) {
      setAadharNumber(val.slice(0, 14));
    }
  };

  const [showReg, setShowReg] = useState(true);
  const [showBank, setShowBank] = useState(true);
  const [showPin, setShowPin] = useState(true);

  const stateList = data.states;
  const pinData = data.pinData;
  const [selectedState, setSelectedState] = useState({});
  const [stateData, setStateData] = useState({});
  const [districtOptions, setDistrictOptions] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [divisionOptions, setDivisionOptions] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [disableDistrict, setDisableDistrict] = useState(true);
  const [disableDivision, setDisableDivision] = useState(true);

  return (
    <div>
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
            <Col xs="10" md="11">
              <div className="content-header">
                <h3 className="mb-0">Registration Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" md="1">
              {showReg ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowReg(!showReg)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowReg(!showReg)}
                ></ChevronDown>
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
                    Aadhar Number
                  </Label>
                  <Input
                    type="text"
                    id="register-mobile"
                    placeholder="XXXXXXX"
                    value={aadharNumber}
                    onChange={(e) => handleAadharFormat(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label
                    className="form-label"
                    for="signup-details-GST-card-copy"
                  >
                    Aadhar Card
                  </Label>
                  <Input
                    type="file"
                    id="signup-details-GST-card-copy"
                    placeholder=""
                  />
                </Col>
              </Row>
              {pf ? (
                <Row>
                  <Col xs="12" sm="4" md="2" className="mb-1">
                    <Label className="form-label" for={`city-${type}`}>
                      PF Registration
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
                      UAN
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
                      PF Registration
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
              )}
            </Form>
          </CardBody>
        ) : (
          <p />
        )}
      </Card>
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
            <Col xs="10" md="11">
              <div className="content-header">
                <h3 className="mb-0">Bank Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" md="1">
              {showBank ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowBank(!showBank)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowBank(!showBank)}
                ></ChevronDown>
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
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
            <Col xs="10" md="11">
              <div className="content-header">
                <h3 className="mb-0">Service Pincodes</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" md="1">
              {showPin ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowPin(!showPin)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowPin(!showPin)}
                ></ChevronDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showPin ? (
          <CardBody>
            <Form>
              <Row>
                <Col xs="12">
                  <Label className="form-label" for={`state-${type}`}>
                    State
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable
                    id={`state-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    options={stateList}
                    value={selectedState}
                    onChange={(e) => {
                      if (e != null) {
                        let i = pinData.filter((obj) => {
                          return obj.state === e.value;
                        })[0];
                        setStateData(i);
                        setTotalRecords(i.count);
                        let dist = [];
                        i.district_list.forEach((obj) => {
                          dist.push({
                            value: obj.district,
                            label: obj.district,
                          });
                        });
                        setDistrictOptions(dist);
                        setDisableDistrict(false);
                      } else {
                        setDisableDistrict(true);
                        setTotalRecords(0);
                        setStateData({});
                      }

                      setSelectedDistrict([]);
                      setSelectedDivision([]);
                      setSelectedState(e);
                    }}
                  />
                </Col>
              </Row>
              <Row style={{ marginTop: "1rem" }}>
                <Col xs="6">
                  <Label className="form-label" for={`state-${type}`}>
                    District
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable
                    id={`state-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    placeholder="Select state first.."
                    isDisabled={disableDistrict}
                    value={selectedDistrict}
                    options={districtOptions.filter((obj) => {
                      return (
                        0 ===
                        selectedDistrict.filter((itm) => {
                          return itm.value === obj.value;
                        }).length
                      );
                    })}
                    onChange={(e) => {
                      setSelectedDistrict(e);

                      if (e.length > 0) {
                        let dis = stateData.district_list.filter((obj) => {
                          return (
                            1 ===
                            e.filter((itm) => {
                              return itm.value === obj.district;
                            }).length
                          );
                        });
                        dis.forEach((obj) => {
                          obj.division_list.forEach((itm) => {
                            if (
                              0 ===
                              selectedDivision.filter((it) => {
                                return it.value === itm.division;
                              }).length
                            ) {
                              divOpt.push({
                                value: itm.division,
                                label: itm.division,
                              });
                            }
                          });
                        });
                        setDivisionOptions(divOpt);
                        if (selectedDivision.length == 0) {
                          let recs = 0;

                          dis.forEach((obj) => {
                            recs += obj.count;
                          });
                          setTotalRecords(recs);
                        }
                        // else {
                        //   let removeFromSelectedDivision = [];
                        //   selectedDivision.forEach((obj) => {
                        //     let found = 0;
                        //     dis.forEach((obj2) => {
                        //       obj2.division_list.forEach((obj3) => {});
                        //     });
                        //   });
                        // }
                        setDisableDivision(false);
                      } else {
                        setDisableDivision(true);
                        setTotalRecords(stateData.count);
                      }
                      setSelectedDivision([]);
                    }}
                    isMulti
                  />
                </Col>
                <Col xs="6">
                  <Label className="form-label" for={`state-${type}`}>
                    Division
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable
                    id={`state-${type}`}
                    isDisabled={disableDivision}
                    className="react-select"
                    classNamePrefix="select"
                    placeholder="Select district first.."
                    isMulti
                    value={selectedDivision}
                    options={divisionOptions.filter((obj) => {
                      return (
                        0 ===
                        selectedDivision.filter((itm) => {
                          return itm.value === obj.value;
                        }).length
                      );
                    })}
                    onChange={(e) => {
                      setSelectedDivision(e);
                      if (e.length > 0) {
                        let recs = 0;
                        let dis = stateData.district_list.filter((obj) => {
                          return (
                            1 ===
                            selectedDistrict.filter((itm) => {
                              return itm.value === obj.district;
                            }).length
                          );
                        });
                        dis.forEach((obj) => {
                          obj.division_list.forEach((itm) => {
                            if (
                              1 ===
                              e.filter((it) => {
                                return it.value === itm.division;
                              }).length
                            ) {
                              recs += itm.count;
                            }
                          });
                        });
                        setTotalRecords(recs);
                      } else {
                        let recs = 0;
                        let dis = stateData.district_list.filter((obj) => {
                          return (
                            1 ===
                            selectedDistrict.filter((itm) => {
                              return itm.value === obj.district;
                            }).length
                          );
                        });
                        dis.forEach((obj) => {
                          recs += obj.count;
                        });
                        setTotalRecords(recs);
                      }
                    }}
                  />
                </Col>
              </Row>
              <Row style={{ marginTop: "1rem" }}>
                <h4>Total Offices/Area selected - {totalRecords}</h4>
              </Row>
            </Form>
            <Button
              className="btn-icon"
              color="primary"
              style={{ marginTop: "1rem" }}
            >
              <Plus size={14} />
              <span className="align-middle ms-25">Add</span>
            </Button>
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
