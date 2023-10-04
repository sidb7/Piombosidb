// ** React Imports

// ** Third Party Components
import Select from "react-select";
import AsyncSelect from "react-select/async";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  X,
  Plus,
  Sunrise,
  Sun,
  Sunset,
  Moon,
} from "react-feather";

// ** Utils
import { selectThemeColors } from "@utils";
import "@styles/react/libs/flatpickr/flatpickr.scss";

// ** Reactstrap Imports
import {
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
import Flatpickr from "react-flatpickr";

import skillData from "../../../../skillData";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";

const CaseDetails = ({ stepper, type }) => {
  const [scheduled, setScheduled] = useState(false);
  const [picker, setPicker] = useState(new Date());

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
    { value: "Not Mentioned Here", label: "Not Mentioned Here" },
  ];

  const stateOptions = [
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Kerala", label: "Kerala" },
    { value: "Punjab", label: "Punjab" },
  ];

  const categoryOptions = [
    { value: "Category - 1", label: "Category - 1" },
    { value: "Category - 2", label: "Category - 2" },
    { value: "Category - 3", label: "Category - 3" },
  ];

  const subCategoryOptions = [
    {
      label: "Category - 1",
      options: [
        { value: "Sub Category - 1", label: "Sub Category - 1" },
        { value: "Sub Category - 2", label: "Sub Category - 2" },
      ],
    },
    {
      label: "Category - 2",
      options: [
        { value: "Sub Category - 1", label: "Sub Category - 1" },
        { value: "Sub Category - 2", label: "Sub Category - 2" },
      ],
    },
    {
      label: "Category - 3",
      options: [
        { value: "Sub Category - 1", label: "Sub Category - 1" },
        { value: "Sub Category - 2", label: "Sub Category - 2" },
      ],
    },
  ];

  const slotOptions = [
    { value: "slot-1", label: "slot-1" },
    { value: "slot-2", label: "slot-2" },
    { value: "slot-3", label: "slot-3" },
    { value: "slot-4", label: "slot-4" },
  ];
  const slotOptions1 = ["Before 10am", "10am - 2pm", "2pm - 6pm", "After 6pm"];
  const [showSite, setShowSite] = useState(true);
  const [showService, setShowService] = useState(true);
  const [showSchedule, setShowSchedule] = useState(true);

  const serviceApplication = skillData.servAppl;
  const data = skillData.skillData;

  const [servApplSelected, setServApplSelected] = useState([]);

  const [servCatOpts, setServCatOpts] = useState([]);
  const [servCatSelected, setServCatSelected] = useState([]);

  const [subServCatOpts, setSubServCatOpts] = useState([]);
  const [subServCatSelected, setSubServCatSelected] = useState([]);

  const [serviceRecord, setServiceRecord] = useState({});

  const [serviceTypeSelected, setServiceTypeSelected] = useState("NewBuild");

  const handleServApplChange = (e) => {
    if (servApplSelected.length === 0) {
      setSubServCatOpts([]);
      setServCatOpts([]);
    }
    setServCatSelected([]);
    setSubServCatSelected([]);

    setServiceRecord({
      application: e.value,
      skill: "",
      subskill: "",
    });

    let tmp1 = data.filter((obj1) => {
      return obj1.application === e.value;
    })[0];
    let tmp2 = [];
    let tmp3 = [];
    let tmp4 = [];

    if (serviceTypeSelected === "Installation") {
      tmp4 = tmp1.skillset.installation.skill;
    } else if (serviceTypeSelected === "Repair") {
      tmp4 = tmp1.skillset.repair.skill;
    } else {
      tmp4 = tmp1.skillset.newbuild.skill;
    }
  };
  const handleServCatChange = (e) => {};
  const handleSubServCatChange = (e) => {};

 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slotEnter, setSlotEnter] = useState(-1);
  const [slotValue, setSlotValue] = useState(-1);
  return (
    <div>
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
            <Col xs="10" md="11">
              <div className="content-header">
                <h3 className="mb-0">Site Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" md="1">
              {showSite ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowSite(!showSite)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowSite(!showSite)}
                ></ChevronDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showSite ? (
          <CardBody>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-name">
                    Case Title/ Site Name
                  </Label>
                  <Input
                    type="text"
                    id="register-name"
                    placeholder="site name..."
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for={`city-${type}`}>
                    Service City (below cities can avail service)
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={false}
                    id={`city-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    options={cityOptions}
                    //   onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Address
                  </Label>
                  <Input
                    type="text"
                    id="register-email"
                    placeholder="john@example.com"
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Area/Locality
                  </Label>
                  <Input
                    type="text"
                    id="register-email"
                    placeholder="Munshi Nagar"
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for={`city-${type}`}>
                    City
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={false}
                    id={`city-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    options={cityOptions}
                    defaultValue={cityOptions[0]}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    State
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={false}
                    id={`state-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    options={stateOptions}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Landmark
                  </Label>
                  <Input
                    type="text"
                    id="register-email"
                    placeholder="Opp. Ganesh Mandir"
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Pincode
                  </Label>
                  <Input
                    type="Number"
                    id="register-email"
                    placeholder="400071"
                    // onChange={(e) => handleEmail(e.target.value)}
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
                <h3 className="mb-0">Service Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" md="1">
              {showService ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowService(!showService)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowService(!showService)}
                ></ChevronDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showService ? (
          <CardBody>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row>
              <Col md="6" className="mb-1">
                  <Label className="form-label" for={`city-${type}`}>
                    Service Type
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
                        onChange={() => {}}
                        onClick={() =>    setServiceTypeSelected("Installation") }
                      />
                      <Label className="form-label" for="ex1-active">
                        Installation
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex1-active"
                        name="ex1"
                        onChange={() => {}}
                        onClick={() => setServiceTypeSelected("Repair")}
                      />
                      <Label className="form-label" for="ex1-active">
                        Repair/Replacement
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex1-active"
                        name="ex1"
                        onChange={() => {}}
                        onClick={() =>setServiceTypeSelected("NewBuild")}
                      />
                      <Label className="form-label" for="ex1-active">
                        New Build
                      </Label>
                    </div>
                  </div>
                </Col>
                {(serviceTypeSelected!=="NewBuild")&&
                <Col md="6" className="mb-1">
                  <Label className="form-label" for={`city-${type}`}>
                   Sub-service Details
                  </Label>
                  <div
                    className="demo-inline-spacing"
                    style={{ marginTop: "-1rem" }}
                  >
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex1-active1"
                        name="ex11"
                     
                      />
                      <Label className="form-label" for="ex1-active1">
                       {(serviceTypeSelected==="Installation")?"Someone to visit":"Someone to inspect"}
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex1-active1"
                        name="ex11"
           
                      />
                      <Label className="form-label" for="ex1-active1">
                      {(serviceTypeSelected==="Installation")?"Product to demo":"Parts to be replaced"}
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex1-active1"
                        name="ex11"
                        
                        defaultChecked={serviceTypeSelected==="Installation"||serviceTypeSelected==="Repair"}
                      />
                      <Label className="form-label" for="ex1-active1">
                      {(serviceTypeSelected==="Installation")?"Installation":"Repair"}
                      </Label>
                    </div>
                  </div>
                </Col>
                  }
              </Row>
              <Row>
              <Col md="12" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    Service Application
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={false}
                    id={`state-${type}`}
                    isDisabled={serviceTypeSelected === ""}
                    className="react-select"
                    classNamePrefix="select"
                    options={serviceApplication}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    Service Category
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={false}
                    id={`state-${type}`}
                    isDisabled={serviceTypeSelected === ""}
                    className="react-select"
                    classNamePrefix="select"
                    options={categoryOptions}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    Service Sub-Category
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={false}
                    isDisabled={serviceTypeSelected === ""}
                    id={`state-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    options={subCategoryOptions}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="12" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    Enter description about the case. (optional)
                  </Label>
                  <Input
                    type="textarea"
                    name="text"
                    id="exampleText"
                    rows="3"
                    placeholder="Text Area"
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
                <h3 className="mb-0">Schedule Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" md="1">
              {showSchedule ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowSchedule(!showSchedule)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowSchedule(!showSchedule)}
                ></ChevronDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showSchedule ? (
          <CardBody>
            <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Form
                      style={{
                        width: "90%",
                      }}
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <Row>
                        <Col md="6" className="mb-1">
                          <Label
                            className="form-label"
                            for={`city`}
                            style={{
                              fontSize: windowWidth > 768 ? "13px" : "10px",
                            }}
                          >
                            Schedule Case
                          </Label>
                          <div
                            className="demo-inline-spacing"
                            style={{ marginTop: "-1rem" }}
                          >
                            <div className="form-check">
                              <Input
                                type="radio"
                                id="ex4-active"
                                name="ex4"
                                checked={!scheduled}
                                onClick={() => setScheduled(false)}
                              />
                              <Label
                                className="form-label"
                                for="ex4-active"
                                style={{
                                  fontSize: windowWidth > 768 ? "13px" : "10px",
                                }}
                              >
                                Now
                              </Label>
                            </div>
                            <div className="form-check">
                              <Input
                                type="radio"
                                id="ex5-active"
                                name="ex5"
                                checked={scheduled}
                                onClick={() => setScheduled(true)}
                              />
                              <Label
                                className="form-label"
                                for="ex5-active"
                                style={{
                                  fontSize: windowWidth > 768 ? "13px" : "10px",
                                }}
                              >
                                Later
                              </Label>
                            </div>
                          </div>
                        </Col>
                        <Col
                          md="6"
                          className="mb-1"
                          style={{
                            fontSize: windowWidth > 768 ? "13px" : "10px",
                          }}
                        >
                          <Label
                            className="form-label"
                            for="date-time-picker"
                            style={{
                              fontSize: windowWidth > 768 ? "13px" : "10px",
                            }}
                          >
                            Pick a Date (if scheduling later)
                          </Label>
                          <Flatpickr
                            value={scheduled ? picker : "today"}
                            // disabled={scheduled}
                            id="date-time-picker"
                            // className="form-control"
                            // data-enable-time
                            onChange={(date) => {
                              setPicker(date);
                            }}
                            options={{
                              minDate: "today",
                              altInput: true,
                              maxDate: scheduled ? "none" : "today",
                            }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <Label
                            className="form-label"
                            style={{
                              fontSize: windowWidth > 768 ? "13px" : "10px",
                              marginBottom: "20px",
                            }}
                          >
                            Choose Time slot
                          </Label>
                          <Row>
                            {slotOptions1.map((obj, ind) => (
                              <Col
                                key={ind}
                                xs={windowWidth > 450 ? "6" : "12"}
                                sm="6"
                                md="3"
                                className="mb-1"
                                style={{
                                  fontSize: windowWidth > 768 ? "13px" : "10px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <div
                                  onMouseEnter={() => setSlotEnter(ind + 1)}
                                  onMouseLeave={() => {
                                    setSlotEnter(-1);
                                  }}
                                  onClick={() => setSlotValue(ind)}
                                  style={{
                                    width: "80%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    border:
                                      slotEnter === ind + 1 || slotValue === ind
                                        ? "none"
                                        : "1px solid #6e6b7b",
                                    padding: "10px",
                                    borderRadius: "20px",
                                    cursor: "pointer",
                                    transform:
                                      slotEnter === ind + 1 || slotValue === ind
                                        ? "scale(1.2,1.2"
                                        : "scale(1,1)",
                                    backgroundColor:
                                      slotEnter === ind + 1 || slotValue === ind
                                        ? "#52b7d0"
                                        : "transparent",
                                  }}
                                >
                                  {ind === 0 ? (
                                    <Sunrise
                                      color={
                                        slotEnter === ind + 1 ||
                                        slotValue === ind
                                          ? "white"
                                          : "#6e6b7b"
                                      }
                                    />
                                  ) : ind === 1 ? (
                                    <Sun
                                      color={
                                        slotEnter === ind + 1 ||
                                        slotValue === ind
                                          ? "white"
                                          : "#6e6b7b"
                                      }
                                    />
                                  ) : ind === 2 ? (
                                    <Sunset
                                      color={
                                        slotEnter === ind + 1 ||
                                        slotValue === ind
                                          ? "white"
                                          : "#6e6b7b"
                                      }
                                    />
                                  ) : (
                                    <Moon 
                                      color={
                                        slotEnter === ind + 1 ||
                                        slotValue === ind
                                          ? "white"
                                          : "#6e6b7b"
                                      }
                                    />
                                  )}
                                  <p
                                    style={{
                                      margin: "0px",
                                      padding: "0px",
                                      fontSize:
                                        windowWidth > 768 ? "11px" : "8px",
                                      color:
                                        slotEnter === ind + 1 ||
                                        slotValue === ind
                                          ? "white"
                                          : "#6e6b7b",
                                    }}
                                  >
                                    {obj}
                                  </p>
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </Col>
                      </Row>
                      <div style={{ height: "20px" }} />
                    </Form>
                  </div>
          </CardBody>
        ) : (
          <p />
        )}
      </Card>
    </div>
  );
};

export default CaseDetails;
