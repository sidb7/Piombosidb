// ** React Imports
import { Link, useNavigate } from "react-router-dom";



// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";

import { useState } from "react";

import axios from "axios";

import themeConfig from "@configs/themeConfig";

// ** Custom Components
import InputPasswordToggle from "@components/input-password-toggle";

import {
  Card,
  CardBody,
  FormFeedback,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import { useEffect } from "react";
import { selectThemeColors } from "@utils";
import Select from "react-select";

// import privacyPolicy from "../../@core/assets/pdf/privacyPolicy.pdf";

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
} from "reactstrap";

// ** Illustrations Imports
import illustrationsLight from "@src/assets/images/pages/register-v2.svg";
import illustrationsDark from "@src/assets/images/pages/register-v2-dark.svg";

// ** Styles
import "@styles/react/pages/page-authentication.scss";

//email validator
// const validate = require("react-email-validator");
// import validator from "validator";
import { toast } from "react-hot-toast";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return [innerWidth, innerHeight];
}

const RegisterWorkman = () => {
  const navigate = useNavigate();
  // // Field validation states
  const [email, setEmail] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");

  const [displayMobileOTP, setDisplayMobileOTP] = useState(false);
  const [otpMobileVerified, setOTPMobileVerified] = useState(false);

  const [displayEmailOTP, setDisplayEmailOTP] = useState(false);
  const [otpEmailVerified, setOTPEmailVerified] = useState(false);

  const [otpMobile, setOTPMobile] = useState("");
  const [otpEmail, setOTPEmail] = useState(""); // ACTUAL ANSWER OTP

  const [username, setUsername] = useState("");

  const [stakeholder, setStakeHolder] = useState({
    value: "customer",
    label: "Customer",
  });
  const [stakeholderType, setStakeHolderType] = useState({
    value: "Select type",
    label: "Select type",
  });


  const [password, setPassword] = useState("");
  const [lowerValidated, setLowerValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [specialValidated, setSpecialValidated] = useState(false);
  const [lengthValidated, setLengthValidated] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [scrollInnerModal, setScrollInnerModal] = useState(false);
  const [centeredModal, setCenteredModal] = useState(false);

  const [privacyCheckbox, setprivacyCheckbox] = useState(false);

  const [secondsMobile, setSecondsMobile] = useState(0);
  const [secondsEmail, setSecondsEmail] = useState(0);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const intervalMobile = setInterval(() => {
      if (secondsMobile > 0) {
        setSecondsMobile(secondsMobile - 1);
      }
    }, 1000);

    const intervalEmail = setInterval(() => {
      if (secondsEmail > 0) {
        setSecondsEmail(secondsEmail - 1);
      }
    }, 1000);

    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);
    return () => {
      clearInterval(intervalMobile);
      clearInterval(intervalEmail);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [secondsMobile, secondsEmail]);

  const resetFields = () => {
    setEmail("");
    setPhoneNumber("");
    setDisplayEmailOTP(false);
    setDisplayMobileOTP(false);
    setOTPEmailVerified(false);
    setOTPMobileVerified(false);
    setOTPMobile("");
    setOTPEmail("");
    setPassword("");
    setLowerValidated(false);
    setUpperValidated(false);
    setNumberValidated(false);
    setSpecialValidated(false);
    setLengthValidated(false);
    setConfirmPassword("");
    setprivacyCheckbox(false);
  };

  //email handle
//   const handleEmail = (value) => {
//     if (validator.isEmail(value)) setEmail(value);
//     else setEmail("");
//   };

//   const handlePhone = (value) => {
//     if (validator.isMobilePhone(value)) setPhoneNumber(value);
//     else setPhoneNumber("");
//   };

//   const callMobileVerificationApi = async (mobileValue) => {
//     const mobile = parseInt(mobileValue);
//     const sentTimestamp = Date.now();
//     const settings = {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         toMobile: mobile,
//         toEmail: "",
//         sentTimestamp: sentTimestamp,
//         medium: "mobile",
//       }),
//     };

//     // console.log(CryptoJS.AES.encrypt(code, "123").toString());

//     try {
//       const fetchResponse = await fetch(
//         `http://localhost:3002/api/otp/sendOTP`,
//         settings
//       );
//       // const fetchResponse = {
//       //   status: 200,
//       // };
//       if (fetchResponse.status === 200) {
//         setDisplayMobileOTP(true);
//         setOTPMobile(sentTimestamp);
//         setSecondsMobile(60);
//         toast.success(`Enter OTP (sent to ***${mobileValue.slice(6)})`);
//       } else {
//         toast.error("Something went Wrong!");
//       }
//     } catch (e) {
//       toast.error("Something went Wrong!");
//     }
//   };

//   const callEmailVerificationApi = async (emailValue) => {
//     const sentTimestamp = Date.now();
//     const settings = {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         toMobile: "",
//         toEmail: emailValue,
//         sentTimestamp: sentTimestamp,
//         medium: "email",
//       }),
//     };

//     // console.log(CryptoJS.AES.encrypt(code, "123").toString());

//     try {
//       const fetchResponse = await fetch(
//         `http://localhost:3002/api/otp/sendOTP`,
//         settings
//       );
//       // const fetchResponse = {
//       //   status: 200,
//       // };
//       if (fetchResponse.status === 200) {
//         setDisplayEmailOTP(true);
//         setOTPEmail(sentTimestamp);
//         setSecondsEmail(60);
//         toast.success(
//           `Enter OTP (sent to ***${emailValue.slice(emailValue.indexOf("@"))})`
//         );
//       } else {
//         toast.error("Something went Wrong!");
//       }
//     } catch (e) {
//       toast.error("Something went Wrong!");
//     }
//   };

//   const handleMobileOTPview = () => {
//     if (
//       phoneNumber != "" &&
//       validator.isMobilePhone(phoneNumber) &&
//       phoneNumber.length === 10
//     ) {
//       // callMobileVerificationApi(phoneNumber);

//       setOTPMobileVerified(true);
//       setPhoneNumber(phoneNumber);
//     } else toast.error("Please enter valid Mobile Number");
//   };

//   const handleEmailOTPview = () => {
//     if (email != "" && validator.isEmail(email)) {
//       // callEmailVerificationApi(email);
//       setOTPEmailVerified(true);
//       setEmail(email);
//     } else toast.error("Please enter valid Email Id");
//   };

//   const handleMobileOTP = async (value) => {
//     if (value.length === 6) {
//       const verifyTimestamp = Date.now();
//       const settings = {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           enteredCode: parseInt(value),
//           id: otpMobile,
//           sentTimestamp: verifyTimestamp,
//         }),
//       };

//       try {
//         const fetchResponse = await fetch(
//           `http://localhost:3002/api/otp/verifyOTP`,
//           settings
//         );
//         if (fetchResponse.status === 200) {
//           const repData = await fetchResponse.json();
//           if (repData.check) {
//             setDisplayMobileOTP(false);
//             setOTPMobileVerified(true);
//             toast.success("Mobile Number verified!");
//           } else {
//             if (repData.expired) {
//               toast.error("OTP expired , Retry!!");
//               setDisplayMobileOTP(false);
//               setOTPMobileVerified(false);
//             } else {
//               toast.error("Incorrect OTP!");
//               setOTPMobileVerified(false);
//             }
//           }
//         } else {
//           toast.error("Something went Wrong!");
//         }
//       } catch (err) {
//         toast.error("Something went wrong, Retry!");
//         setDisplayMobileOTP(false);
//         setOTPMobileVerified(false);
//       }
//     } else setOTPMobileVerified(false);
//   };

//   const handleEmailOTP = async (value) => {
//     if (value.length === 6) {
//       const verifyTimestamp = Date.now();
//       const settings = {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           enteredCode: parseInt(value),
//           id: otpEmail,
//           sentTimestamp: verifyTimestamp,
//         }),
//       };

//       try {
//         const fetchResponse = await fetch(
//           `http://localhost:3002/api/otp/verifyOTP`,
//           settings
//         );
//         if (fetchResponse.status === 200) {
//           const repData = await fetchResponse.json();
//           if (repData.check) {
//             setDisplayEmailOTP(false);
//             setOTPEmailVerified(true);
//             toast.success("Email Id verified!");
//           } else {
//             if (repData.expired) {
//               toast.error("OTP expired , Retry!!");
//               setDisplayEmailOTP(false);
//               setOTPEmailVerified(false);
//             } else {
//               toast.error("Incorrect OTP!");
//               setOTPEmailVerified(false);
//             }
//           }
//         } else {
//           toast.error("Something went Wrong!");
//         }
//       } catch (err) {
//         toast.error("Something went wrong, Retry!");
//         setDisplayEmailOTP(false);
//         setOTPEmailVerified(false);
//       }
//     } else setOTPEmailVerified(false);
//   };

  const handleResendMobileOTP = () => {
    // callMobileVerificationApi(phoneNumber);
    setDisplayMobileOTP(false);
    setOTPMobileVerified(true);
  };

  const handleResendEmailOTP = () => {
    // callEmailVerificationApi(email);
    setDisplayEmailOTP(false);
    setOTPEmailVerified(true);
  };

  // // privacy checkbox
  const handleChecked = (checked) => {
    // e.target.checked = !e.target.checked;
    setprivacyCheckbox(checked);
  };

  // // Field validation function
  const handleChange = (value) => {
    setPassword(value);

    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.[!@#$%^&])");
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

//   const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const signUpfunction = async () => {
    // console.log(password);
    // console.log(email);
    // console.log(phoneNumber);
    // console.log(stakeholder.value);

    // const hashedPassword = CryptoJS.SHA256(password).toString();

    // const settings = {
    //   method: "POST",

    //   credentials: "include",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     password: hashedPassword,
    //     emailID: email,
    //     contactNumber: phoneNumber !== "" ? parseInt(phoneNumber) : null,
    //     typeOfStakeholder: stakeholder.value,
    //   }),
    // };

    // try {
    //   const fetchResponse = await fetch(
    //     `http://localhost:3002/api/auth/signUp`,
    //     settings
    //   );
    //   if (fetchResponse.status == 200) {
    //     navigate(path);
    //     toast.success("Successfully logged in");
    //   } else {
    //     toast.error("User not generated! Check Credentials!");
    //     resetFields();
    //   }
    // } catch (err) {
    //   console.log(err);
    //   toast.error("Something went wrong! Retry!");
    //   resetFields();
    // }
    // axios
    //   .post(
    //     "http://localhost:3002/api/auth/signUp",
    //     {
    //       password: password,
    //       emailID: email,
    //       contactNumber: phoneNumber,
    //       typeOfStakeholder: stakeholder.value,
    //     },
    //     {
    //       withCredentials: true,
    //       headers: {
    //         "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     // setPath(
    //     //   stakeholder.value == "Individual"
    //     //     ? "/workman/individual/Profile"
    //     //     : "/workman/firm/Profile"
    //     // );
    //     console.log(res.status);
    //     console.log(path);
    //     if (res.status == 200) {
    //   // navigate(path);
    //   toast.success("Successfully logged in");
    //   console.log(document.cookie);
    // } else {
    //   toast.error("User not generated! Check Credentials!");
    // }
    //   })
    //   .catch((err) => {
    //     // setPath("/register/verify");
    //     toast.error("Something went Wrong!! Retry");
    //     console.log(err);
    //   });
  };

  // ** Hooks
  const { skin } = useSkin();

  const source = skin === "dark" ? illustrationsDark : illustrationsLight;

  return (
    <div className="auth-wrapper auth-basic px-2">
      <div className="auth-inner my-2">
        <Card className="mb-0">
          <CardBody>
            <Link
              className="brand-logo"
              to="/"
              onClick={(e) => e.preventDefault()}
            >
              <img
                src={themeConfig.app.appLogoImage}
                alt="logo"
                height="100%"
                width="25px"
              />
              <text
                style={{
                  fontFamily: "Aclonica",
                  color: "#098FB5",
                  fontSize: "20px",
                }}
                className="ms-1"
              >
                Piombo
              </text>
            </Link>
            <p className="text-center mt-2">
              <CardText
                style={{
                  fontFamily: "Aclonica",
                }}
                className="me-25"
              >
                Welcome!
              </CardText>
              <CardText
                style={{
                  fontFamily: "Aclonica",
                }}
              >
                Services by means and Means to services
              </CardText>
            </p>

            <Form
              className="auth-register-form mt-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-1">
                <Label className="form-label" for="register-email">
                  Email Id
                </Label>
                <Input
                  type="email"
                  id="register-email"
                  placeholder="john@example.com"
                  onChange={(e) => handleEmail(e.target.value)}
                  // value={email}
                  // valid={validator.isEmail(email)}
                  // invalid={email == ""}
                  disabled={otpEmailVerified}
                />
                
              </div>
              {displayEmailOTP == true && otpEmailVerified == false ? (
                <div>
                  <Label className="form-label" for="enter-otp">
                    {`Enter OTP (sent to ***${email.slice(
                      email.indexOf("@")
                    )})`}
                  </Label>
                  <Input
                    type="number"
                    id="enter-otp"
                    // onChange={(e) => handleEmailOTP(e.target.value)}
                    valid={otpEmailVerified}
                    invalid={!otpEmailVerified}
                    disabled={otpEmailVerified}
                  />
                  <br />
                  <div className="mb-2">
                    <div className="d-flex justify-content-center">
                      {secondsEmail > 0 && otpEmailVerified == false ? (
                        <p>
                          Time Remaining{" "}
                          {secondsEmail < 10
                            ? `0${secondsEmail}`
                            : secondsEmail}{" "}
                          seconds
                        </p>
                      ) : (
                        <Button
                          disabled={secondsEmail > 0 || otpEmailVerified}
                          style={{
                            color: secondsEmail > 0 ? "#DFE3E8" : "#FF5630",
                          }}
                          onClick={handleResendEmailOTP}
                        >
                          Resend OTP
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ) : otpEmailVerified == false && email !== "" ? (
                <div
                  className="align-items-center d-flex"
                  style={{ justifyContent: "center" }}
                >
                  <br />
                  <br />
                  <Button
                    onClick={() => {
                      handleEmailOTPview();
                      // setDisplayEmailOTP(false);
                      // setOTPEmailVerified(true);
                    }}
                  >
                    Verify Email Id
                  </Button>
                </div>
              ) : (
                ""
              )}
              <div className="mb-1">
                <Label className="form-label" for="register-mobile">
                  Mobile Number
                </Label>
                <Input
                  type="number"
                  id="register-mobile"
                  placeholder="0123456789"
                  onChange={(e) => handlePhone(e.target.value)}
                  // value={phoneNumber}
                  // valid={validator.isMobilePhone(phoneNumber)}
                  // invalid={phoneNumber == ""}
                  disabled={otpMobileVerified}
                />
                {otpMobileVerified ? (
                  <Label className="is-mobile-Valid" style={{ color: "green" }}>
                    Verified <span>✔️</span>
                  </Label>
                ) : (
                  <></>
                )}
              </div>
              {displayMobileOTP == true && otpMobileVerified == false ? (
                <div>
                  <Label className="form-label" for="enter-otp">
                    {`Enter OTP (sent to ***${phoneNumber.slice(6)})`}
                  </Label>
                  <Input
                    type="number"
                    id="enter-otp"
                    // onChange={(e) => handleMobileOTP(e.target.value)}
                    valid={otpMobileVerified}
                    invalid={!otpMobileVerified}
                    disabled={otpMobileVerified}
                  />
                  <br />
                  <div className="mb-2">
                    <div className="d-flex justify-content-center">
                      {secondsMobile > 0 && otpMobileVerified == false ? (
                        <p>
                          Time Remaining{" "}
                          {secondsMobile < 10
                            ? `0${secondsMobile}`
                            : secondsMobile}{" "}
                          seconds
                        </p>
                      ) : (
                        <Button
                          disabled={secondsMobile > 0 || otpMobileVerified}
                          style={{
                            color: secondsMobile > 0 ? "#DFE3E8" : "#FF5630",
                          }}
                          onClick={handleResendMobileOTP}
                        >
                          Resend OTP
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ) : otpMobileVerified == false && phoneNumber.length === 10 ? (
                <div
                  className="align-items-center d-flex"
                  style={{ justifyContent: "center" }}
                >
                  <br />
                  <br />
                  <Button
                    onClick={() => {
                      handleMobileOTPview();
                    }}
                  >
                    Verify Mobile Number
                  </Button>
                </div>
              ) : (
                ""
              )}
              {otpMobileVerified || true ? (
                <div>
                  {/* <div className="mb-1">
                    <Label className="form-label" for="register-name">
                      Username
                    </Label>
                    <Input
                      type="text"
                      id="register-name"
                      placeholder="John Doe"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div> */}
                  <div className="mb-1">
                    <Label className="form-label" for="stakeholder-type">
                      Type of WorkPro
                    </Label>
              
                    {(stakeholder.value!="supplier")&&
                    <Select
                      theme={selectThemeColors}
                      id={`stakeholder`}
                      className="react-select"
                      classNamePrefix="select"
                      value={stakeholderType}
                      required
                      options={[
                        { value: "Individual", label: "Individual" },
                        { value: "Firm", label: "Firm" },
                        { value: "Partner", label: "Partner" },
                      ]}
                      onChange={(e) => {
                        setStakeHolderType(e); }}
                    />
                    }

                    
                    {/* <Input
                      type="select"
                      id="stakeholder-type"
                      placeholder="Consumer"
                      onChange={(e) => {
                        setStakeHolder(e.target.value);
                        if (e.target.value == "Individual") {
                          setPath("/workman/individual/Profile");
                        } else {
                          setPath("/workman/firm/Profile");
                        }
                      }}
                    >
                      <option>Individual</option>
                      <option>Business</option>
                    </Input> */}
                    {/* <span id="my-element" data-tooltip-content="More info on stakeholder goes here">❓</span>
                  <ReactTooltip anchorId="my-element"/> */}
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
                    <Label>
                      Your password should contain the following characters :
                    </Label>
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
                      {specialValidated ? (
                        <span>✔️</span>
                      ) : (
                        <span>❌</span>
                      )}{" "}
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
                    <Label
                      className="form-label"
                      for="register-confirm-password"
                    >
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
                  <br />
                  <div className="form-check mb-1">
                    <Input
                      type="checkbox"
                      id="terms"
                      required={true}
                      checked={privacyCheckbox}
                      onChange={(e) => handleChecked(e.target.checked)}
                    />
                    <Label className="form-check-label">
                      I agree to
                      <a
                        className="ms-25"
                        onClick={() => setCenteredModal(!centeredModal)}
                        style={{ color: "#098fb5" }}
                      >
                        privacy policy & terms
                      </a>
                    </Label>
                    <Modal
                      isOpen={centeredModal}
                      toggle={() => setCenteredModal(!centeredModal)}
                      className="modal-dialog-centered"
                    >
                      <ModalHeader
                        toggle={() => setCenteredModal(!centeredModal)}
                      >
                        Privacy Policy & Terms
                      </ModalHeader>
                      <ModalBody>
                        <iframe
                        //   src={privacyPolicy}
                          height={`${Math.floor(windowSize[1] * 0.8)}px`}
                          width="100%"
                        ></iframe>
                      </ModalBody>
                    </Modal>
                  </div>
                  <Button
                     tag={Link}
                     to={`/workman-${stakeholderType.value}/Profile-Completion`}
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
                        privacyCheckbox 
                        // (otpEmailVerified || otpMobileVerified)
                      )
                    }
                    block
                    onClick={() => {
                      signUpfunction();
                     toast.success("Successfully registered")
                    }}
                  >
                    Sign up
                  </Button>
                </div>
              ) : (
                ""
              )}
            </Form>
            <p className="text-center mt-2">
              <span className="me-25">Already have an account?</span>
              <Link to="/login-workman">
                <span style={{ color: "#098fb5" }}>Sign in instead</span>
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default RegisterWorkman;
