// ** React Imports
import { Fragment, useState, useEffect } from "react";


// ** Third Party Components
import Select from "react-select";
import { toast } from "react-hot-toast";
import validator from "validator";

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
import cityStateData from "../../../cityStateData";

const verifiedMobile = "9876543212";
const verifiedEmail = "test@gmail.com";

const CompanyDetails = ({ stepper, type, contactDetails }) => {
  const [newMobileNumber, setNewMobileNumber] = useState("");
  const [newEmailId, setNewEmailId] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailId, setEmailId] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [address, setAddress] = useState("");
  const [locality, setLocality] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const [enteredMobileOTP, setEnteredMobileOtp] = useState("");
  const [displayMobileOTP, setDisplayMobileOTP] = useState(false);
  const [otpMobileVerified, setOTPMobileVerified] = useState(false);

  const [enteredEmailOTP, setEnteredEmailOtp] = useState("");
  const [displayEmailOTP, setDisplayEmailOTP] = useState(false);
  const [otpEmailVerified, setOTPEmailVerified] = useState(false);

  const [otpMobile, setOTPMobile] = useState("");
  const [otpEmail, setOTPEmail] = useState(""); // ACTUAL ANSWER OTP

  const [secondsMobile, setSecondsMobile] = useState(0);
  const [secondsEmail, setSecondsEmail] = useState(0);

  const callMobileVerificationApi = async (mobileValue) => {
    const mobile = parseInt(mobileValue);
    const sentTimestamp = Date.now();
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        toMobile: mobile,
        toEmail: "",
        sentTimestamp: sentTimestamp,
        medium: "mobile",
      }),
    };

    // console.log(CryptoJS.AES.encrypt(code, "123").toString());

    try {
      const fetchResponse = await fetch(
        `http://localhost:3002/api/otp/sendOTP`,
        settings
      );
      // const fetchResponse = {
      //   status: 200,
      // };
      if (fetchResponse.status === 200) {
        setDisplayMobileOTP(true);
        setOTPMobile(sentTimestamp);
        setSecondsMobile(60);
        toast.success(`Enter OTP (sent to ***${mobileValue.slice(6)})`);
      } else {
        toast.error("Something went Wrong!");
      }
    } catch (e) {
      toast.error("Something went Wrong!");
    }
  };

  const callEmailVerificationApi = async (emailValue) => {
    const sentTimestamp = Date.now();
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        toMobile: "",
        toEmail: emailValue,
        sentTimestamp: sentTimestamp,
        medium: "email",
      }),
    };

    // console.log(CryptoJS.AES.encrypt(code, "123").toString());

    try {
      const fetchResponse = await fetch(
        `http://localhost:3002/api/otp/sendOTP`,
        settings
      );
      // const fetchResponse = {
      //   status: 200,
      // };
      if (fetchResponse.status === 200) {
        setDisplayEmailOTP(true);
        setOTPEmail(sentTimestamp);
        setSecondsEmail(60);
        toast.success(
          `Enter OTP (sent to ***${emailValue.slice(emailValue.indexOf("@"))})`
        );
      } else {
        toast.error("Something went Wrong!");
      }
    } catch (e) {
      toast.error("Something went Wrong!");
    }
  };

  const handleMobileOTPview = () => {
    if (
      mobileNumber != "" &&
      validator.isMobilePhone(mobileNumber) &&
      mobileNumber.length === 10
    ) {
      // callMobileVerificationApi(mobileNumber);
      setOTPMobileVerified(true);
      setNewMobileNumber(mobileNumber);
      setMobileNumber(mobileNumber);
    } else toast.error("Please enter valid Mobile Number");
  };

  const handleEmailOTPview = () => {
    if (emailId != "" && validator.isEmail(emailId)) {
      // callEmailVerificationApi(emailId);
      setOTPEmailVerified(true);
      setNewEmailId(emailId);
      setEmailId(emailId);
    } else toast.error("Please enter valid Email Id");
  };

  const handleMobileOTP = async (value) => {
    if (value.length === 6) {
      const verifyTimestamp = Date.now();
      const settings = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          enteredCode: parseInt(value),
          id: otpMobile,
          sentTimestamp: verifyTimestamp,
        }),
      };

      try {
        const fetchResponse = await fetch(
          `http://localhost:3002/api/otp/verifyOTP`,
          settings
        );
        if (fetchResponse.status === 200) {
          const repData = await fetchResponse.json();
          if (repData.check) {
            setOTPMobileVerified(true);
            setNewMobileNumber(mobileNumber);
            toast.success("Mobile Number Verified");
            setDisplayMobileOTP(false);
            setEnteredMobileOtp("");
          } else {
            if (repData.expired) {
              toast.error("OTP expired , Retry!!");
              setDisplayMobileOTP(false);
              setOTPMobileVerified(false);
              setEnteredMobileOtp("");
            } else {
              toast.error("Incorrect OTP!");
              setOTPMobileVerified(false);
            }
          }
        } else {
          toast.error("Something went Wrong!");
        }
      } catch (err) {
        toast.error("Something went wrong, Retry!");
        setDisplayMobileOTP(false);
        setOTPMobileVerified(false);
        setEnteredMobileOtp("");
      }
    } else setOTPMobileVerified(false);
  };

  const handleEmailOTP = async (value) => {
    if (value.length === 6) {
      const verifyTimestamp = Date.now();
      const settings = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          enteredCode: parseInt(value),
          id: otpEmail,
          sentTimestamp: verifyTimestamp,
        }),
      };

      try {
        const fetchResponse = await fetch(
          `http://localhost:3002/api/otp/verifyOTP`,
          settings
        );
        if (fetchResponse.status === 200) {
          const repData = await fetchResponse.json();
          if (repData.check) {
            setOTPEmailVerified(true);
            setNewEmailId(emailId);
            toast.success("Email Id Verified");
            setDisplayEmailOTP(false);
            setEnteredEmailOtp("");
          } else {
            if (repData.expired) {
              toast.error("OTP expired , Retry!!");
              setDisplayEmailOTP(false);
              setOTPEmailVerified(false);
              setEnteredEmailOtp("");
            } else {
              toast.error("Incorrect OTP!");
              setOTPEmailVerified(false);
            }
          }
        } else {
          toast.error("Something went Wrong!");
        }
      } catch (err) {
        toast.error("Something went wrong, Retry!");
        setDisplayEmailOTP(false);
        setEnteredEmailOtp("");
        setOTPEmailVerified(false);
      }
    } else setOTPEmailVerified(false);
  };

  const handleResendMobileOTP = () => {
    // callMobileVerificationApi(mobileNumber);
    setOTPMobileVerified(true);
    setNewMobileNumber(mobileNumber);
  };
  const handleResendEmailOTP = () => {
    // callEmailVerificationApi(emailId);
    setOTPEmailVerified(true);
    setNewEmailId(emailId);
  };

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
    return () => {
      clearInterval(intervalMobile);
      clearInterval(intervalEmail);
    };
  }, [secondsMobile, secondsEmail]);

  const countryOptions = [{ value: "India", label: "India" }];

  const cities = cityStateData.cityList;
  const [cityOptions, setCityOptions] = useState(cities);
  const states = cityStateData.stateList;
  const [stateOptions, setStateOptions] = useState(states);
  const cityState = cityStateData.cityStateData;

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const handleCityChange = (e) => {
    if (e !== null) {
      setCity(e.value);
      setSelectedCity(e);
      setStateOptions([]);
      let findState = cityState.filter((obj) => {
        return obj.City == e.value;
      })[0].State;
      setSelectedState({ value: findState, label: findState });
      setState(findState);
    } else {
      setCity("");
      setSelectedCity(null);
      setSelectedState(null);
      setState("");
      setCityOptions(cities);
      setStateOptions(states);
    }
  };

  const handleStateChange = (e) => {
    if (e !== null) {
      setState(e.value);
      setSelectedState(e);

      let findCities = [];
      cityState
        .filter((obj) => {
          return obj.State == e.value;
        })
        .forEach((itm) => {
          findCities.push({ value: itm.City, label: itm.City });
        });

      setCityOptions(findCities);
    } else {
      setCity("");
      setSelectedCity(null);
      setSelectedState(null);
      setState("");
      setCityOptions(cities);
      setStateOptions(states);
    }
  };

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

  useEffect(() => {
    if (contactDetails.email !== "") {
      setNewEmailId(contactDetails.email);
      setEmailId(contactDetails.email);
      setOTPEmailVerified(true);
    }
    if (contactDetails.mobile !== "") {
      setNewMobileNumber(contactDetails.mobile);
      setMobileNumber(contactDetails.mobile);
      setOTPMobileVerified(true);
    }
    // checkFields();
  });

  const [allowNext, setAllowNext] = useState(false);

  const checkFields = () => {
    if (
      companyName !== "" &&
      companyType !== "" &&
      (newMobileNumber !== "" || newEmailId !== "") &&
      address !== "" &&
      locality !== "" &&
      pincode !== "" &&
      city !== "" &&
      state !== "" &&
      country !== "" &&
      authPerson.length !== 0 &&
      escPerson.length !== 0 &&
      (otpEmailVerified || otpMobileVerified)
    )
      setAllowNext(true);
    else setAllowNext(true);
  };

  useEffect(() => {
    checkFields();
  });

  const handleNext = () => {
    let authorisedPerson = [];
    authPerson.forEach((obj) => {
      authorisedPerson.push({
        name: obj.name,
        contactNumber: obj.mobile,
        emailID: obj.email,
        designation: obj.designation,
      });
    });
    let escalation = [];
    escPerson.forEach((obj) => {
      escalation.push({
        name: obj.name,
        contactNumber: obj.mobile,
        emailID: obj.email,
        designation: obj.designation,
      });
    });
    let step1Data = {
      personalData: {
        companyFirmName: companyName,
        companyFirmType: companyType,
        contactNumber: validator.isMobilePhone(newMobileNumber)
          ? parseInt(newMobileNumber)
          : null,
        emailID: newEmailId,
        address: address,
        localityArea: locality,
        landmark: landmark,
        pincode: pincode,
        city: city,
        state: state,
        country: country,
      },
      authorisedPerson: authorisedPerson,
      escalation: escalation,
    };
    localStorage.setItem("companyDetails", JSON.stringify(step1Data));
    stepper.next();
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
                    value={companyName}
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setCompanyType(e.value);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                {mobileNumber === newMobileNumber ? (
                  <Col md="6" className="mb-1">
                    <Label className="form-label" for="register-mobile">
                      Mobile Number
                    </Label>
                    <Input
                      type="Number"
                      id="register-mobile"
                      placeholder="9875461258"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                    {newMobileNumber !== "" ? (
                      <Label
                        className="is-Number-Valid"
                        style={{ color: "green" }}
                      >
                        Verified <span>✔️</span>
                      </Label>
                    ) : (
                      <></>
                    )}
                  </Col>
                ) : (
                  <>
                    {displayMobileOTP ? (
                      <>
                        <Col xs="7" md="4" className="mb-1">
                          <Label className="form-label" for="register-mobile">
                            {`Enter OTP (sent to ***${mobileNumber.slice(6)})`}
                          </Label>
                          <Input
                            type="number"
                            id="enter-otp"
                            value={enteredMobileOTP}
                            onChange={(e) => {
                              setEnteredMobileOtp(e.target.value);
                              handleMobileOTP(e.target.value);
                            }}
                          />
                        </Col>
                        <Col xs="5" md="2">
                          <div
                            className="d-flex justify-content-center"
                            style={{
                              marginTop: "1.7rem",
                            }}
                          >
                            {secondsMobile > 0 && otpMobileVerified == false ? (
                              <p>
                                Time Remaining :{" "}
                                {secondsMobile < 10
                                  ? `0${secondsMobile}`
                                  : secondsMobile}
                              </p>
                            ) : (
                              <Button
                                disabled={
                                  secondsMobile > 0 || otpMobileVerified
                                }
                                style={{
                                  color:
                                    secondsMobile > 0 ? "#DFE3E8" : "#FF5630",
                                }}
                                onClick={handleResendMobileOTP}
                              >
                                Resend
                              </Button>
                            )}
                          </div>
                        </Col>
                      </>
                    ) : (
                      <>
                        <Col xs="8" md="5" className="mb-1">
                          <Label className="form-label" for="register-mobile">
                            Mobile Number
                          </Label>
                          <Input
                            type="Number"
                            id="register-mobile"
                            placeholder="9875461258"
                            autoFocus
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                          />
                        </Col>
                        <Col xs="4" md="1">
                          {" "}
                          <Button
                            color="primary"
                            style={{ marginTop: "1.7rem" }}
                            disabled={mobileNumber.length !== 10}
                            onClick={() => {
                              handleMobileOTPview();
                            }}
                          >
                            Verify
                          </Button>
                        </Col>
                      </>
                    )}
                  </>
                )}
                {emailId === newEmailId ? (
                  <Col md="6" className="mb-1">
                    <Label className="form-label" for="register-mobile">
                      Email Id
                    </Label>
                    <Input
                      type="email"
                      id="register-email"
                      placeholder="john@email.com"
                      value={emailId}
                      onChange={(e) => setEmailId(e.target.value)}
                    />
                    {newEmailId !== "" ? (
                      <Label
                        className="is-Email-Valid"
                        style={{ color: "green" }}
                      >
                        Verified <span>✔️</span>
                      </Label>
                    ) : (
                      <></>
                    )}
                  </Col>
                ) : (
                  <>
                    {displayEmailOTP ? (
                      <>
                        <Col xs="7" md="4" className="mb-1">
                          <Label className="form-label" for="register-mobile">
                            {`Enter OTP (sent to ***${emailId.slice(
                              emailId.indexOf("@")
                            )})`}
                          </Label>
                          <Input
                            type="number"
                            id="enter-otp"
                            value={enteredEmailOTP}
                            onChange={(e) => {
                              setEnteredEmailOtp(e.target.value);
                              handleEmailOTP(e.target.value);
                            }}
                          />
                        </Col>
                        <Col xs="5" md="2">
                          <div
                            className="d-flex justify-content-center"
                            style={{
                              marginTop: "1.7rem",
                            }}
                          >
                            {secondsEmail > 0 && otpEmailVerified == false ? (
                              <p>
                                Time Remaining :{" "}
                                {secondsEmail < 10
                                  ? `0${secondsEmail}`
                                  : secondsEmail}
                              </p>
                            ) : (
                              <Button
                                disabled={secondsEmail > 0 || otpEmailVerified}
                                style={{
                                  color:
                                    secondsEmail > 0 ? "#DFE3E8" : "#FF5630",
                                }}
                                onClick={handleResendEmailOTP}
                              >
                                Resend
                              </Button>
                            )}
                          </div>
                        </Col>
                      </>
                    ) : (
                      <>
                        <Col xs="8" md="5" className="mb-1">
                          <Label className="form-label" for="register-Email">
                            Email Id
                          </Label>
                          <Input
                            type="email"
                            id="register-Email"
                            placeholder="john@email.com"
                            autoFocus
                            value={emailId}
                            onChange={(e) => setEmailId(e.target.value)}
                          />
                        </Col>
                        <Col xs="4" md="1">
                          {" "}
                          <Button
                            color="primary"
                            style={{ marginTop: "1.7rem" }}
                            disabled={!validator.isEmail(emailId)}
                            onClick={() => {
                              handleEmailOTPview();
                              // setOTPEmailVerified(true);
                              // setNewEmailId(emailId);
                            }}
                          >
                            Verify
                          </Button>
                        </Col>
                      </>
                    )}
                  </>
                )}
                {/* <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Email Id
                  </Label>
                  <Input
                    type="email"
                    id="register-email"
                    placeholder="john@example.com"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                  <Label className="is-Email-Valid" style={{ color: "green" }}>
                    {" "}
                    Verified{" "}
                    {emailId === verifiedEmail ? (
                      <span>✔️</span>
                    ) : (
                      <span>❌</span>
                    )}{" "}
                  </Label>
                </Col> */}
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
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
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
                    value={locality}
                    onChange={(e) => {
                      setLocality(e.target.value);
                    }}
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
                    value={landmark}
                    onChange={(e) => {
                      setLandmark(e.target.value);
                    }}
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
                    value={pincode}
                    onChange={(e) => {
                      setPincode(e.target.value);
                    }}
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
                    isClearable={true}
                    id={`city-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    value={selectedCity}
                    options={cityOptions}
                    onChange={(e) => {
                      handleCityChange(e);
                    }}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    State
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={true}
                    id={`state-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    value={selectedState}
                    options={stateOptions}
                    onChange={(e) => {
                      handleStateChange(e);
                    }}
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
                    onChange={(e) => {
                      setCountry(e.value);
                    }}
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
                      Email Id:
                    </Label>
                    <h4>{item.email}</h4>
                  </Row>
                </Col>
                <Col md={2} className="mb-md-0 mb-1">
                  <Row>
                    <Label className="form-label" for={`quantity-${i}`}>
                      Mobile Number:
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
                    Email id
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
                    Mobile Number
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
                      Email Id :
                    </Label>
                    <h4>{item.email}</h4>
                  </Row>
                </Col>
                <Col md={2} className="mb-md-0 mb-1">
                  <Row>
                    <Label className="form-label" for={`quantity-${i}`}>
                      Mobile Number :
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
                    Email Id
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
                    Mobile Number
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
          <div className="d-flex justify-content-between flex-row-reverse">
            {/* <Button
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
            </Button> */}
            <Button
              color="primary"
              className="btn-next"
              onClick={() => {
                // handleNext();
                stepper.next();
              }}
              
              // disabled={allowNext}
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
