// ** React Imports
import { Link } from "react-router-dom";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";

import { useState } from "react";

// ** Configs
import themeConfig from "@configs/themeConfig";

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

const Register = () => {
  // // Field validation states
  const [enterOtp, setEnterOtp] = useState(false);
  const [verifiedPhone, setVerifiedPhone] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [lowerValidated, setLowerValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [specialValidated, setSpecialValidated] = useState(false);
  const [lengthValidated, setLengthValidated] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [privacyCheckbox, setprivacyCheckbox] = useState(false);
  const [stakeholderDropDown, setstakeholderDropDown] = useState(false);
  const [stakeholderName, setstakeholderName] = useState("Supplier");

  //handle stakeholder dropdown
  const handlestakeholderDrop = () => {
    setstakeholderDropDown(!stakeholderDropDown);
  };

  //handle verify otp
  const handleVerify = () => {
    setEnterOtp(true);
  };

  //email handle
  const handleEmail = (value) => {
    setEmail(value);
  };

  // // privacy checkbox
  const handleChecked = (checked) => {
    console.log(`checked : ${checked}`);
    // e.target.checked = !e.target.checked;
    setprivacyCheckbox(checked);
  };

  // // Field validation function
  const handleChange = (value) => {
    setPassword(value);
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*])");
    const length = new RegExp("(?=.{8,})");
    if (lower.test(value)) {
      setLowerValidated(true);
    } else {
      setLowerValidated(false);
    }
    if (upper.test(value)) {
      setUpperValidated(true);
    } else {
      setUpperValidated(false);
    }
    if (number.test(value)) {
      setNumberValidated(true);
    } else {
      setNumberValidated(false);
    }
    if (special.test(value)) {
      setSpecialValidated(true);
    } else {
      setSpecialValidated(false);
    }
    if (length.test(value)) {
      setLengthValidated(true);
    } else {
      setLengthValidated(false);
    }
  };

  // ** Hooks
  const { skin } = useSkin();

  const source = skin === "dark" ? illustrationsDark : illustrationsLight;

  return (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        <Link className="brand-logo" to="/" onClick={(e) => e.preventDefault()}>
          <img
            src={themeConfig.app.appLogoImage}
            className="ms-1"
            alt="Logo"
            height="32"
          />
          <text
            style={{
              fontFamily: "Aclonica",
              color: "primary",
              fontSize: "20px",
            }}
            className="ms-1"
          >
            Piombo
          </text>
        </Link>
        <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img className="img-fluid" src={source} alt="Login Cover" />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" xs="12" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              Welcome to Piombo
            </CardTitle>
            <CardText className="mb-2">
              Please enter your sign-up details
            </CardText>
            <Form
              className="auth-register-form mt-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-1">
                <Label className="form-label" for="register-username">
                  UserName
                </Label>
                <Input
                  type="text"
                  id="register-username"
                  placeholder="eg : user_123"
                  autoFocus
                />
              </div>
              <div className="mb-1">
                <Label className="form-label" for="register-name">
                  Stakeholder
                </Label>
                <Dropdown
                  isOpen={stakeholderDropDown}
                  toggle={handlestakeholderDrop}
                >
                  <DropdownToggle caret color="primary">
                    {stakeholderName}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem
                      children
                      onClick={() => {
                        setstakeholderName("WorkMan (individual/partner)");
                      }}
                    >
                      WorkMan (individual/partner)
                    </DropdownItem>
                    <DropdownItem
                      children
                      onClick={() => {
                        setstakeholderName("WorkMan (Firm)");
                      }}
                    >
                      WorkMan (Firm)
                    </DropdownItem>
                    <DropdownItem
                      children
                      onClick={() => {
                        setstakeholderName("Supplier");
                      }}
                    >
                      Supplier
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="mb-1">
                <Label className="form-label" for="register-email">
                  Email
                </Label>
                <Input
                  type="email"
                  id="register-email"
                  placeholder="john@example.com"
                  onChange={(e) => handleEmail(e.target.value)}
                />
                {email.length > 0 ? (
                  <div>
                    <Label className="is-Lowercase-Valid">
                      {" "}
                      Valid Email{" "}
                      {validate(email) ? <span>✔️</span> : <span>❌</span>}{" "}
                    </Label>
                  </div>
                ) : (
                  <div />
                )}
              </div>
              <div className="mb-1">
                <Label className="form-label" for="register-mobile">
                  Mobile
                </Label>
                <Input
                  type="number"
                  id="register-mobile"
                  placeholder="0123456789"
                  disabled={verifiedPhone}
                  onChange={(e) => {
                    setPhoneValid(e.target.value.length == 10 ? true : false);
                  }}
                />
                {enterOtp ? (
                  <div>
                    <br />
                    <Label className="form-label" for="otp">
                      OTP
                    </Label>
                    <Input
                      type="number"
                      id="otp"
                      placeholder="enter 6 digit otp"
                      onChange={(e) => {
                        if (e.target.value == 111111) {
                          setVerifiedPhone(true);
                          setEnterOtp(false);
                        }
                      }}
                    />
                    <Label className="form-label">
                      <a href="#">Resend OTP</a>
                    </Label>
                  </div>
                ) : verifiedPhone ? (
                  <Label className="is-Lowercase-Valid">
                    {" "}
                    Verified Phone Number <span>✔️</span>
                    {/* {validate(email) ? <span>✔️</span> : <span>❌</span>}{" "} */}
                  </Label>
                ) : (
                  <Button
                    color="primary"
                    onClick={handleVerify}
                    disabled={!phoneValid}
                  >
                    {" "}
                    Verify
                  </Button>
                )}
              </div>

              <div className="mb-1">
                <Label className="form-label" for="register-password">
                  Password
                </Label>
                <InputPasswordToggle
                  className="input-group-merge"
                  id="register-password"
                  onChange={(e) => handleChange(e.target.value)}
                />
              </div>
              <div>
                <Label className="is-Lowercase-Valid">
                  {" "}
                  One lower case{" "}
                  {lowerValidated ? <span>✔️</span> : <span>❌</span>}{" "}
                </Label>
                <br />
                <Label className="is-Uppercase-Valid">
                  {" "}
                  One Upper case{" "}
                  {upperValidated ? <span>✔️</span> : <span>❌</span>}{" "}
                </Label>
                <br />
                <Label className="is-Alphanumeric-Valid">
                  {" "}
                  One Alphanumeric character{" "}
                  {specialValidated ? <span>✔️</span> : <span>❌</span>}{" "}
                </Label>
                <br />
                <Label className="is-Numeric-Valid">
                  {" "}
                  One Numeric character{" "}
                  {numberValidated ? <span>✔️</span> : <span>❌</span>}{" "}
                </Label>
                <br />
                <Label className="is-Numeric-Valid">
                  {" "}
                  Atleast 8 characters{" "}
                  {lengthValidated ? <span>✔️</span> : <span>❌</span>}{" "}
                </Label>
                <br />
                <br />
              </div>
              <div className="mb-1">
                <Label className="form-label" for="register-confirm-password">
                  Confirm Password
                </Label>
                <InputPasswordToggle
                  className="input-group-merge"
                  id="register-confirm-password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <Label className="does-Password-Match">
                {" "}
                Doesn't match to password field{" "}
                {password == confirmPassword && password != "" ? (
                  <span>✔️</span>
                ) : (
                  <span>❌</span>
                )}{" "}
              </Label>
              <br />
              <div className="form-check mb-1">
                <Input
                  type="checkbox"
                  id="terms"
                  required={true}
                  checked={privacyCheckbox}
                  onChange={(e) => handleChecked(e.target.checked)}
                />
                <Label className="form-check-label" for="terms">
                  I agree to
                  <a
                    className="ms-25"
                    href="/"
                    onClick={(e) => e.preventDefault()}
                  >
                    privacy policy & terms
                  </a>
                </Label>
              </div>
              <Button
                tag={Link}
                to="/login"
                color="primary"
                // disabled={
                //   !(
                //     password == confirmPassword &&
                //     password != "" &&
                //     lowerValidated &&
                //     upperValidated &&
                //     lengthValidated &&
                //     numberValidated &&
                //     specialValidated &&
                //     privacyCheckbox &&
                //     verifiedPhone &&
                //     stakeholderName == "WorkMan" &&
                //     (validate(email) || email.length == 0)
                //   )
                // }
                block
              >
                Next
              </Button>
            </Form>
            <p className="text-center mt-2">
              <span className="me-25">Already have an account?</span>
              <Link to="/login">
                <span>Sign in instead</span>
              </Link>
            </p>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
