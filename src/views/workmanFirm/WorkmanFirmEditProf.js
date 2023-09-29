import { useState, React, useEffect } from "react";

import { toast } from "react-hot-toast";
import validator from "validator";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";

import Select from "react-select";
import { selectThemeColors } from "@utils";
import { X, Plus, ChevronDown, ChevronUp, Eye } from "react-feather";
import { useNavigate } from "react-router-dom";

const companyTypeOptions = [
  { value: "Proprietorship", label: "Proprietorship" },
  { value: "Partnership", label: "Partnership" },
  { value: "LLP", label: "LLP" },
  { value: "Private Limited", label: "Private Limited" },
  { value: "Public Limited", label: "Public Limited" },
  { value: "LLC", label: "LLC" },
];

const verifiedMobile = "9876543212";
const verifiedEmail = "test@gmail.com";

import cityStateData from "../cityStateData";

const WorkmanFirmEditProf = ({ type = "wizrd-modern" }) => {
  const navigateTo = useNavigate();
  const [personalData, setPersonalData] = useState({});
  const [additionalInformation, setAdditionalInformation] = useState({});
  const [bankDetails, setBankDetails] = useState({});
  const [escalation, setEscalation] = useState({});
  const [authorisedPerson, setAuthorisedPerson] = useState({});

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
    setMobileNumber(mobileNumber);
  };
  const handleResendEmailOTP = () => {
    // callEmailVerificationApi(emailId);
    setOTPEmailVerified(true);
    setNewEmailId(emailId);
    setEmailId(emailId);
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

  const [showAuth, setShowAuth] = useState(true);
  const [showEsc, setShowEsc] = useState(true);

  const [bool_Basic, setBool_Basic] = useState(true);
  const [bool_Authorised, setBool_Authorised] = useState(true);
  const [bool_Escalation, setBool_Escalation] = useState(true);
  const [bool_Registration, setBool_Registration] = useState(true);
  const [bool_Bank, setBool_Bank] = useState(true);
  const [cin, setCin] = useState(false);
  const [msme, setMsme] = useState(false);
  const [pf, setPf] = useState(false);
  const [esic, setEsic] = useState(false);
  const [showReg, setShowReg] = useState(true);
  const [showBank, setShowBank] = useState(true);
  const [showBasic, setShowBasic] = useState(true);

  const [authName, setAuthName] = useState("");
  const [authEmail, setAuthEmail] = useState("");
  const [authMobile, setAuthMobile] = useState("");
  const [authDesig, setAuthDesig] = useState("");

  const [escName, setEscName] = useState("");
  const [escEmail, setEscEmail] = useState("");
  const [escMobile, setEscMobile] = useState("");
  const [escDesig, setEscDesig] = useState("");

  const [companyFirmName, setCompanyFirmName] = useState("");
  const [companyFirmType, setCompanyFirmType] = useState("");
  const [address, setAddress] = useState("");
  const [localityArea, setLocalityArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const [panCardNumber, setPanCardNumber] = useState("");
  const [panCardDoc, setPanCardDoc] = useState("");
  const [gstNumber, setGSTNumber] = useState("");
  const [gstDoc, setGSTDoc] = useState("");
  const [pfNumber, setPFNumber] = useState("");
  const [PFDocument, setPFDocument] = useState("");
  const [esicNumber, setESICNumber] = useState("");
  const [ESICDocument, setESICDocument] = useState("");
  const [msmeNumber, setMSMENumber] = useState("");
  const [MSMEDocument, setMSMEDocument] = useState("");
  const [cinNumber, setCINNumber] = useState("");
  const [CINDocument, setCINDocument] = useState("");

  const [additionalInformationFiles, setAdditionalInformationFiles] = useState(
    []
  );

  const [bankName, setBankName] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [bankIFSCCode, setBankIFSCCode] = useState("");
  const [bankBranchName, setBankBranchName] = useState("");
  const [cancelledCheque, setCancelledCheque] = useState("");

  const [chequeFile, setChequeFile] = useState(null);
  const [bankMICR, setBankMICR] = useState("");

  const [authPerson, setAuthPerson] = useState([]);

  const [escPerson, setEscPerson] = useState([]);

  const handleNewAuth = () => {
    if (
      authName !== "" &&
      authEmail !== "" &&
      authMobile !== "" &&
      authDesig !== ""
    ) {
      let sameCheck = authPerson.filter((obj) => {
        return obj.Email === authEmail || obj.Mobile === authMobile;
      }).length;
      if (sameCheck > 0) {
        alert("Email or Mobile already present!!");
      } else {
        setAuthPerson([
          ...authPerson,
          {
            Name: authName,
            Email: authEmail,
            Mobile: authMobile,
            Designation: authDesig,
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
    setAuthName(authObj.Name);
    setAuthEmail(authObj.Email);
    setAuthMobile(authObj.Mobile);
    setAuthDesig(authObj.Designation);
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
        return obj.Email === escEmail || obj.Mobile === escMobile;
      }).length;
      if (sameCheck > 0) {
        alert("Email or Mobile already present!!");
      } else {
        setEscPerson([
          ...escPerson,
          {
            Name: escName,
            Email: escEmail,
            Mobile: escMobile,
            Designation: escDesig,
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
    setEscName(escObj.Name);
    setEscEmail(escObj.Email);
    setEscMobile(escObj.Mobile);
    setEscDesig(escObj.Designation);
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

  const countryOptions = [{ value: "India", label: "India" }];

  const cities = cityStateData.cityList;
  const [cityOptions, setCityOptions] = useState(cities);
  const states = cityStateData.stateList;
  const [stateOptions, setStateOptions] = useState(states);
  const cityState = cityStateData.cityStateData;

  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedStatePersonal, setSelectedStatePersonal] = useState(null);

  const handleCityChange = (e) => {
    if (e !== null) {
      setCity(e.value);
      setSelectedCity(e);
      setStateOptions([]);
      let findState = cityState.filter((obj) => {
        return obj.City == e.value;
      })[0].State;
      setSelectedStatePersonal({ value: findState, label: findState });
      setState(findState);
    } else {
      setCity("");
      setSelectedCity(null);
      setSelectedStatePersonal(null);
      setState("");
      setCityOptions(cities);
      setStateOptions(states);
    }
  };

  const handleStatePersonalChange = (e) => {
    if (e !== null) {
      setState(e.value);
      setSelectedStatePersonal(e);

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
      setSelectedStatePersonal(null);
      setState("");
      setCityOptions(cities);
      setStateOptions(states);
    }
  };

  const setData = (obj) => {
    setPersonalData(obj.personalData);
    setAdditionalInformation(obj.additionalInformation);
    setBankDetails(obj.bankDetails);
    setAuthorisedPerson(obj.authorisedPerson);
    setEscalation(obj.escalation);
    setCompanyFirmName(obj.personalData.companyFirmName);
    setCompanyFirmType(obj.personalData.companyFirmType);
    setMobileNumber(
      obj.personalData.contactNumber !== null
        ? obj.personalData.contactNumber.toString()
        : ""
    );
    setNewMobileNumber(
      obj.personalData.contactNumber !== null
        ? obj.personalData.contactNumber.toString()
        : ""
    );
    setEmailId(obj.personalData.emailID);
    setNewEmailId(obj.personalData.emailID);
    setAddress(obj.personalData.address);
    setLocalityArea(obj.personalData.localityArea);
    setLandmark(obj.personalData.landmark);
    setCity(obj.personalData.city);
    setPincode(obj.personalData.pincode.toString());
    setState(obj.personalData.state);
    setSelectedCity({
      value: obj.personalData.city,
      label: obj.personalData.city,
    });
    setSelectedStatePersonal({
      value: obj.personalData.state,
      label: obj.personalData.state,
    });
    setCountry(obj.personalData.country);

    let authPersonObj = [];
    obj.authorisedPerson.forEach((obj) => {
      authPersonObj.push({
        Name: obj.name,
        Mobile: obj.contactNumber.toString(),
        Email: obj.emailID,
        Designation: obj.designation,
      });
    });
    setAuthPerson(authPersonObj);

    // console.log(obj.authorisedPerson);

    let escPersonObj = [];
    obj.escalation.forEach((obj) => {
      escPersonObj.push({
        Name: obj.name,
        Mobile: obj.contactNumber.toString(),
        Email: obj.emailID,
        Designation: obj.designation,
      });
    });
    setEscPerson(escPersonObj);
    // console.log(obj.escalation);

    // console.log(obj.additionalInformation.panCardNumber);
    setPanCardNumber(obj.additionalInformation.panCardNumber);
    setPanCardDoc(obj.additionalInformation.panCardDoc);
    setGSTNumber(obj.additionalInformation.gstNumber);
    setGSTDoc(obj.additionalInformation.gstDoc);
    if ("PF" in obj.additionalInformation) {
      setPf(true);
      setPFNumber(obj.additionalInformation.PF);
      setPFDocument(obj.additionalInformation["PFDocument"]);
    } else {
      setPf(false);
    }
    if ("ESIC" in obj.additionalInformation) {
      setEsic(true);
      setESICNumber(obj.additionalInformation.ESIC);
      setESICDocument(obj.additionalInformation["ESICDocument"]);
    } else {
      setEsic(false);
    }
    //CIN
    if ("CIN" in obj.additionalInformation) {
      // console.log("CIN :", obj.additionalInformation.CIN);
      setCin(true);
      setCINNumber(obj.additionalInformation.CIN);
      setCINDocument(obj.additionalInformation["CINDocument"]);
    } else {
      setCin(false);
    }
    if ("MSME" in obj.additionalInformation) {
      setMsme(true);
      setMSMENumber(obj.additionalInformation.MSME);
      setMSMEDocument(obj.additionalInformation["MSMEDocument"]);
    } else {
      setMsme(false);
    }

    setBankName(obj.bankDetails.bankName);
    setBankAccountNumber(obj.bankDetails.accountNumber);
    setBankIFSCCode(obj.bankDetails.IFSC);
    setBankBranchName(obj.bankDetails.branchDetail);
    setCancelledCheque(obj.bankDetails.cancelledCheque);
    setBankMICR(obj.bankDetails.MICR);
  };

  useEffect(() => {
    async function getUserDetails() {
      const fetchResponse = await fetch(
        "http://localhost:3002/api/workmanFirm/details",
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (fetchResponse.status == 500) {
        toast.error("Something went wrong!");
      } else {
        const fetchData = await fetchResponse.json();
        if (fetchResponse.status == 200) {
          setData(fetchData);
        } else if (fetchResponse.status == 404) {
          if ("userFound" in fetchData) {
            //form not filled
            toast.error("Complete Profile!!");
            navigateTo("/workman/firm/Profile");
          } else {
            navigateTo("/login");
          }
        }
      }
    }
    getUserDetails();
  }, []);

  function compareObjects(obj1, obj2) {
    // Get the keys of obj1
    const keys = Object.keys(obj1);

    // Iterate over the keys and compare the values
    for (let key of keys) {
      if (obj1[key] !== obj2[key]) {
        // Values for the current key are different
        return false;
      }
    }

    // All values are the same
    return true;
  }

  const handleBoolBasicChange = async () => {
    setBool_Basic(!bool_Basic);
    if (!bool_Basic) {
      setDisplayMobileOTP(false);
      setEnteredMobileOtp("");
      setOTPMobileVerified(false);
      setSecondsMobile(0);
      setMobileNumber(newMobileNumber);
      setDisplayEmailOTP(false);
      setEnteredEmailOtp("");
      setOTPEmailVerified(false);
      setSecondsEmail(0);
      setEmailId(newEmailId);

      let personalDataObj = {
        companyFirmName: companyFirmName,
        companyFirmType: companyFirmType,
        contactNumber:
          newMobileNumber !== "" ? parseInt(newMobileNumber) : null,
        emailID: newEmailId,
        address: address,
        localityArea: localityArea,
        landmark: landmark,
        pincode: parseInt(pincode),
        city: city,
        state: state,
        country: country,
      };

      if (
        companyFirmName !== "" &&
        companyFirmType !== "" &&
        (newMobileNumber !== "" || newEmailId !== "") &&
        address !== "" &&
        localityArea !== "" &&
        pincode !== "" &&
        city !== "" &&
        state !== "" &&
        country !== ""
      ) {
        if (!compareObjects(personalData, personalDataObj)) {
          let objToSend = {
            personalData: personalDataObj,
          };
          const settings = {
            method: "PATCH",
            credentials: "include",
            headers: {
              "Content-Type": "application/json", // Specify the content type as JSON
              Accept: "application/json", // Specify the expected response format as JSON
            },
            body: JSON.stringify(objToSend), // Convert the data to JSON and include it in the request body
          };
          const fetchResponse = await fetch(
            "http://localhost:3002/api/workmanFirm/update",
            settings
          );
          if (fetchResponse.status == 200) {
            setPersonalData(personalDataObj);
            toast.success("Basic Details Updated!");
          } else if (fetchResponse.status !== 404) {
            toast.error("Something went wrong!");
            setCompanyFirmName(personalData.companyFirmName);
            setCompanyFirmType(personalData.companyFirmType);
            setMobileNumber(
              personalData.contactNumber !== null
                ? personalData.contactNumber.toString()
                : ""
            );
            setNewMobileNumber(
              personalData.contactNumber !== null
                ? personalData.contactNumber.toString()
                : ""
            );
            setEmailId(personalData.emailID);
            setNewEmailId(personalData.emailID);
            setAddress(personalData.address);
            setLocalityArea(personalData.localityArea);
            setLandmark(personalData.landmark);
            setCity(personalData.city);
            setPincode(personalData.pincode.toString());
            setState(personalData.state);
            setCountry(personalData.country);
            setSelectedCity({
              value: personalData.city,
              label: personalData.city,
            });
            setSelectedStatePersonal({
              value: personalData.state,
              label: personalData.state,
            });
          } else if (fetchResponse.status == 404) {
            navigateTo("/login");
          }
        }
      } else {
        toast.error("Fill all fields!");
        setCompanyFirmName(personalData.companyFirmName);
        setCompanyFirmType(personalData.companyFirmType);
        setMobileNumber(
          personalData.contactNumber !== null
            ? personalData.contactNumber.toString()
            : ""
        );
        setNewMobileNumber(
          personalData.contactNumber !== null
            ? personalData.contactNumber.toString()
            : ""
        );
        setEmailId(personalData.emailID);
        setNewEmailId(personalData.emailID);
        setAddress(personalData.address);
        setLocalityArea(personalData.localityArea);
        setLandmark(personalData.landmark);
        setCity(personalData.city);
        setPincode(personalData.pincode.toString());
        setState(personalData.state);
        setCountry(personalData.country);
        setSelectedCity({
          value: personalData.city,
          label: personalData.city,
        });
        setSelectedStatePersonal({
          value: personalData.state,
          label: personalData.state,
        });
      }
    }
  };

  const handleBoolAuthorisedPersonChange = async () => {
    setBool_Authorised(!bool_Authorised);
    if (!bool_Authorised) {
      let authorisedPersonObj = [];
      authPerson.forEach((obj) => {
        authorisedPersonObj.push({
          name: obj.Name,
          contactNumber: parseInt(obj.Mobile),
          emailID: obj.Email,
          designation: obj.Designation,
        });
      });
      let objToSend = {
        authorisedPerson: authorisedPersonObj,
      };
      console.log(objToSend);
      const settings = {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json", // Specify the content type as JSON
          Accept: "application/json", // Specify the expected response format as JSON
        },
        body: JSON.stringify(objToSend), // Convert the data to JSON and include it in the request body
      };
      const fetchResponse = await fetch(
        "http://localhost:3002/api/workmanFirm/update",
        settings
      );
      if (fetchResponse.status == 200) {
        setAuthorisedPerson(authorisedPersonObj);
        toast.success("Authorised Person Details Updated!");
      } else if (fetchResponse.status !== 404) {
        toast.error("Something went wrong!");
        //assign authperson back
        let authPersonObj = [];
        authorisedPerson.forEach((obj) => {
          authPersonObj.push({
            Name: obj.name,
            Mobile: obj.contactNumber.toString(),
            Email: obj.emailID,
            Designation: obj.designation,
          });
        });
        setAuthPerson(authPersonObj);
      } else if (fetchResponse.status == 404) {
        navigateTo("/login");
      }
    }
  };

  const handleBoolEscalationChange = async () => {
    setBool_Escalation(!bool_Escalation);
    if (!bool_Escalation) {
      let escalationObj = [];
      escPerson.forEach((obj) => {
        escalationObj.push({
          name: obj.Name,
          contactNumber: obj.Mobile,
          emailID: obj.Email,
          designation: obj.Designation,
        });
      });
      let objToSend = {
        escalation: escalationObj,
      };
      const settings = {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json", // Specify the content type as JSON
          Accept: "application/json", // Specify the expected response format as JSON
        },
        body: JSON.stringify(objToSend), // Convert the data to JSON and include it in the request body
      };
      const fetchResponse = await fetch(
        "http://localhost:3002/api/workmanFirm/update",
        settings
      );
      if (fetchResponse.status == 200) {
        setEscalation(escalationObj);
        toast.success("Escalation Details Updated!");
      } else if (fetchResponse.status !== 404) {
        toast.error("Something went wrong!");
        //assign escperson back
        let escPersonObj = [];
        escalation.forEach((obj) => {
          escPersonObj.push({
            Name: obj.name,
            Mobile: obj.contactNumber,
            Email: obj.emailID,
            Designation: obj.designation,
          });
        });
        setEscPerson(escPersonObj);
      } else if (fetchResponse.status == 404) {
        navigateTo("/login");
      }
    }
  };

  const checkBankFields = () => {
    if (
      bankName !== "" &&
      bankBranchName !== "" &&
      bankAccountNumber !== "" &&
      bankIFSCCode !== "" &&
      bankMICR !== "" &&
      cancelledCheque !== ""
    )
      return true;
    else return false;
  };

  const handleBoolBankDetailsChange = async () => {
    setBool_Bank(!bool_Bank);
    if (!bool_Bank) {
      if (checkBankFields()) {
        //call store
        let updatedChequePath = null;
        if (bankDetails.cancelledCheque !== cancelledCheque) {
          const formData = new FormData();
          formData.append("cancelledCheque", chequeFile);

          const uploadFiles = await fetch(
            "http://localhost:3002/api/workmanFirm/store",
            {
              method: "POST",
              credentials: "include",
              body: formData,
            }
          );
          const uploadFilesData = await uploadFiles.json();
          if (uploadFiles.status == 200) {
            updatedChequePath =
              "cancelledCheque" in uploadFilesData.Urls
                ? uploadFilesData.Urls.cancelledCheque
                : bankDetails.cancelledCheque;
          }
        }
        let bankDetailsObj = {
          bankName: bankName,
          branchDetail: bankBranchName,
          accountNumber: bankAccountNumber,
          IFSC: bankIFSCCode,
          MICR: bankMICR,
          cancelledCheque:
            updatedChequePath !== null
              ? updatedChequePath
              : bankDetails.cancelledCheque,
        };

        let deleteArr = [];
        if (bankDetailsObj.cancelledCheque !== bankDetails.cancelledCheque)
          deleteArr.push(
            bankDetails.cancelledCheque.slice(
              bankDetails.cancelledCheque.indexOf("/uploads")
            )
          );

        let objToSend = {
          update: {
            bankDetails: bankDetailsObj,
          },
          deleteFiles: deleteArr,
        };
        const settings = {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json", // Specify the content type as JSON
            Accept: "application/json", // Specify the expected response format as JSON
          },
          body: JSON.stringify(objToSend), // Convert the data to JSON and include it in the request body
        };
        const fetchResponse = await fetch(
          "http://localhost:3002/api/workmanFirm/update",
          settings
        );
        if (fetchResponse.status == 200) {
          setBankDetails(bankDetailsObj);
          toast.success("Bank Details Updated!");
          setCancelledCheque(bankDetailsObj.cancelledCheque);
        } else if (fetchResponse.status !== 404) {
          toast.error("Something went wrong!");
          //assign bankdetails back
          setBankName(bankDetails.bankName);
          setBankAccountNumber(bankDetails.accountNumber);
          setBankIFSCCode(bankDetails.IFSC);
          setBankBranchName(bankDetails.branchDetail);
          setCancelledCheque(bankDetails.cancelledCheque);
          setBankMICR(bankDetails.MICR);
        } else if (fetchResponse.status == 404) {
          navigateTo("/login");
        }
      } else {
        toast.error("Fill all fields!");
        //assign bankdetails back
        setBankName(bankDetails.bankName);
        setBankAccountNumber(bankDetails.accountNumber);
        setBankIFSCCode(bankDetails.IFSC);
        setBankBranchName(bankDetails.branchDetail);
        setCancelledCheque(bankDetails.cancelledCheque);
        setBankMICR(bankDetails.MICR);
      }
      // const fileInput = document.getElementById("cheque-upload");
      // fileInput.type = "text"; // Temporarily change the type to text
      // fileInput.type = "file";
    }
  };

  const checkRegFields = () => {
    let returnValue = false;
    if (
      panCardNumber !== "" &&
      panCardDoc !== "" &&
      gstNumber !== "" &&
      gstDoc !== ""
    ) {
      returnValue = true;
    }

    if (pf && returnValue) {
      if (pfNumber !== "" && PFDocument !== "") {
        returnValue = true;
      } else {
        returnValue = false;
      }
    }
    if (cin && returnValue) {
      if (cinNumber !== "" && CINDocument !== "") {
        returnValue = true;
      } else {
        returnValue = false;
      }
    }
    if (msme && returnValue) {
      if (msmeNumber !== "" && MSMEDocument !== "") {
        returnValue = true;
      } else {
        returnValue = false;
      }
    }
    if (esic && returnValue) {
      if (esicNumber !== "" && ESICDocument !== "") {
        returnValue = true;
      } else {
        returnValue = false;
      }
    }

    return returnValue;
  };

  const getDeleteFilesList = () => {
    let delArr = [];
    if (cin) {
      //check prev not empty
      if (
        additionalInformation["CINDocument"] !== CINDocument &&
        additionalInformation["CINDocument"] !== undefined
      )
        delArr.push(
          additionalInformation["CINDocument"].slice(
            additionalInformation["CINDocument"].indexOf("/uploads")
          )
        );
    }
    if (msme) {
      if (
        additionalInformation["MSMEDocument"] !== MSMEDocument &&
        additionalInformation["MSMEDocument"] !== undefined
      )
        delArr.push(
          additionalInformation["MSMEDocument"].slice(
            additionalInformation["MSMEDocument"].indexOf("/uploads")
          )
        );
    }
    if (pf) {
      if (
        additionalInformation["PFDocument"] !== PFDocument &&
        additionalInformation["PFDocument"] !== undefined
      )
        delArr.push(
          additionalInformation["PFDocument"].slice(
            additionalInformation["PFDocument"].indexOf("/uploads")
          )
        );
    }
    if (esic) {
      if (
        additionalInformation["ESICDocument"] !== ESICDocument &&
        additionalInformation["ESICDocument"] !== undefined
      )
        delArr.push(
          additionalInformation["ESICDocument"].slice(
            additionalInformation["ESICDocument"].indexOf("/uploads")
          )
        );
    }
    if (additionalInformation["panCardDoc"] !== panCardDoc)
      delArr.push(
        additionalInformation["panCardDoc"].slice(
          additionalInformation["panCardDoc"].indexOf("/uploads")
        )
      );
    if (additionalInformation["gstDoc"] !== gstDoc)
      delArr.push(
        additionalInformation["gstDoc"].slice(
          additionalInformation["gstDoc"].indexOf("/uploads")
        )
      );

    return delArr;
  };

  const handleAdditionalInformationChange = async () => {
    setBool_Registration(!bool_Registration);
    if (!bool_Registration) {
      if (checkRegFields()) {
        //call store if there is any upload to be stored
        let deleteArr = getDeleteFilesList();
        // console.log(deleteArr)
        let updatedPanPath = null;
        let updatedGstPath = null;
        let updatedCinPath = null;
        let updatedMsmePath = null;
        let updatedPfPath = null;
        let updatedEsicPath = null;

        if (additionalInformationFiles.length > 0) {
          //call store
          const formData = new FormData();
          additionalInformationFiles.forEach((obj) => {
            formData.append(obj.fileId, obj.file);
          });
          const uploadFiles = await fetch(
            "http://localhost:3002/api/workmanFirm/store",
            {
              method: "POST",
              credentials: "include",
              body: formData,
            }
          );
          const uploadFilesData = await uploadFiles.json();
          if (uploadFiles.status == 200) {
            // console.log(uploadFilesData)
            updatedPanPath =
              "panCardDoc" in uploadFilesData.Urls
                ? uploadFilesData.Urls.panCardDoc
                : additionalInformation.panCardDoc;
            updatedGstPath =
              "gstDoc" in uploadFilesData.Urls
                ? uploadFilesData.Urls.gstDoc
                : additionalInformation.gstDoc;
            updatedCinPath =
              "CINDocument" in uploadFilesData.Urls
                ? uploadFilesData.Urls.CINDocument
                : additionalInformation.CINDocument;
            updatedMsmePath =
              "MSMEDocument" in uploadFilesData.Urls
                ? uploadFilesData.Urls.MSMEDocument
                : additionalInformation.MSMEDocument;
            updatedPfPath =
              "PFDocument" in uploadFilesData.Urls
                ? uploadFilesData.Urls.PFDocument
                : additionalInformation.PFDocument;
            updatedEsicPath =
              "ESICDocument" in uploadFilesData.Urls
                ? uploadFilesData.Urls.ESICDocument
                : additionalInformation.ESICDocument;
          }
        }

        let additionalInformationObj = {
          panCardNumber: panCardNumber,
          panCardDoc:
            updatedPanPath !== null
              ? updatedPanPath
              : additionalInformation.panCardDoc,
          gstNumber: gstNumber,
          gstDoc:
            updatedGstPath !== null
              ? updatedGstPath
              : additionalInformation.gstDoc,
        };
        if (pf) {
          (additionalInformationObj["PF"] = pfNumber),
            (additionalInformationObj["PFDocument"] =
              updatedPfPath !== null
                ? updatedPfPath
                : additionalInformation.PFDocument);
        }
        if (esic) {
          (additionalInformationObj["ESIC"] = esicNumber),
            (additionalInformationObj["ESICDocument"] =
              updatedEsicPath !== null
                ? updatedEsicPath
                : additionalInformation.ESICDocument);
        }
        if (cin) {
          (additionalInformationObj["CIN"] = cinNumber),
            (additionalInformationObj["CINDocument"] =
              updatedCinPath !== null
                ? updatedCinPath
                : additionalInformation.CINDocument);
        }
        if (msme) {
          (additionalInformationObj["MSME"] = msmeNumber),
            (additionalInformationObj["MSMEDocument"] =
              updatedMsmePath !== null
                ? updatedMsmePath
                : additionalInformation.MSMEDocument);
        }
        let objToSend = {
          update: {
            additionalInformation: additionalInformationObj,
          },
          deleteFiles: deleteArr,
        };
        const settings = {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json", // Specify the content type as JSON
            Accept: "application/json", // Specify the expected response format as JSON
          },
          body: JSON.stringify(objToSend), // Convert the data to JSON and include it in the request body
        };
        const fetchResponse = await fetch(
          "http://localhost:3002/api/workmanFirm/update",
          settings
        );
        if (fetchResponse.status == 200) {
          setAdditionalInformation(additionalInformationObj);
          setPanCardDoc(additionalInformationObj.panCardDoc);
          setGSTDoc(additionalInformationObj.gstDoc);
          setCINDocument(additionalInformationObj.CINDocument);
          setMSMEDocument(additionalInformationObj.MSMEDocument);
          setPFDocument(additionalInformationObj.PFDocument);
          setESICDocument(additionalInformationObj.ESICDocument);
          toast.success("Registration Details Updated!");
        } else if (fetchResponse.status !== 404) {
          toast.error("Something went wrong!");
          //assign addInfo back
          setPanCardNumber(additionalInformation.panCardNumber);
          setPanCardDoc(additionalInformation.panCardDoc);
          setGSTNumber(additionalInformation.gstNumber);
          setGSTDoc(additionalInformation.gstDoc);

          if ("PF" in additionalInformation) {
            setPf(true);
            setPFNumber(additionalInformation.PF);
            setPFDocument(additionalInformation["PFDocument"]);
          } else {
            setPf(false);
            setPFNumber("");
            setPFDocument("");
          }
          if ("ESIC" in additionalInformation) {
            setEsic(true);
            setESICNumber(additionalInformation.ESIC);
            setESICDocument(additionalInformation["ESICDocument"]);
          } else {
            setEsic(false);
            setESICNumber("");
            setESICDocument("");
          }
          if ("CIN" in additionalInformation) {
            setCin(true);
            setCINNumber(additionalInformation.CIN);
            setCINDocument(additionalInformation["CINDocument"]);
          } else {
            setCin(false);
            setCINNumber("");
            setCINDocument("");
          }
          if ("MSME" in additionalInformation) {
            setMsme(true);
            setMSMENumber(additionalInformation.MSME);
            setMSMEDocument(additionalInformation["MSMEDocument"]);
          } else {
            setMsme(false);
            setMSMENumber("");
            setMSMEDocument("");
          }
        } else if (fetchResponse.status == 404) {
          navigateTo("/login");
        }
      } else {
        toast.error("Fill all fields!");
        //assign addInfo back
        setPanCardNumber(additionalInformation.panCardNumber);
        setPanCardDoc(additionalInformation.panCardDoc);
        setGSTNumber(additionalInformation.gstNumber);
        setGSTDoc(additionalInformation.gstDoc);
        if ("PF" in additionalInformation) {
          setPf(true);
          setPFNumber(additionalInformation.PF);
          setPFDocument(additionalInformation["PFDocument"]);
        } else {
          setPf(false);
          setPFNumber("");
          setPFDocument("");
        }
        if ("ESIC" in additionalInformation) {
          setEsic(true);
          setESICNumber(additionalInformation.ESIC);
          setESICDocument(additionalInformation["ESICDocument"]);
        } else {
          setEsic(false);
          setESICNumber("");
          setESICDocument("");
        }
        if ("CIN" in additionalInformation) {
          setCin(true);
          setCINNumber(additionalInformation.CIN);
          setCINDocument(additionalInformation["CINDocument"]);
        } else {
          setCin(false);
          setCINNumber("");
          setCINDocument("");
        }
        if ("MSME" in additionalInformation) {
          setMsme(true);
          setMSMENumber(additionalInformation.MSME);
          setMSMEDocument(additionalInformation["MSMEDocument"]);
        } else {
          setMsme(false);
          setMSMENumber("");
          setMSMEDocument("");
        }
      }
      setAdditionalInformationFiles([]);
      // setShowReg(false);
      // setShowReg(true);
    }
  };

  // const [fileInputs, setFileInputs] = useState([]);

  const handleAdditionalFilesUpload = (e, fileKey) => {
    const fileEntry = {
      fileId: fileKey,
      file: e.target.files[0],
    };
    let arr = additionalInformationFiles;
    arr.push(fileEntry);
    setAdditionalInformationFiles(arr);
  };

  // useEffect(() => getUserDetails(), []);
  return (
    <Col>
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
            <Col xs="6" md="10">
              <div className="content-header">
                <h3 className="mb-0">Basic Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="4" md="1">
              <Button
                color={`${bool_Basic ? "primary" : "success"}`}
                outline
                onClick={() => {
                  handleBoolBasicChange();
                }}
              >
                {bool_Basic ? "Edit" : "Save"}
              </Button>
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
                    placeholder={companyFirmName}
                    value={companyFirmName}
                    onChange={(e) => setCompanyFirmName(e.target.value)}
                    disabled={bool_Basic}
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
                    isDisabled={bool_Basic}
                    value={{ value: companyFirmType, label: companyFirmType }}
                    onChange={(e) => setCompanyFirmType(e.value)}
                  />
                </Col>
              </Row>
              <Row>
                {bool_Basic ? (
                  <Col md="6" className="mb-1">
                    <Label className="form-label" for="register-mobile">
                      Mobile Number
                    </Label>
                    <Input
                      type="Number"
                      id="register-mobile"
                      // placeholder="9875461258"
                      value={newMobileNumber}
                      disabled={bool_Basic}
                      // onChange={(e) => handleEmail(e.target.value)}
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
                              <Label
                                className="form-label"
                                for="register-mobile"
                              >
                                {`Enter OTP (sent to ***${mobileNumber.slice(
                                  6
                                )})`}
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
                                {secondsMobile > 0 &&
                                otpMobileVerified == false ? (
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
                                        secondsMobile > 0
                                          ? "#DFE3E8"
                                          : "#FF5630",
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
                              <Label
                                className="form-label"
                                for="register-mobile"
                              >
                                Mobile Number
                              </Label>
                              <Input
                                type="Number"
                                id="register-mobile"
                                placeholder="9875461258"
                                autoFocus
                                value={mobileNumber}
                                onChange={(e) =>
                                  setMobileNumber(e.target.value)
                                }
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
                  </>
                )}

                {bool_Basic ? (
                  <Col md="6" className="mb-1">
                    <Label className="form-label" for="register-email">
                      Email Id
                    </Label>
                    <Input
                      type="email"
                      id="register-email"
                      value={newEmailId}
                      disabled={bool_Basic}
                      placeholder="john@example.com"
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
                              <Label
                                className="form-label"
                                for="register-mobile"
                              >
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
                                {secondsEmail > 0 &&
                                otpEmailVerified == false ? (
                                  <p>
                                    Time Remaining :{" "}
                                    {secondsEmail < 10
                                      ? `0${secondsEmail}`
                                      : secondsEmail}
                                  </p>
                                ) : (
                                  <Button
                                    disabled={
                                      secondsEmail > 0 || otpEmailVerified
                                    }
                                    style={{
                                      color:
                                        secondsEmail > 0
                                          ? "#DFE3E8"
                                          : "#FF5630",
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
                              <Label
                                className="form-label"
                                for="register-Email"
                              >
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
                                }}
                              >
                                Verify
                              </Button>
                            </Col>
                          </>
                        )}
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
                    type="text"
                    id="register-email"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    disabled={bool_Basic}
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
                    value={localityArea}
                    onChange={(e) => setLocalityArea(e.target.value)}
                    disabled={bool_Basic}
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
                    value={landmark}
                    onChange={(e) => setLandmark(e.target.value)}
                    disabled={bool_Basic}
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
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    disabled={bool_Basic}
                    // onChange={(e) =k> handleEmail(e.target.value)}
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
                    isDisabled={bool_Basic}
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
                    value={selectedStatePersonal}
                    options={stateOptions}
                    onChange={(e) => {
                      handleStatePersonalChange(e);
                    }}
                    isDisabled={bool_Basic}
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
                    value={{ value: country, label: country }}
                    onChange={(e) => setCountry(e.value)}
                    isDisabled={bool_Basic}
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
            <Col xs="6" md="10">
              <div className="content-header">
                <h3 className="mb-0">Authorised Person</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="4" md="1">
              <Button
                color={`${bool_Authorised ? "primary" : "success"}`}
                outline
                onClick={() => {
                  // if (!bool_Authorised) {
                  //   if (authPerson.length > 0) {
                  //     setBool_Authorised(!bool_Authorised);
                  //   } else {
                  //     alert("Add atleast one contact!!");
                  //   }
                  // } else {
                  //   setBool_Authorised(!bool_Authorised);
                  // }
                  handleBoolAuthorisedPersonChange();
                }}
              >
                {bool_Authorised ? "Edit" : "Save"}
              </Button>
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
            {bool_Authorised ? (
              <>
                {authPerson.map((item, i) => (
                  <Row
                    key={i}
                    className="justify-content-between align-items-center"
                  >
                    <Col xs="6" md="3" className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`item-name-${i}`}>
                          Name :
                        </Label>
                        <h4>{item.Name}</h4>
                      </Row>
                    </Col>
                    <Col xs="6" md="3" className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`cost-${i}`}>
                          Email Id :
                        </Label>
                        <h4>{item.Email}</h4>
                      </Row>
                    </Col>
                    <Col xs="6" md="3" className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`quantity-${i}`}>
                          Mobile Number :
                        </Label>
                        <h4>{item.Mobile}</h4>
                      </Row>
                    </Col>
                    <Col xs="6" md="3" className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`item-name-${i}`}>
                          Designation :
                        </Label>
                        <h4>{item.Designation}</h4>
                      </Row>
                    </Col>
                    {/* <Col md={2}>
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
                    </Col> */}
                    <Col sm={12}>
                      <hr />
                    </Col>
                  </Row>
                ))}
              </>
            ) : (
              <>
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
                        <h4>{item.Name}</h4>
                      </Row>
                    </Col>
                    <Col md={2} className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`cost-${i}`}>
                          Email Id :
                        </Label>
                        <h4>{item.Email}</h4>
                      </Row>
                    </Col>
                    <Col md={2} className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`quantity-${i}`}>
                          Mobile Number:
                        </Label>
                        <h4>{item.Mobile}</h4>
                      </Row>
                    </Col>
                    <Col md={2} className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`item-name-${i}`}>
                          Designation :
                        </Label>
                        <h4>{item.Designation}</h4>
                      </Row>
                    </Col>
                    <Col md={2}>
                      <Button
                        color="danger"
                        className="text-nowrap px-1 mt-1"
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
                        className="text-nowrap px-1 mt-1"
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
                        Email Id
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
              </>
            )}
          </CardBody>
        ) : (
          <p />
        )}
      </Card>
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
            <Col xs="6" md="10">
              <div className="content-header">
                <h3 className="mb-0">Escalation </h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="4" md="1">
              <Button
                color={`${bool_Escalation ? "primary" : "success"}`}
                outline
                onClick={() => {
                  // if (!bool_Escalation) {
                  //   if (escPerson.length > 0) {
                  //     setBool_Escalation(!bool_Escalation);
                  //   } else {
                  //     alert("Add atleast one contact!!");
                  //   }
                  // } else {
                  //   setBool_Escalation(!bool_Escalation);
                  // }
                  handleBoolEscalationChange();
                }}
              >
                {bool_Escalation ? "Edit" : "Save"}
              </Button>
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
            {bool_Escalation ? (
              <>
                {escPerson.map((item, i) => (
                  <Row
                    key={i}
                    className="justify-content-between align-items-center"
                  >
                    <Col xs="6" md="3" className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`item-name-${i}`}>
                          Name :
                        </Label>
                        <h4>{item.Name}</h4>
                      </Row>
                    </Col>
                    <Col xs="6" md="3" className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`cost-${i}`}>
                          Email Id:
                        </Label>
                        <h4>{item.Email}</h4>
                      </Row>
                    </Col>
                    <Col xs="6" md="3" className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`quantity-${i}`}>
                          Mobile Number:
                        </Label>
                        <h4>{item.Mobile}</h4>
                      </Row>
                    </Col>
                    <Col xs="6" md="3" className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`item-name-${i}`}>
                          Designation :
                        </Label>
                        <h4>{item.Designation}</h4>
                      </Row>
                    </Col>
                    {/* <Col md={2}>
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
                    </Col> */}
                    <Col sm={12}>
                      <hr />
                    </Col>
                  </Row>
                ))}
              </>
            ) : (
              <>
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
                        <h4>{item.Name}</h4>
                      </Row>
                    </Col>
                    <Col md={2} className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`cost-${i}`}>
                          Email Id:
                        </Label>
                        <h4>{item.Email}</h4>
                      </Row>
                    </Col>
                    <Col md={2} className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`quantity-${i}`}>
                          Mobile Number:
                        </Label>
                        <h4>{item.Mobile}</h4>
                      </Row>
                    </Col>
                    <Col md={2} className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`item-name-${i}`}>
                          Designation :
                        </Label>
                        <h4>{item.Designation}</h4>
                      </Row>
                    </Col>
                    <Col md={2}>
                      <Button
                        color="danger"
                        className="text-nowrap px-1 mt-1"
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
                        className="text-nowrap px-1 mt-1"
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
              </>
            )}
          </CardBody>
        ) : (
          <p />
        )}
      </Card>
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
            <Col xs="6" md="10">
              <div className="content-header">
                <h3 className="mb-0">Registration Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="4" md="1">
              <Button
                color={`${bool_Registration ? "primary" : "success"}`}
                outline
                onClick={() => handleAdditionalInformationChange()}
              >
                {bool_Registration ? "Edit" : "Save"}
              </Button>
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
                    type="text"
                    id="register-mobile"
                    value={panCardNumber}
                    onChange={(e) => setPanCardNumber(e.target.value)}
                    disabled={bool_Registration}
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </Col>
                {bool_Registration ? (
                  <>
                    <Col xs="8" md="5" className="mb-1">
                      <Label
                        className="form-label"
                        for="signup-details-GST-card-copy"
                      >
                        View Uploaded Pan Card
                      </Label>
                      <Input
                        type="file"
                        id="signup-details-GST-card-copy"
                        disabled={true}
                      />
                    </Col>
                    <Col
                      xs="4"
                      md="1"
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
                          onClick={() => {
                            if (panCardDoc !== "") window.open(panCardDoc);
                          }}
                          style={{
                            marginRight: "1rem",
                          }}
                        >
                          <Eye size={14} />
                        </Button>
                      </div>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col xs="8" md="4" className="mb-1">
                      <Label
                        className="pan-upload-label"
                        id="pan-upload-label"
                        for="pan-upload"
                      >
                        File selected
                      </Label>
                      <Input
                        type="file"
                        id="pan-upload"
                        onChange={(e) => {
                          if (e.target.files[0] !== undefined) {
                            const fileLabel =
                              document.getElementById("pan-upload-label");
                            fileLabel.textContent = "File selected";
                            setPanCardDoc(
                              URL.createObjectURL(e.target.files[0])
                            );
                            handleAdditionalFilesUpload(e, "panCardDoc");
                          } else {
                            let arr = additionalInformationFiles.filter(
                              (obj) => {
                                return obj.fileId !== "panCardDoc";
                              }
                            );
                            const fileLabel =
                              document.getElementById("pan-upload-label");
                            fileLabel.textContent = "Upload PAN Card";

                            setAdditionalInformationFiles(arr);

                            setPanCardDoc("");
                          }
                        }}
                      />
                    </Col>
                    <Col
                      xs="4"
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
                          onClick={() => {
                            if (panCardDoc !== "") window.open(panCardDoc);
                          }}
                          style={{
                            marginRight: "1rem",
                          }}
                        >
                          <Eye size={14} />
                        </Button>
                        <Button
                          color="danger"
                          onClick={() => {
                            let arr = additionalInformationFiles.filter(
                              (obj) => {
                                return obj.fileId !== "panCardDoc";
                              }
                            );
                            const fileLabel =
                              document.getElementById("pan-upload-label");
                            fileLabel.textContent = "Upload PAN Card";

                            const fileInput =
                              document.getElementById("pan-upload");
                            fileInput.type = "text"; // Temporarily change the type to text
                            fileInput.type = "file";

                            setAdditionalInformationFiles(arr);
                            setPanCardDoc("");
                          }}
                          outline
                        >
                          <X size={14} />
                        </Button>
                      </div>
                    </Col>
                  </>
                )}
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-mobile">
                    GST Registration Number
                  </Label>
                  <Input
                    type="text"
                    id="register-mobile"
                    value={gstNumber}
                    onChange={(e) => setGSTNumber(e.target.value)}
                    disabled={bool_Registration}
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </Col>
                {bool_Registration ? (
                  <>
                    <Col xs="8" md="5" className="mb-1">
                      <Label
                        className="form-label"
                        for="signup-details-GST-card-copy"
                      >
                        View Uploaded GST Certificate
                      </Label>
                      <Input
                        type="file"
                        id="signup-details-GST-card-copy"
                        disabled={true}
                      />
                    </Col>
                    <Col
                      xs="4"
                      md="1"
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
                          onClick={() => {
                            if (gstDoc !== "") window.open(gstDoc);
                          }}
                          style={{
                            marginRight: "1rem",
                          }}
                        >
                          <Eye size={14} />
                        </Button>
                      </div>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col xs="8" md="4" className="mb-1">
                      <Label
                        className="gst-upload-label"
                        id="gst-upload-label"
                        for="gst-upload"
                      >
                        File selected
                      </Label>
                      <Input
                        type="file"
                        id="gst-upload"
                        onChange={(e) => {
                          if (e.target.files[0] !== undefined) {
                            const fileLabel =
                              document.getElementById("gst-upload-label");
                            fileLabel.textContent = "File selected";
                            setGSTDoc(URL.createObjectURL(e.target.files[0]));
                            handleAdditionalFilesUpload(e, "gstDoc");
                          } else {
                            let arr = additionalInformationFiles.filter(
                              (obj) => {
                                return obj.fileId !== "gstDoc";
                              }
                            );
                            const fileLabel =
                              document.getElementById("gst-upload-label");
                            fileLabel.textContent = "Upload GST Certificate";

                            setAdditionalInformationFiles(arr);

                            setGSTDoc("");
                          }
                        }}
                      />
                    </Col>
                    <Col
                      xs="4"
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
                          onClick={() => {
                            if (gstDoc !== "") window.open(gstDoc);
                          }}
                          style={{
                            marginRight: "1rem",
                          }}
                        >
                          <Eye size={14} />
                        </Button>
                        <Button
                          color="danger"
                          onClick={() => {
                            let arr = additionalInformationFiles.filter(
                              (obj) => {
                                return obj.fileId !== "gstDoc";
                              }
                            );
                            const fileLabel =
                              document.getElementById("gst-upload-label");
                            fileLabel.textContent = "Upload GST Certificate";

                            const fileInput =
                              document.getElementById("gst-upload");
                            fileInput.type = "text"; // Temporarily change the type to text
                            fileInput.type = "file";

                            setAdditionalInformationFiles(arr);
                            setGSTDoc("");
                          }}
                          outline
                        >
                          <X size={14} />
                        </Button>
                      </div>
                    </Col>
                  </>
                )}
              </Row>
              {cin ? (
                <Row>
                  <Col xs="12" sm="4" md="2" className="mb-1">
                    <Label className="form-label" for={`city-${type}`}>
                      CIN Registration
                    </Label>
                    <div
                      className="demo-inline-spacing"
                      style={{ marginTop: "-1rem" }}
                    >
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex0-active"
                          name="ex0"
                          checked={cin}
                          disabled={bool_Registration}
                          onChange={() => {
                            if (!cin) {
                              setCin(!cin);
                            }
                          }}
                        />
                        <Label className="form-label" for="ex0-active">
                          Yes
                        </Label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex0-active"
                          name="ex0"
                          checked={!cin}
                          disabled={bool_Registration}
                          onChange={() => {
                            if (cin) {
                              setCin(!cin);
                              let arr = additionalInformationFiles.filter(
                                (obj) => {
                                  return obj.fileId !== "CINDocument";
                                }
                              );
                              setAdditionalInformationFiles(arr);
                              setCINDocument("");
                            }
                          }}
                        />
                        <Label className="form-label" for="ex0-active">
                          No
                        </Label>
                      </div>
                    </div>
                  </Col>
                  <Col xs="12" md="4" className="mb-1">
                    <Label className="form-label" for="register-mobile">
                      CIN
                    </Label>
                    <Input
                      type="text"
                      id="register-mobile"
                      value={cinNumber}
                      onChange={(e) => setCINNumber(e.target.value)}
                      disabled={bool_Registration}
                    />
                  </Col>
                  {bool_Registration ? (
                    <>
                      <Col xs="8" md="5" className="mb-1">
                        <Label
                          className="form-label"
                          for="signup-details-GST-card-copy"
                        >
                          View Uploaded CIN Document
                        </Label>
                        <Input type="file" id="cin-upload" disabled={true} />
                      </Col>
                      <Col
                        xs="4"
                        md="1"
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
                            onClick={() => {
                              if (CINDocument !== "") window.open(CINDocument);
                            }}
                            style={{
                              marginRight: "1rem",
                            }}
                          >
                            <Eye size={14} />
                          </Button>
                        </div>
                      </Col>
                    </>
                  ) : (
                    <>
                      <Col xs="8" md="4" className="mb-1">
                        <Label
                          className="cin-upload-label"
                          id="cin-upload-label"
                          for="cin-upload"
                        >
                          {CINDocument !== ""
                            ? "File selected"
                            : "Upload CIN Document"}
                        </Label>
                        <Input
                          type="file"
                          id="cin-upload"
                          onChange={(e) => {
                            if (e.target.files[0] !== undefined) {
                              const fileLabel =
                                document.getElementById("cin-upload-label");
                              fileLabel.textContent = "File selected";
                              setCINDocument(
                                URL.createObjectURL(e.target.files[0])
                              );
                              handleAdditionalFilesUpload(e, "CINDocument");
                            } else {
                              let arr = additionalInformationFiles.filter(
                                (obj) => {
                                  return obj.fileId !== "CINDocument";
                                }
                              );
                              const fileLabel =
                                document.getElementById("cin-upload-label");
                              fileLabel.textContent = "Upload CIN Document";

                              setAdditionalInformationFiles(arr);

                              setCINDocument("");
                            }
                          }}
                        />
                      </Col>
                      <Col
                        xs="4"
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
                            onClick={() => {
                              if (CINDocument !== "") window.open(CINDocument);
                            }}
                            style={{
                              marginRight: "1rem",
                            }}
                          >
                            <Eye size={14} />
                          </Button>
                          <Button
                            color="danger"
                            onClick={() => {
                              let arr = additionalInformationFiles.filter(
                                (obj) => {
                                  return obj.fileId !== "CINDocument";
                                }
                              );
                              const fileLabel =
                                document.getElementById("cin-upload-label");
                              fileLabel.textContent = "Upload CIN Document";

                              const fileInput =
                                document.getElementById("cin-upload");
                              fileInput.type = "text"; // Temporarily change the type to text
                              fileInput.type = "file";

                              setAdditionalInformationFiles(arr);
                              setCINDocument("");
                            }}
                            outline
                          >
                            <X size={14} />
                          </Button>
                        </div>
                      </Col>
                    </>
                  )}
                </Row>
              ) : (
                <Row>
                  <Col xs="12" className="mb-1">
                    <Label className="form-label" for={`city-${type}`}>
                      CIN Registration
                    </Label>
                    <div
                      className="demo-inline-spacing"
                      style={{ marginTop: "-1rem" }}
                    >
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex0-active"
                          name="ex0"
                          checked={cin}
                          disabled={bool_Registration}
                          onChange={() => {
                            if (!cin) {
                              setCin(!cin);
                            }
                          }}
                        />
                        <Label className="form-label" for="ex0-active">
                          Yes
                        </Label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex0-active"
                          name="ex0"
                          checked={!cin}
                          disabled={bool_Registration}
                          onChange={() => {
                            if (cin) {
                              setCin(!cin);
                            }
                          }}
                        />
                        <Label className="form-label" for="ex0-active">
                          No
                        </Label>
                      </div>
                    </div>
                  </Col>
                </Row>
              )}
              {msme ? (
                <Row>
                  <Col xs="12" sm="4" md="2" className="mb-1">
                    <Label className="form-label" for={`city-${type}`}>
                      MSME Registration
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
                          checked={msme}
                          disabled={bool_Registration}
                          onChange={() => {
                            if (!msme) {
                              setMsme(!msme);
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
                          id="ex1-active"
                          name="ex1"
                          checked={!msme}
                          disabled={bool_Registration}
                          onChange={() => {
                            if (msme) {
                              setMsme(!msme);
                              let arr = additionalInformationFiles.filter(
                                (obj) => {
                                  return obj.fileId !== "MSMEDocument";
                                }
                              );
                              setAdditionalInformationFiles(arr);
                              setMSMEDocument("");
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
                      MSME
                    </Label>
                    <Input
                      type="text"
                      id="register-mobile"
                      value={msmeNumber}
                      onChange={(e) => {
                        setMSMENumber(e.target.value);
                      }}
                      disabled={bool_Registration}
                    />
                  </Col>
                  {bool_Registration ? (
                    <>
                      <Col xs="8" md="5" className="mb-1">
                        <Label
                          className="form-label"
                          for="signup-details-GST-card-copy"
                        >
                          View Uploaded MSME Document
                        </Label>
                        <Input type="file" id="msme-upload" disabled={true} />
                      </Col>
                      <Col
                        xs="4"
                        md="1"
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
                            onClick={() => {
                              if (MSMEDocument !== "")
                                window.open(MSMEDocument);
                            }}
                            style={{
                              marginRight: "1rem",
                            }}
                          >
                            <Eye size={14} />
                          </Button>
                        </div>
                      </Col>
                    </>
                  ) : (
                    <>
                      <Col xs="8" md="4" className="mb-1">
                        <Label
                          className="msme-upload-label"
                          id="msme-upload-label"
                          for="msme-upload"
                        >
                          {MSMEDocument !== ""
                            ? "File selected"
                            : "Upload MSME Document"}
                        </Label>
                        <Input
                          type="file"
                          id="msme-upload"
                          onChange={(e) => {
                            if (e.target.files[0] !== undefined) {
                              const fileLabel =
                                document.getElementById("msme-upload-label");
                              fileLabel.textContent = "File selected";
                              setMSMEDocument(
                                URL.createObjectURL(e.target.files[0])
                              );
                              handleAdditionalFilesUpload(e, "MSMEDocument");
                            } else {
                              let arr = additionalInformationFiles.filter(
                                (obj) => {
                                  return obj.fileId !== "MSMEDocument";
                                }
                              );
                              const fileLabel =
                                document.getElementById("msme-upload-label");
                              fileLabel.textContent = "Upload MSME Document";

                              setAdditionalInformationFiles(arr);

                              setMSMEDocument("");
                            }
                          }}
                        />
                      </Col>
                      <Col
                        xs="4"
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
                            onClick={() => {
                              if (MSMEDocument !== "")
                                window.open(MSMEDocument);
                            }}
                            style={{
                              marginRight: "1rem",
                            }}
                          >
                            <Eye size={14} />
                          </Button>
                          <Button
                            color="danger"
                            onClick={() => {
                              let arr = additionalInformationFiles.filter(
                                (obj) => {
                                  return obj.fileId !== "MSMEDocument";
                                }
                              );
                              const fileLabel =
                                document.getElementById("msme-upload-label");
                              fileLabel.textContent = "Upload MSME Document";

                              const fileInput =
                                document.getElementById("msme-upload");
                              fileInput.type = "text"; // Temporarily change the type to text
                              fileInput.type = "file";

                              setAdditionalInformationFiles(arr);
                              setMSMEDocument("");
                            }}
                            outline
                          >
                            <X size={14} />
                          </Button>
                        </div>
                      </Col>
                    </>
                  )}
                </Row>
              ) : (
                <Row>
                  <Col xs="12" className="mb-1">
                    <Label className="form-label" for={`city-${type}`}>
                      MSME Registration
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
                          checked={msme}
                          disabled={bool_Registration}
                          onChange={() => {
                            if (!msme) {
                              setMsme(!msme);
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
                          id="ex1-active"
                          name="ex1"
                          checked={!msme}
                          disabled={bool_Registration}
                          onChange={() => {
                            if (msme) {
                              setMsme(!msme);
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
                          disabled={bool_Registration}
                          onChange={() => {
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
                          disabled={bool_Registration}
                          onChange={() => {
                            if (pf) {
                              setPf(!pf);
                              let arr = additionalInformationFiles.filter(
                                (obj) => {
                                  return obj.fileId !== "PFDocument";
                                }
                              );
                              setAdditionalInformationFiles(arr);
                              setPFDocument("");
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
                      PF Number
                    </Label>
                    <Input
                      type="text"
                      id="register-mobile"
                      value={pfNumber}
                      onChange={(e) => {
                        setPFNumber(e.target.value);
                      }}
                      disabled={bool_Registration}
                    />
                  </Col>
                  {bool_Registration ? (
                    <>
                      <Col xs="8" md="5" className="mb-1">
                        <Label
                          className="form-label"
                          for="signup-details-GST-card-copy"
                        >
                          View Uploaded PF Document
                        </Label>
                        <Input type="file" id="pf-upload" disabled={true} />
                      </Col>
                      <Col
                        xs="4"
                        md="1"
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
                            onClick={() => {
                              if (PFDocument !== "") window.open(PFDocument);
                            }}
                            style={{
                              marginRight: "1rem",
                            }}
                          >
                            <Eye size={14} />
                          </Button>
                        </div>
                      </Col>
                    </>
                  ) : (
                    <>
                      <Col xs="8" md="4" className="mb-1">
                        <Label
                          className="pf-upload-label"
                          id="pf-upload-label"
                          for="pf-upload"
                        >
                          {PFDocument !== ""
                            ? "File selected"
                            : "Upload PF Document"}
                        </Label>
                        <Input
                          type="file"
                          id="pf-upload"
                          onChange={(e) => {
                            if (e.target.files[0] !== undefined) {
                              const fileLabel =
                                document.getElementById("pf-upload-label");
                              fileLabel.textContent = "File selected";
                              setPFDocument(
                                URL.createObjectURL(e.target.files[0])
                              );
                              handleAdditionalFilesUpload(e, "PFDocument");
                            } else {
                              let arr = additionalInformationFiles.filter(
                                (obj) => {
                                  return obj.fileId !== "PFDocument";
                                }
                              );
                              const fileLabel =
                                document.getElementById("pf-upload-label");
                              fileLabel.textContent = "Upload PF Document";

                              setAdditionalInformationFiles(arr);

                              setPFDocument("");
                            }
                          }}
                        />
                      </Col>
                      <Col
                        xs="4"
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
                            onClick={() => {
                              if (PFDocument !== "") window.open(PFDocument);
                            }}
                            style={{
                              marginRight: "1rem",
                            }}
                          >
                            <Eye size={14} />
                          </Button>
                          <Button
                            color="danger"
                            onClick={() => {
                              let arr = additionalInformationFiles.filter(
                                (obj) => {
                                  return obj.fileId !== "PFDocument";
                                }
                              );
                              const fileLabel =
                                document.getElementById("pf-upload-label");
                              fileLabel.textContent = "Upload PF Document";

                              const fileInput =
                                document.getElementById("pf-upload");
                              fileInput.type = "text"; // Temporarily change the type to text
                              fileInput.type = "file";

                              setAdditionalInformationFiles(arr);
                              setPFDocument("");
                            }}
                            outline
                          >
                            <X size={14} />
                          </Button>
                        </div>
                      </Col>
                    </>
                  )}
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
                          disabled={bool_Registration}
                          onChange={() => {
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
                          disabled={bool_Registration}
                          onChange={() => {
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
              {esic ? (
                <Row>
                  <Col xs="12" sm="4" md="2" className="mb-1">
                    <Label className="form-label" for={`city-${type}`}>
                      ESIC Registration
                    </Label>
                    <div
                      className="demo-inline-spacing"
                      style={{ marginTop: "-1rem" }}
                    >
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex3-active"
                          name="ex3"
                          checked={esic}
                          disabled={bool_Registration}
                          onChange={() => {
                            if (!esic) {
                              setEsic(!esic);
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
                          id="ex3-active"
                          name="ex3"
                          checked={!esic}
                          disabled={bool_Registration}
                          onChange={() => {
                            if (esic) {
                              setEsic(!esic);
                              let arr = additionalInformationFiles.filter(
                                (obj) => {
                                  return obj.fileId !== "ESICDocument";
                                }
                              );
                              setAdditionalInformationFiles(arr);
                              setESICDocument("");
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
                      ESIC Number
                    </Label>
                    <Input
                      type="text"
                      id="register-mobile"
                      value={esicNumber}
                      onChange={(e) => {
                        setESICNumber(e.target.value);
                      }}
                      disabled={bool_Registration}
                    />
                  </Col>
                  {bool_Registration ? (
                    <>
                      <Col xs="8" md="5" className="mb-1">
                        <Label
                          className="form-label"
                          for="signup-details-GST-card-copy"
                        >
                          View Uploaded ESIC Document
                        </Label>
                        <Input type="file" id="esic-upload" disabled={true} />
                      </Col>
                      <Col
                        xs="4"
                        md="1"
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
                            onClick={() => {
                              if (ESICDocument !== "")
                                window.open(ESICDocument);
                            }}
                            style={{
                              marginRight: "1rem",
                            }}
                          >
                            <Eye size={14} />
                          </Button>
                        </div>
                      </Col>
                    </>
                  ) : (
                    <>
                      <Col xs="8" md="4" className="mb-1">
                        <Label
                          className="esic-upload-label"
                          id="esic-upload-label"
                          for="esic-upload"
                        >
                          {ESICDocument !== ""
                            ? "File selected"
                            : "Upload ESIC Document"}
                        </Label>
                        <Input
                          type="file"
                          id="esic-upload"
                          onChange={(e) => {
                            if (e.target.files[0] !== undefined) {
                              const fileLabel =
                                document.getElementById("esic-upload-label");
                              fileLabel.textContent = "File selected";
                              setESICDocument(
                                URL.createObjectURL(e.target.files[0])
                              );
                              handleAdditionalFilesUpload(e, "ESICDocument");
                            } else {
                              let arr = additionalInformationFiles.filter(
                                (obj) => {
                                  return obj.fileId !== "ESICDocument";
                                }
                              );
                              const fileLabel =
                                document.getElementById("esic-upload-label");
                              fileLabel.textContent = "Upload ESIC Document";

                              setAdditionalInformationFiles(arr);

                              setESICDocument("");
                            }
                          }}
                        />
                      </Col>
                      <Col
                        xs="4"
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
                            onClick={() => {
                              if (ESICDocument !== "")
                                window.open(ESICDocument);
                            }}
                            style={{
                              marginRight: "1rem",
                            }}
                          >
                            <Eye size={14} />
                          </Button>
                          <Button
                            color="danger"
                            onClick={() => {
                              let arr = additionalInformationFiles.filter(
                                (obj) => {
                                  return obj.fileId !== "ESICDocument";
                                }
                              );
                              const fileLabel =
                                document.getElementById("esic-upload-label");
                              fileLabel.textContent = "Upload ESIC Document";

                              const fileInput =
                                document.getElementById("esic-upload");
                              fileInput.type = "text"; // Temporarily change the type to text
                              fileInput.type = "file";

                              setAdditionalInformationFiles(arr);
                              setESICDocument("");
                            }}
                            outline
                          >
                            <X size={14} />
                          </Button>
                        </div>
                      </Col>
                    </>
                  )}
                </Row>
              ) : (
                <Row>
                  <Col xs="12" className="mb-1">
                    <Label className="form-label" for={`city-${type}`}>
                      ESIC Registration
                    </Label>
                    <div
                      className="demo-inline-spacing"
                      style={{ marginTop: "-1rem" }}
                    >
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex3-active"
                          name="ex3"
                          checked={esic}
                          disabled={bool_Registration}
                          onChange={() => {
                            if (!esic) {
                              setEsic(!esic);
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
                          id="ex3-active"
                          name="ex3"
                          checked={!esic}
                          disabled={bool_Registration}
                          onChange={() => {
                            if (esic) {
                              setEsic(!esic);
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
            <Col xs="6" md="10">
              <div className="content-header">
                <h3 className="mb-0">Bank Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="4" md="1">
              <Button
                color={`${bool_Bank ? "primary" : "success"}`}
                outline
                onClick={() => handleBoolBankDetailsChange()}
              >
                {bool_Bank ? "Edit" : "Save"}
              </Button>
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
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    disabled={bool_Bank}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-name">
                    Branch Detail
                  </Label>
                  <Input
                    type="text"
                    id="register-name"
                    value={bankBranchName}
                    onChange={(e) => setBankBranchName(e.target.value)}
                    disabled={bool_Bank}
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
                    value={bankAccountNumber}
                    onChange={(e) => setBankAccountNumber(e.target.value)}
                    disabled={bool_Bank}
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
                    value={bankIFSCCode}
                    onChange={(e) => setBankIFSCCode(e.target.value)}
                    disabled={bool_Bank}
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
                    disabled={bool_Bank}
                    value={bankMICR}
                    onChange={(e) => setBankMICR(e.target.value)}
                  />
                </Col>
                {bool_Bank ? (
                  <>
                    <Col xs="8" md="5" className="mb-1">
                      <Label
                        className="form-label"
                        for="signup-details-GST-card-copy"
                      >
                        View Uploaded Cancelled Cheque
                      </Label>
                      <Input
                        type="file"
                        id="signup-details-GST-card-copy"
                        placeholder=""
                        disabled={true}
                      />
                    </Col>
                    <Col
                      xs="4"
                      md="1"
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
                          onClick={() => {
                            if (cancelledCheque !== "")
                              window.open(cancelledCheque);
                          }}
                          style={{
                            marginRight: "1rem",
                          }}
                        >
                          <Eye size={14} />
                        </Button>
                      </div>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col xs="8" md="4" className="mb-1">
                      <Label
                        className="cheque-upload-label"
                        id="cheque-upload-label"
                        for="cheque-upload"
                      >
                        File selected
                      </Label>
                      <Input
                        type="file"
                        id="cheque-upload"
                        onChange={(e) => {
                          if (e.target.files[0] !== undefined) {
                            const fileLabel = document.getElementById(
                              "cheque-upload-label"
                            );
                            fileLabel.textContent = "File selected";
                            setCancelledCheque(
                              URL.createObjectURL(e.target.files[0])
                            );
                            setChequeFile(e.target.files[0]);
                          } else {
                            const fileLabel = document.getElementById(
                              "cheque-upload-label"
                            );
                            fileLabel.textContent = "Upload Cancelled Cheque";
                            setChequeFile(null);

                            setCancelledCheque("");
                          }
                        }}
                      />
                    </Col>
                    <Col
                      xs="4"
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
                          onClick={() => {
                            if (cancelledCheque !== "")
                              window.open(cancelledCheque);
                          }}
                          style={{
                            marginRight: "1rem",
                          }}
                        >
                          <Eye size={14} />
                        </Button>
                        <Button
                          color="danger"
                          onClick={() => {
                            const fileLabel = document.getElementById(
                              "cheque-upload-label"
                            );
                            fileLabel.textContent = "Upload Cancelled Cheque";

                            const fileInput =
                              document.getElementById("cheque-upload");
                            fileInput.type = "text"; // Temporarily change the type to text
                            fileInput.type = "file";

                            setChequeFile(null);
                            setCancelledCheque("");
                          }}
                          outline
                        >
                          <X size={14} />
                        </Button>
                      </div>
                    </Col>
                  </>
                )}
              </Row>
            </Form>
          </CardBody>
        ) : (
          <p />
        )}
      </Card>
    </Col>
  );
};

export default WorkmanFirmEditProf;
