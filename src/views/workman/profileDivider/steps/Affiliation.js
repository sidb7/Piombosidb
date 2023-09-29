// ** React Imports
import { Fragment, useState, useEffect } from "react";
// import InputNumber from "rc-input-number";
import { InputNumber } from "antd";

// ** Third Party Components
import Select from "react-select";

import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  X,
  Plus,
  Minus,
  Eye,
} from "react-feather";

// ** Utils
import { selectThemeColors } from "@utils";
import "@styles/react/libs/input-number/input-number.scss";

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
  UncontrolledTooltip,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";

import skillData from "../../../skillData";
import { toast } from "react-hot-toast";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return [innerWidth, innerHeight];
}

const Affiliation = ({ stepper, type, userid }) => {
  const navigateTo = useNavigate();
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

  // let retObj = [];

  // let installationRecords = [];
  // let repairRecords = [];
  // let newBuildRecords = [];

  const [handlingMaterials, setHandlingMaterials] = useState(false);
  const [levelOfExpertise, setLevelOfExpertise] = useState(false);
  const [materialList, setMaterialList] = useState([]);

  // const [installationSkillInterest, setInstallationSkillInterest] = useState(
  //   []
  // );
  // const [repairSkillInterest, setRepairSkillInterest] = useState([]);
  // const [newBuildSkillInterest, setNewBuildSkillInterest] = useState([]);
  // const [tempRecords1, setTempRecords1] = useState([]);
  const [serviceTypeInterest, setServiceTypeInterest] =
    useState("Installation");

  const [serviceType, setServiceType] = useState("Installation");
  const [saveInstallation, setSaveInstallation] = useState(false);
  const [saveRepair, setSaveRepair] = useState(false);
  const [saveNewbuild, setSaveNewBuild] = useState(false);

  const serviceApplication = skillData.servAppl;
  const data = skillData.skillData;
  const skillCopy = skillData.skillCopy;
  const applicationCode = skillData.applicationCode;
  const subSkillCode = skillData.subSkillCode;
  const skillCode = skillData.skillCode;
  const serviceTypeCode = skillData.serviceTypeCode;

  const [selectedApplication, setSelectedApplication] = useState([]);
  const [skillOptions, setSkillOptions] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);

  const [subskillOpt, setSubskillOpt] = useState([]);
  const [selectedSubskill, setSelectedSubskill] = useState([]);

  const [showInstallationRecords, setShowInstallationRecords] = useState([]);
  const [showRepairRecords, setShowRepairRecords] = useState([]);
  const [showNewBuildRecords, setShowNewBuildRecords] = useState([]);
  const [tempRecords, setTempRecords] = useState([]);

  const [servApplData, setServApplData] = useState([]);
  const [skillCatData, setSkillCatData] = useState([]);

  //filedata
  //format - keys: fileId:testemonial_code_index, file, skillCombo:testemonial_code
  //format - keys: fileId:certification_code_index, file, skillCombo:certification_code, name:coure_name
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

  const handleCopy = (installationSkill) => {
    return skillCopy.filter((obj) => {
      return obj.installation === installationSkill;
    })[0].repair;
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
      data.forEach((obj2) => {
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
      let arr2 = [];
      obj1.skill.forEach((obj2) => {
        let arr1 = [];
        if (
          0 <= tmp4.findIndex((t) => t.value === obj2.name) ||
          obj2.name === ""
        ) {
          obj2.subskill.forEach((obj3) => {
            if (0 <= tmp5.findIndex((x) => x.value === obj3)) {
              arr1.push(obj3);
            }
          });
          arr2.push({
            name: obj2.name,
            subskill: arr1,
          });
        }
      });
      tmp6.push({
        application: obj1.application,
        skill: arr2,
      });
    });

    setSelectedApplication(tmp);
    setSkillOptions(uniqueSkillOpt);
    setSubskillOpt(uniqueSubskillOpt);
    setSelectedSkill(tmp4);
    setSelectedSubskill(tmp5);
    setTempRecords(tmp6);
  };

  const [installationInterest, setInstallationInterest] = useState([]);
  const [repairInterest, setRepairInterest] = useState([]);
  const [newBuildInterest, setNewBuildInterest] = useState([]);

  const handleSkillInterestSave = () => {
    tempRecords.forEach((e) => {
      let tempArr = [];
      e.skill.forEach((f) => {
        f.subskill.forEach((g) => {
          let temp = {
            serviceApplication: e.application,
            skillCategory: f.name,
            subSkillCategory: g,
            certifications: [],
            experience: "0",
            training: false,
            testimonial: "",
          };
          tempArr.push(temp);
        });
      });
      if (serviceTypeInterest == "Installation")
        setInstallationInterest(tempArr);
      else if (serviceTypeInterest == "Repair") setRepairInterest(tempArr);
      else setNewBuildInterest(tempArr);
    });
    if (serviceTypeInterest == "Installation") {
      setServiceTypeInterest("Repair");
      // setInstallationSkillInterest(tempRecords);
      setSelectedApplication([]);
      setSkillOptions([]);
      setSubskillOpt([]);
      setSelectedSkill([]);
      setSelectedSubskill([]);
      setTempRecords([]);
    } else if (serviceTypeInterest == "Repair") {
      setServiceTypeInterest("New Build");
      // setRepairSkillInterest(tempRecords);
      setSelectedApplication([]);
      setSkillOptions([]);
      setSubskillOpt([]);
      setSelectedSkill([]);
      setSelectedSubskill([]);
      setTempRecords([]);
    } else {
      setServiceTypeInterest("");
      // setNewBuildSkillInterest(tempRecords);
    }
  };

  const handleSave = () => {
    let experienceAdded = true;
    tempRecords.forEach((obj) => {
      if (obj.experience == 0) experienceAdded = false;
    });
    if (experienceAdded) {
      setTempCourseName("");
      setTempCourseFile(null);
      setCertificateIndex(-1);
      setShowCertificateIndex(-1);
      if (serviceType == "Installation") {
        // console.log(installationCertificationFiles);
        // console.log(installationTestimonialFiles);
        setSaveInstallation(true);
        setShowInstallationRecords(tempRecords);
        setServiceType("Repair");
        setServApplData([]);
        setSkillCatData([]);
        setSelectedApplication([]);
        setSkillOptions([]);
        setSelectedSkill([]);
        setSubskillOpt([]);
        setSelectedSubskill([]);
        setTempRecords([]);
        let tempSelectedSkillCat = [];

        tempRecords.forEach((obj) => {
          if (obj.skill !== "") {
            tempSelectedSkillCat.push({
              value: handleCopy(obj.skill),
              label: handleCopy(obj.skill),
            });
          }
        });
        tempSelectedSkillCat = tempSelectedSkillCat.filter(
          (obj4, index, arr) => {
            return index === arr.findIndex((t) => t.value === obj4.value);
          }
        );
        handleServApplChange(
          selectedApplication,
          tempSelectedSkillCat,
          selectedSubskill,
          "Repair"
        );
      } else if (serviceType == "Repair") {
        setSaveRepair(true);
        setShowRepairRecords(tempRecords);
        setServiceType("New Build");
        setServApplData([]);
        setSkillCatData([]);
        setSelectedApplication([]);
        setSkillOptions([]);
        setSelectedSkill([]);
        setSubskillOpt([]);
        setSelectedSubskill([]);
        setTempRecords([]);
      } else {
        setShowNewBuildRecords(tempRecords);
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
      toast.error("Add experience for all skills!!");
    }
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
      data.forEach((obj2) => {
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
    setSkillOptions(uniqueSkillOpt);
    if (tmpSelectedSkill.length > 0) {
      let removeSkill = [];
      tmpSelectedSkill.forEach((obj) => {
        let skillFound = 0;
        tmp.forEach((obj2) => {
          skillFound += obj2.skill.filter((obj3) => {
            return obj3.name === obj.value;
          }).length;
        });
        if (skillFound == 0) {
          removeSkill.push(obj);
        }
      });
      let tmp2 = tmpSelectedSkill.filter((obj4) => {
        return removeSkill.indexOf(obj4) === -1;
      });
      handleSkillCatChange(tmp2, tmp, tmpSelectedSubskill, servType);
    } else {
      handleSkillCatChange([], tmp, tmpSelectedSubskill, servType);
    }
  };

  const handleSkillCatChange = (
    e,
    applData = servApplData,
    tmpSelectedSubskill = selectedSubskill,
    servType = serviceType
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
      handleSubskillCatChange(tmp2, tmp, servType);
    } else {
      handleSubskillCatChange([], tmp, servType);
    }
  };

  const handleSubskillCatChange = (
    e,
    skill = skillCatData,
    servType = serviceType
  ) => {
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
              obj4.application === obj.application &&
              obj4.skill === obj.skill.name &&
              obj4.subskill === ""
            );
          }).length
        ) {
          tmpArr.push({
            application: obj.application,
            skill: obj.skill.name,
            subskill: "",
            experience: 0,
            training: false,
            certificate: [],
            testimonial: [],
          });
        } else {
          tmpArr.push(
            tempRecords.filter((obj4) => {
              return (
                obj4.application === obj.application &&
                obj4.skill === obj.skill.name &&
                obj4.subskill === ""
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
                  obj4.application === obj.application &&
                  obj4.skill === obj.skill.name &&
                  obj2 === obj4.subskill
                );
              }).length
            ) {
              tmpArr.push({
                application: obj.application,
                skill: obj.skill.name,
                subskill: obj2,
                experience: 0,
                training: false,
                certificate: [],
                testimonial: [],
              });
            } else {
              tmpArr.push(
                tempRecords.filter((obj4) => {
                  return (
                    obj4.application === obj.application &&
                    obj4.skill === obj.skill.name &&
                    obj2 === obj4.subskill
                  );
                })[0]
              );
            }
          }
        });
      }
    });
    // console.log(tmpArr);

    // console.log("hehe");
    // console.log(tmpArr);

    //set testimonials and certifications to null
    if (servType !== serviceType) {
      tmpArr.forEach((itm4, id1) => {
        tmpArr[id1].testimonial = [];
        tmpArr[id1].certificate = [];
      });
    }
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

  const [certificateIndex, setCertificateIndex] = useState(-1);
  const [showCertificateIndex, setShowCertificateIndex] = useState(-1);
  const [tempCourseName, setTempCourseName] = useState("");
  const [tempCourseFile, setTempCourseFile] = useState(null);

  // if (levelOfExpertise == true) {
  //   let tempArr1 = [];
  //   showInstallationRecords.forEach((e) => {
  //     let newObj = {
  //       serviceApplication: e.application,
  //       skillCategory: e.skill,
  //       subSkillCategory: e.subskill,
  //       certifications: e.certificate,
  //       experience: e.experience,
  //       training: e.training,
  //       testimonial: e.testimonial,
  //     };
  //     tempArr1.push(newObj);
  //   });
  //   installationRecords = tempArr1;
  //   let tempArr2 = [];
  //   showRepairRecords.forEach((e) => {
  //     let newObj = {
  //       serviceApplication: e.application,
  //       skillCategory: e.skill,
  //       subSkillCategory: e.subskill,
  //       certifications: e.certificate,
  //       experience: e.experience,
  //       training: e.training,
  //       testimonial: e.testimonial,
  //     };
  //     tempArr2.push(newObj);
  //   });
  //   repairRecords = tempArr2;
  //   let tempArr3 = [];
  //   showNewBuildRecords.forEach((e) => {
  //     let newObj = {
  //       serviceApplication: e.application,
  //       skillCategory: e.skill,
  //       subSkillCategory: e.subskill,
  //       certifications: e.certificate,
  //       experience: e.experience,
  //       training: e.training,
  //       testimonial: e.testimonial,
  //     };
  //     tempArr3.push(newObj);
  //   });
  //   newBuildRecords = tempArr3;
  //   retObj = {
  //     affiliationDetails: {
  //       handlingMaterials: handlingMaterials,
  //       experienced: levelOfExpertise,
  //       materialList: materialList,
  //     },
  //     skillDetails: [
  //       { installation: installationRecords },
  //       { repair: repairRecords },
  //       { newBuild: newBuildRecords },
  //     ],
  //   };
  // } else {
  //   retObj = {
  //     affiliationDetails: {
  //       handlingMaterials: handlingMaterials,
  //       experienced: levelOfExpertise,
  //       materialList: materialList,
  //     },
  //     skillDetails: [
  //       { installation: installationInterest },
  //       { repair: repairInterest },
  //       { newBuild: newBuildInterest },
  //     ],
  //   };
  // }

  const submitForm = async () => {
    //if experienced then submit images
    let retObj = {};
    if (levelOfExpertise) {
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
          // console.log(urlsUploaded);
        }
      }

      // from three reocrds store all urls
      let tmpArr1 = [];
      showInstallationRecords.forEach((obj) => {
        let testimonialTmp = [];
        if (obj.testimonial.length > 0) {
          let codeForSkillCombo = `testimonial_${
            serviceTypeCode["Installation"]
          }${applicationCode[obj.application]}${
            skillCode["Installation"][obj.skill]
          }${subSkillCode[obj.subskill]}`;
          //extract keys from urls
          let urlsCombo = Object.keys(urlsUploaded).filter((obj2) => {
            return obj2.includes(codeForSkillCombo);
          }); //stored all new urls
          urlsCombo.forEach((obj2) => {
            testimonialTmp.push(urlsUploaded[obj2]);
          });
        }
        let certificationTmp = [];
        if (obj.certificate.length > 0) {
          //certification_
          let codeForSkillCombo = `certification_${
            serviceTypeCode["Installation"]
          }${applicationCode[obj.application]}${
            skillCode["Installation"][obj.skill]
          }${subSkillCode[obj.subskill]}`;
          obj.certificate.forEach((obj2, idx) => {
            if (`${codeForSkillCombo}_${idx}` in urlsUploaded) {
              certificationTmp.push({
                course: obj2.course,
                fileLink: urlsUploaded[`${codeForSkillCombo}_${idx}`],
              });
            }
          });
        }
        tmpArr1.push({
          serviceApplication: obj.application,
          skillCategory: obj.skill,
          subSkillCategory: obj.subskill,
          certifications: certificationTmp,
          experience: obj.experience,
          training: obj.training,
          testimonial: testimonialTmp,
        });
      });

      let tmpArr2 = [];
      showRepairRecords.forEach((obj) => {
        let testimonialTmp = [];
        if (obj.testimonial.length > 0) {
          let codeForSkillCombo = `testimonial_${serviceTypeCode["Repair"]}${
            applicationCode[obj.application]
          }${skillCode["Repair"][obj.skill]}${subSkillCode[obj.subskill]}`;
          //extract keys from urls
          let urlsCombo = Object.keys(urlsUploaded).filter((obj2) => {
            return obj2.includes(codeForSkillCombo);
          }); //stored all new urls
          urlsCombo.forEach((obj2) => {
            testimonialTmp.push(urlsUploaded[obj2]);
          });
        }
        let certificationTmp = [];
        if (obj.certificate.length > 0) {
          //certification_
          let codeForSkillCombo = `certification_${serviceTypeCode["Repair"]}${
            applicationCode[obj.application]
          }${skillCode["Repair"][obj.skill]}${subSkillCode[obj.subskill]}`;
          obj.certificate.forEach((obj2, idx) => {
            if (`${codeForSkillCombo}_${idx}` in urlsUploaded) {
              certificationTmp.push({
                course: obj2.course,
                fileLink: urlsUploaded[`${codeForSkillCombo}_${idx}`],
              });
            }
          });
        }
        tmpArr2.push({
          serviceApplication: obj.application,
          skillCategory: obj.skill,
          subSkillCategory: obj.subskill,
          certifications: certificationTmp,
          experience: obj.experience,
          training: obj.training,
          testimonial: testimonialTmp,
        });
      });

      let tmpArr3 = [];
      showNewBuildRecords.forEach((obj) => {
        let testimonialTmp = [];
        if (obj.testimonial.length > 0) {
          let codeForSkillCombo = `testimonial_${serviceTypeCode["New Build"]}${
            applicationCode[obj.application]
          }${skillCode["New Build"][obj.skill]}${subSkillCode[obj.subskill]}`;
          //extract keys from urls
          let urlsCombo = Object.keys(urlsUploaded).filter((obj2) => {
            return obj2.includes(codeForSkillCombo);
          }); //stored all new urls
          urlsCombo.forEach((obj2) => {
            testimonialTmp.push(urlsUploaded[obj2]);
          });
        }
        let certificationTmp = [];
        if (obj.certificate.length > 0) {
          //certification_
          let codeForSkillCombo = `certification_${
            serviceTypeCode["New Build"]
          }${applicationCode[obj.application]}${
            skillCode["New Build"][obj.skill]
          }${subSkillCode[obj.subskill]}`;
          obj.certificate.forEach((obj2, idx) => {
            if (`${codeForSkillCombo}_${idx}` in urlsUploaded) {
              certificationTmp.push({
                course: obj2.course,
                fileLink: urlsUploaded[`${codeForSkillCombo}_${idx}`],
              });
            }
          });
        }
        tmpArr3.push({
          serviceApplication: obj.application,
          skillCategory: obj.skill,
          subSkillCategory: obj.subskill,
          certifications: certificationTmp,
          experience: obj.experience,
          training: obj.training,
          testimonial: testimonialTmp,
        });
      });

      retObj = {
        affiliationDetails: {
          handlingMaterials: handlingMaterials,
          experienced: levelOfExpertise,
          materialList: materialList,
        },
        skillDetails: {
          installation: tmpArr1,
          repair: tmpArr2,
          newBuild: tmpArr3,
        },
      };
    } else {
      retObj = {
        affiliationDetails: {
          handlingMaterials: handlingMaterials,
          experienced: levelOfExpertise,
          materialList: materialList,
        },
        skillDetails: {
          installation: installationInterest,
          repair: repairInterest,
          newBuild: newBuildInterest,
        },
      };
    }

    // console.log(JSON.stringify(retObj));
    let step1data = localStorage.getItem("step1data");
    step1data = JSON.parse(step1data);
    let step2data = localStorage.getItem("step2data");
    step2data = JSON.parse(step2data);
    let FinalFormData = {
      userID: userid,
      personalData: step1data.personalData,
      educationDetails: step1data.educationDetails,
      languageDetails: step1data.languageDetails,
      additionalInformation: step2data.additionalInformation,
      bankDetails: step2data.bankDetails,
      servicePincode: step2data.servicePincode,
      affiliationDetails: retObj.affiliationDetails,
      skillDetails: retObj.skillDetails,
    };

    async function submitData() {
      const fetchResponse = await fetch(
        "http://localhost:3002/api/workmanIndividual/add",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(FinalFormData),
        }
      );
      // console.log(fetchResponse);
      if (fetchResponse.status == 201) {
        navigateTo(`/approvalPending/${userid}/Individual`);
        toast.success("Details submitted successfully!");
        localStorage.removeItem("step1Data");
        localStorage.removeItem("step2Data");
      } else {
        toast.error("Check filled Details!!");
        navigateTo("/workman/individual/Profile");
        localStorage.removeItem("step1Data");
        localStorage.removeItem("step2Data");
      }
    }
    submitData();
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
        obj.application == serviceApplication &&
        obj.skill == category &&
        obj.subskill == subCategory
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
        obj.application == serviceApplication &&
        obj.skill == category &&
        obj.subskill == subCategory
    );
    if (objIndex >= 0) {
      let arr = tmpFileArr.filter((obj) => {
        return obj.skillCombo !== `certification_${codeForSkillCombo}`;
      });

      let certificationArr = tempObj[objIndex].certificate;
      certificationArr.push({
        course: tempCourseName,
        file: tempCourseFile,
        fileLink: URL.createObjectURL(tempCourseFile),
      });
      tempObj[objIndex].certificate = certificationArr;

      certificationArr.forEach((obj2, idx) => {
        arr.push({
          fileId: `certification_${codeForSkillCombo}_${idx}`,
          file: obj2.file,
          skillCombo: `certification_${codeForSkillCombo}`,
        });
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
        obj.application == serviceApplication &&
        obj.skill == category &&
        obj.subskill == subCategory
    );
    if (objIndex >= 0) {
      let certificationArr = tempObj[objIndex].certificate.filter(
        (obj, idx) => {
          return idx !== certificateId;
        }
      );
      tempObj[objIndex].certificate = certificationArr;
      let arr = tmpFileArr.filter((obj) => {
        return obj.fileId !== `${codeForSkillCombo}_${certificateId}`;
      });
      console.log(arr);
      setTempRecords(tempObj);
      typeOfService == "Installation"
        ? setInstallationCertificationFiles(arr)
        : typeOfService == "Repair"
        ? setRepairCertificationFiles(arr)
        : setNewBuildCertificationFiles(arr);
    }
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

  const displayTestimonialsAlt = (
    serviceApplication,
    category,
    subCategory
  ) => {
    let objIndex = tempRecords.findIndex(
      (obj) =>
        obj.application == serviceApplication &&
        obj.skill == category &&
        obj.subskill == subCategory
    );
    return tempRecords[objIndex].testimonial;
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
        obj.application == serviceApplication &&
        obj.skill == category &&
        obj.subskill == subCategory
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

  return (
    <div style={{ userSelect: "none" }}>
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
            <Col xs="10" md="11">
              <div className="content-header">
                <h3 className="mb-0">Affiliation Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
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
          <CardBody>
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
                      checked={!handlingMaterials}
                      onChange={() => {
                        if (handlingMaterials) {
                          setHandlingMaterials(!handlingMaterials);
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
                  isDisabled={!handlingMaterials}
                  isMulti
                  closeMenuOnSelect={false}
                  blurInputOnSelect={false}
                  options={[
                    { value: "Glass", label: "Glass" },
                    { value: "Timber", label: "Timber" },
                    { value: "Metal", label: "Metal" },
                  ]}
                  onChange={(e) => {
                    let temp = [];
                    e.forEach((obj) => {
                      temp.push(obj.value);
                    });
                    setMaterialList(temp);
                  }}
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
                      disabled={saveInstallation || tempRecords.length > 0}
                      checked={!levelOfExpertise}
                      onChange={() => {
                        if (levelOfExpertise) {
                          setServApplData([]);
                          setSkillCatData([]);
                          setSelectedApplication([]);
                          setSkillOptions([]);
                          setSelectedSkill([]);
                          setSubskillOpt([]);
                          setSelectedSubskill([]);
                          setTempRecords([]);
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
                      disabled={
                        serviceTypeInterest !== "Installation" ||
                        tempRecords.length > 0
                      }
                      onChange={() => {
                        if (!levelOfExpertise) {
                          setTempRecords([]);
                          setInstallationCertificationFiles([]);
                          setRepairCertificationFiles([]);
                          setNewBuildCertificationFiles([]);
                          setInstallationTestimonialFiles([]);
                          setRepairTestimonialFiles([]);
                          setNewBuildTestimonialFiles([]);
                          setSelectedApplication([]);
                          setSkillOptions([]);
                          setSelectedSkill([]);
                          setSubskillOpt([]);
                          setSelectedSubskill([]);
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
            {/* {handlingMaterials ? (
              <Row>
                <Col xs="12" md="2" className="mb-1">
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
                        checked={!handlingMaterials}
                        onChange={() => {
                          if (handlingMaterials) {
                            setHandlingMaterials(!handlingMaterials);
                          }
                        }}
                      />
                      <Label className="form-label" for="ex0-active">
                        No
                      </Label>
                    </div>
                  </div>
                </Col>
                <Col xs="12" md="5" className="mb-1">
                  <Label className="form-label" for="register-mobile">
                    Material List
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    id={`material-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    isMulti
                    closeMenuOnSelect={false}
                    blurInputOnSelect={false}
                    options={[
                      { value: "Glass", label: "Glass" },
                      { value: "Timber", label: "Timber" },
                      { value: "Metal", label: "Metal" },
                    ]}
                  />
                </Col>
              </Row>
            ) : (
              <Row>
                <Col xs="12" md className="mb-1">
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
                        checked={!handlingMaterials}
                        onChange={() => {
                          if (handlingMaterials) {
                            setHandlingMaterials(!handlingMaterials);
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
            )} */}
            <Row style={{ marginTop: "2rem" }}>
              <Col xs="12">
                <CardTitle>
                  Skill Details{" "}
                  {levelOfExpertise ? "" : "(add your interest below)"}
                </CardTitle>
              </Col>
            </Row>

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
                          serviceType == "Installation" ? "#098fb5" : "#FFFFF"
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
                          serviceType == "Repair" ? "#098fb5" : "#FFFFF"
                        }`,
                        borderBottom: `${
                          serviceType == "Repair" ? "2px solid #098fb5" : "none"
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
                          serviceType == "New Build" ? "#098fb5" : "#FFFFF"
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
                            <Label className="form-label" for="register-mobile">
                              <h6>
                                {obj.application}{" "}
                                {obj.skill !== "" ? `- ${obj.skill}` : ""}
                                {obj.subskill !== ""
                                  ? ` - ${obj.subskill}`
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
                                  }${applicationCode[obj.application]}${
                                    skillCode[serviceType][obj.skill]
                                  }${subSkillCode[obj.subskill]}`}
                                >
                                  {checkTestimonialsUploaded(
                                    obj.application,
                                    obj.skill,
                                    obj.subskill,
                                    serviceType
                                  )
                                    ? "Files Selected"
                                    : "Upload Testimonial"}
                                </Label>
                                <Input
                                  type="file"
                                  multiple
                                  max="5000000"
                                  id={`testimonial_${
                                    serviceTypeCode[serviceType]
                                  }${applicationCode[obj.application]}${
                                    skillCode[serviceType][obj.skill]
                                  }${subSkillCode[obj.subskill]}`}
                                  onChange={(e) => {
                                    handleTestimonialFiles(
                                      e,
                                      obj.application,
                                      obj.skill,
                                      obj.subskill,
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
                                    }${applicationCode[obj.application]}${
                                      skillCode[serviceType][obj.skill]
                                    }${subSkillCode[obj.subskill]}_view`}
                                    // onClick={() => {
                                    //   displayUploadedTestimonials(
                                    //     obj.application,
                                    //     obj.skill,
                                    //     obj.subskill
                                    //   );
                                    // }}
                                  >
                                    <Eye size={14} />
                                  </Button>
                                  {checkTestimonialsUploaded(
                                    obj.application,
                                    obj.skill,
                                    obj.subskill,
                                    serviceType
                                  ) ? (
                                    <UncontrolledTooltip
                                      style={{
                                        padding: "5px",
                                        backgroundColor: "#52b7d0",
                                      }}
                                      autohide={false}
                                      placement="top"
                                      target={`testimonial_${
                                        serviceTypeCode[serviceType]
                                      }${applicationCode[obj.application]}${
                                        skillCode[serviceType][obj.skill]
                                      }${subSkillCode[obj.subskill]}_view`}
                                    >
                                      <ListGroup>
                                        {displayTestimonialsAlt(
                                          obj.application,
                                          obj.skill,
                                          obj.subskill
                                        ).map((obj, id) => (
                                          <ListGroupItem
                                            key={id}
                                            tag={"a"}
                                            href={obj}
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
                                        obj.application,
                                        obj.skill,
                                        obj.subskill,
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
                                          if (e.target.files[0] !== undefined) {
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
                                              obj.application,
                                              obj.skill,
                                              obj.subskill,
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
                                      {obj.certificate.length} certificates
                                    </div>
                                    <div>
                                      <Button
                                        color="primary"
                                        outline
                                        onClick={() => {
                                          if (obj.certificate.length > 0) {
                                            if (showCertificateIndex === idx) {
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
                                          if (showCertificateIndex === idx) {
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
                                    {obj.certificate.map((itm2, idx1) => (
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
                                                obj.application,
                                                obj.skill,
                                                obj.subskill,
                                                serviceType,
                                                idx1
                                              );
                                              // let arr4 = tempRecords;
                                              // let arr5 = obj.certificate.filter(
                                              //   (itm3, idx2) => {
                                              //     return idx2 !== idx1;
                                              //   }
                                              // );
                                              // arr4[idx].certificate = arr5;
                                              // setTempRecords(arr4);
                                              setShowCertificateIndex(-1);
                                            }}
                                          >
                                            <X size={14} />
                                          </Button>
                                        </Col>
                                        {/* <Col xs="6"></Col> */}
                                      </Col>
                                    ))}
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
                            : "#FFFFF"
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
                            :"#FFFFF"
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
                            : "#FFFFF"
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
              color="success"
              className="btn-submit"
              onClick={() => {
                if (serviceType == "" || serviceTypeInterest == "") {
                  submitForm();
                } else {
                  toast.error("Save skills first!");
                }
              }}
              tag={Link}
               to={"/workman-Individual/Edit-Profile"}
              // state={{ from: useLocation().pathname.split("/").slice(1) }}
            >
              Submit
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Affiliation;
