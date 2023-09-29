// ** React Imports
import { Fragment, useState, useEffect } from "react";

import { ToastBar, toast } from "react-hot-toast";
import validator from "validator";


// ** Third Party Components
import Select from "react-select";

import { InputNumber } from "antd";

import cityStateData from "../cityStateData";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  X,
  Eye,
  Plus,
  ChevronLeft,
  ChevronRight,
  Search,
  Minus,
  MoreVertical,
} from "react-feather";

// ** Utils
import { selectThemeColors } from "@utils";

// ** Custom Components
import Repeater from "@components/repeater";

import data from "../pincodeData";
import { Link, useLocation, useNavigate } from "react-router-dom";
import skillData from "../skillData";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return [innerWidth, innerHeight];
}

// ** Reactstrap Importsk
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
  Table,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  UncontrolledTooltip,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";

const WorkmanEditProf = ({ type = "wizard-modern" }) => {
  const navigateTo = useNavigate();

  const [typeStakeholder, setTypeStakeholder] = useState("");

  const langLevel = {
    0: "None",
    1: "Beginner",
    2: "Fluent",
  };
  const langLevelReverse = {
    None: 0,
    Beginner: 1,
    Fluent: 2,
  };

  //set file collection for each section

  const [profileDoc, setProfileDoc] = useState(null);
  const [chequeFile, setChequeFile] = useState(null);
  const [additionalInformationFiles, setAdditionalInformationFiles] = useState(
    []
  );
  const [educationDetailsFiles, setEducationDetailsFiles] = useState([]);

  const [firmName, setFirmName] = useState("");
  const [firmId, setFirmID] = useState("");
  const [personalData, setPersonalData] = useState({});
  const [educationDetails, setEducationDetails] = useState({});
  const [additionalInformation, setAdditionalInformation] = useState({});
  const [bankDetails, setBankDetails] = useState({});
  const [servicePincode, setServicePincode] = useState({});
  const [affiliationDetails, setAffiliationDetails] = useState({});
  const [languageDetails, setLanguageDetails] = useState({});
  const [skillDetails, setSkillDetails] = useState({});

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

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [localityArea, setLocalityArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const [profilePic, setProfilePic] = useState("");

  const [basiced, setBasiced] = useState(1);
  const [iti, setIti] = useState(false);
  const [dip, setDip] = useState(false);
  const [deg, setDeg] = useState(false);

  const [ITICertificate, setITICertificate] = useState("");
  const [diplomaCertificate, setDiplomaCertificate] = useState("");
  const [degreeCertificate, setDegreeCertificate] = useState("");

  const [panCardNumber, setPanCardNumber] = useState("");
  const [aadharCardNumber, setAadharCardNumber] = useState("");
  const [panCardDoc, setPanCardDoc] = useState("xxx");
  const [aadharCardDoc, setAadharCardDoc] = useState("");
  const [pfNumber, setPFNumber] = useState("");
  const [PFDocument, setPFDocument] = useState("xxx");
  const [bankName, setBankName] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [bankIFSCCode, setBankIFSCCode] = useState("");
  const [bankBranchName, setBankBranchName] = useState("");
  const [cancelledCheque, setCancelledCheque] = useState("xxx");
  const [bankMICR, setBankMICR] = useState("");

  const [selectedState, setSelectedState] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [districtOptions, setDistrictOptions] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [divisionOptions, setDivisionOptions] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [disableDistrict, setDisableDistrict] = useState(true);
  const [disableDivision, setDisableDivision] = useState(true);
  const [districtData, setDistrictData] = useState([]);
  const [divisionData, setDivisionData] = useState([]);
  const [tmpClick, setTmpClick] = useState(true);

  const [areaRecordsChkd, setAreaRecordsChkd] = useState([]);
  const [uncheckedAreaRecord, setUncheckedAreaRecord] = useState([]);
  const [tempRecord1, setTempRecord1] = useState([]);
  const [tempRecord, setTempRecord] = useState([]);

  const [radioRecord, setRadioRecord] = useState("");

  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchArray, setSearchArray] = useState([]);

  const [rowsPerPage, setRowsPerPage] = useState({ value: "10", label: "10" });
  const [totalRows, setTotalRows] = useState(10);

  const [currentPageTable, setCurrentPageTable] = useState(1);
  const [totalPageTable, setTotalPageTable] = useState(1);

  //skill states
  const [levelOfExpertise, setLevelOfExpertise] = useState(true);
  const [handlingMaterials, setHandlingMaterials] = useState(false);
  const [materialListValue, setMaterialListValue] = useState([]);

  const [serviceTypeInterest, setServiceTypeInterest] =
    useState("Installation");
  const [installationSkillInterest, setInstallationSkillInterest] = useState(
    []
  );
  const [repairSkillInterest, setRepairSkillInterest] = useState([]);
  const [newBuildSkillInterest, setNewBuildSkillInterest] = useState([]);

  const [installRec, setInstallRec] = useState([]);
  const [repairRec, setRepairRec] = useState([]);
  const [newbuildRec, setNewbuildRec] = useState([]);
  const [tempRecords, setTempRecords] = useState([]);

  const [serviceType, setServiceType] = useState("Installation");
  const [saveInstallation, setSaveInstallation] = useState(false);
  const [saveRepair, setSaveRepair] = useState(false);
  const [saveNewbuild, setSaveNewBuild] = useState(false);
  const [servApplData, setServApplData] = useState([]);
  const [skillCatData, setSkillCatData] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState([]);
  const [skillOptions, setSkillOptions] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [subskillOpt, setSubskillOpt] = useState([]);
  const [selectedSubskill, setSelectedSubskill] = useState([]);
  const serviceApplication = skillData.servAppl;
  const dataSkill = skillData.skillData;
  const applicationCode = skillData.applicationCode;
  const subSkillCode = skillData.subSkillCode;
  const skillCode = skillData.skillCode;
  const serviceTypeCode = skillData.serviceTypeCode;

  const [certificateIndex, setCertificateIndex] = useState(-1);
  const [showCertificateIndex, setShowCertificateIndex] = useState(-1);
  const [tempCourseName, setTempCourseName] = useState("");
  const [tempCourseFile, setTempCourseFile] = useState(null);

  const [installationTestimonialFiles, setInstallationTestimonialFiles] =
    useState([]);
  const [repairTestimonialFiles, setRepairTestimonialFiles] = useState([]);
  const [newBuildTestimonialFiles, setNewBuildTestimonialFiles] = useState([]);

  const [installationCertificationFiles, setInstallationCertificationFiles] =
    useState([]);
  const [repairCertificationFiles, setRepairCertificationFiles] = useState([]);
  const [newBuildCertificationFiles, setNewBuildCertificationFiles] = useState(
    []
  );

  const setData = (obj) => {
    setPersonalData(obj.personalData);
    setEducationDetails(obj.educationDetails);
    setAdditionalInformation(obj.additionalInformation);
    setBankDetails(obj.bankDetails);
    setServicePincode(obj.servicePincode);
    setAffiliationDetails(obj.affiliationDetails);
    setLanguageDetails(obj.languageDetails);
    setSkillDetails(obj.skillDetails);

    setProfilePic(obj.personalData.profilePic);
    // console.log(`hehe - ${obj.personalData.contactNumber}`);
    setFullName(obj.personalData.fullName);
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
    setPincode(obj.personalData.pincode.toString());
    setCity(obj.personalData.city);
    setSelectedCity({
      value: obj.personalData.city,
      label: obj.personalData.city,
    });
    setSelectedStatePersonal({
      value: obj.personalData.state,
      label: obj.personalData.state,
    });
    setState(obj.personalData.state);
    setCountry(obj.personalData.country);
    setWork(obj.personalData.opentoWorkOutside);

    if (obj.educationDetails.basicEducation == "below 10th grade") {
      setBasiced(1);
      setQual([]);
      setIti(false);
      setDeg(false);
      setDip(false);
      setITICertificate("");
      setDiplomaCertificate("");
      setDegreeCertificate("");
    } else if (obj.educationDetails.basicEducation == "10th/12th grade") {
      setBasiced(2);
      setQual([]);
      setIti(false);
      setDeg(false);
      setDip(false);
      setITICertificate("");
      setDiplomaCertificate("");
      setDegreeCertificate("");
    } else if (
      obj.educationDetails.basicEducation == "Technical Qualification"
    ) {
      setBasiced(3);
      setQual(obj.educationDetails.technicalQualification);
      if (obj.educationDetails.technicalQualification.includes("ITI")) {
        setIti(true);
        setITICertificate(obj.educationDetails.ITICertificate);
      }
      if (
        obj.educationDetails.technicalQualification.includes(
          "Diploma - Specialization"
        )
      ) {
        setDip(true);
        setDiplomaCertificate(obj.educationDetails.diplomaCertificate);
      }
      if (obj.educationDetails.technicalQualification.includes("Degree")) {
        setDeg(true);
        setDegreeCertificate(obj.educationDetails.degreeCertificate);
      }
    }
    const langObj = obj.languageDetails;
    let arr = [];
    langObj.forEach((obj1) => {
      arr.push({
        name: obj1.language,
        speak: langLevelReverse[obj1.speaking],
        read: langLevelReverse[obj1.reading],
        write: langLevelReverse[obj1.writing],
      });
    });
    setLang(arr);
    setPanCardNumber(obj.additionalInformation.panCardNumber);
    setAadharCardNumber(obj.additionalInformation.aadharNumber);
    setPanCardDoc(obj.additionalInformation.panCardDoc);
    setAadharCardDoc(obj.additionalInformation.aadharCardDoc);
    if ("PF" in obj.additionalInformation) {
      setPf(true);
      setPFNumber(obj.additionalInformation.PF);
      setPFDocument(obj.additionalInformation["PFDocument"]);
    } else {
      setPf(false);
    }
    setBankName(obj.bankDetails.bankName);
    setBankAccountNumber(obj.bankDetails.accountNumber);
    setBankIFSCCode(obj.bankDetails.IFSC);
    setBankBranchName(obj.bankDetails.branchDetail);
    setCancelledCheque(obj.bankDetails.cancelledCheque);
    setBankMICR(obj.bankDetails.MICR);

    //pincode data
    setTempRecord1(obj.servicePincode.selectedPincodes);
    setTotalRecords(obj.servicePincode.selectedPincodes.length);
    let pageLength =
      obj.servicePincode.selectedPincodes.length % 10 > 0
        ? Math.floor(obj.servicePincode.selectedPincodes.length.length / 10) + 1
        : Math.floor(obj.servicePincode.selectedPincodes.length.length / 10);

    setTotalPageTable(pageLength);

    //skill data

    setHandlingMaterials(obj.affiliationDetails.handlingMaterials);
    setLevelOfExpertise(obj.affiliationDetails.experienced);
    let mat = [];
    obj.affiliationDetails.materialList.forEach((material) => {
      mat.push({ value: material, label: material });
    });
    setMaterialListValue(mat);

    let tmpSelectedApplication = [];
    let tmpSelectedSkill = [];
    let tmpSelectedSubSkill = [];

    obj.skillDetails.installation.forEach((itm1) => {
      tmpSelectedApplication.push({
        value: itm1.serviceApplication,
        label: itm1.serviceApplication,
      });
      if (itm1.skillCategory !== "") {
        tmpSelectedSkill.push({
          value: itm1.skillCategory,
          label: itm1.skillCategory,
        });
      }
      if (itm1.subSkillCategory !== "") {
        tmpSelectedSubSkill.push({
          value: itm1.subSkillCategory,
          label: itm1.subSkillCategory,
        });
      }
    });
    tmpSelectedApplication = tmpSelectedApplication.filter((obj, index, ar) => {
      return index === ar.findIndex((t) => t.value === obj.value);
    });
    tmpSelectedSkill = tmpSelectedSkill.filter((obj, index, ar) => {
      return index === ar.findIndex((t) => t.value === obj.value);
    });
    tmpSelectedSubSkill = tmpSelectedSubSkill.filter((obj, index, ar) => {
      return index === ar.findIndex((t) => t.value === obj.value);
    });
    if (obj.affiliationDetails.experienced) {
      setInstallRec(obj.skillDetails.installation);
      setRepairRec(obj.skillDetails.repair);
      setNewbuildRec(obj.skillDetails.newBuild);
      handleServApplChange(
        tmpSelectedApplication,
        tmpSelectedSkill,
        tmpSelectedSubSkill,
        "Installation"
      );
      setTempRecords(obj.skillDetails.installation);
    } else {
      setTempRecords(obj.skillDetails.installation);
      setInstallationSkillInterest(obj.skillDetails.installation);
      setRepairSkillInterest(obj.skillDetails.repair);
      setNewBuildSkillInterest(obj.skillDetails.newBuild);

      setSelectedApplication(tmpSelectedApplication);
      setSelectedSkill(tmpSelectedSkill);
      setSelectedSubskill(tmpSelectedSubSkill);
    }
    setServiceType("Installation");
    setServiceTypeInterest("Installation");
  };

  useEffect(() => {
    async function getUserDetails() {
      const fetchResponse = await fetch(
        "http://localhost:3002/api/workmanIndividual/details",
        {
          method: "GET",
          credentials: "include",
        }
      );
      // console.log(fetchResponse);
      if (fetchResponse.status == 500) {
        toast.error("Something went wrong!");
      } else {
        const fetchData = await fetchResponse.json();
        if (fetchResponse.status == 200) {
          setData(fetchData.user);
          setTypeStakeholder(fetchData.stakeholder);
          setFirmID(fetchData.user.firmID);
          // console.log(fetchData.stakeholder);
          if (fetchData.stakeholder == "Partner") {
            const fetchResponse2 = await fetch(
              `http://localhost:3002/api/workmanFirm/name?userid=${fetchData.user.firmID}`,
              {
                method: "GET",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
              }
            );
            if (fetchResponse2.status == 500) {
              toast.error("Couldn't read firm name!");
            } else {
              const fetchData2 = await fetchResponse2.json();
              if (fetchResponse2.status == 200) {
                // toast.success(`${fetchData2}`);
                setFirmName(fetchData2.firmName);
              } else {
                toast.error("Couldn't read firm name!");
              }
            }
          }
        } else if (fetchResponse.status == 404) {
          if ("userFound" in fetchData) {
            //form not filled
            toast.error("Complete Profile!!");
            navigateTo("/workman/firm/Profile");
          } else {
            
          }
        }
      }
    }
    getUserDetails();
  }, []);
  // useEffect(() => {
  //   if (!levelOfExpertise) {
  //     let arr = skillInterestRecords.installation;
  //     arr.forEach((obj) => {
  //       tmp1.push({
  //         value: obj.application,
  //         label: obj.application,
  //       });
  //       obj.skill.forEach((obj2) => {
  //         if (obj2.name !== "") {
  //           tmp2.push({
  //             value: obj2.name,
  //             label: obj2.name,
  //           });
  //         }
  //         obj2.subskill.forEach((obj3) => {
  //           tmp3.push({
  //             value: obj3,
  //             label: obj3,
  //           });
  //         });
  //       });
  //     });

  //     tmp2 = tmp2.filter((obj, index, ar) => {
  //       return index === ar.findIndex((t) => t.value === obj.value);
  //     });

  //     tmp3 = tmp3.filter((obj, index, ar) => {
  //       return index === ar.findIndex((t) => t.value === obj.value);
  //     });
  //   }
  // }, [skillInterestRecords, skillRecords]);
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

  const [bool_Personal_Data, setBool_Personal_Data] = useState(true);
  const [bool_Education, setBool_Education] = useState(true);
  const [bool_Registration, setBool_Registration] = useState(true);
  const [bool_Language, setBool_Language] = useState(true);
  const [bool_Bank, setBool_Bank] = useState(true);
  const [bool_Pincodes, setBool_Pincodes] = useState(true);
  const [bool_Affiliation, setBool_Affiliation] = useState(true);

  const [showSkill, setShowSkill] = useState(true);

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const [pf, setPf] = useState(null);

  const [showReg, setShowReg] = useState(true);
  const [showBank, setShowBank] = useState(true);
  const [showPin, setShowPin] = useState(true);

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

  const [work, setWork] = useState();

  const [qual, setQual] = useState([]);

  const default_Lang = [
    { name: "English", speak: 1, write: 1, read: 1 },
    { name: "Hindi", speak: 2, write: 1, read: 1 },
    { name: "Marathi", speak: 2, write: 2, read: 2 },
  ];

  const [langName, setLangName] = useState("");
  const [langSpeak, setLangSpeak] = useState(0);
  const [langWrite, setLangWrite] = useState(0);
  const [langRead, setLangRead] = useState(0);
  const [lang, setLang] = useState([]);

  const handleNewLang = () => {
    if (
      langName !== "" &&
      (langSpeak !== 0 || langWrite !== 0 || langRead !== 0)
    ) {
      setLang([
        ...lang,
        {
          name: langName,
          speak: langSpeak,
          write: langWrite,
          read: langRead,
        },
      ]);
      setLangName("");
      setLangSpeak(0);
      setLangWrite(0);
      setLangRead(0);
    } else {
      alert("Enter fluency details for language!!");
    }
  };

  const handleEditLang = (ind) => {
    let langObj = lang.at(ind);
    handleDeleteLang(ind);
    setLangName(langObj.name);
    setLangSpeak(langObj.speak);
    setLangWrite(langObj.write);
    setLangRead(langObj.read);
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

  // useEffect(() => {
  //   setTempRecords(levelOfExpertise ? installRec : skillInterestRecords);
  //   console.log("Temp", tempRecords);
  //   setNewbuildRec(levelOfExpertise ? skillRecords.newbuild : []);
  //   setRepairRec(levelOfExpertise ? skillRecords.repair : []);
  //   setInstallRec(levelOfExpertise ? skillRecords.installation : []);
  //   setInstallationSkillInterest(skillInterestRecords.installation);
  //   setRepairSkillInterest(skillInterestRecords.repair);
  //   setNewBuildSkillInterest(skillInterestRecords.newbuild);
  // }, [skillInterestRecords, skillRecords]);

  const handleInterestApplication = (
    servType = "Installation",
    setVal = false,
    useTmp = false
  ) => {
    let arr = [];
    if (servType === "Installation") {
      arr = useTmp ? tempRecords : installationSkillInterest;
    } else if (servType === "Repair") {
      arr = useTmp ? tempRecords : repairSkillInterest;
    } else if (servType === "New Build") {
      arr = useTmp ? tempRecords : newBuildSkillInterest;
    }
    let tmp = [];
    arr.forEach((obj) => {
      tmp.push({
        value: obj.serviceApplication,
        label: obj.serviceApplication,
      });
    });
    tmp = tmp.filter((obj, index, ar) => {
      return index === ar.findIndex((t) => t.value === obj.value);
    });
    if (setVal) {
      // console.log(tmp);
      setSelectedApplication(tmp);
    } else {
      return tmp;
    }
  };

  const handleInterestSkill = (
    servType = "Installation",
    setVal = false,
    useTmp = false
  ) => {
    let arr = [];
    if (servType === "Installation") {
      arr = useTmp ? tempRecords : installationSkillInterest;
    } else if (servType === "Repair") {
      arr = useTmp ? tempRecords : repairSkillInterest;
    } else if (servType === "New Build") {
      arr = useTmp ? tempRecords : newBuildSkillInterest;
    }
    let tmp = [];
    arr.forEach((obj) => {
      if (obj.skillCategory !== "") {
        tmp.push({
          value: obj.skillCategory,
          label: obj.skillCategory,
        });
      }
    });
    tmp = tmp.filter((obj, index, ar) => {
      return index === ar.findIndex((t) => t.value === obj.value);
    });

    if (setVal) {
      // console.log(tmp);
      setSelectedSkill(tmp);
    } else {
      return tmp;
    }
  };

  const handleInterestSubskill = (
    servType = "Installation",
    setVal = false,
    useTmp = false
  ) => {
    let arr = [];
    if (servType === "Installation") {
      arr = useTmp ? tempRecords : installationSkillInterest;
    } else if (servType === "Repair") {
      arr = useTmp ? tempRecords : repairSkillInterest;
    } else if (servType === "New Build") {
      arr = useTmp ? tempRecords : newBuildSkillInterest;
    }
    let tmp = [];
    arr.forEach((obj) => {
      if (obj.subSkillCategory !== "") {
        tmp.push({
          value: obj.subSkillCategory,
          label: obj.subSkillCategory,
        });
      }
    });
    tmp = tmp.filter((obj, index, ar) => {
      return index === ar.findIndex((t) => t.value === obj.value);
    });

    if (setVal) {
      // console.log(tmp);
      setSelectedSubskill(tmp);
    } else {
      return tmp;
    }
  };

  const handleSkillInterestChange = (
    selectAppl,
    selectSkill,
    selectSubSkill,
    servType = serviceTypeInterest
  ) => {
    //updates application
    let tmp = [];
    let tmp1 = []; //application data
    selectAppl.forEach((obj) => {
      dataSkill.forEach((obj2) => {
        if (obj.value === obj2.application) {
          let arr = [];
          if (servType == "Installation") {
            arr = obj2.skillset.installation.skill;
          } else if (servType == "Repair") {
            arr = obj2.skillset.repair.skill;
          } else {
            arr = obj2.skillset.newbuild.skill;
          }
          tmp.push({ value: obj2.application, label: obj2.application });
          tmp1.push({
            application: obj2.application,
            skill: arr,
          });
        }
      });
    });
    let tmp2 = []; //skill opts
    let tmp3 = []; //subskill opts

    tmp1.forEach((obj1) => {
      obj1.skill.forEach((obj2) => {
        if (obj2.name !== "") {
          tmp2.push({ value: obj2.name, label: obj2.name });
        } else {
          obj2.subskill.forEach((itm1) => {
            tmp3.push({ value: itm1, label: itm1 });
          });
        }
      });
    });

    const uniqueSkillOpt = tmp2.filter((obj4, index, arr) => {
      return index === arr.findIndex((t) => t.value === obj4.value);
    });

    //upatedskills
    let tmp4 = selectSkill.filter((obj1) => {
      return uniqueSkillOpt.findIndex((t) => t.value === obj1.value) >= 0;
    });

    tmp1.forEach((obj1) => {
      obj1.skill.forEach((obj2) => {
        if (obj2.name !== "") {
          if (0 <= tmp4.findIndex((t) => t.value === obj2.name)) {
            obj2.subskill.forEach((itm1) => {
              tmp3.push({ value: itm1, label: itm1 });
            });
          }
        }
      });
    });

    const uniqueSubskillOpt = tmp3.filter((obj4, index, arr) => {
      return index === arr.findIndex((t) => t.value === obj4.value);
    });

    //updatessubskills
    let tmp5 = selectSubSkill.filter((obj1) => {
      return 0 <= uniqueSubskillOpt.findIndex((t) => t.value === obj1.value);
    });

    //temprecs
    let tmp6 = [];
    tmp1.forEach((obj1) => {
      // let arr2 = [];
      obj1.skill.forEach((obj2) => {
        // let arr1 = [];
        if (
          0 <= tmp4.findIndex((t) => t.value === obj2.name) ||
          obj2.name === ""
        ) {
          if (obj2.subskill.length === 0) {
            tmp6.push({
              serviceApplication: obj1.application,
              skillCategory: obj2.name,
              subSkillCategory: "",
              certifications: [],
              experience: "0",
              training: false,
              testimonial: [],
            });
          } else {
            obj2.subskill.forEach((obj3) => {
              if (0 <= tmp5.findIndex((x) => x.value === obj3)) {
                tmp6.push({
                  serviceApplication: obj1.application,
                  skillCategory: obj2.name,
                  subSkillCategory: obj3,
                  certifications: [],
                  experience: "0",
                  training: false,
                  testimonial: [],
                });
              }
            });
          }
          // arr2.push({
          //   name: obj2.name,
          //   subskill: arr1,
          // });
        }
      });
      // tmp6.push({
      //   application: obj1.application,
      //   skill: arr2,
      // });
    });

    setSelectedApplication(tmp);
    setSkillOptions(uniqueSkillOpt);
    setSubskillOpt(uniqueSubskillOpt);
    setSelectedSkill(tmp4);
    setSelectedSubskill(tmp5);
    setTempRecords(tmp6);
  };

  const handleSkillInterestSave = () => {
    if (serviceTypeInterest == "Installation") {
      setServiceTypeInterest("Repair");
      // console.log(tempRecords);
      setInstallationSkillInterest(tempRecords);
      setTempRecords(repairSkillInterest);

      handleInterestApplication("Repair", true);
      handleInterestSkill("Repair", true);
      handleInterestSubskill("Repair", true);
    } else if (serviceTypeInterest == "Repair") {
      setServiceTypeInterest("New Build");
      setRepairSkillInterest(tempRecords);
      setTempRecords(newBuildSkillInterest);

      handleInterestApplication("New Build", true);
      handleInterestSkill("New Build", true);
      handleInterestSubskill("New Build", true);
    } else {
      setServiceTypeInterest("");
      // console.log(tempRecords);
      setNewBuildSkillInterest(tempRecords);
      setSelectedApplication([]);
      setSkillOptions([]);
      setSubskillOpt([]);
      setSelectedSkill([]);
      setSelectedSubskill([]);
      setTempRecords([]);
    }
  };

  const changeExperienceToTrue = () => {
    setServiceType("Installation");
    let tempSelectedApplication = [];
    let tempSelectedSkillCat = [];
    let tempSelectedSubskillCat = [];
    installRec.forEach((obj) => {
      tempSelectedApplication.push({
        value: obj.serviceApplication,
        label: obj.serviceApplication,
      });
      if (obj.skillCategory !== "") {
        tempSelectedSkillCat.push({
          value: obj.skillCategory,
          label: obj.skillCategory,
        });
      }
      if (obj.subSkillCategory !== "") {
        tempSelectedSubskillCat.push({
          value: obj.subSkillCategory,
          label: obj.subSkillCategory,
        });
      }
    });
    tempSelectedApplication = tempSelectedApplication.filter(
      (obj4, index, arr) => {
        return index === arr.findIndex((t) => t.value === obj4.value);
      }
    );
    tempSelectedSkillCat = tempSelectedSkillCat.filter((obj4, index, arr) => {
      return index === arr.findIndex((t) => t.value === obj4.value);
    });
    tempSelectedSubskillCat = tempSelectedSubskillCat.filter(
      (obj4, index, arr) => {
        return index === arr.findIndex((t) => t.value === obj4.value);
      }
    );
    // console.log(
    //   tempSelectedApplication,
    //   tempSelectedSkillCat,
    //   tempSelectedSubskillCat
    // );
    handleServApplChange(
      tempSelectedApplication,
      tempSelectedSkillCat,
      tempSelectedSubskillCat,
      "Installation"
    );
  };

  const handleServApplChange = (
    e,
    tmpSelectedSkill = selectedSkill,
    tmpSelectedSubskill = selectedSubskill,
    servType = serviceType
  ) => {
    setSelectedApplication(e);
    let tmp = [];
    e.forEach((obj) => {
      dataSkill.forEach((obj2) => {
        if (obj.value === obj2.application) {
          let arr = [];
          if (servType == "Installation") {
            arr = obj2.skillset.installation.skill;
          } else if (servType == "Repair") {
            arr = obj2.skillset.repair.skill;
          } else {
            arr = obj2.skillset.newbuild.skill;
          }
          tmp.push({
            application: obj2.application,
            skill: arr,
          });
        }
      });
    });
    setServApplData(tmp);

    let skillOpt = [];
    e.forEach((obj) => {
      tmp
        .filter((obj2) => {
          return obj2.application === obj.value;
        })[0]
        .skill.forEach((obj3) => {
          if (obj3.name !== "") {
            skillOpt.push({
              value: obj3.name,
              label: obj3.name,
            });
          }
        });
    });
    const uniqueSkillOpt = skillOpt.filter((obj4, index, arr) => {
      return index === arr.findIndex((t) => t.value === obj4.value);
    });
    // console.log("SErAPp", tmp);
    setSkillOptions(uniqueSkillOpt);
    if (tmpSelectedSkill.length > 0) {
      let removeSkill = [];
      tmpSelectedSkill.forEach((obj) => {
        let skillFound = 0;
        tmp.forEach((obj2) => {
          // console.log(obj, obj2.skill);
          skillFound += obj2.skill.filter((obj3) => {
            return obj3.name === obj.value;
          }).length;
          // console.log(skillFound);
        });
        if (skillFound == 0) {
          removeSkill.push(obj);
        }
      });
      let tmp2 = tmpSelectedSkill.filter((obj4) => {
        return removeSkill.indexOf(obj4) === -1;
      });
      handleSkillCatChange(tmp2, tmp, tmpSelectedSubskill);
    } else {
      handleSkillCatChange([], tmp, tmpSelectedSubskill);
    }
  };

  const handleSkillCatChange = (
    e,
    applData = servApplData,
    tmpSelectedSubskill = selectedSubskill
  ) => {
    setSelectedSkill(e);
    let tmp = [];
    e.forEach((obj) => {
      applData.forEach((obj2) => {
        let tmp2 = obj2.skill;
        tmp2.forEach((obj3) => {
          if (obj3.name === obj.value || obj3.name === "") {
            tmp.push({
              application: obj2.application,
              skill: obj3,
            });
          }
        });
      });
    });
    if (e.length == 0) {
      applData.forEach((obj2) => {
        let tmp2 = obj2.skill.filter((obj3) => {
          return obj3.name === "";
        });
        if (tmp2.length === 1) {
          tmp.push({
            application: obj2.application,
            skill: tmp2[0],
          });
        }
      });
    }

    setSkillCatData(tmp);

    let subskillOptions = [];
    tmp.forEach((obj) => {
      obj.skill.subskill.forEach((obj2) => {
        subskillOptions.push({ value: obj2, label: obj2 });
      });
    });
    const uniqueSubskillOpt = subskillOptions.filter((obj4, index, arr) => {
      return index === arr.findIndex((t) => t.value === obj4.value);
    });
    setSubskillOpt(uniqueSubskillOpt);
    if (tmpSelectedSubskill.length > 0) {
      let removeSubskill = [];
      tmpSelectedSubskill.forEach((obj) => {
        let subskillFound = 0;
        tmp.forEach((obj2) => {
          subskillFound += obj2.skill.subskill.filter((obj3) => {
            return obj3 === obj.value;
          }).length;
        });
        if (subskillFound == 0) {
          removeSubskill.push(obj);
        }
      });
      let tmp2 = tmpSelectedSubskill.filter((obj4) => {
        return removeSubskill.indexOf(obj4) === -1;
      });
      setSelectedSubskill(tmp2);
      handleSubskillCatChange(tmp2, tmp);
    } else {
      handleSubskillCatChange([], tmp);
    }
  };

  const handleSubskillCatChange = (e, skill = skillCatData) => {
    setTempCourseName("");
    setTempCourseFile(null);
    setCertificateIndex(-1);
    setShowCertificateIndex(-1);
    setSelectedSubskill(e);
    let tmpArr = [];
    skill.forEach((obj) => {
      if (obj.skill.subskill.length === 0) {
        if (
          0 ===
          tempRecords.filter((obj4) => {
            return (
              obj4.serviceApplication === obj.application &&
              obj4.skillCategory === obj.skill.name &&
              obj4.subSkillCategory === ""
            );
          }).length
        ) {
          tmpArr.push({
            serviceApplication: obj.application,
            skillCategory: obj.skill.name,
            subSkillCategory: "",
            experience: 0,
            training: false,
            certifications: [],
            testimonial: [],
          });
        } else {
          tmpArr.push(
            tempRecords.filter((obj4) => {
              return (
                obj4.serviceApplication === obj.application &&
                obj4.skillCategory === obj.skill.name &&
                obj4.subSkillCategory === ""
              );
            })[0]
          );
        }
      } else {
        obj.skill.subskill.forEach((obj2) => {
          if (
            0 <
            e.filter((obj3) => {
              return obj3.value === obj2;
            }).length
          ) {
            if (
              0 ===
              tempRecords.filter((obj4) => {
                return (
                  obj4.serviceApplication === obj.application &&
                  obj4.skillCategory === obj.skill.name &&
                  obj2 === obj4.subSkillCategory
                );
              }).length
            ) {
              tmpArr.push({
                serviceApplication: obj.application,
                skillCategory: obj.skill.name,
                subSkillCategory: obj2,
                experience: 0,
                training: false,
                certifications: [],
                testimonial: [],
              });
            } else {
              tmpArr.push(
                tempRecords.filter((obj4) => {
                  return (
                    obj4.serviceApplication === obj.application &&
                    obj4.skillCategory === obj.skill.name &&
                    obj2 === obj4.subSkillCategory
                  );
                })[0]
              );
            }
          }
        });
      }
    });
    // console.log(tmpArr);
    setTempRecords(tmpArr);
  };

  const handleExperienceChange = (obj, e, id) => {
    obj.experience = e;
    setTempRecords([
      ...tempRecords.slice(0, id),
      obj,
      ...tempRecords.slice(id + 1),
    ]);
  };

  const handleTrainingChange = (obj, id) => {
    obj.training = !obj.training;
    setTempRecords([
      ...tempRecords.slice(0, id),
      obj,
      ...tempRecords.slice(id + 1),
    ]);
  };

  const handleTestimonialFiles = (
    e,
    serviceApplication,
    category,
    subCategory,
    typeOfService
  ) => {
    // console.log(skillCode[typeOfService]);
    let codeForSkillCombo = `${serviceTypeCode[typeOfService]}${applicationCode[serviceApplication]}${skillCode[typeOfService][category]}${subSkillCode[subCategory]}`;
    // console.log(codeForSkillCombo);
    let tmpFileArr =
      typeOfService == "Installation"
        ? installationTestimonialFiles
        : typeOfService == "Repair"
        ? repairTestimonialFiles
        : newBuildTestimonialFiles;

    let arr = tmpFileArr.filter((obj) => {
      return obj.skillCombo !== `testimonial_${codeForSkillCombo}`;
    });

    //loop tempRecords and add these file links there
    let tempObj = tempRecords;
    let objIndex = tempObj.findIndex(
      (obj) =>
        obj.serviceApplication == serviceApplication &&
        obj.skillCategory == category &&
        obj.subSkillCategory == subCategory
    );
    if (objIndex >= 0) {
      let testimonialArr = [];
      for (let i = 0; i < e.target.files.length; i++) {
        testimonialArr.push(URL.createObjectURL(e.target.files[i]));
        arr.push({
          fileId: `testimonial_${codeForSkillCombo}_${i}`,
          file: e.target.files[i],
          skillCombo: `testimonial_${codeForSkillCombo}`,
        });
      }
      // console.log(testimonialArr);
      tempObj[objIndex].testimonial = testimonialArr;
      setTempRecords(tempObj);
      const fileInput = document.getElementById(
        `testimonial_${codeForSkillCombo}`
      );
      fileInput.type = "text"; // Temporarily change the type to text
      fileInput.type = "file";
    }

    typeOfService == "Installation"
      ? setInstallationTestimonialFiles(arr)
      : typeOfService == "Repair"
      ? setRepairTestimonialFiles(arr)
      : setNewBuildTestimonialFiles(arr);
  };

  const handleCertificationFiles = (
    serviceApplication,
    category,
    subCategory,
    typeOfService
  ) => {
    // console.log(skillCode[typeOfService]);
    let codeForSkillCombo = `${serviceTypeCode[typeOfService]}${applicationCode[serviceApplication]}${skillCode[typeOfService][category]}${subSkillCode[subCategory]}`;
    // console.log(codeForSkillCombo);
    let tmpFileArr =
      typeOfService == "Installation"
        ? installationCertificationFiles
        : typeOfService == "Repair"
        ? repairCertificationFiles
        : newBuildCertificationFiles;

    //loop tempRecords and add these file links there
    let tempObj = tempRecords;
    let objIndex = tempObj.findIndex(
      (obj) =>
        obj.serviceApplication == serviceApplication &&
        obj.skillCategory == category &&
        obj.subSkillCategory == subCategory
    );
    if (objIndex >= 0) {
      let arr = tmpFileArr.filter((obj) => {
        return obj.skillCombo !== `certification_${codeForSkillCombo}`;
      });

      let certificationArr = tempObj[objIndex].certifications;
      certificationArr.push({
        course: tempCourseName,
        file: tempCourseFile,
        fileLink: URL.createObjectURL(tempCourseFile),
      });
      tempObj[objIndex].certifications = certificationArr;

      certificationArr.forEach((obj2, idx) => {
        if ("file" in obj2) {
          arr.push({
            fileId: `certification_${codeForSkillCombo}_${idx}`,
            file: obj2.file,
            skillCombo: `certification_${codeForSkillCombo}`,
          });
        }
      });
      // console.log(arr);
      setTempRecords(tempObj);

      typeOfService == "Installation"
        ? setInstallationCertificationFiles(arr)
        : typeOfService == "Repair"
        ? setRepairCertificationFiles(arr)
        : setNewBuildCertificationFiles(arr);
    }
  };

  const removeUploadedCertificate = (
    serviceApplication,
    category,
    subCategory,
    typeOfService,
    certificateId
  ) => {
    let codeForSkillCombo = `certification_${serviceTypeCode[typeOfService]}${applicationCode[serviceApplication]}${skillCode[typeOfService][category]}${subSkillCode[subCategory]}`;

    let tmpFileArr =
      typeOfService == "Installation"
        ? installationCertificationFiles
        : typeOfService == "Repair"
        ? repairCertificationFiles
        : newBuildCertificationFiles;

    // let arr = tmpFileArr.filter((obj) => {
    //   return obj.skillCombo !== codeForSkillCombo;
    // });

    // const fileInput = document.getElementById(codeForSkillCombo);
    // fileInput.type = "text"; // Temporarily change the type to text
    // fileInput.type = "file";

    let tempObj = tempRecords;
    let objIndex = tempObj.findIndex(
      (obj) =>
        obj.serviceApplication == serviceApplication &&
        obj.skillCategory == category &&
        obj.subSkillCategory == subCategory
    );
    if (objIndex >= 0) {
      let certificationArr = tempObj[objIndex].certifications.filter(
        (obj, idx) => {
          return idx !== certificateId;
        }
      );
      tempObj[objIndex].certifications = certificationArr;
      let arr = tmpFileArr.filter((obj) => {
        return obj.fileId !== `${codeForSkillCombo}_${certificateId}`;
      });
      // console.log(arr);
      setTempRecords(tempObj);
      typeOfService == "Installation"
        ? setInstallationCertificationFiles(arr)
        : typeOfService == "Repair"
        ? setRepairCertificationFiles(arr)
        : setNewBuildCertificationFiles(arr);
    }
  };

  const removeUploadedTestimonials = (
    serviceApplication,
    category,
    subCategory,
    typeOfService
  ) => {
    let codeForSkillCombo = `testimonial_${serviceTypeCode[typeOfService]}${applicationCode[serviceApplication]}${skillCode[typeOfService][category]}${subSkillCode[subCategory]}`;

    let tmpFileArr =
      typeOfService == "Installation"
        ? installationTestimonialFiles
        : typeOfService == "Repair"
        ? repairTestimonialFiles
        : newBuildTestimonialFiles;

    let arr = tmpFileArr.filter((obj) => {
      return obj.skillCombo !== codeForSkillCombo;
    });

    const fileInput = document.getElementById(codeForSkillCombo);
    fileInput.type = "text"; // Temporarily change the type to text
    fileInput.type = "file";

    let tempObj = tempRecords;
    let objIndex = tempObj.findIndex(
      (obj) =>
        obj.serviceApplication == serviceApplication &&
        obj.skillCategory == category &&
        obj.subSkillCategory == subCategory
    );
    if (objIndex >= 0) {
      tempObj[objIndex].testimonial = [];
      setTempRecords(tempObj);
    }

    typeOfService == "Installation"
      ? setInstallationTestimonialFiles(arr)
      : typeOfService == "Repair"
      ? setRepairTestimonialFiles(arr)
      : setNewBuildTestimonialFiles(arr);
  };

  const displayTestimonialsAlt = (
    serviceApplication,
    category,
    subCategory
  ) => {
    let objIndex = tempRecords.findIndex(
      (obj) =>
        obj.serviceApplication == serviceApplication &&
        obj.skillCategory == category &&
        obj.subSkillCategory == subCategory
    );
    return tempRecords[objIndex].testimonial;
  };

  const checkTestimonialsUploaded = (
    serviceApplication,
    category,
    subCategory,
    typeOfService
  ) => {
    let codeForSkillCombo = `testimonial_${serviceTypeCode[typeOfService]}${applicationCode[serviceApplication]}${skillCode[typeOfService][category]}${subSkillCode[subCategory]}`;
    let tmpFileArr =
      typeOfService == "Installation"
        ? installationTestimonialFiles
        : typeOfService == "Repair"
        ? repairTestimonialFiles
        : newBuildTestimonialFiles;

    if (
      tmpFileArr.filter((obj) => {
        return obj.skillCombo == codeForSkillCombo;
      }).length > 0
    )
      return true;
    else return false;
  };

  const handleSave = () => {
    let experienceRecord = true;
    tempRecords.forEach((itm11) => {
      if (itm11.experience == 0) {
        experienceRecord = false;
      }
    });
    if (experienceRecord) {
      setTempCourseName("");
      setTempCourseFile(null);
      setCertificateIndex(-1);
      setShowCertificateIndex(-1);
      if (serviceType == "Installation") {
        setSaveInstallation(true);
        setInstallRec(tempRecords);
        setServiceType("Repair");

        let tempSelectedApplication = [];
        let tempSelectedSkillCat = [];
        let tempSelectedSubskillCat = [];
        repairRec.forEach((obj) => {
          tempSelectedApplication.push({
            value: obj.serviceApplication,
            label: obj.serviceApplication,
          });
          if (obj.skillCategory !== "") {
            tempSelectedSkillCat.push({
              value: obj.skillCategory,
              label: obj.skillCategory,
            });
          }
          if (obj.subSkillCategory !== "") {
            tempSelectedSubskillCat.push({
              value: obj.subSkillCategory,
              label: obj.subSkillCategory,
            });
          }
        });
        tempSelectedApplication = tempSelectedApplication.filter(
          (obj4, index, arr) => {
            return index === arr.findIndex((t) => t.value === obj4.value);
          }
        );
        tempSelectedSkillCat = tempSelectedSkillCat.filter(
          (obj4, index, arr) => {
            return index === arr.findIndex((t) => t.value === obj4.value);
          }
        );
        tempSelectedSubskillCat = tempSelectedSubskillCat.filter(
          (obj4, index, arr) => {
            return index === arr.findIndex((t) => t.value === obj4.value);
          }
        );
        handleServApplChange(
          tempSelectedApplication,
          tempSelectedSkillCat,
          tempSelectedSubskillCat,
          "Repair"
        );
        setTempRecords(repairRec);
      } else if (serviceType == "Repair") {
        setSaveRepair(true);
        setRepairRec(tempRecords);
        setServiceType("New Build");

        let tempSelectedApplication = [];
        let tempSelectedSkillCat = [];
        let tempSelectedSubskillCat = [];
        newbuildRec.forEach((obj) => {
          tempSelectedApplication.push({
            value: obj.serviceApplication,
            label: obj.serviceApplication,
          });
          if (obj.skillCategory !== "") {
            tempSelectedSkillCat.push({
              value: obj.skillCategory,
              label: obj.skillCategory,
            });
          }
          if (obj.subSkillCategory !== "") {
            tempSelectedSubskillCat.push({
              value: obj.subSkillCategory,
              label: obj.subSkillCategory,
            });
          }
        });
        tempSelectedApplication = tempSelectedApplication.filter(
          (obj4, index, arr) => {
            return index === arr.findIndex((t) => t.value === obj4.value);
          }
        );
        tempSelectedSkillCat = tempSelectedSkillCat.filter(
          (obj4, index, arr) => {
            return index === arr.findIndex((t) => t.value === obj4.value);
          }
        );
        tempSelectedSubskillCat = tempSelectedSubskillCat.filter(
          (obj4, index, arr) => {
            return index === arr.findIndex((t) => t.value === obj4.value);
          }
        );
        handleServApplChange(
          tempSelectedApplication,
          tempSelectedSkillCat,
          tempSelectedSubskillCat,
          "New Build"
        );

        setTempRecords(newbuildRec);
      } else {
        // console.log(tempRecords);
        setNewbuildRec(tempRecords);
        setSaveNewBuild(true);
        setServiceType("");
        setServApplData([]);
        setSkillCatData([]);
        setSelectedApplication([]);
        setSkillOptions([]);
        setSelectedSkill([]);
        setSubskillOpt([]);
        setSelectedSubskill([]);
        setTempRecords([]);
      }
    } else {
      toast.error("Enter experience for all skills!!");
    }
  };

  const stateList = data.states;
  const pinData = data.pinData;

  const pageRowOptions = [
    { value: "3", label: "3" },
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "show all", label: "show all" },
  ];

  const handleDataPagination = (data, rows = totalRows) => {
    let totalPageLength =
      data.length % rows > 0
        ? Math.floor(data.length / rows) + 1
        : Math.floor(data.length / rows);

    // console.log(data.length, totalPageLength);
    setTotalPageTable(totalPageLength);
    setCurrentPageTable(1);

    if (bool_Pincodes) {
      return totalPageLength;
    }
  };

  // const handleBoolPincode = () => {
  //   if (bool_Pincodes) {
  //     let tmpState = selectedState.length > 0 ? selectedState : pincodeStates;
  //     let tmpDistrict = selectedDistrict.length
  //       ? selectedDistrict
  //       : pincodeDistrict;
  //     let tmpDivision =
  //       selectedDivision.length > 0 ? selectedDivision : pincodeDivision;
  //     // tempRecord1.forEach((obj) => {
  //     //   tmpState.push({
  //     //     value: obj.state,
  //     //     label: obj.state,
  //     //   });
  //     //   if (obj.skill !== "") {
  //     //     tmpDistrict.push({
  //     //       value: obj.district,
  //     //       label: obj.district,
  //     //     });
  //     //   }
  //     //   if (obj.subskill !== "") {
  //     //     tmpDivision.push({
  //     //       value: obj.division,
  //     //       label: obj.division,
  //     //     });
  //     //   }
  //     // });
  //     // tmpState = tmpState.filter((obj4, index, arr) => {
  //     //   return index === arr.findIndex((t) => t.value === obj4.value);
  //     // });
  //     // tmpDistrict = tmpDistrict.filter((obj4, index, arr) => {
  //     //   return index === arr.findIndex((t) => t.value === obj4.value);
  //     // });
  //     // tmpDivision = tmpDivision.filter((obj4, index, arr) => {
  //     //   return index === arr.findIndex((t) => t.value === obj4.value);
  //     // });
  //     handleStateChange(tmpState, tmpDistrict, tmpDivision);
  //   } else {
  //     setTmpClick(true);
  //     setTempRecord1(areaRecordsChkd);
  //     handleDataPagination(areaRecordsChkd, 10);
  //     setTotalRecords(areaRecordsChkd.length);
  //     setUncheckedAreaRecord([]);
  //     setAreaRecordsChkd([]);
  //     setTempRecord([]);
  //     setRadioRecord("");
  //     setSearchArray([]);
  //     setSearchKeyword("");
  //     setRowsPerPage({ value: 10, label: 10 });
  //     setTotalRows(10);
  //     setCurrentPageTable(1);
  //     setTotalPageTable(
  //       areaRecordsChkd.length % 10 > 0
  //         ? Math.floor(areaRecordsChkd.length / 10) + 1
  //         : Math.floor(areaRecordsChkd.length / 10)
  //     );
  //   }
  //   setBool_Pincodes(!bool_Pincodes);
  // };

  const handleStateChange = (selectState, selectDistrict, selectDivision) => {
    if (selectState.length > 0) {
      let tmp = [];
      selectState.forEach((obj) => {
        tmp.push(
          pinData.filter((obj1) => {
            return obj1.state === obj.value;
          })[0]
        );
      });

      let dist = [];
      tmp.forEach((obj1) => {
        obj1.district_list.forEach((obj) => {
          dist.push({
            value: obj.district,
            label: obj.district,
          });
        });
      });

      if (selectDistrict.length == 0) {
        handleRecordCount(tmp, [], []);
      } else {
        setDisableDivision(false);
        let removeFromSelectedDistrict = [];
        let dis = [];
        selectDistrict.forEach((obj) => {
          let found = 0;
          tmp.forEach((obj2) => {
            obj2.district_list.forEach((obj3) => {
              if (obj.value === obj3.district) {
                found += 1;
                dis.push(obj3);
              }
            });
          });
          if (found == 0) {
            removeFromSelectedDistrict.push(obj);
          }
        });
        setDistrictData(dis);
        let tmp1 = selectDistrict.filter((obj) => {
          return removeFromSelectedDistrict.indexOf(obj) < 0;
        });
        if (selectDivision.length == 0) {
          handleRecordCount(tmp, dis, []);
        } else {
          let divData = [];
          let removeFromSelectedDivision = [];
          selectDivision.forEach((obj) => {
            let found = 0;
            dis.forEach((obj2) => {
              obj2.division_list.forEach((obj3) => {
                if (obj.value === obj3.division) {
                  found += 1;
                  divData.push(obj3);
                }
              });
            });
            if (found == 0) {
              removeFromSelectedDivision.push(obj);
            }
          });
          setDivisionData(divData);
          let tmp2 = selectDivision.filter((obj) => {
            return removeFromSelectedDivision.indexOf(obj) < 0;
          });

          handleRecordCount(tmp, dis, tmp2);
          setSelectedDivision(tmp2);
        }
        setSelectedDistrict(tmp1);
      }

      setStateData(tmp);
      setDistrictOptions(dist);
      setDisableDistrict(false);
    } else {
      setDisableDistrict(true);
      setDisableDivision(true);
      handleRecordCount([], [], []);
      setStateData([]);

      setSelectedDistrict([]);
      setSelectedDivision([]);
    }
    setSelectedState(selectState);
  };

  const handleRecordCount = (stData, disData, selDivData) => {
    let recs = 0;
    let records = [];
    // console.log(uncheckedAreaRecord);
    let tmpUnchecked = uncheckedAreaRecord.filter((ele) => {
      return (
        0 <
        stData.filter((ele1) => {
          return ele.state === ele1.state;
        }).length
      );
    });
    stData.forEach((obj1) => {
      let disFound = 0;
      obj1.district_list.forEach((obj2) => {
        if (
          1 ===
          disData.filter((it) => {
            return it.district === obj2.district;
          }).length
        ) {
          disFound += 1;
          let divsFound = 0;
          obj2.division_list.forEach((itm) => {
            if (
              1 ===
              selDivData.filter((it) => {
                return it.value === itm.division;
              }).length
            ) {
              recs += itm.count;
              divsFound += 1;
              let tmp3 = itm.office_list;
              tmp3.forEach((itm2) => {
                if (
                  0 ===
                  tmpUnchecked.filter((itm5) => {
                    return (
                      itm5.Office == itm2.Office &&
                      itm5.Pincode == itm2.Pincode &&
                      itm5.state === obj1.state &&
                      itm5.district === obj1.district &&
                      itm5.division === obj1.division
                    );
                  }).length
                ) {
                  records.push({
                    state: obj1.state,
                    district: obj2.district,
                    division: itm.division,
                    Office: itm2.Office,
                    Pincode: itm2.Pincode,
                    checked: true,
                  });
                }
              });
            }
          });
          if (divsFound == 0) {
            recs += obj2.count;
            let divList = obj2.division_list;
            divList.forEach((itm1) => {
              let tmp4 = itm1.office_list;
              tmp4.forEach((itm2) => {
                if (
                  0 ===
                  tmpUnchecked.filter((itm5) => {
                    return (
                      itm5.Office === itm2.Office &&
                      itm5.Pincode === itm2.Pincode &&
                      itm5.state === obj1.state &&
                      itm5.district === obj2.district &&
                      itm5.division === itm1.division
                    );
                  }).length
                ) {
                  records.push({
                    state: obj1.state,
                    district: obj2.district,
                    division: itm1.division,
                    Office: itm2.Office,
                    Pincode: itm2.Pincode,
                    checked: true,
                  });
                }
              });
            });
          }
        }
      });
      if (disFound == 0) {
        // console.log(uncheckedAreaRecord);
        recs += obj1.count;
        let disList = obj1.district_list;
        disList.forEach((itm1) => {
          let divList = itm1.division_list;
          divList.forEach((itm2) => {
            let tmp5 = itm2.office_list;
            tmp5.forEach((itm3) => {
              // console.log(itm3);
              if (
                0 ===
                tmpUnchecked.filter((itm5) => {
                  return (
                    itm5.Office === itm3.Office &&
                    itm5.Pincode === itm3.Pincode &&
                    itm5.state === obj1.state &&
                    itm5.district === itm1.district &&
                    itm5.division === itm2.division
                  );
                }).length
              ) {
                records.push({
                  state: obj1.state,
                  district: itm1.district,
                  division: itm2.division,
                  Office: itm3.Office,
                  Pincode: itm3.Pincode,
                  checked: true,
                });
              }
            });
          });
        });
      }
    });
    if (tempRecord1.length > 0) {
      let tmpChecked = records.filter((item) => {
        return (
          1 ===
          tempRecord1.filter((item2) => {
            return (
              item.Office === item2.Office &&
              item.Pincode === item2.Pincode &&
              item.state === item2.state &&
              item.district === item2.district &&
              item.division === item2.division
            );
          }).length
        );
      });
      tmpUnchecked = records.filter((item) => {
        return (
          0 ===
          tempRecord1.filter((item2) => {
            return (
              item.Office === item2.Office &&
              item.Pincode === item2.Pincode &&
              item.state === item2.state &&
              item.district === item2.district &&
              item.division === item2.division
            );
          }).length
        );
      });
      for (let i = 0; i < tmpUnchecked.length; i++) {
        tmpUnchecked[i].checked = false;
      }
      records = tmpChecked;
      setTempRecord1([]);
    }
    setUncheckedAreaRecord(tmpUnchecked);
    setAreaRecordsChkd(records);

    let tmpSearchArr = records.concat(tmpUnchecked);
    setSearchArray(tmpSearchArr);
    if (radioRecord == "Checked") {
      setTempRecord(records);
      handleDataPagination(records);
    } else if (radioRecord == "Unchecked") {
      setTempRecord(tmpUnchecked);
      handleDataPagination(tmpUnchecked);
    } else {
      setTempRecord(tmpSearchArr);
      handleDataPagination(tmpSearchArr);
    }

    setTotalRecords(records.length);
  };

  const handleCheckedRecords = (obj) => {
    if (obj.checked) {
      let tmpArr = areaRecordsChkd.filter((ob) => {
        return ob.Office !== obj.Office || ob.Pincode !== obj.Pincode;
      });
      setTotalRecords(tmpArr.length);
      setAreaRecordsChkd(tmpArr);
      // console.log(tmpArr);
      let arrt = uncheckedAreaRecord;
      arrt.push({
        state: obj.state,
        district: obj.district,
        division: obj.division,
        Office: obj.Office,
        Pincode: obj.Pincode,
        checked: false,
      });
      setUncheckedAreaRecord(arrt);
      if (radioRecord == "Checked") {
        setTempRecord(tmpArr);
        handleDataPagination(tmpArr);
      } else if (radioRecord == "Unchecked") {
        setTempRecord(arrt);
        handleDataPagination(arrt);
      } else {
        let tmp = tmpArr.concat(arrt);
        setTempRecord(tmp);
        handleDataPagination(tmp);
      }
      let tmpSearchArr = tmpArr.concat(arrt);
      setSearchArray(tmpSearchArr);
    } else {
      let arrt = uncheckedAreaRecord.filter((ob) => {
        return ob.Office !== obj.Office || ob.Pincode !== obj.Pincode;
      });
      let tmpArr = areaRecordsChkd;
      tmpArr.push({
        state: obj.state,
        district: obj.district,
        division: obj.division,
        Office: obj.Office,
        Pincode: obj.Pincode,
        checked: true,
      });
      setTotalRecords(tmpArr.length);
      setAreaRecordsChkd(tmpArr);
      // console.log(tmpArr);
      setUncheckedAreaRecord(arrt);

      if (radioRecord == "Checked") {
        setTempRecord(tmpArr);
        handleDataPagination(tmpArr);
      } else if (radioRecord == "Unchecked") {
        setTempRecord(arrt);
        handleDataPagination(arrt);
      } else {
        let tmp = tmpArr.concat(arrt);
        setTempRecord(tmp);
        handleDataPagination(tmp);
      }
      let tmpSearchArr = tmpArr.concat(arrt);
      setSearchArray(tmpSearchArr);
    }
  };

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

  const handlePersonalDataChange = async () => {
    setBool_Personal_Data(!bool_Personal_Data);
    if (!bool_Personal_Data) {
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

      if (
        fullName !== "" &&
        (newMobileNumber !== "" || newEmailId !== "") &&
        address !== "" &&
        localityArea !== "" &&
        pincode !== "" &&
        city !== "" &&
        state !== "" &&
        country !== ""
      ) {
        let updatedProfilePath = null;
        if (personalData.profilePic !== profilePic && profilePic !== "") {
          const formData = new FormData();
          formData.append("profilePic", profileDoc);

          const uploadFiles = await fetch(
            "http://localhost:3002/api/workmanIndividual/store",
            {
              method: "POST",
              credentials: "include",
              body: formData,
            }
          );
          const uploadFilesData = await uploadFiles.json();
          if (uploadFiles.status == 200) {
            updatedProfilePath =
              "profilePic" in uploadFilesData.Urls
                ? uploadFilesData.Urls.profilePic
                : personalData.profilePic;
          }
        }
        let personalDataObj = {
          fullName: fullName,
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
          opentoWorkOutside: work,
          profilePic:
            updatedProfilePath !== null
              ? updatedProfilePath
              : profilePic !== ""
              ? personalData.profilePic
              : "",
        };
        let deleteArr = [];
        if (personalDataObj.profilePic !== personalData.profilePic)
          deleteArr.push(
            personalData.profilePic.slice(
              personalData.profilePic.indexOf("/uploads")
            )
          );
        let objToSend = {
          update: { personalData: personalDataObj },
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
          "http://localhost:3002/api/workmanIndividual/update",
          settings
        );
        if (fetchResponse.status == 200) {
          setPersonalData(personalDataObj);
          toast.success("Personal Data Updated!");
          setProfilePic(personalDataObj.profilePic);
        } else if (fetchResponse.status !== 404) {
          toast.error("Something went wrong!");
          setFullName(personalData.fullName);
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
          setPincode(personalData.pincode.toString());
          setCity(personalData.city);
          setState(personalData.state);
          setCountry(personalData.country);
          setWork(personalData.opentoWorkOutside);
          setSelectedCity({
            value: personalData.city,
            label: personalData.city,
          });
          setSelectedStatePersonal({
            value: personalData.state,
            label: personalData.state,
          });
        } else if (fetchResponse.status == 404) {
          
        }
      } else {
        toast.error("Fill all fields!");
        setFullName(personalData.fullName);
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
        setPincode(personalData.pincode.toString());
        setCity(personalData.city);
        setState(personalData.state);
        setCountry(personalData.country);
        setWork(personalData.opentoWorkOutside);
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

  const checkEducationFields = () => {
    let returnValue = false;
    if (basiced > 0 && basiced < 4) {
      if (basiced == 3) {
        if (qual.length > 0) {
          returnValue = true;
          if (qual.includes("ITI")) {
            if (ITICertificate !== "") returnValue = true;
            else returnValue = false;
          }
          // console.log(`1-${returnValue}`);
          if (qual.includes("Diploma - Specialization") && returnValue) {
            if (diplomaCertificate !== "") returnValue = true;
            else returnValue = false;
          }
          // console.log(`2-${returnValue}`);
          if (qual.includes("Degree") && returnValue) {
            if (degreeCertificate !== "") returnValue = true;
            else returnValue = false;
          }
          // console.log(`3-${returnValue}`);
        } else {
          returnValue = false;
        }
      } else {
        returnValue = true;
      }
    }
    return returnValue;
  };

  const getDeleteEdFilesList = () => {
    let delArr = [];

    if (qual.length > 0 && basiced == 3) {
      if (qual.includes("ITI")) {
        if (
          educationDetails.ITICertificate !== "" &&
          educationDetails.ITICertificate !== ITICertificate
        )
          delArr.push(
            educationDetails.ITICertificate.slice(
              educationDetails.ITICertificate.indexOf("/uploads")
            )
          );
      }
      if (qual.includes("Diploma - Specialization")) {
        if (
          educationDetails.diplomaCertificate !== "" &&
          educationDetails.diplomaCertificate !== diplomaCertificate
        )
          delArr.push(
            educationDetails.diplomaCertificate.slice(
              educationDetails.diplomaCertificate.indexOf("/uploads")
            )
          );
      }
      if (qual.includes("Degree")) {
        if (
          educationDetails.degreeCertificate !== "" &&
          educationDetails.degreeCertificate !== degreeCertificate
        )
          delArr.push(
            educationDetails.degreeCertificate.slice(
              educationDetails.degreeCertificate.indexOf("/uploads")
            )
          );
      }
    }

    return delArr;
  };

  const handleEducationDetailsChange = async () => {
    setBool_Education(!bool_Education);
    if (!bool_Education) {
      if (checkEducationFields()) {
        let deleteArr = getDeleteEdFilesList();
        // console.log(deleteArr)
        let updatedITIPath = null;
        let updatedDiplomaPath = null;
        let updatedDegreePath = null;

        if (educationDetailsFiles.length > 0) {
          //call store
          const formData = new FormData();
          educationDetailsFiles.forEach((obj) => {
            formData.append(obj.fileId, obj.file);
          });
          const uploadFiles = await fetch(
            "http://localhost:3002/api/workmanIndividual/store",
            {
              method: "POST",
              credentials: "include",
              body: formData,
            }
          );
          const uploadFilesData = await uploadFiles.json();
          if (uploadFiles.status == 200) {
            // console.log(uploadFilesData)
            updatedITIPath =
              "ITICertificate" in uploadFilesData.Urls
                ? uploadFilesData.Urls.ITICertificate
                : educationDetailsFiles.ITICertificate;
            updatedDiplomaPath =
              "diplomaCertificate" in uploadFilesData.Urls
                ? uploadFilesData.Urls.diplomaCertificate
                : educationDetailsFiles.diplomaCertificate;
            updatedDegreePath =
              "degreeCertificate" in uploadFilesData.Urls
                ? uploadFilesData.Urls.degreeCertificate
                : educationDetailsFiles.degreeCertificate;
          }
        }
        let educationDetailsObj = {};
        if (basiced > 0 && basiced < 3) {
          if (basiced == 1) {
            educationDetailsObj["basicEducation"] = "below 10th grade";
          } else if (basiced == 2) {
            educationDetailsObj["basicEducation"] = "10th/12th grade";
          }

          educationDetailsObj["technicalQualification"] = [];
          educationDetailsObj["diplomaCertificate"] = "";
          educationDetailsObj["degreeCertificate"] = "";
          educationDetailsObj["ITICertificate"] = "";
        } else if (basiced == 3) {
          educationDetailsObj["basicEducation"] = "Technical Qualification";
          educationDetailsObj["technicalQualification"] = qual;
          if (qual.includes("ITI")) {
            educationDetailsObj["ITICertificate"] =
              updatedITIPath !== null
                ? updatedITIPath
                : educationDetails.ITICertificate;
          } else {
            educationDetailsObj["ITICertificate"] = "";
          }
          if (qual.includes("Diploma - Specialization")) {
            educationDetailsObj["diplomaCertificate"] =
              updatedDiplomaPath !== null
                ? updatedDiplomaPath
                : educationDetails.diplomaCertificate;
          } else {
            educationDetailsObj["diplomaCertificate"] = "";
          }
          if (qual.includes("Degree")) {
            educationDetailsObj["degreeCertificate"] =
              updatedDegreePath !== null
                ? updatedDegreePath
                : educationDetails.degreeCertificate;
          } else {
            educationDetailsObj["degreeCertificate"] = "";
          }
        }

        let objToSend = {
          update: { educationDetails: educationDetailsObj },
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
          "http://localhost:3002/api/workmanIndividual/update",
          settings
        );
        if (fetchResponse.status == 200) {
          setEducationDetails(educationDetailsObj);
          toast.success("Education Details Updated!");
          setITICertificate(educationDetailsObj.ITICertificate);
          setDiplomaCertificate(educationDetailsObj.diplomaCertificate);
          setDegreeCertificate(educationDetailsObj.degreeCertificate);
        } else if (fetchResponse.status !== 404) {
          toast.error("Something went wrong!");
          if (educationDetails.basicEducation == "below 10th grade") {
            setBasiced(1);
            setQual([]);
            setIti(false);
            setDeg(false);
            setDip(false);
            setITICertificate("");
            setDiplomaCertificate("");
            setDegreeCertificate("");
          } else if (educationDetails.basicEducation == "10th/12th grade") {
            setBasiced(2);
            setQual([]);
            setIti(false);
            setDeg(false);
            setDip(false);
            setITICertificate("");
            setDiplomaCertificate("");
            setDegreeCertificate("");
          } else if (
            educationDetails.basicEducation == "Technical Qualification"
          ) {
            setBasiced(3);
            setQual(educationDetails.technicalQualification);
            if (educationDetails.technicalQualification.includes("ITI")) {
              setIti(true);
              setITICertificate(educationDetails.ITICertificate);
            } else {
              setIti(false);
              setITICertificate("");
            }
            if (
              educationDetails.technicalQualification.includes(
                "Diploma - Specialization"
              )
            ) {
              setDip(true);
              setDiplomaCertificate(educationDetails.diplomaCertificate);
            } else {
              setDip(false);
              setDiplomaCertificate("");
            }
            if (educationDetails.technicalQualification.includes("Degree")) {
              setDeg(true);
              setDegreeCertificate(educationDetails.degreeCertificate);
            } else {
              setDeg(false);
              setDegreeCertificate("");
            }
          }
        } else if (fetchResponse.status == 404) {
          
        }
      } else {
        toast.error("Fill all fields!");
        if (educationDetails.basicEducation == "below 10th grade") {
          setBasiced(1);
          setQual([]);
          setIti(false);
          setDeg(false);
          setDip(false);
          setITICertificate("");
          setDiplomaCertificate("");
          setDegreeCertificate("");
        } else if (educationDetails.basicEducation == "10th/12th grade") {
          setBasiced(2);
          setQual([]);
          setIti(false);
          setDeg(false);
          setDip(false);
          setITICertificate("");
          setDiplomaCertificate("");
          setDegreeCertificate("");
        } else if (
          educationDetails.basicEducation == "Technical Qualification"
        ) {
          setBasiced(3);
          setQual(educationDetails.technicalQualification);
          if (educationDetails.technicalQualification.includes("ITI")) {
            setIti(true);
            setITICertificate(educationDetails.ITICertificate);
          } else {
            setIti(false);
            setITICertificate("");
          }
          if (
            educationDetails.technicalQualification.includes(
              "Diploma - Specialization"
            )
          ) {
            setDip(true);
            setDiplomaCertificate(educationDetails.diplomaCertificate);
          } else {
            setDip(false);
            setDiplomaCertificate("");
          }
          if (educationDetails.technicalQualification.includes("Degree")) {
            setDeg(true);
            setDegreeCertificate(educationDetails.degreeCertificate);
          } else {
            setDeg(false);
            setDegreeCertificate("");
          }
        }
      }
    }
  };

  const handleLanguageDetailsChange = async () => {
    if (!bool_Language) {
      if (lang.length > 0) {
        setBool_Language(!bool_Language);
        let languageDetailsObj = [];
        lang.forEach((obj) => {
          languageDetailsObj.push({
            language: obj.name,
            speaking: langLevel[obj.speak],
            reading: langLevel[obj.read],
            writing: langLevel[obj.write],
          });
        });
        let objToSend = {
          languageDetails: languageDetailsObj,
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
          "http://localhost:3002/api/workmanIndividual/update",
          settings
        );
        if (fetchResponse.status == 200) {
          setLanguageDetails(languageDetailsObj);
          toast.success("Language Details Updated!");
        } else if (fetchResponse.status !== 404) {
          toast.error("Something went wrong!");
          const langObj = languageDetails;
          let arr = [];
          langObj.forEach((obj) => {
            arr.push({
              name: obj.language,
              speak: langLevelReverse[obj.speaking],
              read: langLevelReverse[obj.reading],
              write: langLevelReverse[obj.writing],
            });
          });
          setLang(arr);
        } else if (fetchResponse.status == 404) {
          
        }
      } else {
        alert("Add atleast one language!!");
      }
    } else {
      setBool_Language(!bool_Language);
    }
  };

  const checkRegFields = () => {
    let returnValue = false;
    if (
      panCardNumber !== "" &&
      panCardDoc !== "" &&
      aadharCardDoc !== "" &&
      aadharCardNumber !== ""
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

    return returnValue;
  };

  const getDeleteFilesList = () => {
    let delArr = [];
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
    if (additionalInformation["panCardDoc"] !== panCardDoc)
      delArr.push(
        additionalInformation["panCardDoc"].slice(
          additionalInformation["panCardDoc"].indexOf("/uploads")
        )
      );
    if (additionalInformation["aadharCardDoc"] !== aadharCardDoc)
      delArr.push(
        additionalInformation["aadharCardDoc"].slice(
          additionalInformation["aadharCardDoc"].indexOf("/uploads")
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
        let updatedAadharPath = null;
        let updatedPfPath = null;

        if (additionalInformationFiles.length > 0) {
          //call store
          const formData = new FormData();
          additionalInformationFiles.forEach((obj) => {
            formData.append(obj.fileId, obj.file);
          });
          const uploadFiles = await fetch(
            "http://localhost:3002/api/workmanIndividual/store",
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
            updatedAadharPath =
              "aadharCardDoc" in uploadFilesData.Urls
                ? uploadFilesData.Urls.aadharCardDoc
                : additionalInformation.aadharCardDoc;
            updatedPfPath =
              "PFDocument" in uploadFilesData.Urls
                ? uploadFilesData.Urls.PFDocument
                : additionalInformation.PFDocument;
          }
        }

        let additionalInformationObj = {
          panCardNumber: panCardNumber,
          panCardDoc:
            updatedPanPath !== null
              ? updatedPanPath
              : additionalInformation.panCardDoc,
          aadharNumber: aadharCardNumber,
          aadharCardDoc:
            updatedAadharPath !== null
              ? updatedAadharPath
              : additionalInformation.aadharCardDoc,
        };
        if (pf) {
          (additionalInformationObj["PF"] = pfNumber),
            (additionalInformationObj["PFDocument"] =
              updatedPfPath !== null
                ? updatedPfPath
                : additionalInformation.PFDocument);
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
          "http://localhost:3002/api/workmanIndividual/update",
          settings
        );
        if (fetchResponse.status == 200) {
          setAdditionalInformation(additionalInformationObj);
          toast.success("Registration Details Updated!");
          setPanCardDoc(additionalInformationObj.panCardDoc);
          setAadharCardDoc(additionalInformationObj.aadharCardDoc);
          setPFDocument(additionalInformationObj.PFDocument);
        } else if (fetchResponse.status !== 404) {
          toast.error("Something went wrong!");
          //assign addInfo back
          setPanCardNumber(additionalInformation.panCardNumber);
          setPanCardDoc(additionalInformation.panCardDoc);
          setAadharCardNumber(additionalInformation.aadharNumber);
          setAadharCardDoc(additionalInformation.aadharCardDoc);
          if ("PF" in additionalInformation) {
            setPf(true);
            setPFNumber(additionalInformation.PF);
            setPFDocument(additionalInformation["PFDocument"]);
          } else {
            setPf(false);
            setPFNumber("");
            setPFDocument("");
          }
        } else if (fetchResponse.status == 404) {
          
        }
      } else {
        toast.error("Fill all fields!");
        //assign addInfo back
        setPanCardNumber(additionalInformation.panCardNumber);
        setPanCardDoc(additionalInformation.panCardDoc);
        setAadharCardNumber(additionalInformation.aadharNumber);
        setAadharCardDoc(additionalInformation.aadharCardDoc);
        if ("PF" in additionalInformation) {
          setPf(true);
          setPFNumber(additionalInformation.PF);
          setPFDocument(additionalInformation["PFDocument"]);
        } else {
          setPf(false);
          setPFNumber("");
          setPFDocument("");
        }
      }
      setAdditionalInformationFiles([]);
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
        let updatedChequePath = null;
        if (bankDetails.cancelledCheque !== cancelledCheque) {
          const formData = new FormData();
          formData.append("cancelledCheque", chequeFile);

          const uploadFiles = await fetch(
            "http://localhost:3002/api/workmanIndividual/store",
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
          "http://localhost:3002/api/workmanIndividual/update",
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
    }
  };

  const handlePincodeChange = async () => {
    setBool_Pincodes(!bool_Pincodes);
    if (!bool_Pincodes) {
      setTempRecord1(areaRecordsChkd);
      handleDataPagination(areaRecordsChkd, 10);
      setTotalRecords(areaRecordsChkd.length);
      setUncheckedAreaRecord([]);
      setAreaRecordsChkd([]);
      setTempRecord([]);
      setRadioRecord("");
      setSearchArray([]);
      setSearchKeyword("");
      setRowsPerPage({ value: 10, label: 10 });
      setTotalRows(10);
      setCurrentPageTable(1);
      setTotalPageTable(
        areaRecordsChkd.length % 10 > 0
          ? Math.floor(areaRecordsChkd.length / 10) + 1
          : Math.floor(areaRecordsChkd.length / 10)
      );
      var St = [];
      selectedState.forEach((state) => {
        St.push(state.value);
      });
      var Dt = [];
      selectedDistrict.forEach((district) => {
        Dt.push(district.value);
      });
      var Divi = [];
      selectedDivision.forEach((division) => {
        Divi.push(division.value);
      });

      let servicePincodeObj = {
        state: St,
        district: Dt,
        division: Divi,
        selectedPincodes: areaRecordsChkd,
      };
      let objToSend = {
        servicePincode: servicePincodeObj,
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
        "http://localhost:3002/api/workmanIndividual/update",
        settings
      );
      if (fetchResponse.status == 200) {
        setServicePincode(servicePincodeObj);
        toast.success("Service Pincodes Updated!");
      } else if (fetchResponse.status !== 404) {
        toast.error("Something went wrong!");
        //assign pincode back
        setRowsPerPage({ value: "10", label: "10" });
        setTotalRows(10);
        setCurrentPageTable(1);
        setTempRecord1(servicePincode.selectedPincodes);
        setTotalRecords(servicePincode.selectedPincodes.length);
        let pageLength =
          servicePincode.selectedPincodes.length % 10 > 0
            ? Math.floor(servicePincode.selectedPincodes.length.length / 10) + 1
            : Math.floor(servicePincode.selectedPincodes.length.length / 10);

        setTotalPageTable(pageLength);
      } else if (fetchResponse.status == 404) {
        
      }
    } else {
      let tmpState = [];
      servicePincode.state.forEach((state) => {
        tmpState.push({ value: state, label: state });
      });
      let tmpDistrict = [];
      servicePincode.district.forEach((district) => {
        tmpDistrict.push({ value: district, label: district });
      });
      let tmpDivision = [];
      servicePincode.division.forEach((division) => {
        tmpDivision.push({ value: division, label: division });
      });
      handleStateChange(tmpState, tmpDistrict, tmpDivision);
    }
  };

  const handleSkillDetailChange = async () => {
    if (bool_Affiliation) {
      setBool_Affiliation(!bool_Affiliation);
      if (levelOfExpertise) {
        setServiceType("Installation");
        // let tempSelectedApplication = [];
        // let tempSelectedSkillCat = [];
        // let tempSelectedSubskillCat = [];
        // installRec.forEach((obj) => {
        //   tempSelectedApplication.push({
        //     value: obj.serviceApplication,
        //     label: obj.serviceApplication,
        //   });
        //   if (obj.skillCategory !== "") {
        //     tempSelectedSkillCat.push({
        //       value: obj.skillCategory,
        //       label: obj.skillCategory,
        //     });
        //   }
        //   if (obj.subSkillCategory !== "") {
        //     tempSelectedSubskillCat.push({
        //       value: obj.subSkillCategory,
        //       label: obj.subSkillCategory,
        //     });
        //   }
        // });
        // tempSelectedApplication = tempSelectedApplication.filter(
        //   (obj4, index, arr) => {
        //     return index === arr.findIndex((t) => t.value === obj4.value);
        //   }
        // );
        // tempSelectedSkillCat = tempSelectedSkillCat.filter(
        //   (obj4, index, arr) => {
        //     return index === arr.findIndex((t) => t.value === obj4.value);
        //   }
        // );
        // tempSelectedSubskillCat = tempSelectedSubskillCat.filter(
        //   (obj4, index, arr) => {
        //     return index === arr.findIndex((t) => t.value === obj4.value);
        //   }
        // );
        // // console.log(
        // //   tempSelectedApplication,
        // //   tempSelectedSkillCat,
        // //   tempSelectedSubskillCat
        // // );
        // handleServApplChange(
        //   tempSelectedApplication,
        //   tempSelectedSkillCat,
        //   tempSelectedSubskillCat,
        //   "Installation"
        // );
        setTempRecords(installRec);
        console.log(installRec);
      } else {
        setServiceTypeInterest("Installation");

        handleInterestApplication("Installation", true);
        handleInterestSkill("Installation", true);
        handleInterestSubskill("Installation", true);
      }
    } else {
      if (
        (levelOfExpertise && serviceType == "") ||
        (!levelOfExpertise && serviceTypeInterest == "")
      ) {
        setBool_Affiliation(!bool_Affiliation);
        setServiceType("Installation");
        setServiceTypeInterest("Installation");

        let tmpArr1 = [];
        let tmpArr2 = [];
        let tmpArr3 = [];

        if (levelOfExpertise) {
          setTempRecords(installRec);
          setSaveInstallation(false);
          setSaveRepair(false);
          setSaveNewBuild(false);

          //store any images that are uploaded
          let urlsUploaded = {};
          //storing all uploads in single array
          let allUploadsData = new FormData();
          installationTestimonialFiles.forEach((fileInput) => {
            allUploadsData.append(fileInput.fileId, fileInput.file);
          });
          // console.log(installationTestimonialFiles);
          repairTestimonialFiles.forEach((fileInput) => {
            allUploadsData.append(fileInput.fileId, fileInput.file);
          });
          // console.log(repairTestimonialFiles);
          newBuildTestimonialFiles.forEach((fileInput) => {
            allUploadsData.append(fileInput.fileId, fileInput.file);
          });
          // console.log(newBuildTestimonialFiles);
          installationCertificationFiles.forEach((fileInput) => {
            allUploadsData.append(fileInput.fileId, fileInput.file);
          });
          repairCertificationFiles.forEach((fileInput) => {
            allUploadsData.append(fileInput.fileId, fileInput.file);
          });
          newBuildCertificationFiles.forEach((fileInput) => {
            allUploadsData.append(fileInput.fileId, fileInput.file);
          });

          if (!allUploadsData.keys().next().done) {
            // console.log("hello");
            const uploadFiles = await fetch(
              "http://localhost:3002/api/workmanIndividual/store",
              {
                method: "POST",
                credentials: "include",
                body: allUploadsData,
              }
            );
            const uploadFilesData = await uploadFiles.json();
            if (uploadFiles.status == 200) {
              urlsUploaded = uploadFilesData.Urls;
              console.log(urlsUploaded);
            }
          }

          installRec.forEach((obj) => {
            let testimonialTmp = [];
            if (obj.testimonial.length > 0) {
              let codeForSkillCombo = `testimonial_${
                serviceTypeCode["Installation"]
              }${applicationCode[obj.serviceApplication]}${
                skillCode["Installation"][obj.skillCategory]
              }${subSkillCode[obj.subSkillCategory]}`;
              //extract keys from urls
              let urlsCombo = Object.keys(urlsUploaded).filter((obj2) => {
                return obj2.includes(codeForSkillCombo);
              }); //stored all new urls
              urlsCombo.forEach((obj2) => {
                testimonialTmp.push(urlsUploaded[obj2]);
              });
              if (urlsCombo.length == 0) testimonialTmp = obj.testimonial;
            }
            let certificationTmp = [];
            if (obj.certifications.length > 0) {
              //certification_
              let codeForSkillCombo = `certification_${
                serviceTypeCode["Installation"]
              }${applicationCode[obj.serviceApplication]}${
                skillCode["Installation"][obj.skillCategory]
              }${subSkillCode[obj.subSkillCategory]}`;
              obj.certifications.forEach((obj2, idx) => {
                if (`${codeForSkillCombo}_${idx}` in urlsUploaded) {
                  certificationTmp.push({
                    course: obj2.course,
                    fileLink: urlsUploaded[`${codeForSkillCombo}_${idx}`],
                  });
                } else {
                  certificationTmp.push(obj2);
                }
              });
            }
            tmpArr1.push({
              serviceApplication: obj.serviceApplication,
              skillCategory: obj.skillCategory,
              subSkillCategory: obj.subSkillCategory,
              certifications: certificationTmp,
              experience: obj.experience,
              training: obj.training,
              testimonial: testimonialTmp,
            });
          });

          repairRec.forEach((obj) => {
            let testimonialTmp = [];
            if (obj.testimonial.length > 0) {
              let codeForSkillCombo = `testimonial_${
                serviceTypeCode["Repair"]
              }${applicationCode[obj.serviceApplication]}${
                skillCode["Repair"][obj.skillCategory]
              }${subSkillCode[obj.subSkillCategory]}`;
              //extract keys from urls
              let urlsCombo = Object.keys(urlsUploaded).filter((obj2) => {
                return obj2.includes(codeForSkillCombo);
              }); //stored all new urls
              urlsCombo.forEach((obj2) => {
                testimonialTmp.push(urlsUploaded[obj2]);
              });
              if (urlsCombo.length == 0) testimonialTmp = obj.testimonial;
            }
            let certificationTmp = [];
            if (obj.certifications.length > 0) {
              //certification_
              let codeForSkillCombo = `certification_${
                serviceTypeCode["Repair"]
              }${applicationCode[obj.serviceApplication]}${
                skillCode["Repair"][obj.skillCategory]
              }${subSkillCode[obj.subSkillCategory]}`;
              obj.certifications.forEach((obj2, idx) => {
                if (`${codeForSkillCombo}_${idx}` in urlsUploaded) {
                  certificationTmp.push({
                    course: obj2.course,
                    fileLink: urlsUploaded[`${codeForSkillCombo}_${idx}`],
                  });
                } else {
                  certificationTmp.push(obj2);
                }
              });
            }
            tmpArr2.push({
              serviceApplication: obj.serviceApplication,
              skillCategory: obj.skillCategory,
              subSkillCategory: obj.subSkillCategory,
              certifications: certificationTmp,
              experience: obj.experience,
              training: obj.training,
              testimonial: testimonialTmp,
            });
          });

          newbuildRec.forEach((obj) => {
            let testimonialTmp = [];
            if (obj.testimonial.length > 0) {
              let codeForSkillCombo = `testimonial_${
                serviceTypeCode["New Build"]
              }${applicationCode[obj.serviceApplication]}${
                skillCode["New Build"][obj.skillCategory]
              }${subSkillCode[obj.subSkillCategory]}`;
              //extract keys from urls
              let urlsCombo = Object.keys(urlsUploaded).filter((obj2) => {
                return obj2.includes(codeForSkillCombo);
              }); //stored all new urls
              urlsCombo.forEach((obj2) => {
                testimonialTmp.push(urlsUploaded[obj2]);
              });
              if (urlsCombo.length == 0) testimonialTmp = obj.testimonial;
            }
            let certificationTmp = [];
            if (obj.certifications.length > 0) {
              //certification_
              let codeForSkillCombo = `certification_${
                serviceTypeCode["New Build"]
              }${applicationCode[obj.serviceApplication]}${
                skillCode["New Build"][obj.skillCategory]
              }${subSkillCode[obj.subSkillCategory]}`;
              obj.certifications.forEach((obj2, idx) => {
                if (`${codeForSkillCombo}_${idx}` in urlsUploaded) {
                  certificationTmp.push({
                    course: obj2.course,
                    fileLink: urlsUploaded[`${codeForSkillCombo}_${idx}`],
                  });
                } else {
                  certificationTmp.push(obj2);
                }
              });
            }
            tmpArr3.push({
              serviceApplication: obj.serviceApplication,
              skillCategory: obj.skillCategory,
              subSkillCategory: obj.subSkillCategory,
              certifications: certificationTmp,
              experience: obj.experience,
              training: obj.training,
              testimonial: testimonialTmp,
            });
          });
        } else {
          handleInterestApplication("Installation", true);
          handleInterestSkill("Installation", true);
          handleInterestSubskill("Installation", true);
        }

        let skillDetailsObj = {
          installation: levelOfExpertise ? tmpArr1 : installationSkillInterest,
          repair: levelOfExpertise ? tmpArr2 : repairSkillInterest,
          newBuild: levelOfExpertise ? tmpArr3 : newBuildSkillInterest,
        };
        let mat = [];
        materialListValue.forEach((itm2) => {
          mat.push(itm2.value);
        });

        let affiliationDetailsObj = {
          handlingMaterials: handlingMaterials,
          experienced: levelOfExpertise,
          materialList: mat,
        };

        let objToSend = {
          skillDetails: skillDetailsObj,
          affiliationDetails: affiliationDetailsObj,
        };

        // console.log(skillDetailsObj)

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
          "http://localhost:3002/api/workmanIndividual/update",
          settings
        );
        if (fetchResponse.status == 200) {
          setSkillDetails(skillDetailsObj);
          setAffiliationDetails(affiliationDetailsObj);
          toast.success("Skill Details Updated!");
        } else if (fetchResponse.status !== 404) {
          toast.error("Something went wrong!");
          //assign pincode back
          setHandlingMaterials(affiliationDetails.handlingMaterials);
          setLevelOfExpertise(affiliationDetails.experienced);
          let mat1 = [];
          affiliationDetails.materialList.forEach((material) => {
            mat1.push({ value: material, label: material });
          });
          setMaterialListValue(mat1);
          setTempRecords(skillDetails.installation);
          let tmpSelectedApplication = [];
          let tmpSelectedSkill = [];
          let tmpSelectedSubSkill = [];
          skillDetails.installation.forEach((itm1) => {
            tmpSelectedApplication.push({
              value: itm1.serviceApplication,
              label: itm1.serviceApplication,
            });
            if (itm1.skillCategory !== "") {
              tmpSelectedSkill.push({
                value: itm1.skillCategory,
                label: itm1.skillCategory,
              });
            }
            if (itm1.subSkillCategory !== "") {
              tmpSelectedSubSkill.push({
                value: itm1.subSkillCategory,
                label: itm1.subSkillCategory,
              });
            }
          });
          tmpSelectedApplication = tmpSelectedApplication.filter(
            (obj, index, ar) => {
              return index === ar.findIndex((t) => t.value === obj.value);
            }
          );
          tmpSelectedSkill = tmpSelectedSkill.filter((obj, index, ar) => {
            return index === ar.findIndex((t) => t.value === obj.value);
          });
          tmpSelectedSubSkill = tmpSelectedSubSkill.filter((obj, index, ar) => {
            return index === ar.findIndex((t) => t.value === obj.value);
          });
          if (affiliationDetails.experienced) {
            setInstallRec(skillDetails.installation);
            setRepairRec(skillDetails.repair);
            setNewbuildRec(skillDetails.newBuild);
            // handleServApplChange(
            //     tmpSelectedApplication,
            //     tmpSelectedSkill,
            //     tmpSelectedSubSkill,
            //     "Installation"
            //   );
          } else {
            setInstallationSkillInterest(skillDetails.installation);
            setRepairSkillInterest(skillDetails.repair);
            setNewBuildSkillInterest(skillDetails.newBuild);

            setSelectedApplication(tmpSelectedApplication);
            setSelectedSkill(tmpSelectedSkill);
            setSelectedSubskill(tmpSelectedSubSkill);
          }
          setServiceType("Installation");
          setServiceTypeInterest("Installation");
        } else if (fetchResponse.status == 404) {
          
        }
      } else {
        toast.error("Save the skill details first!");
      }
    }
  };

  const handleAdditionalFilesUpload = (e, fileKey) => {
    const fileEntry = {
      fileId: fileKey,
      file: e.target.files[0],
    };
    let arr = additionalInformationFiles;
    arr.push(fileEntry);
    setAdditionalInformationFiles(arr);
  };

  const handleCertificatesRemoval = (item, fileKey) => {
    let arr = educationDetailsFiles.filter((obj) => {
      return obj.fileId !== fileKey;
    });
    const fileLabel = document.getElementById(`${item}-pic-upload-label`);
    if (fileLabel !== null)
      fileLabel.textContent = `Upload ${item} certificate`;

    const fileInput = document.getElementById(`${item}-pic-upload`);
    if (fileInput !== null) {
      fileInput.type = "text"; // Temporarily change the type to text
      fileInput.type = "file";
    }

    setEducationDetailsFiles(arr);
  };

  const checkUploadedFile = (typeCertificate) => {
    if (typeCertificate == "ITI") {
      if (ITICertificate !== "") return true;
    } else if (typeCertificate == "Diploma - Specialization") {
      if (diplomaCertificate !== "") return true;
    } else if (typeCertificate == "Degree") {
      if (degreeCertificate !== "") return true;
    }
    return false;
  };

  const handleEducationFilesUpload = (e, fileKey) => {
    const fileEntry = {
      fileId: fileKey,
      file: e.target.files[0],
    };
    let arr = educationDetailsFiles;
    arr.push(fileEntry);
    setEducationDetailsFiles(arr);
  };

  return (
    <div>
     
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
            <Col xs="6" md="10">
              <div className="content-header">
                <h3 className="mb-0">Personal Data</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="4" md="1">
              <Button
                color={`${bool_Personal_Data ? "primary" : "success"}`}
                outline
                onClick={() => {
                  handlePersonalDataChange();
                }}
              >
                {bool_Personal_Data ? "Edit" : "Save"}
              </Button>
            </Col>
            <Col xs="2" md="1">
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
          <CardBody>
            <Form onSubmit={(e) => e.preventDefault()}>
              {typeStakeholder == "Partner" ? (
                <Row>
                  <Col xs="12" md="6" className="mb-1">
                    <h4>
                      <b>Firm Name : </b> {firmName}
                    </h4>
                  </Col>
                  <Col xs="12" md="6" className="mb-1">
                    <h4>
                      <b>Firm Id : </b> {firmId}
                    </h4>
                  </Col>
                </Row>
              ) : (
                <></>
              )}
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-name">
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    id="register-name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    disabled={bool_Personal_Data}
                  />
                </Col>
                {bool_Personal_Data ? (
                  <>
                    <Col xs="8" md="5" className="mb-1">
                      <Label
                        className="form-label"
                        for="signup-details-GST-card-copy"
                      >
                        View Uploaded Photo
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
                          style={{
                            marginRight: "1rem",
                          }}
                          onClick={() => {
                            if (profilePic !== "") window.open(profilePic);
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
                        className="profile-upload-label"
                        id="profile-upload-label"
                        for="profile-upload"
                      >
                        {profilePic !== "" ? "File selected" : "Upload Photo"}
                      </Label>
                      <Input
                        type="file"
                        id="profile-upload"
                        onChange={(e) => {
                          if (e.target.files[0] !== undefined) {
                            const fileLabel = document.getElementById(
                              "profile-upload-label"
                            );
                            fileLabel.textContent = "File selected";
                            setProfilePic(
                              URL.createObjectURL(e.target.files[0])
                            );
                            setProfileDoc(e.target.files[0]);
                          } else {
                            const fileLabel = document.getElementById(
                              "profile-upload-label"
                            );
                            fileLabel.textContent = "Upload Photo";
                            setProfileDoc(null);

                            setProfilePic("");
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
                          style={{
                            marginRight: "1rem",
                          }}
                          onClick={() => {
                            if (profilePic !== "") window.open(profilePic);
                          }}
                        >
                          <Eye size={14} />
                        </Button>
                        <Button
                          color="danger"
                          outline
                          onClick={() => {
                            const fileLabel = document.getElementById(
                              "profile-upload-label"
                            );
                            fileLabel.textContent = "Upload Photo";

                            const fileInput =
                              document.getElementById("profile-upload");
                            fileInput.type = "text"; // Temporarily change the type to text
                            fileInput.type = "file";

                            setProfileDoc(null);
                            setProfilePic("");
                          }}
                        >
                          <X size={14} />
                        </Button>
                      </div>
                    </Col>
                  </>
                )}
              </Row>
              <Row>
                {bool_Personal_Data ? (
                  <Col md="6" className="mb-1">
                    <Label className="form-label" for="register-mobile">
                      Mobile Number
                    </Label>
                    <Input
                      type="Number"
                      id="register-mobile"
                      placeholder="9875461258"
                      value={newMobileNumber}
                      disabled={bool_Personal_Data}
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
                          placeholder={mobileNumber ?? "9875461258"}
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
                {bool_Personal_Data ? (
                  <Col md="6" className="mb-1">
                    <Label className="form-label" for="register-email">
                      Email Id
                    </Label>
                    <Input
                      type="email"
                      id="register-email"
                      value={newEmailId}
                      disabled={bool_Personal_Data}
                      placeholder={newEmailId}
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
                          placeholder={emailId}
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
                                placeholder={emailId}
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
                    value={address}
                    disabled={bool_Personal_Data}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Col>

                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Locality/Area
                  </Label>
                  <Input
                    type="text"
                    value={localityArea}
                    disabled={bool_Personal_Data}
                    onChange={(e) => setLandmark(e.target.value)}
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
                    value={landmark}
                    disabled={bool_Personal_Data}
                    onChange={(e) => setLandmark(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Pincode
                  </Label>
                  <Input
                    type="number"
                    value={pincode}
                    disabled={bool_Personal_Data}
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
                    isDisabled={bool_Personal_Data}
                    theme={selectThemeColors}
                    isClearable={true}
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
                    value={selectedStatePersonal}
                    options={stateOptions}
                    onChange={(e) => {
                      handleStatePersonalChange(e);
                    }}
                    isDisabled={bool_Personal_Data}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    Country
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={true}
                    id={`state-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    options={countryOptions}
                    value={{ value: country, label: country }}
                    onChange={(e) => setCountry(e.value)}
                    isDisabled={bool_Personal_Data}
                  />
                </Col>

                <Col xs="12" md="6" className="mb-1">
                  <Label className="form-label" for={`city-${type}`}>
                    Open to Work outside your base location
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
                        disabled={bool_Personal_Data}
                        checked={work}
                        onChange={() => {}}
                        onClick={() => {
                          if (!work) {
                            setWork(!work);
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
                        checked={!work}
                        disabled={bool_Personal_Data}
                        onChange={() => {}}
                        onClick={() => {
                          if (work) {
                            setWork(!work);
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
                <h3 className="mb-0">Education Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="4" md="1">
              <Button
                color={`${bool_Education ? "primary" : "success"}`}
                outline
                onClick={() => {
                  handleEducationDetailsChange();
                }}
              >
                {bool_Education ? "Edit" : "Save"}
              </Button>
            </Col>
            <Col xs="2" md="1">
              {showEd ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowEd(!showEd)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowEd(!showEd)}
                ></ChevronDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showEd ? (
          <CardBody>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row>
                <Col xs="6" className="mb-1">
                  <Label className="form-label" for={`city-${type}`}>
                    Basic Education
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
                        checked={basiced == 1}
                        disabled={bool_Education}
                        onChange={() => {
                          if (basiced !== 1) {
                            setBasiced(1);
                            setQual([]);
                            setIti(false);
                            setDeg(false);
                            setDip(false);
                            let arr = educationDetailsFiles.filter((obj) => {
                              return !obj.fileId.includes("Certificate");
                            });
                            setEducationDetailsFiles(arr);
                            setITICertificate("");
                            setDiplomaCertificate("");
                            setDegreeCertificate("");
                          }
                        }}
                      />
                      <Label className="form-label" for="ex1-active">
                        below 10th grade
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex1-active"
                        name="ex1"
                        checked={basiced == 2}
                        disabled={bool_Education}
                        onChange={() => {
                          if (basiced !== 2) {
                            setBasiced(2);
                            setQual([]);
                            setIti(false);
                            setDeg(false);
                            setDip(false);
                            let arr = educationDetailsFiles.filter((obj) => {
                              return !obj.fileId.includes("Certificate");
                            });
                            setEducationDetailsFiles(arr);
                            setITICertificate("");
                            setDiplomaCertificate("");
                            setDegreeCertificate("");
                          }
                        }}
                      />
                      <Label className="form-label" for="ex1-active">
                        10th/12th grade
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex1-active"
                        name="ex1"
                        checked={basiced == 3}
                        disabled={bool_Education}
                        onChange={() => {
                          if (basiced !== 3) {
                            setBasiced(3);
                          }
                        }}
                      />
                      <Label className="form-label" for="ex1-active">
                        Technical Qualification
                      </Label>
                    </div>
                  </div>
                </Col>
                {basiced == 3 ? (
                  <Col xs="6" className="mb-1">
                    <Label className="form-label" for={`city-${type}`}>
                      Technical Qualification
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
                          disabled={bool_Education}
                          // checked={default_edu["Graduation"][0]}
                          checked={iti}
                          onChange={() => {}}
                          onClick={() => {
                            if (!iti) {
                              let arr = qual;
                              arr.push("ITI");
                              setQual(arr);
                            } else {
                              let arr = qual.filter((item) => {
                                return item !== "ITI";
                              });
                              setQual(arr);
                              handleCertificatesRemoval(
                                "ITI",
                                "ITICertificate"
                              );
                              setITICertificate("");
                            }
                            setIti(!iti);
                          }}
                        />
                        <Label className="form-label" for="ex2-active">
                          ITI
                        </Label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex3-active"
                          name="ex3"
                          checked={dip}
                          disabled={bool_Education}
                          onChange={() => {}}
                          onClick={() => {
                            if (!dip) {
                              let arr = qual;
                              arr.push("Diploma - Specialization");
                              setQual(arr);
                            } else {
                              let arr = qual.filter((item) => {
                                return item !== "Diploma - Specialization";
                              });
                              handleCertificatesRemoval(
                                "Diploma",
                                "diplomaCertificate"
                              );
                              setQual(arr);
                              setDiplomaCertificate("");
                            }
                            setDip(!dip);
                          }}
                        />
                        <Label className="form-label" for="ex3-active">
                          Diploma - Specialization
                        </Label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex4-active"
                          name="ex4"
                          checked={deg}
                          disabled={bool_Education}
                          onChange={() => {}}
                          onClick={() => {
                            if (!deg) {
                              let arr = qual;
                              arr.push("Degree");
                              setQual(arr);
                            } else {
                              let arr = qual.filter((item) => {
                                return item !== "Degree";
                              });
                              handleCertificatesRemoval(
                                "Degree",
                                "degreeCertificate"
                              );
                              setQual(arr);
                              setDegreeCertificate("");
                            }
                            setDeg(!deg);
                          }}
                        />
                        <Label className="form-label" for="ex4-active">
                          Degree
                        </Label>
                      </div>
                    </div>
                  </Col>
                ) : (
                  <p />
                )}
              </Row>
              {bool_Education ? (
                <>
                  {qual.length > 0 ? (
                    <Row>
                      {qual.map((item, id) => (
                        <Col key={id} xs="12" md="4" className="mb-1">
                          <Row>
                            <Col xs="10">
                              <Label
                                className="form-label"
                                for="signup-details-photo-copy"
                              >
                                View Uploaded {item} certificate
                              </Label>
                              <Input
                                type="file"
                                id="signup-details-photo-copy"
                                disabled={bool_Education}
                              />
                            </Col>
                            <Col
                              xs="2"
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
                                  marginTop: "1.7rem",
                                }}
                              >
                                <Button
                                  color="primary"
                                  outline
                                  onClick={() => {
                                    if (item == "ITI" && ITICertificate !== "")
                                      window.open(ITICertificate);
                                    else if (
                                      item == "Diploma - Specialization" &&
                                      diplomaCertificate !== ""
                                    )
                                      window.open(diplomaCertificate);
                                    else if (
                                      item == "Degree" &&
                                      degreeCertificate !== ""
                                    )
                                      window.open(degreeCertificate);
                                  }}
                                  style={{
                                    marginRight: "1rem",
                                  }}
                                >
                                  <Eye size={14} />
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      ))}
                    </Row>
                  ) : (
                    <p />
                  )}
                </>
              ) : (
                <>
                  {qual.length > 0 ? (
                    <Row>
                      {qual.map((item, id) => (
                        <Col key={id} xs="12" md="4" className="mb-1">
                          <Row>
                            <Col xs="8">
                              <Label
                                className={`${item}-pic-upload-label`}
                                id={`${item}-pic-upload-label`}
                                for={`${item}-pic-upload`}
                              >
                                {checkUploadedFile(item)
                                  ? "File selected"
                                  : `Upload ${item} certificate`}
                              </Label>
                              <Input
                                type="file"
                                id={`${item}-pic-upload`}
                                onChange={(e) => {
                                  let fileId;
                                  if (item == "ITI") fileId = "ITICertificate";
                                  else if (item == "Diploma - Specialization")
                                    fileId = "diplomaCertificate";
                                  else if (item == "Degree")
                                    fileId = "degreeCertificate";

                                  if (e.target.files[0] !== undefined) {
                                    const fileLabel = document.getElementById(
                                      `${item}-pic-upload-label`
                                    );
                                    fileLabel.textContent = "File selected";
                                    handleEducationFilesUpload(e, fileId);

                                    // console.log(item);
                                    if (item == "ITI")
                                      setITICertificate(
                                        URL.createObjectURL(e.target.files[0])
                                      );
                                    else if (item == "Diploma - Specialization")
                                      setDiplomaCertificate(
                                        URL.createObjectURL(e.target.files[0])
                                      );
                                    else if (item == "Degree")
                                      setDegreeCertificate(
                                        URL.createObjectURL(e.target.files[0])
                                      );
                                  } else {
                                    let arr = educationDetailsFiles.filter(
                                      (obj) => {
                                        return obj.fileId !== fileId;
                                      }
                                    );
                                    const fileLabel = document.getElementById(
                                      `${item}-pic-upload-label`
                                    );
                                    fileLabel.textContent = `Upload ${item} certificate`;

                                    setEducationDetailsFiles(arr);
                                    if (item == "ITI") setITICertificate("");
                                    else if (item == "Diploma - Specialization")
                                      setDiplomaCertificate("");
                                    else if (item == "Degree")
                                      setDegreeCertificate("");
                                  }
                                }}
                              />
                            </Col>
                            <Col
                              xs="4"
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
                                  marginTop: "1.7rem",
                                }}
                              >
                                <Button
                                  color="primary"
                                  onClick={() => {
                                    let fileId;
                                    if (item == "ITI")
                                      fileId = "ITICertificate";
                                    else if (item == "Diploma - Specialization")
                                      fileId = "diplomaCertificate";
                                    else if (item == "Degree")
                                      fileId = "degreeCertificate";

                                    if (
                                      educationDetailsFiles.filter((obj) => {
                                        return obj.fileId == fileId;
                                      }).length > 0
                                    ) {
                                      if (
                                        item == "ITI" &&
                                        ITICertificate !== ""
                                      )
                                        window.open(ITICertificate);
                                      else if (
                                        item == "Diploma - Specialization" &&
                                        diplomaCertificate !== ""
                                      )
                                        window.open(diplomaCertificate);
                                      else if (
                                        item == "Degree" &&
                                        degreeCertificate !== ""
                                      )
                                        window.open(degreeCertificate);
                                    }
                                  }}
                                  outline
                                  style={{
                                    marginRight: "1rem",
                                  }}
                                >
                                  <Eye size={14} />
                                </Button>
                                <Button
                                  color="danger"
                                  outline
                                  onClick={() => {
                                    let fileId;
                                    if (item == "ITI") {
                                      fileId = "ITICertificate";
                                      setITICertificate("");
                                    } else if (
                                      item == "Diploma - Specialization"
                                    ) {
                                      fileId = "diplomaCertificate";
                                      setDiplomaCertificate("");
                                    } else if (item == "Degree") {
                                      fileId = "degreeCertificate";
                                      setDegreeCertificate("");
                                    }

                                    handleCertificatesRemoval(item, fileId);
                                  }}
                                >
                                  <X size={14} />
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      ))}
                    </Row>
                  ) : (
                    <p />
                  )}
                </>
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
                <h3 className="mb-0">Language Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="4" md="1">
              <Button
                color={`${bool_Language ? "primary" : "success"}`}
                outline
                onClick={() => {
                  handleLanguageDetailsChange();
                }}
              >
                {bool_Language ? "Edit" : "Save"}
              </Button>
            </Col>
            <Col xs="2" md="1">
              {showLang ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowLang(!showLang)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowLang(!showLang)}
                ></ChevronDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showLang ? (
          <CardBody>
            {bool_Language ? (
              <>
                {lang.map((item, i) => (
                  <Row
                    key={i}
                    className="justify-content-between align-items-center"
                  >
                    <Col xs="6" md={3} className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`item-name-${i}`}>
                          Language :
                        </Label>
                        <h4>{item.name}</h4>
                      </Row>
                    </Col>
                    <Col xs="6" md={3} className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`cost-${i}`}>
                          Speaking :
                        </Label>
                        <h4>{langLevel[item.speak]}</h4>
                      </Row>
                    </Col>
                    <Col xs="6" md={3} className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`quantity-${i}`}>
                          Writing :
                        </Label>
                        <h4>{langLevel[item.write]}</h4>
                      </Row>
                    </Col>
                    <Col xs="6" md={3} className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`item-name-${i}`}>
                          Reading :
                        </Label>
                        <h4>{langLevel[item.read]}</h4>
                      </Row>
                    </Col>
                    <Col sm={12}>
                      <hr />
                    </Col>
                  </Row>
                ))}
              </>
            ) : (
              <>
                {lang.map((item, i) => (
                  <Row
                    key={i}
                    className="justify-content-between align-items-center"
                  >
                    <Col xs="6" md={2} className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`item-name-${i}`}>
                          Language :
                        </Label>
                        <h4>{item.name}</h4>
                      </Row>
                    </Col>
                    <Col xs="6" md={2} className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`cost-${i}`}>
                          Speaking :
                        </Label>
                        <h4>{langLevel[item.speak]}</h4>
                      </Row>
                    </Col>
                    <Col xs="6" md={2} className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`quantity-${i}`}>
                          Writing :
                        </Label>
                        <h4>{langLevel[item.write]}</h4>
                      </Row>
                    </Col>
                    <Col xs="6" md={2} className="mb-md-0 mb-1">
                      <Row>
                        <Label className="form-label" for={`item-name-${i}`}>
                          Reading :
                        </Label>
                        <h4>{langLevel[item.read]}</h4>
                      </Row>
                    </Col>
                    <Col xs="6" md={2}>
                      <Button
                        style={{ marginBottom: "2rem" }}
                        color="danger"
                        className="text-nowrap px-1 mt-2"
                        onClick={() => {
                          handleEditLang(i);
                        }}
                        outline
                      >
                        <X size={14} className="me-50" />
                        <span>Edit</span>
                      </Button>
                    </Col>
                    <Col xs="6" md={2}>
                      <Button
                        style={{ marginBottom: "2rem" }}
                        color="danger"
                        className="text-nowrap px-1 mt-2"
                        onClick={() => {
                          handleDeleteLang(i);
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
                      <Select
                        theme={selectThemeColors}
                        id={`lang-${type}`}
                        className="react-select"
                        classNamePrefix="select"
                        options={languages.filter((obj) => {
                          return (
                            0 ===
                            lang.filter((item) => {
                              return item.name === obj.value;
                            }).length
                          );
                        })}
                        value={{ value: langName, label: langName }}
                        onChange={(e) => {
                          setLangName(e.value);
                        }}
                      />
                    </Col>
                    <Col md={3} className="mb-md-0 mb-1">
                      <Label className="form-label" for={`city-${type}`}>
                        Speaking Proficiency
                      </Label>
                      <div
                        className="demo-inline-spacing"
                        style={{ marginTop: "-1rem" }}
                      >
                        <div className="form-check">
                          <Input
                            type="radio"
                            id="ex5-active"
                            name="ex5"
                            checked={langSpeak == 1}
                            onChange={() => {
                              setLangSpeak(langSpeak == 1 ? 0 : 1);
                            }}
                            // onClick={(e) => {
                            //   if (e.target.checked) {
                            //     e.target.checked = true;
                            //     setLangSpeak(0);
                            //   }
                            // }}
                          />
                          <Label className="form-label" for="ex5-active">
                            Beginner
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            id="ex5-active"
                            name="ex5"
                            checked={langSpeak == 2}
                            onChange={() => {
                              setLangSpeak(langSpeak == 2 ? 0 : 2);
                            }}
                            // onClick={(e) => {
                            //   if (e.target.checked) {
                            //     e.target.checked = true;
                            //     setLangSpeak(0);
                            //   }
                            // }}
                          />
                          <Label className="form-label" for="ex5-active">
                            Fluent
                          </Label>
                        </div>
                      </div>
                    </Col>
                    <Col md={3} className="mb-md-0 mb-1">
                      <Label className="form-label" for={`city-${type}`}>
                        Writing Proficiency
                      </Label>
                      <div
                        className="demo-inline-spacing"
                        style={{ marginTop: "-1rem" }}
                      >
                        <div className="form-check">
                          <Input
                            type="radio"
                            id="ex6-active"
                            name="ex6"
                            checked={langWrite == 1}
                            onChange={() => {
                              setLangWrite(langWrite == 1 ? 0 : 1);
                            }}
                            // onClick={(e) => {
                            //   if (e.target.checked) {
                            //     e.target.checked = true;
                            //     setLangWrite(0);
                            //   }
                            // }}
                          />
                          <Label className="form-label" for="ex6-active">
                            Beginner
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            id="ex6-active"
                            name="ex6"
                            checked={langWrite == 2}
                            onChange={() => {
                              setLangWrite(langWrite == 2 ? 0 : 2);
                            }}
                            // onClick={(e) => {
                            //   if (e.target.checked) {
                            //     e.target.checked = true;
                            //     setLangWrite(0);
                            //   }
                            // }}
                          />
                          <Label className="form-label" for="ex6-active">
                            Fluent
                          </Label>
                        </div>
                      </div>
                    </Col>
                    <Col md={3} className="mb-md-0 mb-1">
                      <Label className="form-label" for={`city-${type}`}>
                        Reading Proficiency
                      </Label>
                      <div
                        className="demo-inline-spacing"
                        style={{ marginTop: "-1rem" }}
                      >
                        <div className="form-check">
                          <Input
                            type="radio"
                            id="ex7-active"
                            name="ex7"
                            checked={langRead == 1}
                            onChange={() => {
                              setLangRead(langRead == 1 ? 0 : 1);
                            }}
                            // onClick={(e) => {
                            //   if (e.target.checked) {
                            //     e.target.checked = true;
                            //     setLangRead(0);
                            //   }
                            // }}
                          />
                          <Label className="form-label" for="ex7-active">
                            Beginner
                          </Label>
                        </div>
                        <div className="form-check">
                          <Input
                            type="radio"
                            id="ex7-active"
                            name="ex7"
                            checked={langRead == 2}
                            onChange={() => {
                              setLangRead(langRead == 2 ? 0 : 2);
                            }}
                            // onClick={(e) => {
                            //   if (e.target.checked) {
                            //     e.target.checked = true;
                            //     setLangRead(0);
                            //   }
                            // }}
                          />
                          <Label className="form-label" for="ex7-active">
                            Fluent
                          </Label>
                        </div>
                      </div>
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
                    handleNewLang();
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
                    disabled={bool_Registration}
                    onChange={(e) => {
                      setPanCardNumber(e.target.value);
                    }}
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
                        // defaultValue={panCardDoc}
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
                          outline
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
                    Aadhar Number
                  </Label>
                  <Input
                    type="Number"
                    id="register-mobile"
                    value={aadharCardNumber}
                    disabled={bool_Registration}
                    onChange={(e) => {
                      setAadharCardNumber(e.target.value);
                    }}
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
                        View Uploaded Aadhar Card
                      </Label>
                      <Input
                        type="file"
                        id="signup-details-GST-card-copy"
                        placeholder={aadharCardDoc}
                        // defaultValue={aadharCardDoc}
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
                            if (aadharCardDoc !== "")
                              window.open(aadharCardDoc);
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
                        className="aadhar-upload-label"
                        id="aadhar-upload-label"
                        for="aadhar-upload"
                      >
                        File selected
                      </Label>
                      <Input
                        type="file"
                        id="aadhar-upload"
                        onChange={(e) => {
                          if (e.target.files[0] !== undefined) {
                            const fileLabel = document.getElementById(
                              "aadhar-upload-label"
                            );
                            fileLabel.textContent = "File selected";
                            setAadharCardDoc(
                              URL.createObjectURL(e.target.files[0])
                            );
                            handleAdditionalFilesUpload(e, "aadharCardDoc");
                          } else {
                            let arr = additionalInformationFiles.filter(
                              (obj) => {
                                return obj.fileId !== "aadharCardDoc";
                              }
                            );
                            const fileLabel = document.getElementById(
                              "aadhar-upload-label"
                            );
                            fileLabel.textContent = "Upload Aadhar Card";

                            setAdditionalInformationFiles(arr);

                            setAadharCardDoc("");
                          }
                        }}
                        // defaultValue={aadharCardDoc}
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
                            if (aadharCardDoc !== "")
                              window.open(aadharCardDoc);
                          }}
                          style={{
                            marginRight: "1rem",
                          }}
                        >
                          <Eye size={14} />
                        </Button>
                        <Button
                          color="danger"
                          outline
                          onClick={() => {
                            let arr = additionalInformationFiles.filter(
                              (obj) => {
                                return obj.fileId !== "aadharCardDoc";
                              }
                            );
                            const fileLabel = document.getElementById(
                              "aadhar-upload-label"
                            );
                            fileLabel.textContent = "Upload Aadhar Card";

                            const fileInput =
                              document.getElementById("aadhar-upload");
                            fileInput.type = "text"; // Temporarily change the type to text
                            fileInput.type = "file";

                            setAdditionalInformationFiles(arr);
                            setAadharCardDoc("");
                          }}
                        >
                          <X size={14} />
                        </Button>
                      </div>
                    </Col>
                  </>
                )}
              </Row>
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
                      UAN
                    </Label>
                    <Input
                      type="text"
                      id="register-mobile"
                      value={pfNumber}
                      disabled={bool_Registration}
                      onChange={(e) => {
                        setPFNumber(e.target.value);
                      }}
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
                        <Input
                          type="file"
                          id="signup-details-GST-card-copy"
                          // defaultValue={PFDocument}
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
                            outline
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
            </Form>
          </CardBody>
        ) : (
          <p />
        )}
      </Card>
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          {typeStakeholder !== "Partner" ? (
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
          ) : (
            <Row>
              <Col xs="8" md="11">
                <div className="content-header">
                  <h3 className="mb-0">Bank Details</h3>
                  {/* <small>Enter Your Company Details.</small> */}
                </div>
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
          )}
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
                    disabled={bool_Bank}
                    onChange={(e) => setBankBranchName(e.target.value)}
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
                    value={bankMICR}
                    onChange={(e) => setBankMICR(e.target.value)}
                    disabled={bool_Bank}
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
                          outline
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
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
            <Col xs="6" md="10">
              <div className="content-header">
                <h3 className="mb-0">Service Pincodes</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="4" md="1">
              <Button
                color={`${bool_Pincodes ? "primary" : "success"}`}
                outline
                onClick={() => handlePincodeChange()}
              >
                {bool_Pincodes ? "Edit" : "Save"}
              </Button>
            </Col>
            <Col xs="2" md="1">
              {showPin ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowPin(!showPin)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowPin(!showPin)}
                ></ChevronDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showPin ? (
          <CardBody>
            {bool_Pincodes ? (
              <>
                <Row style={{ marginTop: "1rem" }}>
                  <h4>Total Offices/Area selected - {totalRecords}</h4>
                </Row>
                <Row>
                  <Col xs="12" md="3">
                    <Label className="form-label" for={`rows-${type}`}>
                      Rows per page
                    </Label>
                    <Select
                      theme={selectThemeColors}
                      isClearable={false}
                      id={`rows-${type}`}
                      className="react-select"
                      classNamePrefix="select"
                      value={rowsPerPage}
                      options={pageRowOptions}
                      onChange={(e) => {
                        setRowsPerPage(e);
                        if (e.value !== "show all") {
                          setTotalRows(e.value);
                          handleDataPagination(tempRecord1, parseInt(e.value));
                        } else {
                          setTotalRows(tempRecord1.length);
                          handleDataPagination(tempRecord1, tempRecord1.length);
                        }
                      }}
                    />
                  </Col>
                </Row>
                <Row style={{ marginTop: "1rem" }}>
                  <Col xs="12">
                    <Table hover>
                      <thead>
                        <tr>
                          <th style={{ maxWidth: "90px" }}>Area</th>
                          <th style={{ maxWidth: "120px" }}>Pincode</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tempRecord1
                          .slice(
                            currentPageTable * totalRows - totalRows,
                            currentPageTable * totalRows
                          )
                          .map((obj, id) => (
                            <tr key={id}>
                              <td
                                id={`office-name-row-${id}`}
                                style={{ maxWidth: "110px" }}
                              >
                                {obj.Office}
                              </td>
                              <td style={{ maxWidth: "90px" }}>
                                {obj.Pincode}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
                <Row>
                  <div className="d-flex justify-content-center align-items-center">
                    <ChevronLeft
                      size={24}
                      className="align-middle me-sm-25 me-0"
                      onClick={() => {
                        if (currentPageTable > 1) {
                          let num = currentPageTable - 1;
                          setCurrentPageTable(num);
                        }
                      }}
                    ></ChevronLeft>
                    <h5
                      style={{
                        marginTop: "0.2rem",
                        marginLeft: "2rem",
                        marginRight: "2rem",
                      }}
                    >
                      {currentPageTable}
                    </h5>
                    <ChevronRight
                      size={24}
                      className="align-middle me-sm-25 me-0"
                      onClick={() => {
                        if (currentPageTable < totalPageTable) {
                          let num = currentPageTable + 1;
                          setCurrentPageTable(num);
                        }
                      }}
                    ></ChevronRight>
                  </div>
                </Row>
              </>
            ) : (
              <>
                <Form>
                  <Row>
                    <Col xs="12">
                      <Label className="form-label" for={`state-${type}`}>
                        State
                      </Label>
                      <Select
                        menuPlacement="top"
                        theme={selectThemeColors}
                        isClearable
                        isMulti
                        closeMenuOnSelect={false}
                        blurInputOnSelect={false}
                        id={`state-${type}`}
                        className="react-select"
                        classNamePrefix="select"
                        placeholder="Select State"
                        options={stateList}
                        value={selectedState}
                        onChange={(e) => {
                          if (e.length > 0) {
                            let tmp = [];
                            e.forEach((obj) => {
                              tmp.push(
                                pinData.filter((obj1) => {
                                  return obj1.state === obj.value;
                                })[0]
                              );
                            });
                            let dist = [];
                            tmp.forEach((obj1) => {
                              obj1.district_list.forEach((obj) => {
                                dist.push({
                                  value: obj.district,
                                  label: obj.district,
                                });
                              });
                            });

                            if (selectedDistrict.length == 0) {
                              handleRecordCount(tmp, [], []);
                            } else {
                              let removeFromSelectedDistrict = [];
                              let dis = [];
                              selectedDistrict.forEach((obj) => {
                                let found = 0;
                                tmp.forEach((obj2) => {
                                  obj2.district_list.forEach((obj3) => {
                                    if (obj.value === obj3.district) {
                                      found += 1;
                                      dis.push(obj3);
                                    }
                                  });
                                });
                                if (found == 0) {
                                  removeFromSelectedDistrict.push(obj);
                                }
                              });
                              setDistrictData(dis);
                              let tmp1 = selectedDistrict.filter((obj) => {
                                return (
                                  removeFromSelectedDistrict.indexOf(obj) < 0
                                );
                              });
                              if (selectedDivision.length == 0) {
                                handleRecordCount(tmp, dis, []);
                              } else {
                                let divData = [];
                                let removeFromSelectedDivision = [];
                                selectedDivision.forEach((obj) => {
                                  let found = 0;
                                  dis.forEach((obj2) => {
                                    obj2.division_list.forEach((obj3) => {
                                      if (obj.value === obj3.division) {
                                        found += 1;
                                        divData.push(obj3);
                                      }
                                    });
                                  });
                                  if (found == 0) {
                                    removeFromSelectedDivision.push(obj);
                                  }
                                });
                                setDivisionData(divData);
                                let tmp2 = selectedDivision.filter((obj) => {
                                  return (
                                    removeFromSelectedDivision.indexOf(obj) < 0
                                  );
                                });

                                handleRecordCount(tmp, dis, tmp2);
                                setSelectedDivision(tmp2);
                              }
                              setSelectedDistrict(tmp1);
                            }

                            setStateData(tmp);
                            setDistrictOptions(dist);
                            setDisableDistrict(false);
                          } else {
                            setDisableDistrict(true);
                            setDisableDivision(true);
                            handleRecordCount([], [], []);
                            setStateData([]);

                            setSelectedDistrict([]);
                            setSelectedDivision([]);
                          }
                          setSelectedState(e);
                        }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12" md="6" style={{ marginTop: "1rem" }}>
                      <Label className="form-label" for={`state-${type}`}>
                        District
                      </Label>
                      <Select
                        menuPlacement="top"
                        theme={selectThemeColors}
                        isClearable
                        isMulti
                        closeMenuOnSelect={false}
                        blurInputOnSelect={false}
                        id={`state-${type}`}
                        className="react-select"
                        classNamePrefix="select"
                        placeholder="Select state first.."
                        isDisabled={disableDistrict}
                        value={selectedDistrict}
                        options={districtOptions}
                        onChange={(e) => {
                          setSelectedDistrict(e);

                          if (e.length > 0) {
                            setDisableDivision(false);
                            let dis = [];
                            stateData.forEach((obj1) => {
                              obj1.district_list.forEach((obj) => {
                                e.forEach((itm) => {
                                  if (itm.value === obj.district) {
                                    dis.push(obj);
                                  }
                                });
                              });
                            });
                            setDistrictData(dis);
                            let divOpt = [];
                            dis.forEach((obj) => {
                              obj.division_list.forEach((itm) => {
                                divOpt.push({
                                  value: itm.division,
                                  label: itm.division,
                                });
                              });
                            });
                            if (selectedDivision.length == 0) {
                              handleRecordCount(stateData, dis, []);
                            } else {
                              let removeFromSelectedDivision = [];
                              let divData = [];
                              selectedDivision.forEach((obj) => {
                                let found = 0;
                                dis.forEach((obj2) => {
                                  obj2.division_list.forEach((obj3) => {
                                    if (obj.value === obj3.division) {
                                      divData.push(obj3);
                                      found += 1;
                                    }
                                  });
                                });
                                if (found == 0) {
                                  removeFromSelectedDivision.push(obj);
                                }
                              });
                              setDivisionData(divData);
                              let tmp = selectedDivision.filter((obj) => {
                                return (
                                  removeFromSelectedDivision.indexOf(obj) < 0
                                );
                              });

                              handleRecordCount(stateData, dis, tmp);
                              setSelectedDivision(tmp);
                            }
                            setDivisionOptions(divOpt);
                          } else {
                            handleRecordCount(stateData, [], []);
                            setDistrictData([]);
                            setDisableDivision(true);
                            setSelectedDivision([]);
                          }
                          // setSelectedDivision([]);
                        }}
                      />
                    </Col>
                    <Col xs="12" md="6" style={{ marginTop: "1rem" }}>
                      <Label className="form-label" for={`state-${type}`}>
                        Division
                      </Label>
                      <Select
                        menuPlacement="top"
                        theme={selectThemeColors}
                        isClearable
                        id={`state-${type}`}
                        isDisabled={disableDivision}
                        className="react-select"
                        classNamePrefix="select"
                        placeholder="Select district first.."
                        isMulti
                        closeMenuOnSelect={false}
                        blurInputOnSelect={false}
                        value={selectedDivision}
                        options={divisionOptions}
                        onChange={(e) => {
                          handleRecordCount(stateData, districtData, e);
                          if (e.length > 0) {
                            let divData = [];
                            districtData.forEach((obj) => {
                              obj.division_list.forEach((itm) => {
                                e.forEach((itm) => {
                                  if (itm.value === obj.division) {
                                    divData.push(itm);
                                  }
                                });
                              });
                            });
                            setDivisionData(divData);
                          } else {
                            setDivisionData([]);
                          }
                          setSelectedDivision(e);
                        }}
                      />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "1rem" }}>
                    <h4>Total Offices/Area selected - {totalRecords}</h4>
                  </Row>
                  {!disableDistrict ? (
                    <>
                      <Row>
                        <Col xs="10" className="mb-1">
                          <Input
                            type="text"
                            id="office-name"
                            placeholder="Search Areas.."
                            value={searchKeyword}
                            onChange={(e) => {
                              setSearchKeyword(e.target.value);
                            }}
                          />
                        </Col>
                        <Col xs="2" className="mb-1">
                          <Search size={25} style={{ marginTop: "0.5rem" }} />
                        </Col>
                      </Row>
                      {searchKeyword === "" ? (
                        <>
                          <Row>
                            <Col xs="12" md="4" className="mb-1">
                              <Label
                                className="form-label"
                                for={`city-${type}`}
                              >
                                Type of Records
                              </Label>
                              <div
                                className="demo-inline-spacing"
                                style={{ marginTop: "-1rem" }}
                              >
                                <div className="form-check">
                                  <Input
                                    type="radio"
                                    id="ex5-active"
                                    name="ex5"
                                    onChange={() => {
                                      setRadioRecord("Checked");
                                      setTempRecord(areaRecordsChkd);
                                      handleDataPagination(areaRecordsChkd);
                                    }}
                                  />
                                  <Label
                                    className="form-label"
                                    for="ex5-active"
                                  >
                                    Selected
                                  </Label>
                                </div>
                                <div className="form-check">
                                  <Input
                                    type="radio"
                                    id="ex5-active"
                                    name="ex5"
                                    onChange={() => {
                                      setRadioRecord("Unchecked");
                                      setTempRecord(uncheckedAreaRecord);
                                      handleDataPagination(uncheckedAreaRecord);
                                    }}
                                  />
                                  <Label
                                    className="form-label"
                                    for="ex5-active"
                                  >
                                    Unselected
                                  </Label>
                                </div>
                                <div className="form-check">
                                  <Input
                                    type="radio"
                                    id="ex5-active"
                                    name="ex5"
                                    onChange={() => {
                                      setRadioRecord("Both");
                                      let arr =
                                        areaRecordsChkd.concat(
                                          uncheckedAreaRecord
                                        );
                                      setTempRecord(arr);
                                      handleDataPagination(arr);
                                    }}
                                  />
                                  <Label
                                    className="form-label"
                                    for="ex5-active"
                                  >
                                    Both
                                  </Label>
                                </div>
                              </div>
                            </Col>
                            <Col xs="6" md="2">
                              <Label
                                className="form-label"
                                for={`rows-${type}`}
                              >
                                Rows per page
                              </Label>
                              <Select
                                theme={selectThemeColors}
                                isClearable={false}
                                id={`rows-${type}`}
                                className="react-select"
                                classNamePrefix="select"
                                value={rowsPerPage}
                                options={pageRowOptions}
                                onChange={(e) => {
                                  setRowsPerPage(e);
                                  if (e.value !== "show all") {
                                    setTotalRows(e.value);
                                    handleDataPagination(
                                      tempRecord,
                                      parseInt(e.value)
                                    );
                                  } else {
                                    setTotalRows(tempRecord.length);
                                    handleDataPagination(
                                      tempRecord,
                                      tempRecord.length
                                    );
                                  }
                                }}
                              />
                            </Col>
                          </Row>
                          <Row style={{ marginTop: "1rem" }}>
                            <Col xs="12">
                              <Table hover>
                                <thead>
                                  <tr>
                                    <th style={{ maxWidth: "90px" }}>Area</th>
                                    <th style={{ maxWidth: "120px" }}>
                                      Pincode
                                    </th>
                                    <th style={{ maxWidth: "0px" }}>
                                      <UncontrolledDropdown>
                                        <DropdownToggle tag="span">
                                          <MoreVertical
                                            size={17}
                                            className="cursor-pointer"
                                          />
                                        </DropdownToggle>
                                        <DropdownMenu end>
                                          <DropdownItem
                                            style={{ width: "100%" }}
                                            tag="a"
                                            href="/"
                                            className="w-100"
                                            onClick={(e) => {
                                              e.preventDefault();
                                              if (areaRecordsChkd.length > 0) {
                                                let tmp6 = uncheckedAreaRecord;
                                                areaRecordsChkd.forEach(
                                                  (obj4) => {
                                                    let tmpObj = obj4;
                                                    tmpObj.checked = false;
                                                    tmp6.push(tmpObj);
                                                  }
                                                );
                                                setUncheckedAreaRecord(tmp6);
                                                setAreaRecordsChkd([]);
                                                setTotalRecords(0);
                                                if (radioRecord == "Checked") {
                                                  setTempRecord([]);
                                                  handleDataPagination([]);
                                                } else {
                                                  setTempRecord(tmp6);
                                                  handleDataPagination(tmp6);
                                                }
                                              }
                                            }}
                                          >
                                            <span
                                              style={{
                                                textTransform: "capitalize",
                                              }}
                                            >
                                              Deselect All
                                            </span>
                                          </DropdownItem>
                                          <DropdownItem
                                            style={{ width: "100%" }}
                                            tag="a"
                                            href="/"
                                            className="w-100"
                                            onClick={(e) => {
                                              e.preventDefault();
                                              if (
                                                uncheckedAreaRecord.length > 0
                                              ) {
                                                let tmp6 = areaRecordsChkd;
                                                uncheckedAreaRecord.forEach(
                                                  (obj4) => {
                                                    let tmpObj = obj4;
                                                    tmpObj.checked = true;
                                                    tmp6.push(tmpObj);
                                                  }
                                                );
                                                setUncheckedAreaRecord([]);
                                                setAreaRecordsChkd(tmp6);
                                                setTotalRecords(tmp6.length);
                                                if (
                                                  radioRecord == "Unchecked"
                                                ) {
                                                  setTempRecord([]);
                                                  handleDataPagination([]);
                                                } else {
                                                  setTempRecord(tmp6);
                                                  handleDataPagination(tmp6);
                                                }
                                              }
                                            }}
                                          >
                                            <span
                                              style={{
                                                textTransform: "capitalize",
                                              }}
                                            >
                                              Select All
                                            </span>
                                          </DropdownItem>
                                        </DropdownMenu>
                                      </UncontrolledDropdown>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {tempRecord
                                    .slice(
                                      currentPageTable * totalRows - totalRows,
                                      currentPageTable * totalRows
                                    )
                                    .map((obj, id) => (
                                      <tr key={id}>
                                        <td
                                          id={`office-name-row-${id}`}
                                          style={{ maxWidth: "110px" }}
                                        >
                                          {obj.Office}
                                        </td>
                                        <td style={{ maxWidth: "90px" }}>
                                          {obj.Pincode}
                                        </td>
                                        <td>
                                          <Input
                                            style={{ marginLeft: "0" }}
                                            type="checkbox"
                                            checked={obj.checked}
                                            onChange={() => {
                                              handleCheckedRecords(obj);
                                            }}
                                          />
                                        </td>
                                      </tr>
                                    ))}
                                </tbody>
                              </Table>
                            </Col>
                          </Row>
                          <Row>
                            <div className="d-flex justify-content-center align-items-center">
                              <ChevronLeft
                                size={24}
                                className="align-middle me-sm-25 me-0"
                                onClick={() => {
                                  if (currentPageTable > 1) {
                                    let num = currentPageTable - 1;
                                    setCurrentPageTable(num);
                                  }
                                }}
                              ></ChevronLeft>
                              <h5
                                style={{
                                  marginTop: "0.2rem",
                                  marginLeft: "2rem",
                                  marginRight: "2rem",
                                }}
                              >
                                {currentPageTable}
                              </h5>
                              <ChevronRight
                                size={24}
                                className="align-middle me-sm-25 me-0"
                                onClick={() => {
                                  if (currentPageTable < totalPageTable) {
                                    let num = currentPageTable + 1;
                                    setCurrentPageTable(num);
                                  }
                                }}
                              ></ChevronRight>
                            </div>
                          </Row>
                        </>
                      ) : (
                        <Row style={{ marginTop: "1rem" }}>
                          <Col xs="12">
                            <Table>
                              <thead>
                                <tr>
                                  <th style={{ maxWidth: "90px" }}>Area</th>
                                  <th style={{ maxWidth: "120px" }}>Pincode</th>
                                  <th style={{ maxWidth: "0px" }}>
                                    <UncontrolledDropdown>
                                      <DropdownToggle tag="span">
                                        <MoreVertical
                                          size={17}
                                          className="cursor-pointer"
                                        />
                                      </DropdownToggle>
                                      <DropdownMenu end>
                                        <DropdownItem
                                          style={{ width: "100%" }}
                                          tag="a"
                                          href="/"
                                          className="w-100"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            if (areaRecordsChkd.length > 0) {
                                              let tmp6 = uncheckedAreaRecord;
                                              areaRecordsChkd.forEach(
                                                (obj4) => {
                                                  let tmpObj = obj4;
                                                  tmpObj.checked = false;
                                                  tmp6.push(tmpObj);
                                                }
                                              );
                                              setUncheckedAreaRecord(tmp6);
                                              setAreaRecordsChkd([]);
                                              setTotalRecords(0);
                                              if (radioRecord == "Checked") {
                                                setTempRecord([]);
                                                handleDataPagination([]);
                                              } else {
                                                setTempRecord(tmp6);
                                                handleDataPagination(tmp6);
                                              }
                                            }
                                          }}
                                        >
                                          <span
                                            style={{
                                              textTransform: "lowercase",
                                            }}
                                          >
                                            Deselect All
                                          </span>
                                        </DropdownItem>
                                        <DropdownItem
                                          style={{ width: "100%" }}
                                          tag="a"
                                          href="/"
                                          className="w-100"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            if (
                                              uncheckedAreaRecord.length > 0
                                            ) {
                                              let tmp6 = areaRecordsChkd;
                                              uncheckedAreaRecord.forEach(
                                                (obj4) => {
                                                  let tmpObj = obj4;
                                                  tmpObj.checked = true;
                                                  tmp6.push(tmpObj);
                                                }
                                              );
                                              setUncheckedAreaRecord([]);
                                              setAreaRecordsChkd(tmp6);
                                              setTotalRecords(tmp6.length);
                                              if (radioRecord == "Unchecked") {
                                                setTempRecord([]);
                                                handleDataPagination([]);
                                              } else {
                                                setTempRecord(tmp6);
                                                handleDataPagination(tmp6);
                                              }
                                            }
                                          }}
                                        >
                                          <span
                                            style={{
                                              textTransform: "lowercase",
                                            }}
                                          >
                                            Select All
                                          </span>
                                        </DropdownItem>
                                      </DropdownMenu>
                                    </UncontrolledDropdown>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {searchArray
                                  .filter((ele) => {
                                    return ele.Office.toLowerCase().startsWith(
                                      searchKeyword.toLowerCase()
                                    );
                                  })
                                  .map((obj, id) => (
                                    <tr key={id}>
                                      <td
                                        id={`office-name-row-${id}`}
                                        style={{ maxWidth: "110px" }}
                                      >
                                        {obj.Office}
                                      </td>
                                      <td style={{ maxWidth: "90px" }}>
                                        {obj.Pincode}
                                      </td>
                                      <td>
                                        <Input
                                          style={{ marginLeft: "0" }}
                                          type="checkbox"
                                          checked={obj.checked}
                                          onChange={() => {
                                            handleCheckedRecords(obj);
                                          }}
                                        />
                                      </td>
                                    </tr>
                                  ))}
                              </tbody>
                            </Table>
                          </Col>
                        </Row>
                      )}
                    </>
                  ) : (
                    <p />
                  )}
                </Form>
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
                <h3 className="mb-0">Affiliation Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="4" md="1">
              <Button
                color={`${bool_Affiliation ? "primary" : "success"}`}
                outline
                onClick={() => handleSkillDetailChange()}
              >
                {bool_Affiliation ? "Edit" : "Save"}
              </Button>
            </Col>
            <Col xs="2" md="1">
              {showSkill ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowSkill(!showSkill)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowSkill(!showSkill)}
                ></ChevronDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showSkill ? (
          <CardBody style={{ userSelect: "none" }}>
            <Row>
              <Col xs="4" md="2" className="mb-1">
                <Label className="form-label" for={`city-${type}`}>
                  Handling Materials
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
                      disabled={bool_Affiliation}
                      checked={handlingMaterials}
                      onChange={() => {
                        if (!handlingMaterials) {
                          setHandlingMaterials(!handlingMaterials);
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
                      disabled={bool_Affiliation}
                      checked={!handlingMaterials}
                      onChange={() => {
                        if (handlingMaterials) {
                          setHandlingMaterials(!handlingMaterials);
                          setMaterialListValue([]);
                        }
                      }}
                    />
                    <Label className="form-label" for="ex0-active">
                      No
                    </Label>
                  </div>
                </div>
              </Col>
              <Col xs="8" md="4" className="mb-1">
                <Label className="form-label" for="register-mobile">
                  Material List
                </Label>
                <Select
                  theme={selectThemeColors}
                  id={`material-${type}`}
                  className="react-select"
                  classNamePrefix="select"
                  isDisabled={!handlingMaterials || bool_Affiliation}
                  isMulti
                  closeMenuOnSelect={false}
                  blurInputOnSelect={false}
                  value={materialListValue}
                  options={[
                    { value: "Glass", label: "Glass" },
                    { value: "Timber", label: "Timber" },
                    { value: "Metal", label: "Metal" },
                  ]}
                  onChange={(e) => setMaterialListValue(e)}
                />
              </Col>
              <Col xs="12" md="6" className="mb-1">
                <Label className="form-label" for={`city-${type}`}>
                  Level of Expertise
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
                      checked={!levelOfExpertise}
                      disabled={
                        bool_Affiliation ||
                        installRec.length > 0 ||
                        repairRec.length > 0 ||
                        newbuildRec.length > 0
                      }
                      onChange={() => {
                        if (levelOfExpertise) {
                          // setServApplData([]);
                          // setSkillCatData([]);
                          // setSelectedApplication([]);
                          // setSkillOptions([]);
                          // setSelectedSkill([]);
                          // setSubskillOpt([]);
                          // setSelectedSubskill([]);
                          // setTempRecords([]);

                          handleInterestApplication("Installation", true);
                          handleInterestSkill("Installation", true);
                          handleInterestSubskill("Installation", true);
                          setLevelOfExpertise(!levelOfExpertise);
                        }
                      }}
                    />
                    <Label className="form-label" for="ex1-active">
                      Fresher
                    </Label>
                  </div>
                  <div className="form-check">
                    <Input
                      type="radio"
                      id="ex1-active"
                      name="ex1"
                      checked={levelOfExpertise}
                      disabled={bool_Affiliation}
                      onChange={() => {
                        if (!levelOfExpertise) {
                          changeExperienceToTrue();
                          setLevelOfExpertise(!levelOfExpertise);
                        }
                      }}
                    />
                    <Label className="form-label" for="ex1-active">
                      Experienced
                    </Label>
                  </div>
                </div>
              </Col>
            </Row>

            {bool_Affiliation ? (
              <>
                {levelOfExpertise ? (
                  <>
                    <Row style={{ marginTop: "2rem" }}>
                      <Col xs="12">
                        <CardTitle>Skills Details</CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xs="4"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <h4
                          onClick={() => {
                            setServiceType("Installation");
                            setTempRecords(installRec);
                          }}
                          style={{
                            color: `${
                              serviceType == "Installation"
                                ? "#098fb5"
                                : "#FFFFF"
                            }`,
                            borderBottom: `${
                              serviceType == "Installation"
                                ? "2px solid #098fb5"
                                : "none"
                            }`,
                          }}
                        >
                          Installation
                        </h4>
                      </Col>
                      <Col
                        xs="4"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <h4
                          onClick={() => {
                            setServiceType("Repair");
                            setTempRecords(repairRec);
                          }}
                          style={{
                            color: `${
                              serviceType == "Repair" ? "#098fb5" : "#FFFFF"
                            }`,
                            borderBottom: `${
                              serviceType == "Repair"
                                ? "2px solid #098fb5"
                                : "none"
                            }`,
                          }}
                        >
                          Repair
                        </h4>
                      </Col>
                      <Col
                        xs="4"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <h4
                          onClick={() => {
                            setServiceType("New Build");
                            setTempRecords(newbuildRec);
                          }}
                          style={{
                            color: `${
                              serviceType == "New Build" ? "#098fb5" :"#FFFFF"
                            }`,
                            borderBottom: `${
                              serviceType == "New Build"
                                ? "2px solid #098fb5"
                                : "none"
                            }`,
                          }}
                        >
                          New Build
                        </h4>
                      </Col>
                    </Row>
                    {tempRecords.length > 0 ? (
                      <Card>
                        <CardBody>
                          {tempRecords.map((obj, idx) => (
                            <Row key={idx} style={{ marginBottom: "0.5rem" }}>
                              <Col xs="12">
                                <Label
                                  className="form-label"
                                  for="register-mobile"
                                >
                                  <h6>
                                    {obj.serviceApplication}{" "}
                                    {obj.skillCategory !== ""
                                      ? `- ${obj.skillCategory}`
                                      : ""}
                                    {obj.subSkillCategory !== ""
                                      ? ` - ${obj.subSkillCategory}`
                                      : ""}
                                  </h6>
                                </Label>
                                <Row>
                                  {/* <Col xs="6" md="3">
                                <h6>
                                  {obj.application}{" "}
                                  {obj.skill !== "" ? `- ${obj.skill}` : ""}
                                  {obj.subskill !== ""
                                    ? ` - ${obj.subskill}`
                                    : ""}
                                </h6>
                              </Col> */}
                                  <Col xs="6" md="2">
                                    <Label
                                      className="form-label"
                                      for="decimal-number-input"
                                    >
                                      Experience (in years)
                                    </Label>
                                    <InputNumber
                                      id="decimal-number-input"
                                      step={0.5}
                                      min={0}
                                      value={obj.experience}
                                      disabled={true}
                                      onChange={(e) => {
                                        handleExperienceChange(obj, e, idx);
                                      }}
                                      upHandler={<Plus />}
                                      downHandler={<Minus />}
                                    />
                                  </Col>
                                  <Col xs="12" md="3">
                                    <Label
                                      className="form-label"
                                      for="signup-details-photo-copy"
                                    >
                                      Testimonials
                                    </Label>
                                    <Input
                                      type="file"
                                      disabled={true}
                                      id="signup-details-photo-copy"
                                    />
                                  </Col>
                                  <Col
                                    xs="12"
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
                                        marginTop: "1.7rem",
                                      }}
                                    >
                                      <Button
                                        color="primary"
                                        outline
                                        id={`testimonial_${
                                          serviceTypeCode[serviceType]
                                        }${
                                          applicationCode[
                                            obj.serviceApplication
                                          ]
                                        }${
                                          skillCode[serviceType][
                                            obj.skillCategory
                                          ]
                                        }${
                                          subSkillCode[obj.subSkillCategory]
                                        }_view`}
                                        style={{
                                          marginRight: "1rem",
                                        }}
                                      >
                                        <Eye size={14} />
                                      </Button>
                                      {obj.testimonial.length > 0 ? (
                                        <UncontrolledTooltip
                                          style={{
                                            padding: "5px",
                                            backgroundColor: "#52b7d0",
                                          }}
                                          autohide={false}
                                          placement="top"
                                          target={`testimonial_${
                                            serviceTypeCode[serviceType]
                                          }${
                                            applicationCode[
                                              obj.serviceApplication
                                            ]
                                          }${
                                            skillCode[serviceType][
                                              obj.skillCategory
                                            ]
                                          }${
                                            subSkillCode[obj.subSkillCategory]
                                          }_view`}
                                        >
                                          <ListGroup>
                                            {obj.testimonial.map((obj1, id) => (
                                              <ListGroupItem
                                                key={id}
                                                tag={"a"}
                                                href={obj1}
                                                target="_blank"
                                              >
                                                <h6>
                                                  <u>{`File ${id + 1}`}</u>
                                                </h6>
                                              </ListGroupItem>
                                            ))}
                                          </ListGroup>
                                        </UncontrolledTooltip>
                                      ) : (
                                        <></>
                                      )}
                                    </div>
                                  </Col>
                                  <Col xs="12" md="2">
                                    <Label
                                      className="form-label"
                                      for={`city-${type}`}
                                    >
                                      Training
                                    </Label>
                                    <div
                                      className="demo-inline-spacing"
                                      style={{ marginTop: "-1rem" }}
                                    >
                                      <div className="form-check">
                                        <Input
                                          type="radio"
                                          id={`ex${idx + 2}-active`}
                                          name={`ex${idx + 2}`}
                                          disabled={true}
                                          checked={obj.training}
                                          onChange={() => {
                                            handleTrainingChange(obj, idx);
                                          }}
                                        />
                                        <Label
                                          className="form-label"
                                          for={`ex${idx + 2}-active`}
                                        >
                                          Yes
                                        </Label>
                                      </div>
                                      <div className="form-check">
                                        <Input
                                          type="radio"
                                          id={`ex${idx + 2}-active`}
                                          name={`ex${idx + 2}`}
                                          checked={!obj.training}
                                          disabled={true}
                                          onChange={() => {
                                            handleTrainingChange(obj, idx);
                                          }}
                                        />
                                        <Label
                                          className="form-label"
                                          for={`ex${idx + 2}-active`}
                                        >
                                          No
                                        </Label>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col xs="12" md="3">
                                    <Label
                                      className="form-label"
                                      for="signup-details-photo-copy"
                                    >
                                      Certifications
                                    </Label>
                                    <div
                                      style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <div>
                                        {obj.certifications.length} certificates
                                      </div>
                                      <div>
                                        <Button
                                          color="primary"
                                          outline
                                          onClick={() => {
                                            if (obj.certifications.length > 0) {
                                              if (
                                                showCertificateIndex === idx
                                              ) {
                                                setShowCertificateIndex(-1);
                                              } else {
                                                setShowCertificateIndex(idx);
                                              }
                                              setCertificateIndex(-1);
                                              // setTempCourseName("");
                                            }
                                          }}
                                        >
                                          <Eye size={14} />
                                        </Button>
                                      </div>
                                    </div>
                                  </Col>
                                  {showCertificateIndex === idx ? (
                                    <Col xs="12">
                                      <Label
                                        className="form-label"
                                        for="signup-details-photo-copy"
                                      >
                                        <b>Added Certifications</b>
                                      </Label>
                                      <Row>
                                        {obj.certifications.map(
                                          (itm2, idx1) => (
                                            <Col key={idx1} xs="12" md="4">
                                              <Col xs="12">
                                                <b>Event/Course name:</b>{" "}
                                                {itm2.course}
                                              </Col>
                                              <Col
                                                xs="12"
                                                style={{
                                                  display: "flex",
                                                  flexWrap: "wrap",
                                                }}
                                              >
                                                {" "}
                                                <Button
                                                  color="primary"
                                                  outline
                                                  onClick={() => {
                                                    window.open(itm2.fileLink);
                                                  }}
                                                >
                                                  <Eye size={14} />
                                                </Button>
                                              </Col>
                                              {/* <Col xs="6"></Col> */}
                                            </Col>
                                          )
                                        )}
                                      </Row>
                                    </Col>
                                  ) : (
                                    <></>
                                  )}
                                </Row>
                              </Col>
                            </Row>
                          ))}
                        </CardBody>
                      </Card>
                    ) : (
                      <p />
                    )}
                  </>
                ) : (
                  <>
                    <Row style={{ marginTop: "2rem" }}>
                      <Col xs="12">
                        <CardTitle>Skills Interests</CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xs="4"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <h4
                          onClick={() => {
                            if (serviceTypeInterest !== "Installation") {
                              setServiceTypeInterest("Installation");
                              handleInterestApplication("Installation", true);
                              handleInterestSkill("Installation", true);
                              handleInterestSubskill("Installation", true);
                            }
                          }}
                          style={{
                            color: `${
                              serviceTypeInterest == "Installation"
                                ? "#098fb5"
                                : "#000000"
                            }`,
                            borderBottom: `${
                              serviceTypeInterest == "Installation"
                                ? "2px solid #098fb5"
                                : "none"
                            }`,
                          }}
                        >
                          Installation
                        </h4>
                      </Col>
                      <Col
                        xs="4"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <h4
                          onClick={() => {
                            if (serviceTypeInterest !== "Repair") {
                              setServiceTypeInterest("Repair");
                              handleInterestApplication("Repair", true);
                              handleInterestSkill("Repair", true);
                              handleInterestSubskill("Repair", true);
                            }
                          }}
                          style={{
                            color: `${
                              serviceTypeInterest == "Repair"
                                ? "#098fb5"
                                : "#000000"
                            }`,
                            borderBottom: `${
                              serviceTypeInterest == "Repair"
                                ? "2px solid #098fb5"
                                : "none"
                            }`,
                          }}
                        >
                          Repair
                        </h4>
                      </Col>
                      <Col
                        xs="4"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <h4
                          onClick={() => {
                            if (serviceTypeInterest !== "New Build") {
                              setServiceTypeInterest("New Build");
                              handleInterestApplication("New Build", true);
                              handleInterestSkill("New Build", true);
                              handleInterestSubskill("New Build", true);
                            }
                          }}
                          style={{
                            color: `${
                              serviceTypeInterest == "New Build"
                                ? "#098fb5"
                                : "#000000"
                            }`,
                            borderBottom: `${
                              serviceTypeInterest == "New Build"
                                ? "2px solid #098fb5"
                                : "none"
                            }`,
                          }}
                        >
                          New Build
                        </h4>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12">
                        <Label className="form-label" for="register-mobile">
                          Service Application
                        </Label>
                        <Select
                          theme={selectThemeColors}
                          id={`material-${type}`}
                          className="react-select"
                          classNamePrefix="select"
                          isMulti
                          closeMenuOnSelect={false}
                          blurInputOnSelect={false}
                          isDisabled={true}
                          value={selectedApplication}
                          menuPlacement="top"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" md="6">
                        <Label className="form-label" for="register-mobile">
                          Skill category
                        </Label>
                        <Select
                          theme={selectThemeColors}
                          id={`material-${type}`}
                          className="react-select"
                          classNamePrefix="select"
                          isMulti
                          closeMenuOnSelect={false}
                          blurInputOnSelect={false}
                          isDisabled={true}
                          menuPlacement="top"
                          value={selectedSkill}
                        />
                      </Col>
                      <Col xs="12" md="6">
                        <Label className="form-label" for="register-mobile">
                          Sub Skill Category
                        </Label>
                        <Select
                          theme={selectThemeColors}
                          id={`material-${type}`}
                          className="react-select"
                          classNamePrefix="select"
                          isMulti
                          isDisabled={true}
                          closeMenuOnSelect={false}
                          blurInputOnSelect={false}
                          menuPlacement="top"
                          value={selectedSubskill}
                        />
                      </Col>
                    </Row>
                  </>
                )}
              </>
            ) : (
              <>
                {levelOfExpertise ? (
                  <>
                    <Row>
                      <Col
                        xs="4"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <h4
                          style={{
                            color: `${
                              serviceType == "Installation"
                                ? "#098fb5"
                                : "#000000"
                            }`,
                            borderBottom: `${
                              serviceType == "Installation"
                                ? "2px solid #098fb5"
                                : "none"
                            }`,
                          }}
                        >
                          Installation
                        </h4>
                      </Col>
                      <Col
                        xs="4"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <h4
                          style={{
                            color: `${
                              serviceType == "Repair" ? "#098fb5" : "#000000"
                            }`,
                            borderBottom: `${
                              serviceType == "Repair"
                                ? "2px solid #098fb5"
                                : "none"
                            }`,
                          }}
                        >
                          Repair
                        </h4>
                      </Col>
                      <Col
                        xs="4"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <h4
                          style={{
                            color: `${
                              serviceType == "New Build" ? "#098fb5" : "#000000"
                            }`,
                            borderBottom: `${
                              serviceType == "New Build"
                                ? "2px solid #098fb5"
                                : "none"
                            }`,
                          }}
                        >
                          New Build
                        </h4>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12">
                        <Label className="form-label" for="register-mobile">
                          Service Application
                        </Label>
                        <Select
                          theme={selectThemeColors}
                          id={`material-${type}`}
                          className="react-select"
                          classNamePrefix="select"
                          isMulti
                          closeMenuOnSelect={false}
                          blurInputOnSelect={false}
                          isDisabled={saveNewbuild}
                          value={selectedApplication}
                          options={serviceApplication}
                          menuPlacement="top"
                          onChange={(e) => {
                            handleServApplChange(e);
                          }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" md="6">
                        <Label className="form-label" for="register-mobile">
                          Skill category
                        </Label>
                        <Select
                          theme={selectThemeColors}
                          id={`material-${type}`}
                          className="react-select"
                          classNamePrefix="select"
                          isMulti
                          closeMenuOnSelect={false}
                          blurInputOnSelect={false}
                          isDisabled={saveNewbuild}
                          menuPlacement="top"
                          value={selectedSkill}
                          options={skillOptions}
                          onChange={(e) => {
                            handleSkillCatChange(e);
                          }}
                        />
                      </Col>
                      <Col xs="12" md="6">
                        <Label className="form-label" for="register-mobile">
                          Sub Skill Category
                        </Label>
                        <Select
                          theme={selectThemeColors}
                          id={`material-${type}`}
                          className="react-select"
                          classNamePrefix="select"
                          isMulti
                          isDisabled={saveNewbuild}
                          closeMenuOnSelect={false}
                          blurInputOnSelect={false}
                          menuPlacement="top"
                          value={selectedSubskill}
                          options={subskillOpt}
                          onChange={(e) => {
                            handleSubskillCatChange(e);
                          }}
                        />
                      </Col>
                    </Row>
                    {tempRecords.length > 0 ? (
                      <Card>
                        <CardHeader>
                          <h4>Complete skill details</h4>
                        </CardHeader>
                        <CardBody>
                          {tempRecords.map((obj, idx) => (
                            <Row key={idx} style={{ marginBottom: "0.5rem" }}>
                              <Col xs="12">
                                <Label
                                  className="form-label"
                                  for="register-mobile"
                                >
                                  <h6>
                                    {obj.serviceApplication}{" "}
                                    {obj.skillCategory !== ""
                                      ? `- ${obj.skillCategory}`
                                      : ""}
                                    {obj.subSkillCategory !== ""
                                      ? ` - ${obj.subSkillCategory}`
                                      : ""}
                                  </h6>
                                </Label>
                                <Row>
                                  {/* <Col xs="6" md="3">
                                <h6>
                                  {obj.application}{" "}
                                  {obj.skill !== "" ? `- ${obj.skill}` : ""}
                                  {obj.subskill !== ""
                                    ? ` - ${obj.subskill}`
                                    : ""}
                                </h6>
                              </Col> */}
                                  <Col xs="6" md="2">
                                    <Label
                                      className="form-label"
                                      for="decimal-number-input"
                                    >
                                      Add experience (in years)
                                    </Label>
                                    <InputNumber
                                      id="decimal-number-input"
                                      step={0.5}
                                      min={0}
                                      value={obj.experience}
                                      onChange={(e) => {
                                        handleExperienceChange(obj, e, idx);
                                      }}
                                      upHandler={<Plus />}
                                      downHandler={<Minus />}
                                    />
                                  </Col>
                                  <Col xs="12" md="3">
                                    <Label
                                      className="form-label"
                                      for={`testimonial_${
                                        serviceTypeCode[serviceType]
                                      }${
                                        applicationCode[obj.serviceApplication]
                                      }${
                                        skillCode[serviceType][
                                          obj.skillCategory
                                        ]
                                      }${subSkillCode[obj.subSkillCategory]}`}
                                    >
                                      {obj.testimonial.length > 0
                                        ? "Files Selected"
                                        : "Upload Testimonial"}
                                    </Label>
                                    <Input
                                      type="file"
                                      multiple
                                      max="5000000"
                                      id={`testimonial_${
                                        serviceTypeCode[serviceType]
                                      }${
                                        applicationCode[obj.serviceApplication]
                                      }${
                                        skillCode[serviceType][
                                          obj.skillCategory
                                        ]
                                      }${subSkillCode[obj.subSkillCategory]}`}
                                      onChange={(e) => {
                                        handleTestimonialFiles(
                                          e,
                                          obj.serviceApplication,
                                          obj.skillCategory,
                                          obj.subSkillCategory,
                                          serviceType
                                        );
                                      }}
                                    />
                                  </Col>
                                  <Col
                                    xs="12"
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
                                        marginTop: "1.7rem",
                                      }}
                                    >
                                      <Button
                                        color="primary"
                                        outline
                                        style={{
                                          marginRight: "1rem",
                                        }}
                                        id={`testimonial_${
                                          serviceTypeCode[serviceType]
                                        }${
                                          applicationCode[
                                            obj.serviceApplication
                                          ]
                                        }${
                                          skillCode[serviceType][
                                            obj.skillCategory
                                          ]
                                        }${
                                          subSkillCode[obj.subSkillCategory]
                                        }_view`}
                                        onClick={() => {
                                          console.log(obj.testimonial.length);
                                        }}
                                      >
                                        <Eye size={14} />
                                      </Button>
                                      {obj.testimonial.length > 0 ? (
                                        <UncontrolledTooltip
                                          style={{
                                            padding: "5px",
                                            backgroundColor: "#52b7d0",
                                          }}
                                          autohide={false}
                                          placement="top"
                                          target={`testimonial_${
                                            serviceTypeCode[serviceType]
                                          }${
                                            applicationCode[
                                              obj.serviceApplication
                                            ]
                                          }${
                                            skillCode[serviceType][
                                              obj.skillCategory
                                            ]
                                          }${
                                            subSkillCode[obj.subSkillCategory]
                                          }_view`}
                                        >
                                          <ListGroup>
                                            {obj.testimonial.map((obj2, id) => (
                                              <ListGroupItem
                                                key={id}
                                                tag={"a"}
                                                href={obj2}
                                                target="_blank"
                                              >
                                                <h6>
                                                  <u>{`File ${id + 1}`}</u>
                                                </h6>
                                              </ListGroupItem>
                                            ))}
                                          </ListGroup>
                                        </UncontrolledTooltip>
                                      ) : (
                                        <></>
                                      )}
                                      <Button
                                        color="danger"
                                        outline
                                        onClick={() => {
                                          removeUploadedTestimonials(
                                            obj.serviceApplication,
                                            obj.skillCategory,
                                            obj.subSkillCategory,
                                            serviceType
                                          );
                                        }}
                                      >
                                        <X size={14} />
                                      </Button>
                                    </div>
                                  </Col>
                                  <Col xs="12" md="2">
                                    <Label
                                      className="form-label"
                                      for={`city-${type}`}
                                    >
                                      Training
                                    </Label>
                                    <div
                                      className="demo-inline-spacing"
                                      style={{ marginTop: "-1rem" }}
                                    >
                                      <div className="form-check">
                                        <Input
                                          type="radio"
                                          id={`ex${idx + 2}-active`}
                                          name={`ex${idx + 2}`}
                                          checked={obj.training}
                                          onChange={() => {
                                            handleTrainingChange(obj, idx);
                                          }}
                                        />
                                        <Label
                                          className="form-label"
                                          for={`ex${idx + 2}-active`}
                                        >
                                          Yes
                                        </Label>
                                      </div>
                                      <div className="form-check">
                                        <Input
                                          type="radio"
                                          id={`ex${idx + 2}-active`}
                                          name={`ex${idx + 2}`}
                                          checked={!obj.training}
                                          onChange={() => {
                                            handleTrainingChange(obj, idx);
                                          }}
                                        />
                                        <Label
                                          className="form-label"
                                          for={`ex${idx + 2}-active`}
                                        >
                                          No
                                        </Label>
                                      </div>
                                    </div>
                                  </Col>
                                  {certificateIndex === idx ? (
                                    <Col xs="12">
                                      <Label className="form-label" for="certi">
                                        {tempCourseFile !== null
                                          ? "File selected"
                                          : "Upload Certificate"}
                                      </Label>
                                      <Row>
                                        <Col xs="12" md="4">
                                          <Input
                                            type="text"
                                            id="register-name"
                                            value={tempCourseName}
                                            onChange={(e) =>
                                              setTempCourseName(e.target.value)
                                            }
                                            placeholder="event/course name"
                                          />
                                        </Col>
                                        <Col xs="12" md="4">
                                          <Input
                                            type="file"
                                            id="add_certificate_file"
                                            onChange={(e) => {
                                              if (
                                                e.target.files[0] !== undefined
                                              ) {
                                                setTempCourseFile(
                                                  e.target.files[0]
                                                );
                                              } else setTempCourseFile(null);
                                            }}
                                          />
                                        </Col>
                                        <Col xs="12" md="4">
                                          <Button
                                            color="primary"
                                            onClick={() => {
                                              if (
                                                tempCourseName !== "" &&
                                                tempCourseFile !== null
                                              ) {
                                                // let arr3 = tempRecords;
                                                // arr3[idx].certificate.push({
                                                //   name: tempCourseName,
                                                //   file: true,
                                                // });
                                                // setTempRecords(arr3);
                                                handleCertificationFiles(
                                                  obj.serviceApplication,
                                                  obj.skillCategory,
                                                  obj.subSkillCategory,
                                                  serviceType
                                                );
                                                setCertificateIndex(-1);
                                                setTempCourseName("");
                                                setTempCourseFile(null);
                                              } else {
                                                toast.error(
                                                  "Enter event/course name and upload certificate!!"
                                                );
                                              }
                                            }}
                                          >
                                            <Plus size={14} />
                                          </Button>
                                        </Col>
                                      </Row>
                                    </Col>
                                  ) : (
                                    <Col xs="12" md="3">
                                      <Label
                                        className="form-label"
                                        for="signup-details-photo-copy"
                                      >
                                        Certifications
                                      </Label>
                                      <div
                                        style={{
                                          display: "flex",
                                          flexWrap: "wrap",
                                          justifyContent: "space-between",
                                        }}
                                      >
                                        <div>
                                          {obj.certifications.length}{" "}
                                          certificates
                                        </div>
                                        <div>
                                          <Button
                                            color="primary"
                                            outline
                                            onClick={() => {
                                              if (
                                                obj.certifications.length > 0
                                              ) {
                                                if (
                                                  showCertificateIndex === idx
                                                ) {
                                                  setShowCertificateIndex(-1);
                                                } else {
                                                  setShowCertificateIndex(idx);
                                                }
                                                setCertificateIndex(-1);
                                                setTempCourseName("");
                                                setTempCourseFile(null);
                                              }
                                            }}
                                          >
                                            <Eye size={14} />
                                          </Button>
                                        </div>
                                        <div>
                                          <Button
                                            color="primary"
                                            outline
                                            onClick={() => {
                                              setCertificateIndex(idx);
                                              setTempCourseName("");
                                              setTempCourseFile(null);
                                              if (
                                                showCertificateIndex === idx
                                              ) {
                                                setShowCertificateIndex(-1);
                                              }
                                            }}
                                          >
                                            <Plus size={14} />
                                          </Button>
                                        </div>
                                      </div>
                                    </Col>
                                  )}
                                  {showCertificateIndex === idx ? (
                                    <Col xs="12">
                                      <Label
                                        className="form-label"
                                        for="signup-details-photo-copy"
                                      >
                                        <b>Added Certifications</b>
                                      </Label>
                                      <Row>
                                        {obj.certifications.map(
                                          (itm2, idx1) => (
                                            <Col key={idx1} xs="12" md="4">
                                              <Col xs="12">
                                                <b>Event/Course name:</b>{" "}
                                                {itm2.course}
                                              </Col>
                                              <Col
                                                xs="12"
                                                style={{
                                                  display: "flex",
                                                  flexWrap: "wrap",
                                                }}
                                              >
                                                {" "}
                                                <Button
                                                  color="primary"
                                                  outline
                                                  onClick={() => {
                                                    window.open(itm2.fileLink);
                                                  }}
                                                >
                                                  <Eye size={14} />
                                                </Button>
                                                <Button
                                                  color="danger"
                                                  outline
                                                  onClick={() => {
                                                    removeUploadedCertificate(
                                                      obj.serviceApplication,
                                                      obj.skillCategory,
                                                      obj.subSkillCategory,
                                                      serviceType,
                                                      idx1
                                                    );
                                                    setShowCertificateIndex(-1);
                                                  }}
                                                >
                                                  <X size={14} />
                                                </Button>
                                              </Col>
                                              {/* <Col xs="6"></Col> */}
                                            </Col>
                                          )
                                        )}
                                      </Row>
                                    </Col>
                                  ) : (
                                    <></>
                                  )}
                                </Row>
                              </Col>
                            </Row>
                          ))}
                        </CardBody>
                      </Card>
                    ) : (
                      <p />
                    )}
                    <Row>
                      <Col
                        xs="12"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {saveNewbuild ? (
                          <h5>Submit If Completed!!</h5>
                        ) : (
                          <Button
                            color="success"
                            onClick={() => {
                              if (levelOfExpertise) {
                                handleSave();
                              } else {
                                setServiceType("");
                              }
                            }}
                          >
                            Save
                          </Button>
                        )}
                      </Col>
                    </Row>
                  </>
                ) : (
                  <>
                    <Row>
                      <Col
                        xs="4"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <h4
                          style={{
                            color: `${
                              serviceTypeInterest == "Installation"
                                ? "#098fb5"
                                : "#000000"
                            }`,
                            borderBottom: `${
                              serviceTypeInterest == "Installation"
                                ? "2px solid #098fb5"
                                : "none"
                            }`,
                          }}
                        >
                          Installation
                        </h4>
                      </Col>
                      <Col
                        xs="4"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <h4
                          style={{
                            color: `${
                              serviceTypeInterest == "Repair"
                                ? "#098fb5"
                                : "#000000"
                            }`,
                            borderBottom: `${
                              serviceTypeInterest == "Repair"
                                ? "2px solid #098fb5"
                                : "none"
                            }`,
                          }}
                        >
                          Repair
                        </h4>
                      </Col>
                      <Col
                        xs="4"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <h4
                          style={{
                            color: `${
                              serviceTypeInterest == "New Build"
                                ? "#098fb5"
                                : "#000000"
                            }`,
                            borderBottom: `${
                              serviceTypeInterest == "New Build"
                                ? "2px solid #098fb5"
                                : "none"
                            }`,
                          }}
                        >
                          New Build
                        </h4>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12">
                        <Label className="form-label" for="register-mobile">
                          Service Application
                        </Label>
                        <Select
                          theme={selectThemeColors}
                          id={`material-${type}`}
                          className="react-select"
                          classNamePrefix="select"
                          isMulti
                          closeMenuOnSelect={false}
                          blurInputOnSelect={false}
                          isDisabled={serviceTypeInterest == ""}
                          value={selectedApplication}
                          options={serviceApplication}
                          menuPlacement="top"
                          onChange={(e) => {
                            handleSkillInterestChange(
                              e,
                              selectedSkill,
                              selectedSubskill
                            );
                          }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" md="6">
                        <Label className="form-label" for="register-mobile">
                          Skill category
                        </Label>
                        <Select
                          theme={selectThemeColors}
                          id={`material-${type}`}
                          className="react-select"
                          classNamePrefix="select"
                          isMulti
                          closeMenuOnSelect={false}
                          blurInputOnSelect={false}
                          isDisabled={serviceTypeInterest == ""}
                          menuPlacement="top"
                          value={selectedSkill}
                          options={skillOptions}
                          onChange={(e) => {
                            handleSkillInterestChange(
                              selectedApplication,
                              e,
                              selectedSubskill
                            );
                          }}
                        />
                      </Col>
                      <Col xs="12" md="6">
                        <Label className="form-label" for="register-mobile">
                          Sub Skill Category
                        </Label>
                        <Select
                          theme={selectThemeColors}
                          id={`material-${type}`}
                          className="react-select"
                          classNamePrefix="select"
                          isMulti
                          isDisabled={serviceTypeInterest == ""}
                          closeMenuOnSelect={false}
                          blurInputOnSelect={false}
                          menuPlacement="top"
                          value={selectedSubskill}
                          options={subskillOpt}
                          onChange={(e) => {
                            handleSkillInterestChange(
                              selectedApplication,
                              selectedSkill,
                              e
                            );
                          }}
                        />
                      </Col>
                    </Row>
                    <p />
                    <Row>
                      <Col
                        xs="12"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {serviceTypeInterest == "" ? (
                          <h5>Submit If Completed!!</h5>
                        ) : (
                          <Button
                            color="success"
                            onClick={() => {
                              handleSkillInterestSave();
                            }}
                          >
                            Save
                          </Button>
                        )}
                      </Col>
                    </Row>
                  </>
                )}
              </>
            )}
          </CardBody>
        ) : (
          <p />
        )}
      </Card>
    </div>
  );
};

export default WorkmanEditProf;
