// ** React Imports
import { useSkin } from "@hooks/useSkin";
import { Link } from "react-router-dom";

// ** Configs
import themeConfig from "@configs/themeConfig";

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
import illustrationsLight from "@src/assets/images/pages/login-v2.svg";
import illustrationsDark from "@src/assets/images/pages/login-v2-dark.svg";

// ** Styles
import "@styles/react/pages/page-authentication.scss";

const Login = () => {
  const { enterOtp, setEnterOtp } = useState(false);
  const handleOtpSignIn = () => {
    setEnterOtp(!enterOtp);
  };
  const { skin } = useSkin();

  const source = skin === "dark" ? illustrationsDark : illustrationsLight;

  const [stakeholderDropDown, setstakeholderDropDown] = useState(false);
  const [stakeholderName, setstakeholderName] = useState("Supplier");
  const [pathFromLogin, setPathFromLogin] = useState("/supplier/dashboard");

  //handle stakeholder dropdown
  const handlestakeholderDrop = () => {
    setstakeholderDropDown(!stakeholderDropDown);
  };

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

          {/* <h2 className="brand-text text-primary ms-1">Piombo</h2> */}
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
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              Welcome to Piombo! 👋
            </CardTitle>
            <CardText className="mb-2">
              Please sign-in to your account and start the adventure
            </CardText>
            <Form
              className="auth-login-form mt-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-1">
                <Label className="form-label" for="login-username">
                  UserName
                </Label>
                <Input
                  type="text"
                  id="login-username"
                  placeholder="user_123"
                  autoFocus
                />
              </div>
              <div className="mb-1">
                <div className="d-flex justify-content-between">
                  <Label className="form-label" for="login-password">
                    Password
                  </Label>
                  <Link to="/forgot-password">
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <InputPasswordToggle
                  className="input-group-merge"
                  id="login-password"
                />
              </div>
              <div className="form-check mb-1">
                <Input type="checkbox" id="remember-me" />
                <Label className="form-check-label" for="remember-me">
                  Remember Me
                </Label>
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
                        setPathFromLogin("/workman/dashboard");
                      }}
                    >
                      WorkMan (individual/partner)
                    </DropdownItem>
                    <DropdownItem
                      children
                      onClick={() => {
                        setstakeholderName("WorkMan (Firm)");
                        setPathFromLogin("/workmanFirm/dashboard");
                      }}
                    >
                      WorkMan (Firm)
                    </DropdownItem>

                    <DropdownItem
                      children
                      onClick={() => {
                        setstakeholderName("Supplier");
                        setPathFromLogin("/supplier");
                      }}
                    >
                      Supplier
                    </DropdownItem>

                    <DropdownItem
                      children
                      onClick={() => {
                        setstakeholderName("Customer");
                        setPathFromLogin("/customer/dashboard");
                      }}
                    >
                      Customer
                    </DropdownItem>

                      
                  </DropdownMenu>
                </Dropdown>
              </div>
              <Button
                tag={Link}
                // to="/workman/workmanProfileCompletion"
                to={pathFromLogin}
                color="primary"
                block
              >
                Sign in
              </Button>
            </Form>
            <div className="divider my-2">
              <div className="divider-text">or</div>
            </div>
            <Button
              tag={Link}
              to="/workman/workmanProfileCompletion"
              color="primary"
              block
            >
              Sign in with OTP
            </Button>
            <p className="text-center mt-2">
              <span className="me-25">New on our platform?</span>
              <Link to="/register">
                <span>Create an account</span>
              </Link>
            </p>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
