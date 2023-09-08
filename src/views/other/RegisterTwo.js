// ** React Imports
import { Link } from "react-router-dom";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";

import { useState } from "react";

// ** Icons Imports
import { Facebook, Twitter, Mail, GitHub } from "react-feather";

// ** Custom Components
import InputPasswordToggle from "@components/input-password-toggle";

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

// ** Illustrations Imports
import illustrationsLight from "@src/assets/images/pages/register-v2.svg";
import illustrationsDark from "@src/assets/images/pages/register-v2-dark.svg";

// ** Styles
import "@styles/react/pages/page-authentication.scss";

//email validator
// const validate = require("react-email-validator");
import { validate } from "react-email-validator";
import { use } from "i18next";

const RegisterTwo = () => {
  // // Field validation states
  const [companyNumberValid, setCompanyNumberValid] = useState(false);
  const [companyNumber, setCompanyNumber] = useState("");
  const [gstNumberValid, setgstNumberValid] = useState(false);
  const [gstNumber, setgstNumber] = useState("");
  const [cityDropDown, setCityDropDown] = useState(false);
  const [cityName, setCityName] = useState("Mumbai");
  const [stateDropDown, setStateDropDown] = useState(false);
  const [stateName, setStateName] = useState("Maharashtra");

  const [aadharNumber, setAadharNumber] = useState("");

  const [firmDropDown, setFirmDropDown] = useState(false);
  const [firmName, setFirmName] = useState("Individual");

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

  //handle company number
  const handleCompanyNumber = (value) => {
    setCompanyNumber(value);
    const alphabet = new RegExp("(?=.*[a-zA-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&* ])");
    let i = 0;
    if (alphabet.test(value)) {
      i += 1;
    }
    if (number.test(value)) {
      i += 1;
    }
    if (!special.test(value)) {
      i += 1;
    }
    if (value.length <= 15) {
      i += 1;
    }
    if (i == 4) {
      setCompanyNumberValid(true);
    } else {
      setCompanyNumberValid(false);
    }
  };

  //handle gst number
  const handleGSTNumber = (value) => {
    setgstNumber(value);
    const alphabet = new RegExp("(?=.*[a-zA-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&* ])");
    let i = 0;
    if (alphabet.test(value)) {
      i += 1;
    }
    if (number.test(value)) {
      i += 1;
    }
    if (!special.test(value)) {
      i += 1;
    }
    if (value.length <= 15) {
      i += 1;
    }
    if (i == 4) {
      setgstNumberValid(true);
    } else {
      setgstNumberValid(false);
    }
  };

  //handle firm dropdown
  const handleFirmDrop = () => {
    setFirmDropDown(!firmDropDown);
  };

  //handle state dropdown
  const handleStateDrop = () => {
    setStateDropDown(!stateDropDown);
  };

  //handle city dropdown
  const handleCityDrop = () => {
    setCityDropDown(!cityDropDown);
  };

  // ** Hooks
  // const { skin } = useSkin();

  // const source = skin === "dark" ? illustrationsDark : illustrationsLight;

  return (
    <div style={{ height: "100%" }}>
      <div className="auth-wrapper auth-cover">
        <Row className="auth-inner m-0">
          <Link
            className="brand-logo"
            to="/"
            onClick={(e) => e.preventDefault()}
          >
            <svg viewBox="0 0 139 95" version="1.1" height="28">
              <defs>
                <linearGradient
                  x1="100%"
                  y1="10.5120544%"
                  x2="50%"
                  y2="89.4879456%"
                  id="linearGradient-1"
                >
                  <stop stopColor="#000000" offset="0%"></stop>
                  <stop stopColor="#FFFFFF" offset="100%"></stop>
                </linearGradient>
                <linearGradient
                  x1="64.0437835%"
                  y1="46.3276743%"
                  x2="37.373316%"
                  y2="100%"
                  id="linearGradient-2"
                >
                  <stop stopColor="#EEEEEE" stopOpacity="0" offset="0%"></stop>
                  <stop stopColor="#FFFFFF" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Artboard"
                  transform="translate(-400.000000, -178.000000)"
                >
                  <g id="Group" transform="translate(400.000000, 178.000000)">
                    <path
                      d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"
                      id="Path"
                      className="text-primary"
                      style={{ fill: "currentColor" }}
                    ></path>
                    <path
                      d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z"
                      id="Path"
                      fill="url(#linearGradient-1)"
                      opacity="0.2"
                    ></path>
                    <polygon
                      id="Path-2"
                      fill="#000000"
                      opacity="0.049999997"
                      points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"
                    ></polygon>
                    <polygon
                      id="Path-2"
                      fill="#000000"
                      opacity="0.099999994"
                      points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"
                    ></polygon>
                    <polygon
                      id="Path-3"
                      fill="url(#linearGradient-2)"
                      opacity="0.099999994"
                      points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"
                    ></polygon>
                  </g>
                </g>
              </g>
            </svg>
            <h2 className="brand-text text-primary ms-1">Piombo</h2>
          </Link>
          {/* <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img className="img-fluid" src={source} alt="Login Cover" />
          </div>
        </Col> */}
          <Col className="d-flex align-items-center px-2 p-lg-5" lg="6" sm="12">
            <Col className="px-xl-2 mx-auto" xs="12" sm="8" md="6" lg="12">
              <CardTitle tag="h2" className="fw-bold mb-1">
                Welcome to Piombo
              </CardTitle>
              {/* <CardText className="mb-2">
              Please complete the profile details
            </CardText> */}
              <Form
                className="auth-register-form mt-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="mb-1">
                  <Label className="form-label" for="register-name">
                    First Name
                  </Label>
                  <Input
                    type="text"
                    id="register-name"
                    placeholder="Pranav"
                    autoFocus
                  />
                </div>
                <div className="mb-1">
                  <Label className="form-label" for="register-email">
                    Address
                  </Label>
                  <Input
                    type="text"
                    id="register-email"
                    placeholder="john@example.com"
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </div>
                <div className="mb-1">
                  <Label className="form-label" for="register-name">
                    City
                  </Label>
                  <Dropdown isOpen={cityDropDown} toggle={handleCityDrop}>
                    <DropdownToggle caret color="primary">
                      {cityName}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        children
                        onClick={() => {
                          setCityName("Mumbai");
                          setStateName("Maharashtra");
                        }}
                      >
                        Mumbai
                      </DropdownItem>
                      <DropdownItem
                        children
                        onClick={() => {
                          setCityName("Pune");
                          setStateName("Maharashtra");
                        }}
                      >
                        Pune
                      </DropdownItem>
                      <DropdownItem
                        children
                        onClick={() => {
                          setCityName("Kochi");
                          setStateName("Kerala");
                        }}
                      >
                        Kochi
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>

                <div className="mb-1">
                  <Label className="form-label" for="register-name">
                    Firm Name
                  </Label>
                  <Input
                    type="text"
                    id="register-name"
                    placeholder="Firm Name"
                    autoFocus
                  />
                </div>
                <div className="mb-1">
                  <Label className="form-label" for="register-email">
                    Company Number
                  </Label>
                  <Input
                    type="Text"
                    id="register-email"
                    placeholder="eg : AAFCC1308K"
                    onChange={(e) => handleCompanyNumber(e.target.value)}
                  />
                </div>
                {companyNumber.length > 0 ? (
                  <div>
                    <Label className="is-Valid">
                      {" "}
                      Valid Company Number{" "}
                      {companyNumberValid ? (
                        <span>✔️</span>
                      ) : (
                        <span>❌</span>
                      )}{" "}
                    </Label>
                  </div>
                ) : (
                  <div />
                )}
                <div className="mb-1">
                  <Label className="form-label" for="register-name">
                    Pan Number
                  </Label>
                  <Input
                    type="text"
                    id="register-name"
                    placeholder="XXXXXXXXX"
                    autoFocus
                  />
                </div>
                {/* <Button
                tag={Link}
                to="/login"
                color="primary"
                disabled={
                  !(
                    password == confirmPassword &&
                    password != "" &&
                    lowerValidated &&
                    upperValidated &&
                    lengthValidated &&
                    numberValidated &&
                    specialValidated &&
                    verifiedPhone &&
                    validate(email)
                  )
                }
                block
              >
                Sign up
              </Button> */}
              </Form>
              {/* <p className="text-center mt-2">
              <span className="me-25">Already have an account?</span>
              <Link to="/login">
                <span>Sign in instead</span>
              </Link>
            </p> */}
            </Col>
            <Col className="px-xl-2 mx-auto" xs="12" sm="8" md="6" lg="12">
              <CardTitle tag="h2" className="fw-bold mb-1">
                Please complete the profile details
              </CardTitle>
              {/* <CardText className="mb-2">
              Please enter your sign-up details
            </CardText> */}
              <Form
                className="auth-register-form mt-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="mb-1">
                  <Label className="form-label" for="register-name">
                    Last Name
                  </Label>
                  <Input
                    type="text"
                    id="register-name"
                    placeholder="Nair"
                    autoFocus
                  />
                </div>
                <div className="mb-1">
                  <Label className="form-label" for="register-email">
                    Pincode
                  </Label>
                  <Input
                    type="Number"
                    id="register-email"
                    placeholder="400071"
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </div>
                <div className="mb-1">
                  <Label className="form-label" for="register-name">
                    State
                  </Label>
                  <Dropdown isOpen={stateDropDown} toggle={handleStateDrop}>
                    <DropdownToggle caret color="primary">
                      {stateName}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        children
                        onClick={() => {
                          setStateName("Maharashtra");
                        }}
                      >
                        Maharashtra
                      </DropdownItem>
                      <DropdownItem
                        children
                        onClick={() => {
                          setStateName("Karnataka");
                        }}
                      >
                        Karnataka
                      </DropdownItem>
                      <DropdownItem
                        children
                        onClick={() => {
                          setStateName("Kerala");
                        }}
                      >
                        Kerala
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>

                <div className="mb-1">
                  <Label className="form-label" for="register-name">
                    Firm Status
                  </Label>
                  <Dropdown isOpen={firmDropDown} toggle={handleFirmDrop}>
                    <DropdownToggle caret color="primary">
                      {firmName}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        children
                        onClick={() => {
                          setFirmName("Individual");
                        }}
                      >
                        Individual
                      </DropdownItem>
                      <DropdownItem
                        children
                        onClick={() => {
                          setFirmName("Partner");
                        }}
                      >
                        Partner
                      </DropdownItem>
                      <DropdownItem
                        children
                        onClick={() => {
                          setFirmName("Company");
                        }}
                      >
                        Company
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <div className="mb-1">
                  <Label className="form-label" for="register-email">
                    GST Number
                  </Label>
                  <Input
                    type="Text"
                    id="register-email"
                    placeholder="XXXXXXXX"
                    onChange={(e) => handleGSTNumber(e.target.value)}
                  />
                </div>
                {gstNumber.length > 0 ? (
                  <div>
                    <Label className="is-Valid">
                      {" "}
                      GST Number{" "}
                      {gstNumberValid ? (
                        <span>
                          <b>to be verified later!</b>
                        </span>
                      ) : (
                        <span>❌</span>
                      )}{" "}
                    </Label>
                  </div>
                ) : (
                  <div />
                )}
                <div className="mb-1">
                  <Label className="form-label" for="register-name">
                    Aadhar Number
                  </Label>
                  <Input
                    type="text"
                    id="register-name"
                    placeholder="XXXXXXXXXXXX"
                    value={aadharNumber}
                    autoFocus
                    onChange={(e) => handleAadharFormat(e.target.value)}
                  />
                </div>
                {/* <Button
                tag={Link}
                to="/login"
                color="primary"
                disabled={
                  !(
                    password == confirmPassword &&
                    password != "" &&
                    lowerValidated &&
                    upperValidated &&
                    lengthValidated &&
                    numberValidated &&
                    specialValidated &&
                    verifiedPhone &&
                    validate(email)
                  )
                }
                block
              >
                Sign up
              </Button> */}
              </Form>
              {/* <p className="text-center mt-2">
              <span className="me-25">Already have an account?</span>
              <Link to="/login">
                <span>Sign in instead</span>
              </Link>
            </p> */}
            </Col>
          </Col>
          {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        > */}

          {/* </div> */}
        </Row>
        {/* <Button tag={Link} to="/login" color="primary">
        Sign up
      </Button> */}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-8rem",
        }}
      >
        <Button tag={Link} to="/registerThree" color="primary">
          Next
        </Button>
      </div>
    </div>
  );
};

export default RegisterTwo;
