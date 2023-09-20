// ** React Imports
import { Fragment, useState } from "react";

// ** Third Party Components
import Select from "react-select";

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

const CompanyDetails = ({ stepper, type }) => {
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

  const [showBasic, setShowBasic] = useState(true);
  const [showAuth, setShowAuth] = useState(true);
  const [showEsc, setShowEsc] = useState(true);

  const [authName, setAuthName] = useState("");
  const [authEmail, setAuthEmail] = useState("");
  const [authMobile, setAuthMobile] = useState("");
  const [authDesig, setAuthDesig] = useState("");
  const [authPerson, setAuthPerson] = useState([]);

  const [escName, setEscName] = useState("");
  const [escEmail, setEscEmail] = useState("");
  const [escMobile, setEscMobile] = useState("");
  const [escDesig, setEscDesig] = useState("");
  const [escPerson, setEscPerson] = useState([]);

  const handleNewAuth = () => {
    if (
      authName !== "" &&
      authEmail !== "" &&
      authMobile !== "" &&
      authDesig !== ""
    ) {
      let sameCheck = authPerson.filter((obj) => {
        return obj.email === authEmail || obj.mobile === authMobile;
      }).length;
      if (sameCheck > 0) {
        alert("Email or Mobile already present!!");
      } else {
        setAuthPerson([
          ...authPerson,
          {
            name: authName,
            email: authEmail,
            mobile: authMobile,
            designation: authDesig,
          },
        ]);
        setAuthName("");
        setAuthEmail("");
        setAuthMobile("");
        setAuthDesig("");
      }
    } else {
      alert("Enter all details!!");
    }
  };

  const handleEditAuth = (ind) => {
    let authObj = authPerson.at(ind);
    handleDeleteAuth(ind);
    setAuthName(authObj.name);
    setAuthEmail(authObj.email);
    setAuthMobile(authObj.mobile);
    setAuthDesig(authObj.designation);
  };

  const handleDeleteAuth = (ind) => {
    let ar = [];
    if (authPerson.length <= 1) {
      ar = [];
    } else {
      if (ind == 0) {
        ar = authPerson.slice(1);
      } else if (ind == authPerson.length - 1) {
        ar = authPerson.slice(0, ind);
      } else {
        ar = authPerson.slice(0, ind).concat(authPerson.slice(ind + 1));
      }
    }
    setAuthPerson(ar);
  };

  const handleNewEsc = () => {
    if (
      escName !== "" &&
      escEmail !== "" &&
      escMobile !== "" &&
      escDesig !== ""
    ) {
      let sameCheck = escPerson.filter((obj) => {
        return obj.email === escEmail || obj.mobile === escMobile;
      }).length;
      if (sameCheck > 0) {
        alert("Email or Mobile already present!!");
      } else {
        setEscPerson([
          ...escPerson,
          {
            name: escName,
            email: escEmail,
            mobile: escMobile,
            designation: escDesig,
          },
        ]);
        setEscName("");
        setEscEmail("");
        setEscMobile("");
        setEscDesig("");
      }
    } else {
      alert("Enter all details!!");
    }
  };

  const handleEditEsc = (ind) => {
    let escObj = escPerson.at(ind);
    handleDeleteEsc(ind);
    setEscName(escObj.name);
    setEscEmail(escObj.email);
    setEscMobile(escObj.mobile);
    setEscDesig(escObj.designation);
  };

  const handleDeleteEsc = (ind) => {
    let ar = [];
    if (escPerson.length <= 1) {
      ar = [];
    } else {
      if (ind == 0) {
        ar = escPerson.slice(1);
      } else if (ind == escPerson.length - 1) {
        ar = escPerson.slice(0, ind);
      } else {
        ar = escPerson.slice(0, ind).concat(escPerson.slice(ind + 1));
      }
    }
    setEscPerson(ar);
  };

  return (
    <div>
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
            <Col xs="10" md="11">
              <div className="content-header">
                <h3 className="mb-0">Basic Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" md="1">
              {showBasic ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowBasic(!showBasic)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowBasic(!showBasic)}
                ></ChevronDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showBasic ? (
          <CardBody>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-name">
                    Company/Firm Name
                  </Label>
                  <Input
                    type="text"
                    id="register-name"
                    placeholder="Panda Corps"
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    Company/Firm Type
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={false}
                    id={`state-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    options={companyTypeOptions}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-mobile">
                    Mobile Number
                  </Label>
                  <Input
                    type="Number"
                    id="register-mobile"
                    placeholder="9875461258"
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Email Id
                  </Label>
                  <Input
                    type="email"
                    id="register-email"
                    placeholder="john@example.com"
                    // onChange={(e) => handleEmail(e.target.value)}
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
                    placeholder="711-2880 Nulla St., Mankato"
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Locality/Area
                  </Label>
                  <Input
                    type="text"
                    id="register-email"
                    placeholder="Andheri east"
                    // onChange={(e) => handleEmail(e.target.value)}
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
                    placeholder="Opposite Ganesh Mandir"
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Pincode
                  </Label>
                  <Input
                    type="number"
                    id="register-email"
                    placeholder="400025"
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
                <Col md="12" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    Country
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={false}
                    id={`state-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    options={countryOptions}
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
                <h3 className="mb-0">Authorised Person</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" md="1">
              {showAuth ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowAuth(!showAuth)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowAuth(!showAuth)}
                ></ChevronDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showAuth ? (
          <CardBody>
            {authPerson.map((item, i) => (
              <Row
                key={i}
                className="justify-content-between align-items-center"
              >
                <Col md={2} className="mb-md-0 mb-1">
                  <Row>
                    <Label className="form-label" for={`item-name-${i}`}>
                      Name :
                    </Label>
                    <h4>{item.name}</h4>
                  </Row>
                </Col>
                <Col md={2} className="mb-md-0 mb-1">
                  <Row>
                    <Label className="form-label" for={`cost-${i}`}>
                      Email :
                    </Label>
                    <h4>{item.email}</h4>
                  </Row>
                </Col>
                <Col md={2} className="mb-md-0 mb-1">
                  <Row>
                    <Label className="form-label" for={`quantity-${i}`}>
                      Mobile :
                    </Label>
                    <h4>{item.mobile}</h4>
                  </Row>
                </Col>
                <Col md={2} className="mb-md-0 mb-1">
                  <Row>
                    <Label className="form-label" for={`item-name-${i}`}>
                      Designation :
                    </Label>
                    <h4>{item.designation}</h4>
                  </Row>
                </Col>
                <Col md={2}>
                  <Button
                    color="danger"
                    className="text-nowrap px-1 mt-2"
                    onClick={() => {
                      handleEditAuth(i);
                    }}
                    outline
                  >
                    <X size={14} className="me-50" />
                    <span>Edit</span>
                  </Button>
                </Col>
                <Col md={2}>
                  <Button
                    color="danger"
                    className="text-nowrap px-1 mt-2"
                    onClick={() => {
                      handleDeleteAuth(i);
                    }}
                    outline
                  >
                    <X size={14} className="me-50" />
                    <span>Delete</span>
                  </Button>
                </Col>
                <Col sm={12}>
                  <hr />
                </Col>
              </Row>
            ))}
            <Form>
              <Row className="justify-content-between align-items-center">
                <Col md={3} className="mb-md-0 mb-1">
                  <Label className="form-label" for={`item-name-`}>
                    Name
                  </Label>
                  <Input
                    type="text"
                    id={`item-name-`}
                    placeholder="Pranav Nair"
                    value={authName}
                    onChange={(e) => {
                      setAuthName(e.target.value);
                    }}
                  />
                </Col>
                <Col md={3} className="mb-md-0 mb-1">
                  <Label className="form-label" for={`cost-`}>
                    Email
                  </Label>
                  <Input
                    type="email"
                    id={`email-`}
                    placeholder="panda@gmail.com"
                    value={authEmail}
                    onChange={(e) => {
                      setAuthEmail(e.target.value);
                    }}
                  />
                </Col>
                <Col md={3} className="mb-md-0 mb-1">
                  <Label className="form-label" for={`quantity-`}>
                    Mobile
                  </Label>
                  <Input
                    type="number"
                    id={`quantity-`}
                    placeholder="9876543210"
                    value={authMobile}
                    onChange={(e) => {
                      setAuthMobile(e.target.value);
                    }}
                  />
                </Col>
                <Col md={3} className="mb-md-0 mb-1">
                  <Label className="form-label" for={`item-name-`}>
                    Designation
                  </Label>
                  <Input
                    type="text"
                    id={`item-designation-`}
                    placeholder="Manager"
                    value={authDesig}
                    onChange={(e) => {
                      setAuthDesig(e.target.value);
                    }}
                  />
                </Col>
                <Col sm={12}>
                  <hr />
                </Col>
              </Row>
            </Form>
            <Button
              className="btn-icon"
              color="primary"
              onClick={() => {
                handleNewAuth();
              }}
            >
              <Plus size={14} />
              <span className="align-middle ms-25">Add</span>
            </Button>
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
                <h3 className="mb-0">Escalation </h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" md="1">
              {showEsc ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowEsc(!showEsc)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowEsc(!showEsc)}
                ></ChevronDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showEsc ? (
          <CardBody>
            {escPerson.map((item, i) => (
              <Row
                key={i}
                className="justify-content-between align-items-center"
              >
                <Col md={2} className="mb-md-0 mb-1">
                  <Row>
                    <Label className="form-label" for={`item-name-${i}`}>
                      Name :
                    </Label>
                    <h4>{item.name}</h4>
                  </Row>
                </Col>
                <Col md={2} className="mb-md-0 mb-1">
                  <Row>
                    <Label className="form-label" for={`cost-${i}`}>
                      Email :
                    </Label>
                    <h4>{item.email}</h4>
                  </Row>
                </Col>
                <Col md={2} className="mb-md-0 mb-1">
                  <Row>
                    <Label className="form-label" for={`quantity-${i}`}>
                      Mobile :
                    </Label>
                    <h4>{item.mobile}</h4>
                  </Row>
                </Col>
                <Col md={2} className="mb-md-0 mb-1">
                  <Row>
                    <Label className="form-label" for={`item-name-${i}`}>
                      Designation :
                    </Label>
                    <h4>{item.designation}</h4>
                  </Row>
                </Col>
                <Col md={2}>
                  <Button
                    color="danger"
                    className="text-nowrap px-1 mt-2"
                    onClick={() => {
                      handleEditEsc(i);
                    }}
                    outline
                  >
                    <X size={14} className="me-50" />
                    <span>Edit</span>
                  </Button>
                </Col>
                <Col md={2}>
                  <Button
                    color="danger"
                    className="text-nowrap px-1 mt-2"
                    onClick={() => {
                      handleDeleteEsc(i);
                    }}
                    outline
                  >
                    <X size={14} className="me-50" />
                    <span>Delete</span>
                  </Button>
                </Col>
                <Col sm={12}>
                  <hr />
                </Col>
              </Row>
            ))}
            <Form>
              <Row className="justify-content-between align-items-center">
                <Col md={3} className="mb-md-0 mb-1">
                  <Label className="form-label" for={`item-name-`}>
                    Name
                  </Label>
                  <Input
                    type="text"
                    id={`item-name-`}
                    placeholder="Pranav Nair"
                    value={escName}
                    onChange={(e) => {
                      setEscName(e.target.value);
                    }}
                  />
                </Col>
                <Col md={3} className="mb-md-0 mb-1">
                  <Label className="form-label" for={`cost-`}>
                    Email
                  </Label>
                  <Input
                    type="email"
                    id={`email-`}
                    placeholder="panda@gmail.com"
                    value={escEmail}
                    onChange={(e) => {
                      setEscEmail(e.target.value);
                    }}
                  />
                </Col>
                <Col md={3} className="mb-md-0 mb-1">
                  <Label className="form-label" for={`quantity-`}>
                    Mobile
                  </Label>
                  <Input
                    type="number"
                    id={`quantity-`}
                    placeholder="9876543210"
                    value={escMobile}
                    onChange={(e) => {
                      setEscMobile(e.target.value);
                    }}
                  />
                </Col>
                <Col md={3} className="mb-md-0 mb-1">
                  <Label className="form-label" for={`item-name-`}>
                    Designation
                  </Label>
                  <Input
                    type="text"
                    id={`item-designation-`}
                    placeholder="Manager"
                    value={escDesig}
                    onChange={(e) => {
                      setEscDesig(e.target.value);
                    }}
                  />
                </Col>
                <Col sm={12}>
                  <hr />
                </Col>
              </Row>
            </Form>
            <Button
              className="btn-icon"
              color="primary"
              onClick={() => {
                handleNewEsc();
              }}
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

export default CompanyDetails;
