// ** React Imports
import { Fragment } from "react";

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
  Eye,
} from "react-feather";

// ** Utils
import { selectThemeColors } from "@utils";

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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AdditionalDetails = ({ stepper, type, userid }) => {
  const navigateTo = useNavigate();
  const [bankName, setBankName] = useState("");
  const [branchDetail, setBranchDetail] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [IFSC, setIFSC] = useState("");
  const [MICR, setMICR] = useState("");
  const [cancelledCheque, setCancelledCheque] = useState("");

  const [panCardNumber, setPanCardNumber] = useState("");
  const [panCardDoc, setPanCardDoc] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [gstDoc, setGstDoc] = useState("");

  const [cin, setCin] = useState(false);
  const [cinNumber, setCinNumber] = useState("");
  const [CINDocument, setCINDocument] = useState("");
  const [msme, setMsme] = useState(false);
  const [msmeNumber, setMsmeNumber] = useState("");
  const [PFDocument, setPFDocument] = useState("");
  const [pf, setPf] = useState(false);
  const [pfNumber, setPfNumber] = useState("");
  const [MSMEDocument, setMSMEDocument] = useState("");
  const [esic, setEsic] = useState(false);
  const [esicNumber, setEsicNumber] = useState("");
  const [ESICDocument, setESICDocument] = useState("");

  const [showReg, setShowReg] = useState(true);
  const [showBank, setShowBank] = useState(true);

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

  const checkFields = () => {
    if (
      bankName !== "" &&
      branchDetail !== "" &&
      accountNumber !== "" &&
      IFSC !== "" &&
      MICR !== "" &&
      panCardNumber !== "" &&
      gstNumber !== "" &&
      panCardDoc !== "" &&
      gstDoc !== "" &&
      cancelledCheque !== ""
    )
      return true;
    else return false;
  };

  const getDetails = async () => {
    //checkfields
    let setNext = false;
    if (!cin || (cinNumber !== "" && CINDocument !== "")) setNext = true;
    else setNext = false;
    if ((!pf || (pfNumber !== "" && PFDocument !== "")) && setNext)
      setNext = true;
    else setNext = false;
    if ((!msme || (msmeNumber !== "" && MSMEDocument !== "")) && setNext)
      setNext = true;
    else setNext = false;
    if ((!esic || (esicNumber !== "" && ESICDocument !== "")) && setNext)
      setNext = true;
    else setNext = false;

    setNext = checkFields();

    if (setNext) {
      //call store and get docs link
      const formData = new FormData();
      let urlsUploaded = {};

      fileInputs.forEach((fileInput, index) => {
        formData.append(fileInput.fileId, fileInput.file);
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
        urlsUploaded = uploadFilesData.Urls;
      }

      const additionalInformation = {
        panCardNumber: panCardNumber,
        gstNumber: gstNumber,
        panCardDoc:
          "panCardDoc" in urlsUploaded ? urlsUploaded["panCardDoc"] : "",
        gstDoc: "gstDoc" in urlsUploaded ? urlsUploaded["gstDoc"] : "",
      };
      if (cin) {
        additionalInformation["CIN"] = cinNumber;
        additionalInformation["CINDocument"] =
          "CINDocument" in urlsUploaded ? urlsUploaded["CINDocument"] : "";
      }
      if (pf) {
        additionalInformation["PF"] = pfNumber;
        additionalInformation["PFDocument"] =
          "PFDocument" in urlsUploaded ? urlsUploaded["PFDocument"] : "";
      }
      if (msme) {
        additionalInformation["MSME"] = msmeNumber;
        additionalInformation["MSMEDocument"] =
          "MSMEDocument" in urlsUploaded ? urlsUploaded["MSMEDocument"] : "";
      }
      if (esic) {
        additionalInformation["ESIC"] = esicNumber;
        additionalInformation["ESICDocument"] =
          "ESICDocument" in urlsUploaded ? urlsUploaded["ESICDocument"] : "";
      }
      const bankDetails = {
        bankName: bankName,
        branchDetail: branchDetail,
        accountNumber: accountNumber,
        IFSC: IFSC,
        MICR: MICR,
        cancelledCheque:
          "cancelledCheque" in urlsUploaded
            ? urlsUploaded["cancelledCheque"]
            : "",
      };

      const dataFromStorage = JSON.parse(
        localStorage.getItem("companyDetails")
      );
      const finalData = {
        userID: userid,
        personalData: dataFromStorage.personalData,
        authorisedPerson: dataFromStorage.authorisedPerson,
        escalation: dataFromStorage.escalation,
        additionalInformation: additionalInformation,
        bankDetails: bankDetails,
      };

      // console.log(finalData);
      // console.log(typeof finalData.personalData.contactNumber);
      // console.log(finalData.personalData.contactNumber);

      return finalData;
    } else {
      toast.error("Fill all fields!");
      return null;
    }
  };

  const submitForm = async () => {
    const finalWorkmanFirmData = await getDetails();
    if (finalWorkmanFirmData !== null) {
      const fetchResponse = await fetch(
        "http://localhost:3002/api/workmanFirm/add",
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(finalWorkmanFirmData),
        }
      );
      if (fetchResponse.status == 201) {
        navigateTo(`/approvalPending/${userid}/Business`);
        toast.success("Details submitted successfully!");
        localStorage.removeItem("companyDetails");
      } else {
        toast.error("Check filled Details!!");
      }
    }
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
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-mobile">
                    Pan Card Number
                  </Label>
                  <Input
                    type="text"
                    id="register-mobile"
                    placeholder="XXXXXXXX"
                    value={panCardNumber}
                    onChange={(e) => setPanCardNumber(e.target.value)}
                    // onChange={(e) => handleEmail(e.target.value)}
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
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-mobile">
                    GST Registration Number
                  </Label>
                  <Input
                    type="text"
                    id="register-mobile"
                    placeholder="XXXXXXX"
                    value={gstNumber}
                    onChange={(e) => setGstNumber(e.target.value)}
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </Col>
                <Col xs="7" md="4" className="mb-1">
                  <Label
                    className="gst-upload-label"
                    id="gst-upload-label"
                    for="gst-upload"
                  >
                    Upload GST certificate
                  </Label>
                  <Input
                    type="file"
                    id="gst-upload"
                    onChange={(e) => {
                      if (e.target.files[0] !== undefined) {
                        const fileLabel =
                          document.getElementById("gst-upload-label");
                        fileLabel.textContent = "File selected";
                        setGstDoc(URL.createObjectURL(e.target.files[0]));
                        handleEachFileUpload(e, "gstDoc");
                      } else {
                        let arr = fileInputs.filter((obj) => {
                          return obj.fileId !== "gstDoc";
                        });
                        const fileLabel =
                          document.getElementById("gst-upload-label");
                        fileLabel.textContent = "Upload GST certificate";

                        setFileInputs(arr);

                        setGstDoc("");
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
                            return obj.fileId == "gstDoc";
                          }).length > 0
                        ) {
                          window.open(gstDoc);
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
                          return obj.fileId !== "gstDoc";
                        });
                        const fileLabel =
                          document.getElementById("gst-upload-label");
                        fileLabel.textContent = "Upload GST certificate";

                        const fileInput = document.getElementById("gst-upload");
                        fileInput.type = "text"; // Temporarily change the type to text
                        fileInput.type = "file";

                        setFileInputs(arr);
                        setGstDoc("");
                      }}
                    >
                      <X size={14} />
                    </Button>
                  </div>
                </Col>
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
                          onChange={() => {
                            if (cin) {
                              setCin(!cin);
                              let arr = fileInputs.filter((obj) => {
                                return obj.fileId !== "CINDocument";
                              });
                              setFileInputs(arr);
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
                      placeholder="9875461258"
                      value={cinNumber}
                      onChange={(e) => setCinNumber(e.target.value)}
                    />
                  </Col>
                  <Col xs="7" md="4" className="mb-1">
                    <Label
                      className="cin-upload-label"
                      id="cin-upload-label"
                      for="cin-upload"
                    >
                      Upload CIN Document
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
                          handleEachFileUpload(e, "CINDocument");
                        } else {
                          let arr = fileInputs.filter((obj) => {
                            return obj.fileId !== "CINDocument";
                          });
                          const fileLabel =
                            document.getElementById("cin-upload-label");
                          fileLabel.textContent = "Upload CIN Document";

                          setFileInputs(arr);

                          setCINDocument("");
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
                              return obj.fileId == "CINDocument";
                            }).length > 0
                          ) {
                            window.open(CINDocument);
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
                            return obj.fileId !== "CINDocument";
                          });
                          const fileLabel =
                            document.getElementById("cin-upload-label");
                          fileLabel.textContent = "Upload CIN Document";

                          const fileInput =
                            document.getElementById("cin-upload");
                          fileInput.type = "text"; // Temporarily change the type to text
                          fileInput.type = "file";

                          setFileInputs(arr);
                          setCINDocument("");
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
                          onChange={() => {
                            if (msme) {
                              setMsme(!msme);
                              let arr = fileInputs.filter((obj) => {
                                return obj.fileId !== "MSMEDocument";
                              });
                              setFileInputs(arr);
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
                      placeholder="9875461258"
                      value={msmeNumber}
                      onChange={(e) => setMsmeNumber(e.target.value)}
                    />
                  </Col>
                  <Col xs="7" md="4" className="mb-1">
                    <Label
                      className="msme-upload-label"
                      id="msme-upload-label"
                      for="msme-upload"
                    >
                      Upload MSME Document
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
                          handleEachFileUpload(e, "MSMEDocument");
                        } else {
                          let arr = fileInputs.filter((obj) => {
                            return obj.fileId !== "MSMEDocument";
                          });
                          const fileLabel =
                            document.getElementById("msme-upload-label");
                          fileLabel.textContent = "Upload MSME Document";

                          setFileInputs(arr);

                          setMSMEDocument("");
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
                              return obj.fileId == "MSMEDocument";
                            }).length > 0
                          ) {
                            window.open(MSMEDocument);
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
                            return obj.fileId !== "MSMEDocument";
                          });
                          const fileLabel =
                            document.getElementById("msme-upload-label");
                          fileLabel.textContent = "Upload MSME Document";

                          const fileInput =
                            document.getElementById("msme-upload");
                          fileInput.type = "text"; // Temporarily change the type to text
                          fileInput.type = "file";

                          setFileInputs(arr);
                          setMSMEDocument("");
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
                          onChange={() => {
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
                      PF Number
                    </Label>
                    <Input
                      type="text"
                      id="register-mobile"
                      value={pfNumber}
                      onChange={(e) => setPfNumber(e.target.value)}
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
                          onChange={() => {
                            if (esic) {
                              setEsic(!esic);
                              let arr = fileInputs.filter((obj) => {
                                return obj.fileId !== "ESICDocument";
                              });
                              setFileInputs(arr);
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
                      placeholder="9875461258"
                      value={esicNumber}
                      onChange={(e) => setEsicNumber(e.target.value)}
                    />
                  </Col>
                  <Col xs="7" md="4" className="mb-1">
                    <Label
                      className="esic-upload-label"
                      id="esic-upload-label"
                      for="esic-upload"
                    >
                      Upload ESIC Document
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
                          handleEachFileUpload(e, "ESICDocument");
                        } else {
                          let arr = fileInputs.filter((obj) => {
                            return obj.fileId !== "ESICDocument";
                          });
                          const fileLabel =
                            document.getElementById("esic-upload-label");
                          fileLabel.textContent = "Upload ESIC Document";

                          setFileInputs(arr);

                          setESICDocument("");
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
                              return obj.fileId == "ESICDocument";
                            }).length > 0
                          ) {
                            window.open(ESICDocument);
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
                            return obj.fileId !== "ESICDocument";
                          });
                          const fileLabel =
                            document.getElementById("esic-upload-label");
                          fileLabel.textContent = "Upload ESIC Document";

                          const fileInput =
                            document.getElementById("esic-upload");
                          fileInput.type = "text"; // Temporarily change the type to text
                          fileInput.type = "file";

                          setFileInputs(arr);
                          setESICDocument("");
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
                    value={bankName}
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
                    value={branchDetail}
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
                    type="text"
                    id="register-email"
                    placeholder="XXXXXXX"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
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
                    placeholder="XXXXXX"
                    value={IFSC}
                    onChange={(e) => setIFSC(e.target.value)}
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
                    placeholder="XXXXXXXXXXXX"
                    value={MICR}
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
              onClick={() => submitForm()}
               tag={Link}
               to={"/workman-Firm/Edit-Profile"}
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

export default AdditionalDetails;
