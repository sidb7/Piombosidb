// ** React Imports
import { Link, useNavigate } from "react-router-dom";
// ** Third Party Components
import Select from "react-select";



// ** Custom Components
import InputPasswordToggle from "@components/input-password-toggle";

// ** Reactstrap Imports
import {
  Card,
  CardText,
  CardBody,
  Form,
  Label,
  Input,
  Button,
  Row,
  Col,
  ButtonGroup,
  Spinner,
  CardLink,
} from "reactstrap";
import { useEffect } from "react";

// ** Styles
import "@styles/react/pages/page-authentication.scss";
// ** Utils
import { selectThemeColors } from "@utils";

import themeConfig from "@configs/themeConfig";
import { useState } from "react";

import Swal from "sweetalert2";


import React from "react";

import toast from "react-hot-toast";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";

const LoginBasic = () => {
  const navigateTo = useNavigate();

  const [emailBoth, setEmailBoth] = useState("");
  const [mobileBoth, setMobileBoth] = useState("");
  const [typeOfID, setTypeOfID] = useState("");

  // INPUT FIELDS
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(0);
  const [userid, setUserid] = useState("");
  const [enterID, setEnterID] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // OTP FIELDS
  const [otp, setOTP] = useState("");
  const [displayOTP, setDisplayOTP] = useState(false);
  const [otpVerified, setOTPVerified] = useState(false);

  // USED FOR SWITCHING BETWEEN OTP / PASSWORD AS LOGIN METHOD
  const [rSelected, setRSelected] = useState(1);

  // IF >1 ACCOUNTS , SHOW DROPDOWN, DROPDOWN RELATED STATES
  const [totalAccounts, setTotalAccounts] = useState(0);
  const [accountIdOptions, setAccountIdOptions] = useState([]);
  const [accountSelected, setAccountSelected] = useState({});

  // TIMER STATES
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  // useEffect(() => {
  //   async function checkLogin() {
  //     const fetchResponse = await fetch(
  //       "http://localhost:3002/api/auth/autoLogin",
  //       {
  //         method: "GET",
  //         credentials: "include",
  //       }
  //     );

  //     if (fetchResponse.status == 200) {
  //       // The user is logged in, do something here
  //       const fetchData = await fetchResponse.json();
  //       if (fetchData.typeOfStakeholder == "Business") {
  //         navigateTo("/workman/firm/Profile");
  //       } else {
  //         navigateTo("/workman/individual/Profile");
  //       }
  //       toast.success("Successfully logged in!");
  //     }
  //   }

  //   checkLogin();
  // }, []);

  const resetFields = () => {
    setPassword("");
    setOTP("");
    setDisplayOTP(false);
    setOTPVerified(false);
    setTotalAccounts(0);
    setAccountIdOptions([]);
    setAccountSelected({});
    setSeconds(0);
    setEmailBoth("");
    setMobileBoth("");
    setTypeOfID("");
    setEnterID("");
  };

  const handleEnteredIdType = (val) => {
    setEmail(val);
    setMobile(parseInt(val));
    setUserid(val);
  };

  // const loginFunction = async () => {
  //   const settings = {
  //     method: "GET",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   const fetchResponse = await fetch(
  //     `http://localhost:3002/api/auth/login/userid?id=${accountSelected.value.slice(
  //       0,
  //       accountSelected.value.indexOf("-")
  //     )}`,
  //     settings
  //   );

  //   if (fetchResponse.status !== 200) {
  //     if (fetchResponse.status == 500) {
  //       toast.error("Something went wrong! Retry!");
  //       resetFields();
  //     } else if (fetchResponse.status == 404) {
  //       toast.error("User not found! Try signing up");
  //       resetFields();
  //     }
  //   } else {
  //     toast.success("Successfully logged in!");
  //     localStorage.setItem(
  //       "userid",
  //       accountSelected.value.slice(0, accountSelected.value.indexOf("-"))
  //     );
  //     if (accountSelected.value.indexOf("Business") >= 0) {
  //       navigateTo("/workman/firm/Profile");
  //     } else {
  //       navigateTo("/workman/individual/Profile");
  //     }
  //   }
  // };

  // const handleOTP = async (value) => {
  //   if (value.length === 6) {
  //     const verifyTimestamp = Date.now();
  //     const settings = {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         enteredCode: parseInt(value),
  //         id: otp,
  //         sentTimestamp: verifyTimestamp,
  //       }),
  //     };

  //     try {
  //       const fetchResponse = await fetch(
  //         `http://localhost:3002/api/otp/verifyOTP`,
  //         settings
  //       );
  //       if (fetchResponse.status === 200) {
  //         const repData = await fetchResponse.json();
  //         if (repData.check) {
  //           setDisplayOTP(false);
  //           setOTPVerified(true);
  //           toast.success("Id verified!");
  //           console.log();
  //           if (Object.keys(accountSelected).length > 0) {
  //             loginFunction();
  //           }
  //         } else {
  //           if (repData.expired) {
  //             toast.error("OTP expired , Retry!!");
  //             setDisplayOTP(false);
  //             setOTPVerified(false);
  //           } else {
  //             toast.error("Incorrect OTP!");
  //             setOTPVerified(false);
  //           }
  //         }
  //       } else {
  //         toast.error("Something went Wrong!");
  //       }
  //     } catch (err) {
  //       toast.error("Something went wrong, Retry!");
  //       setDisplayOTP(false);
  //       setOTPVerified(false);
  //     }
  //   } else setOTPVerified(false);
  // };

  // const callBothVerificationApi = async (toMobile, toEmail, medium) => {
  //   const sentTimestamp = Date.now();
  //   const settings = {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       toMobile: toMobile == "" ? "" : parseInt(toMobile),
  //       toEmail: toEmail,
  //       sentTimestamp: sentTimestamp,
  //       medium: medium,
  //     }),
  //   };

  //   // console.log(CryptoJS.AES.encrypt(code, "123").toString());

  //   try {
  //     const fetchResponse = await fetch(
  //       `http://localhost:3002/api/otp/sendOTP`,
  //       settings
  //     );
  //     // const fetchResponse = {
  //     //   status: 200,
  //     // };
  //     if (fetchResponse.status === 200) {
  //       setDisplayOTP(true);
  //       setOTP(sentTimestamp);
  //       setSeconds(60);
  //       toast.success(`OTP sent!`);
  //     } else {
  //       toast.error("Something went Wrong!");
  //     }
  //   } catch (e) {
  //     toast.error("Something went Wrong!");
  //   }
  // };

  // const handleOTPview = async () => {
  //   //call verifycredsloginotp api
  //   //check which type of input
  //   let id = null;
  //   let idType = null;

  //   if (validator.isEmail(enterID)) {
  //     id = enterID;
  //     idType = "email";
  //   } else if (validator.isMobilePhone(enterID) && enterID.length == 10) {
  //     id = enterID;
  //     idType = "mobile";
  //   } else if (enterID.startsWith("W")) {
  //     id = enterID;
  //     idType = "userid";
  //   }

  //   if (id !== null) {
  //     setTypeOfID(idType);
  //     const settings = {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     const fetchResponse = await fetch(
  //       `http://localhost:3002/api/auth/loginVerifyOTP?id=${id}&idType=${idType}`,
  //       settings
  //     );
  //     if (fetchResponse.status == 500) {
  //       toast.error("Something went wrong! Retry!");
  //       resetFields();
  //     } else if (fetchResponse.status == 200) {
  //       const fetchData = await fetchResponse.json();
  //       if (!fetchData.valid) {
  //         toast.error("Invalid Credential!");
  //       } else {
  //         setTotalAccounts(fetchData.accounts.length);

  //         if (fetchData.accounts.length > 1) {
  //           let arr = [];
  //           fetchData.accounts.forEach((element) => {
  //             arr.push({
  //               value: `${element.id}-${element.typeOfStakeholder}`,
  //               label: `${element.id}-${element.typeOfStakeholder}`,
  //             });
  //           });
  //           setAccountIdOptions(arr);
  //         } else if (fetchData.accounts.length == 1) {
  //           let tmp = {
  //             value: `${fetchData.accounts[0].id}-${fetchData.accounts[0].typeOfStakeholder}`,
  //             label: `${fetchData.accounts[0].id}-${fetchData.accounts[0].typeOfStakeholder}`,
  //           };
  //           setAccountSelected(tmp);
  //         }

  //         let otpMobile = "";
  //         let otpEmail = "";
  //         if (idType == "mobile") {
  //           otpMobile = id;
  //           // callBothVerificationApi(otpMobile, otpEmail, "mobile");
  //         } else if (idType == "email") {
  //           otpEmail = id;
  //           // callBothVerificationApi(otpMobile, otpEmail, "email");
  //         } else if (idType == "userid") {
  //           otpMobile = fetchData.accounts[0].mobile;
  //           otpEmail = fetchData.accounts[0].email;
  //           // callBothVerificationApi(otpMobile, otpEmail, "both");
  //         }
  //         //comment later
  //         setDisplayOTP(false);
  //         setOTPVerified(true);

  //         setEmailBoth(otpEmail);
  //         setMobileBoth(otpMobile);
  //       }
  //     }
  //   } else {
  //     toast.error("Enter Valid Credential!");
  //   }
  // };
  // const handleResendOTP = () => {
  //   if (typeOfID !== "both") {
  //     callBothVerificationApi(mobileBoth, emailBoth, typeOfID);
  //   } else {
  //     callBothVerificationApi(mobileBoth, emailBoth, "both");
  //   }
  // };

  const changeMode = () => {
    setPassword("");
    setRememberMe(false);
    setOTP("");
    setDisplayOTP(false);
    setOTPVerified(false);
    setTotalAccounts(0);
    setAccountIdOptions([]);
    setAccountSelected({});
    setSeconds(0);
    setEmailBoth("");
    setMobileBoth("");
    setTypeOfID("");
    setEnterID("");
    if (rSelected == 1) {
      setRSelected(2);
    } else {
      setRSelected(1);
    }
  };
  
  let data = [
   
     {
      email: "supplier@Piombo.com",
      pass: "12345",
      Phone: "12345678",
      type: "supplier"
    },
    {
      email: "customer@Piombo.com",
      pass: "12345",
      Phone: "9324304824",
      type: "customer"   
    },
  
     {
       email: "developer@Piombo.com",
       pass: "12345",
       Phone: "12345678",
       type: "developer"
    },
    {
      email: "designerContracter@Piombo.com",
      pass: "12345",
      Phone: "12345678",
      type: "designContract"
   },
   {
    email: "enterprise@Piombo.com",
    pass: "12345",
    Phone: "12345678",
    type: "enterprise"
    },
   
  ]

 

  const [site,SetSite] = useState("")

  const handleSignInFunction  = () =>
  {
   
      data.map(e=>
        {
          if((e.email===enterID||e.Phone===enterID) && e.pass===password)
          {
            SetSite(e.type)
          }
         
        })

  }
useEffect(()=>
{
  handleSignInFunction()
})
  // const handleSignInFunction = async () => {
  //   if (totalAccounts == 0) {
  //     //check for id validity
  //     let id = null;
  //     let idType = null;

  //     if (validator.isEmail(enterID)) {
  //       id = enterID;
  //       idType = "email";
  //     } else if (validator.isMobilePhone(enterID) && enterID.length == 10) {
  //       id = enterID;
  //       idType = "mobile";
  //     } else if (enterID.startsWith("W")) {
  //       id = enterID;
  //       idType = "userid";
  //     }

  //     if (id !== null && password.length >= 8) {
  //       setTypeOfID(idType);
  //       const settings = {
  //         method: "GET",
  //         credentials: "include",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       };
  //       const hashPass = CryptoJS.SHA256(password).toString();
  //       const fetchResponse = await fetch(
  //         `http://localhost:3002/api/auth/login/code?id=${id}&idType=${idType}&code=${hashPass}`,
  //         settings
  //       );

  //       if (fetchResponse.status == 200) {
  //         const fetchData = await fetchResponse.json();
  //         if (fetchData.valid) {
  //           if (fetchData.token) {
  //             toast.success("Successfully logged in!");
  //             localStorage.setItem("userid", fetchData.accounts[0].userID);
  //             console.log(fetchData.accounts);
  //             if (fetchData.accounts[0].typeOfStakeholder == "Business") {
  //               navigateTo("/workman/firm/Profile");
  //             } else {
  //               navigateTo("/workman/individual/Profile");
  //             }
  //             setTotalAccounts(1);
  //           } else {
  //             setTotalAccounts(fetchData.accounts.length);
  //             let arr = [];
  //             fetchData.accounts.forEach((element) => {
  //               arr.push({
  //                 value: `${element.userID}-${element.typeOfStakeholder}`,
  //                 label: `${element.userID}-${element.typeOfStakeholder}`,
  //               });
  //             });
  //             setAccountIdOptions(arr);
  //           }
  //         } else {
  //           toast.error("Invalid Credential!");
  //         }
  //       } else {
  //         toast.error("Something went wrong! Retry!");
  //         resetFields();
  //       }
  //     } else {
  //       toast.error("Enter Valid Credentials!");
  //     }
  //   } else if (totalAccounts > 1) {
  //     const settings = {
  //       method: "GET",
  //       credentials: "include",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     const fetchResponse = await fetch(
  //       `http://localhost:3002/api/auth/login/userid?id=${accountSelected.value.slice(
  //         0,
  //         accountSelected.value.indexOf("-")
  //       )}`,
  //       settings
  //     );

  //     if (fetchResponse.status == 200) {
  //       toast.success("Successfully logged in!");
  //       localStorage.setItem(
  //         "userid",
  //         accountSelected.value.slice(0, accountSelected.value.indexOf("-"))
  //       );
  //       if (accountSelected.value.indexOf("Business") >= 0) {
  //         navigateTo("/workman/firm/Profile");
  //       } else {
  //         navigateTo("/workman/individual/Profile");
  //       }
  //     } else {
  //       if (fetchResponse.status == 500) {
  //         toast.error("Something went wrong! Retry!");
  //         resetFields();
  //       } else if (fetchResponse.status == 404) {
  //         toast.error("User not found! Try signing up");
  //         resetFields();
  //       }
  //     }
  //   }
  // };

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
              <p
                style={{
                  fontFamily: "Aclonica",
                  color: "#098FB5",
                  fontSize: "25px",
                  marginTop: "2px",
                }}
                className="ms-2"
              >
                Piombo
              </p>
            </Link>
            <p
              className="text-center mt-2"
              style={{
                fontFamily: "Aclonica",
              }}
            >
              {/* <CardText
                style={{
                  fontFamily: "Aclonica",
                }} */}
              {/* > */}
              Welcome to the future of Service Mobility
              {/* </CardText> */}
            </p>
            <div className="divider my-2">
              <div className="divider-text">Login with</div>
            </div>
            <Row className="d-flex justify-content-center">
              <Col lg={12} className="d-flex justify-content-center" >
                <ButtonGroup>
                  <Col md="12" lg="6">
                    <ButtonGroup className="mb-1">
                      <Button
                        color="primary"
                        onClick={changeMode}
                        active={rSelected === 1}
                        outline
                     
                      >
                        OTP
                      </Button>
                      <Button
                        color="primary"
                        onClick={changeMode}
                        active={rSelected === 2}
                        outline
                      >
                        Password
                      </Button>
                    </ButtonGroup>
                  </Col>
                </ButtonGroup>
              </Col>
            </Row>
            {rSelected == 1 ? (
              // FOR SELECTING OTP OPTION

              <Form
                className="auth-login-form mt-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="mb-1">
                  <Label className="form-label">
                    Email Id / Mobile Number / Registered Id
                  </Label>
                  <Input
                    type="text"
                    placeholder="john@example.com / 9876543210 / WX000..."
                    autoFocus
                    value={enterID}
                    valid={otpVerified}
                    onChange={(e) => setEnterID(e.target.value)}
                    disabled={otpVerified || displayOTP}
                  />
                </div>
                {displayOTP == true ? (
                  <div>
                    <div className="mb-1">
                      <Label className="form-label" for="enter-otp">
                        Enter OTP
                      </Label>
                      <Input
                        id="enter-otp"
                        type="number"
                        placeholder="6 digit-code"
                        disabled={otpVerified}
                        onChange={(e) => handleOTP(e.target.value)}
                      />
                    </div>
                    <div className="mb-2">
                      <div className="d-flex justify-content-center">
                        {seconds > 0 && otpVerified == false ? (
                          <p>
                            Time Remaining{" "}
                            {seconds < 10 ? `0${seconds}` : seconds} seconds
                          </p>
                        ) : (
                          <Button
                            disabled={seconds > 0 || otpVerified}
                            style={{
                              color: seconds > 0 ? "#DFE3E8" : "#FF5630",
                            }}
                            onClick={handleResendOTP}
                          >
                            Resend OTP
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {otpVerified == false ? (
                      <div>
                        {/* <div className="form-check mb-1">
                      <Input type="checkbox" id="remember-me" />
                      <Label className="form-check-label" for="remember-me">
                        Remember Me
                      </Label>
                    </div> */}
                        <Button color="primary" block >
                          Get OTP
                        </Button>
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                )}

                {totalAccounts > 1 ? (
                  <div className="mb-1">
                    <Label className="form-label" for={`account-ids`}>
                      Select Account Id
                    </Label>
                    <Select
                      theme={selectThemeColors}
                      isClearable={false}
                      className="react-select"
                      classNamePrefix="select"
                      placeholder="Select Account Id..."
                      options={accountIdOptions}
                      value={accountSelected}
                      onChange={(e) => setAccountSelected(e)}
                    />
                  </div>
                ) : (
                  <></>
                )}

                {Object.keys(accountSelected).length > 0 && otpVerified ? (
                  <>
                    <br />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        color="primary"
                        block
                        onClick={() => {
                          loginFunction();
                        }}
                      >
                        Sign In
                      </Button>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </Form>
            ) : (
              // FOR SELECTING Password OPTION

              <Form
                className="auth-login-form mt-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="mb-1">
                  <Label className="form-label" for="login-email-password">
                    Email Id / Mobile Number / Registered Id
                  </Label>
                  <Input
                    type="text"
                    placeholder="john@example.com / 9876543210"
                    autoFocus
                    disabled={totalAccounts > 0}
                    value={enterID}
                    onChange={(e) => setEnterID(e.target.value)}
                  />
                </div>
                <div className="mb-1">
                  <div className="d-flex justify-content-between">
                    <Label className="form-label" for="login-password">
                      Password
                    </Label>
                    <Link
                      onClick={() => {
                        changeMode();
                      }}
                    >
                      <small>Forgot Password?</small>
                    </Link>
                  </div>
                  <InputPasswordToggle
                    disabled={totalAccounts > 0}
                    className="input-group-merge"
                    id="login-password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                {/* <div className="form-check mb-1">
                  <Input type="checkbox" id="remember-me" />
                  <Label className="form-check-label" for="remember-me">
                    Remember Me
                  </Label>
                </div> */}
                {totalAccounts > 1 ? (
                  <div className="mb-1">
                    <Label className="form-label" for={`account-ids`}>
                      Select Account Id
                    </Label>
                    <Select
                      theme={selectThemeColors}
                      isClearable={false}
                      className="react-select"
                      classNamePrefix="select"
                      placeholder="Select Account Id..."
                      options={accountIdOptions}
                      value={accountSelected}
                      onChange={(e) => setAccountSelected(e)}
                    />
                  </div>
                ) : (
                  <></>
                )}
               
         
                <Button
                  color="primary"
                  block
                tag={Link}
                to={(site!="")?(site==="supplier")?`/${site}/dashboard`:`/${site}/cases`:"/loginbasic"}
                onClick={()=>(site!="")?toast.success("Success"):toast.error("Invalid Credentials")}
                  disabled={
                    password == "" ||
                    enterID == "" ||
                    (Object.keys(accountSelected).length == 0 &&
                      totalAccounts > 1)
                  }
                >
                  Sign in
                </Button>
              </Form>
            )}

            <p className="text-center mt-2">
              <span className="me-25">New on our platform?</span>
              <Link to="/registerbasic">
                <span style={{ color: "#098fb5" }}>Create an account</span>
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default LoginBasic;