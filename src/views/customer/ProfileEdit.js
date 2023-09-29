// ** React Imports
import { Fragment, useState, useEffect, useRef } from "react";


// ** Third Party Components
  import Select from "react-select";

  import validator from "validator";

import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  X,
  Plus,
  Eye,
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
  CardText,
  CardHeader,
  CardBody,
} from "reactstrap";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";
const verifiedMobile = "9876543212";
const verifiedEmail = "test@gmail.com";

import cityStateData from "../cityStateData";
import { Link } from "react-router-dom";

const IndividualDetails = ({ stepper, type, dataHandler, contactDetails }) => {
  const [newMobileNumber, setNewMobileNumber] = useState("");
  const [newEmailId, setNewEmailId] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailId, setEmailId] = useState("");

  const [enteredMobileOTP, setEnteredMobileOtp] = useState("");
  const [displayMobileOTP, setDisplayMobileOTP] = useState(false);
  const [otpMobileVerified, setOTPMobileVerified] = useState(false);

  const [enteredEmailOTP, setEnteredEmailOtp] = useState("");
  const [displayEmailOTP, setDisplayEmailOTP] = useState(false);
  const [otpEmailVerified, setOTPEmailVerified] = useState(false);

  const [otpMobile, setOTPMobile] = useState("");
  const [otpEmail, setOTPEmail] = useState("");

  const [secondsMobile, setSecondsMobile] = useState(0);
  const [secondsEmail, setSecondsEmail] = useState(0);

  const [fullname, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [locality, setLocality] = useState("");
  const [landmark, setLandmark] = useState("");
  const [pincode, setPincode] = useState(0);
  const [city, setCity] = useState("Mumbai");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const [fileInputs, setFileInputs] = useState([]);

  const [GST,SetGst] = useState(false)

  const handleEachFileUpload = (e, fileKey) => {
    const fileEntry = {
      fileId: fileKey,
      file: e.target.files[0],
    };
    let arr = fileInputs;
    arr.push(fileEntry);
    setFileInputs(arr);
  };

  // const handleNextFileUpload = async () => {
  //   const formData = new FormData();

  //   fileInputs.forEach((fileInput, index) => {
  //     formData.append(fileInput.fileId, fileInput.file);
  //   });

  //   // console.log(formData);
  //   const uploadFiles = await fetch(
  //     "http://localhost:3002/api/workmanIndividual/store",
  //     {
  //       method: "POST",
  //       credentials: "include",
  //       body: formData,
  //     }
  //   );
  //   const uploadFilesData = await uploadFiles.json();
  //   // console.log(uploadFilesData.Urls);
  // };

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

  const languages = [
    { value: "English", label: "English" },
    { value: "Hindi", label: "Hindi" },
    { value: "Marathi", label: "Marathi" },
  ];

  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const deleteForm = (e) => {
    e.preventDefault();
    e.target.closest("form").remove();
  };

  const [showPersonal, setShowPersonal] = useState(true);
  const [showLang, setShowLang] = useState(true);
  const [showEd, setShowEd] = useState(true);

  const [work, setWork] = useState(false);

  const [basiced, setBasiced] = useState("");
  const [iti, setIti] = useState(false);
  const [dip, setDip] = useState(false);
  const [deg, setDeg] = useState(false);

  const [qual, setQual] = useState([]);

  const [diplomaCertificate, setDiplomaCertificate] = useState("");
  const [degreeCertificate, setDegreeCertificate] = useState("");
  const [ITICertificate, setITICertificate] = useState("");

  const [langName, setLangName] = useState("");
  const [langSpeak, setLangSpeak] = useState("None");
  const [langWrite, setLangWrite] = useState("None");
  const [langRead, setLangRead] = useState("None");
  const [lang, setLang] = useState([]);

  const langLevel = {
    0: "None",
    1: "Beginner",
    2: "Fluent",
  };

  const handleNewLang = () => {
    if (
      langName !== "" &&
      (langSpeak !== "None" || langWrite !== "None" || langRead !== "None")
    ) {
      setLang([
        ...lang,
        {
          language: langName,
          speaking: langSpeak,
          writing: langWrite,
          reading: langRead,
        },
      ]);
      setLangName("");
      setLangSpeak("");
      setLangWrite("");
      setLangRead("");
    } else {
      alert("Enter fluency details for language!!");
    }
  };

  const handleEditLang = (ind) => {
    let langObj = lang.at(ind);
    handleDeleteLang(ind);
    setLangName(langObj.language);
    setLangSpeak(langObj.speaking);
    setLangWrite(langObj.writing);
    setLangRead(langObj.reading);
  };

  const handleDeleteLang = (ind) => {
    let ar = [];
    if (lang.length <= 1) {
      ar = [];
    } else {
      if (ind == 0) {
        ar = lang.slice(1);
      } else if (ind == lang.length - 1) {
        ar = lang.slice(0, ind);
      } else {
        ar = lang.slice(0, ind).concat(lang.slice(ind + 1));
      }
    }
    setLang(ar);
  };

  const handleCertificatesRemoval = (item, fileKey) => {
    let arr = fileInputs.filter((obj) => {
      return obj.fileId !== fileKey;
    });
    const fileLabel = document.getElementById(`${item}-pic-upload-label`);
    fileLabel.textContent = `Upload ${item} certificate`;

    const fileInput = document.getElementById(`${item}-pic-upload`);
    fileInput.type = "text"; // Temporarily change the type to text
    fileInput.type = "file";

    setFileInputs(arr);
  };

  const [enableNext, setEnableNext] = useState(false);

  const [photo,setPhoto] = useState(null)



  const[disableCard,setDisableCard] =useState("")
  return (
    <div>
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
            <Col xs="7"  sm="6" md="9" lg="10">
              <div className="content-header">
                <h3 className="mb-0">Personal Data</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="3" sm="4" md="2" lg="1">
              <div className="content-header">
              <Button
                color={((disableCard!="Basic")?"primary":"success")} 
                outline
                onClick={() => {
                 (disableCard!="Basic")? setDisableCard("Basic"):setDisableCard("");
                 (disableCard!="Basic")? "":toast.error("Fill all fields")
                }}
              >
             {((disableCard!="Basic")?"Edit":"Save")}
              </Button>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" sm="2"  md="1" lg="1">
              {showPersonal ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowPersonal(!showPersonal)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowPersonal(!showPersonal)}
                ></ChevronDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showPersonal ? (
          <CardBody className="mt-2">
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row>
                <Col xs="12" md="6" className="mb-1">
                  <Label className="form-label" for="register-name">
                    Full Name
                  </Label>
                  <Input
                  disabled={(disableCard!=="Basic")}
                    type="text"
                    id="register-name"
                    placeholder="Panda Corps"
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                  />
                </Col>
                <Col xs="7" md="4" className="mb-1">
                  <Label
                    className="profile-pic-upload-label"
                    id="profile-pic-upload-label"
                    for="profile-pic-upload"
                  >
                    Upload Photo
                  </Label>
                  <Input
                   disabled={(disableCard!=="Basic")}
                    type="file"
                    accept="image/jpeg, image/png"
                    id="profile-pic-upload"
                   onChange={e=>setPhoto(URL.createObjectURL(e.target.files[0]))}
                  />
                </Col>
                <Col
                  xs="5"
                  md="2"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "nowrap",
                      marginTop: "1rem",
                    }}
                  >
                    <Button
                  
                      color="primary"
                      outline
                      style={{
                        marginRight: "1rem",
                      }}
                      disabled={(photo===null)}
                      onClick={() => {
                       window.open(photo)
                      }}
                    >
                      <Eye size={14} />
                    </Button>
                    <Button
                     disabled={(disableCard!=="Basic")}
                      color="danger"
                      outline
                      onClick={() => {
                      
                        const fileInput =
                          document.getElementById("profile-pic-upload");
                        fileInput.value = ""; // Temporarily change the type to text
                    
                        setPhoto(null);
                      }}
                    >
                      <X size={14} />
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row>
                {mobileNumber === newMobileNumber ? (
                  <Col md="6" className="mb-1">
                    <Label className="form-label" for="register-mobile">
                      Mobile Number
                    </Label>
                    <Input
                     disabled={(disableCard!=="Basic")}
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
                           disabled={(disableCard!=="Basic")}
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
                              disabled={(disableCard!=="Basic")}
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
                           disabled={(disableCard!=="Basic")}
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
                            disabled={(disableCard!=="Basic")}
                            onClick={() => {
                              // setOTPMobileVerified(true);
                              // setNewMobileNumber(mobileNumber);
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
                     disabled={(disableCard!=="Basic")}
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
                           disabled={(disableCard!=="Basic")}
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
                              disabled={(disableCard!=="Basic")}
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
                           disabled={(disableCard!=="Basic")}
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
                            disabled={(disableCard!=="Basic")}
                            onClick={() => {
                              // setOTPEmailVerified(true);
                              // setNewEmailId(emailId);
                              handleEmailOTPview();
                            }}
                          >
                            Verify
                          </Button>
                        </Col>
                      </>
                    )}
                  </>
                )}
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Address
                  </Label>
                  <Input
                   disabled={(disableCard!=="Basic")}
                    type="text"
                    id="register-email"
                    placeholder="711-2880 Nulla St., Mankato"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Locality/Area
                  </Label>
                  <Input
                   disabled={(disableCard!=="Basic")}
                    type="text"
                    id="register-email"
                    placeholder="Andheri east"
                    onChange={(e) => setLocality(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Landmark
                  </Label>
                  <Input
                   disabled={(disableCard!=="Basic")}
                    type="text"
                    id="register-email"
                    placeholder="Opposite Ganesh Mandir"
                    onChange={(e) => setLandmark(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Pincode
                  </Label>
                  <Input
                   disabled={(disableCard!=="Basic")}
                    type="number"
                    id="register-email"
                    placeholder="400025"
                    onChange={(e) => setPincode(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for={`city-${type}`}>
                    City
                  </Label>
                  <Select
                   isDisabled={(disableCard!=="Basic")}
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
                       isDisabled={(disableCard!=="Basic")}
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
              <Row className="mt-1">
                  <Col xs="12" sm="4" md="2" className="mb-1">
                    <Label className="form-label" >
                      GST Registeration
                    </Label>
                    <div
                      className="demo-inline-spacing"
               
                    >
                      <div className="form-check">
                        <Input
                             disabled={(disableCard!=="Basic")}
                          type="radio"
                          id="ex0-active"
                          name="ex0"
                          onClick={()=> SetGst(true)}
                          
                        />
                        <Label className="form-label" for="ex0-active">
                          Yes
                        </Label>
                      </div>
                      <div className="form-check">
                        <Input
                          disabled={(disableCard!=="Basic")}
                          type="radio"
                          id="ex0-active"
                          name="ex0"
                          checked = {!GST}
                        onClick={()=> SetGst(false)}
                         
                        />
                        <Label className="form-label" for="ex0-active">
                          No
                        </Label>
                      </div>
                    </div>
                  </Col>
                    {(GST)?
                      <>
                  <Col xs="12" md="4" className="mb-1">
                    <Label className="form-label" for="register-mobile">
                     GST
                    </Label>
                    <Input
                      disabled={(disableCard!=="Basic")}
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
                      GSt Document
                    </Label>
                    <Input
                      disabled={(disableCard!=="Basic")}
                      type="file"
                      id="signup-details-photo-copy"
                      placeholder=""
                    />
                  </Col>  </> :""}
                </Row>
            </Form>
          </CardBody>
        ) : (
          <p />
        )}
      </Card>
      
   
    </div>
  );
};

export default IndividualDetails;
