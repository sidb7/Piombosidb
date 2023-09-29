// ** React Imports
import { Fragment } from "react";
import { useEffect } from "react";

// ** Third Party Components
import Select from "react-select";
import { useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  X,
  Plus,
  Search,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
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
  CardHeader,
  CardBody,
  Table,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";

import data from "../../../pincodeData";

const AdditionalDetails = ({ stepper, type, dataHandler }) => {
  const [pf, setPf] = useState(false);
  const [PFDocument, setPFDocument] = useState("");
  const [uan, setUAN] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [panCardNumber, setPanCardNumber] = useState("");
  const [panCardDoc, setPanCardDoc] = useState("");
  const [aadharCardDoc, setAadharCardDoc] = useState("");
  //handle aadhar number
  const handleAadharFormat = (val) => {
    setAadharNumber(val);
    if (val.length > 14) {
      setAadharNumber(val.slice(0, 14));
    }
  };

  const [showReg, setShowReg] = useState(true);
  const [showBank, setShowBank] = useState(true);
  const [showPin, setShowPin] = useState(true);

  const stateList = data.states;
  const pinData = data.pinData;
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

  const [areaRecordsChkd, setAreaRecordsChkd] = useState([]);
  const [uncheckedAreaRecord, setUncheckedAreaRecord] = useState([]);
  const [radioRecord, setRadioRecord] = useState("");
  const [tempRecord, setTempRecord] = useState([]);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchArray, setSearchArray] = useState([]);

  const [rowsPerPage, setRowsPerPage] = useState({ value: "10", label: "10" });
  const [totalRows, setTotalRows] = useState(10);

  const [bankName, setBankName] = useState("");
  const [branchDetail, setBranchDetail] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifsc, setIFSC] = useState("");
  const [micr, setMICR] = useState("");
  const [cancelledCheque, setCancelledCheque] = useState("");

  const [fileInputs, setFileInputs] = useState([]);

  const handleEachFileUpload = (e, fileKey) => {
    const fileEntry = {
      fileId: fileKey,
      file: e.target.files[0],
    };
    let arr = fileInputs;
    arr.push(fileEntry);
    setFileInputs(arr);
  };

  const pageRowOptions = [
    { value: "3", label: "3" },
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "show all", label: "show all" },
  ];

  const [currentPageTable, setCurrentPageTable] = useState(1);
  const [totalPageTable, setTotalPageTable] = useState(1);

  const handleDataPagination = (data, rows = totalRows) => {
    let totalPageLength =
      data.length % rows > 0
        ? Math.floor(data.length / rows) + 1
        : Math.floor(data.length / rows);

    // console.log(data.length, totalPageLength);
    setTotalPageTable(totalPageLength);
    setCurrentPageTable(1);
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

  const stateSelected = selectedState.map((num) => {
    return num.value;
  });
  const divisionSelected = selectedDivision.map((num) => {
    return num.value;
  });
  const districtSelected = selectedDistrict.map((num) => {
    return num.value;
  });

  const [enableNext, setEnableNext] = useState(false);
  const checkFields = () => {
    setEnableNext(true);
    // if (
    //   panCardNumber !== "" &&
    //   aadharNumber !== "" &&
    //   panCardDoc !== "" &&
    //   aadharCardDoc !== "" &&
    //   (pf == false || (PFDocument !== "" && uan !== "")) &&
    //   bankName !== "" &&
    //   branchDetail != "" &&
    //   accountNumber !== "" &&
    //   ifsc !== "" &&
    //   micr !== "" &&
    //   cancelledCheque !== ""
    // ) {
    //   setEnableNext(true);
    // } else {
    //   setEnableNext(false);
    // }
  };

  useEffect(() => {
    checkFields();
  });

  const handleNextStepper = async () => {
    const formData = new FormData();
    let urlsUploaded = {};

    if (fileInputs.length > 0) {
      fileInputs.forEach((fileInput, index) => {
        formData.append(fileInput.fileId, fileInput.file);
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
        urlsUploaded = uploadFilesData.Urls;
      }
    }
    let getObj = {
      additionalInformation: {
        panCardNumber: panCardNumber,
        aadharNumber: aadharNumber,
        panCardDoc:
          "panCardDoc" in urlsUploaded ? urlsUploaded["panCardDoc"] : "",
        aadharCardDoc:
          "aadharCardDoc" in urlsUploaded ? urlsUploaded["aadharCardDoc"] : "",
      },
      bankDetails: {
        bankName: bankName,
        branchDetail: branchDetail,
        accountNumber: accountNumber,
        IFSC: ifsc,
        MICR: micr,
        cancelledCheque:
          "cancelledCheque" in urlsUploaded
            ? urlsUploaded["cancelledCheque"]
            : "",
      },
      servicePincode: {
        state: stateSelected,
        district: districtSelected,
        division: divisionSelected,
        selectedPincodes: areaRecordsChkd,
      },
    };
    if (pf) {
      objToStore.additionalInformation.PF = uan;
      objToStore.additionalInformation.PFDocument =
        "PFDocument" in urlsUploaded ? urlsUploaded["PFDocument"] : "";
    }

    localStorage.setItem("step2data", JSON.stringify(getObj));
    stepper.next();
  };

  return (
    <div>
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
            <Col xs="10" md="11">
              <div className="content-header">
                <h3 className="mb-0">Registration Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
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
                <Col xs="12" md="6" className="mb-1">
                  <Label className="form-label" for="register-mobile">
                    Pan Card Number
                  </Label>
                  <Input
                    type="text"
                    id="register-mobile"
                    placeholder="XXXXXXX"
                    value={panCardNumber}
                    onChange={(e) => setPanCardNumber(e.target.value)}
                  />
                </Col>
                <Col xs="7" md="4" className="mb-1">
                  <Label
                    className="pan-upload-label"
                    id="pan-upload-label"
                    for="pan-upload"
                  >
                    Upload PAN Card
                  </Label>
                  <Input
                    type="file"
                    id="pan-upload"
                    onChange={(e) => {
                      if (e.target.files[0] !== undefined) {
                        const fileLabel =
                          document.getElementById("pan-upload-label");
                        fileLabel.textContent = "File selected";
                        setPanCardDoc(URL.createObjectURL(e.target.files[0]));
                        handleEachFileUpload(e, "panCardDoc");
                      } else {
                        let arr = fileInputs.filter((obj) => {
                          return obj.fileId !== "panCardDoc";
                        });
                        const fileLabel =
                          document.getElementById("pan-upload-label");
                        fileLabel.textContent = "Upload PAN Card";

                        setFileInputs(arr);

                        setPanCardDoc("");
                      }
                    }}
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
                      onClick={() => {
                        // if (fileInputs.length > 0) handleNextFileUpload();
                        if (
                          fileInputs.filter((obj) => {
                            return obj.fileId == "panCardDoc";
                          }).length > 0
                        ) {
                          window.open(panCardDoc);
                        }
                      }}
                    >
                      <Eye size={14} />
                    </Button>
                    <Button
                      color="danger"
                      outline
                      onClick={() => {
                        let arr = fileInputs.filter((obj) => {
                          return obj.fileId !== "panCardDoc";
                        });
                        const fileLabel =
                          document.getElementById("pan-upload-label");
                        fileLabel.textContent = "Upload PAN Card";

                        const fileInput = document.getElementById("pan-upload");
                        fileInput.type = "text"; // Temporarily change the type to text
                        fileInput.type = "file";

                        setFileInputs(arr);
                        setPanCardDoc("");
                      }}
                    >
                      <X size={14} />
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="6" className="mb-1">
                  <Label className="form-label" for="register-mobile">
                    Aadhar Number
                  </Label>
                  <Input
                    type="text"
                    id="register-mobile"
                    placeholder="XXXXXXX"
                    value={aadharNumber}
                    onChange={(e) => handleAadharFormat(e.target.value)}
                  />
                </Col>
                <Col xs="7" md="4" className="mb-1">
                  <Label
                    className="aadhar-upload-label"
                    id="aadhar-upload-label"
                    for="aadhar-upload"
                  >
                    Upload Aadhar Card
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
                        handleEachFileUpload(e, "aadharCardDoc");
                      } else {
                        let arr = fileInputs.filter((obj) => {
                          return obj.fileId !== "aadharCardDoc";
                        });
                        const fileLabel = document.getElementById(
                          "aadhar-upload-label"
                        );
                        fileLabel.textContent = "Upload Aadhar Card";

                        setFileInputs(arr);

                        setAadharCardDoc("");
                      }
                    }}
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
                      onClick={() => {
                        // if (fileInputs.length > 0) handleNextFileUpload();
                        if (
                          fileInputs.filter((obj) => {
                            return obj.fileId == "aadharCardDoc";
                          }).length > 0
                        ) {
                          window.open(aadharCardDoc);
                        }
                      }}
                    >
                      <Eye size={14} />
                    </Button>
                    <Button
                      color="danger"
                      outline
                      onClick={() => {
                        let arr = fileInputs.filter((obj) => {
                          return obj.fileId !== "aadharCardDoc";
                        });
                        const fileLabel = document.getElementById(
                          "aadhar-upload-label"
                        );
                        fileLabel.textContent = "Upload Aadhar Card";

                        const fileInput =
                          document.getElementById("aadhar-upload");
                        fileInput.type = "text"; // Temporarily change the type to text
                        fileInput.type = "file";

                        setFileInputs(arr);
                        setAadharCardDoc("");
                      }}
                    >
                      <X size={14} />
                    </Button>
                  </div>
                </Col>
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
                          onChange={() => {}}
                          onClick={() => {
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
                          onChange={() => {}}
                          onClick={() => {
                            if (pf) {
                              setPf(!pf);
                              let arr = fileInputs.filter((obj) => {
                                return obj.fileId !== "PFDocument";
                              });
                              setFileInputs(arr);
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
                      type="Number"
                      id="register-mobile"
                      value={uan}
                      onChange={(e) => setUAN(e.target.value)}
                    />
                  </Col>
                  <Col xs="7" md="4" className="mb-1">
                    <Label
                      className="pf-upload-label"
                      id="pf-upload-label"
                      for="pf-upload"
                    >
                      Upload PF Document
                    </Label>
                    <Input
                      type="file"
                      id="pf-upload"
                      onChange={(e) => {
                        if (e.target.files[0] !== undefined) {
                          const fileLabel =
                            document.getElementById("pf-upload-label");
                          fileLabel.textContent = "File selected";
                          setPFDocument(URL.createObjectURL(e.target.files[0]));
                          handleEachFileUpload(e, "PFDocument");
                        } else {
                          let arr = fileInputs.filter((obj) => {
                            return obj.fileId !== "PFDocument";
                          });
                          const fileLabel =
                            document.getElementById("pf-upload-label");
                          fileLabel.textContent = "Upload PF Document";

                          setFileInputs(arr);

                          setPFDocument("");
                        }
                      }}
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
                        onClick={() => {
                          // if (fileInputs.length > 0) handleNextFileUpload();
                          if (
                            fileInputs.filter((obj) => {
                              return obj.fileId == "PFDocument";
                            }).length > 0
                          ) {
                            window.open(PFDocument);
                          }
                        }}
                      >
                        <Eye size={14} />
                      </Button>
                      <Button
                        color="danger"
                        outline
                        onClick={() => {
                          let arr = fileInputs.filter((obj) => {
                            return obj.fileId !== "PFDocument";
                          });
                          const fileLabel =
                            document.getElementById("pf-upload-label");
                          fileLabel.textContent = "Upload PF Document";

                          const fileInput =
                            document.getElementById("pf-upload");
                          fileInput.type = "text"; // Temporarily change the type to text
                          fileInput.type = "file";

                          setFileInputs(arr);
                          setPFDocument("");
                        }}
                      >
                        <X size={14} />
                      </Button>
                    </div>
                  </Col>
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
                          onChange={() => {}}
                          onClick={() => {
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
                          onChange={() => {}}
                          onClick={() => {
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
          <Row>
            <Col xs="10" md="11">
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
                    placeholder="bank name"
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-name">
                    Branch Detail
                  </Label>
                  <Input
                    type="text"
                    id="register-name"
                    placeholder="branch name"
                    onChange={(e) => setBranchDetail(e.target.value)}
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
                    placeholder="XXXXXXX"
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    IFSC Code
                  </Label>
                  <Input
                    type="text"
                    id="register-email"
                    placeholder="XXXXXX"
                    onChange={(e) => setIFSC(e.target.value)}
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
                    placeholder="XXXXXXXXXXXX"
                    onChange={(e) => setMICR(e.target.value)}
                  />
                </Col>
                <Col xs="7" md="4" className="mb-1">
                  <Label
                    className="cheque-upload-label"
                    id="cheque-upload-label"
                    for="cheque-upload"
                  >
                    Upload Cancelled Cheque
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
                        handleEachFileUpload(e, "cancelledCheque");
                      } else {
                        let arr = fileInputs.filter((obj) => {
                          return obj.fileId !== "cancelledCheque";
                        });
                        const fileLabel = document.getElementById(
                          "cheque-upload-label"
                        );
                        fileLabel.textContent = "Upload Cancelled Cheque";

                        setFileInputs(arr);

                        setCancelledCheque("");
                      }
                    }}
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
                      onClick={() => {
                        // if (fileInputs.length > 0) handleNextFileUpload();
                        if (
                          fileInputs.filter((obj) => {
                            return obj.fileId == "cancelledCheque";
                          }).length > 0
                        ) {
                          window.open(cancelledCheque);
                        }
                      }}
                    >
                      <Eye size={14} />
                    </Button>
                    <Button
                      color="danger"
                      outline
                      onClick={() => {
                        let arr = fileInputs.filter((obj) => {
                          return obj.fileId !== "profilePic";
                        });
                        const fileLabel = document.getElementById(
                          "cheque-upload-label"
                        );
                        fileLabel.textContent = "Upload Cancelled Cheque";

                        const fileInput =
                          document.getElementById("cheque-upload");
                        fileInput.type = "text"; // Temporarily change the type to text
                        fileInput.type = "file";

                        setFileInputs(arr);
                        setCancelledCheque("");
                      }}
                    >
                      <X size={14} />
                    </Button>
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
            <Col xs="10" md="11">
              <div className="content-header">
                <h3 className="mb-0">Service Pincodes</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
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
                            return removeFromSelectedDistrict.indexOf(obj) < 0;
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
                            return removeFromSelectedDivision.indexOf(obj) < 0;
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
                          <Label className="form-label" for={`city-${type}`}>
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
                              <Label className="form-label" for="ex5-active">
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
                              <Label className="form-label" for="ex5-active">
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
                                    areaRecordsChkd.concat(uncheckedAreaRecord);
                                  setTempRecord(arr);
                                  handleDataPagination(arr);
                                }}
                              />
                              <Label className="form-label" for="ex5-active">
                                Both
                              </Label>
                            </div>
                          </div>
                        </Col>
                        <Col xs="6" md="2">
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
                                            areaRecordsChkd.forEach((obj4) => {
                                              let tmpObj = obj4;
                                              tmpObj.checked = false;
                                              tmp6.push(tmpObj);
                                            });
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
                                          if (uncheckedAreaRecord.length > 0) {
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
                                          areaRecordsChkd.forEach((obj4) => {
                                            let tmpObj = obj4;
                                            tmpObj.checked = false;
                                            tmp6.push(tmpObj);
                                          });
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
                                        style={{ textTransform: "lowercase" }}
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
                                        if (uncheckedAreaRecord.length > 0) {
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
                                        style={{ textTransform: "lowercase" }}
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
              disabled={!enableNext}
              onClick={() => {
                handleNextStepper();
                 stepper.next();
              }}
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

export default AdditionalDetails;
