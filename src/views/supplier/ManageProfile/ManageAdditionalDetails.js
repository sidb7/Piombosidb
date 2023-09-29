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
import data from "../../pincodeData";
// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";
import toast from "react-hot-toast";

const ManageAdditionalDetails = ({ stepper, type }) => {
  const [cin, setCin] = useState(false);
  const [msme, setMsme] = useState(false);
  const [pf, setPf] = useState(false);
  const [esic, setEsic] = useState(false);

  const [aadharNumber, setAadharNumber] = useState("");
  //handle aadhar number
  const handleAadharFormat = (val) => {
    setAadharNumber(val);
    let i = 4;
    while (i < val.length) {
      if (val[i] != "-") {
        setAadharNumber(val.slice(0, i).concat("-", val.slice(i, val.length)));
      }
      i += 5;
    }
  };

  const [showReg, setShowReg] = useState(true);
  const [showBank, setShowBank] = useState(true);
  const [showPin, setShowPin] = useState(true);

  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const deleteForm = (e) => {
    e.preventDefault();
    e.target.closest("form").remove();
  };

  const[disableCard,setDisableCard] =useState("")

  // SERVICEE PINCODES
 
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

  const [PANPhoto, setPANPhoto] = useState("");
  const [GSTPhoto, setGStPhoto] = useState("");
  const [ChequePhoto, setChequePhoto] = useState("");
  return (
    <div>
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
          <Col xs="7"  sm="6" md="9" lg="10">
              <div className="content-header">
                <h3 className="mb-0">Registration Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="3" sm="4" md="2" lg="1">
              <div className="content-header">
              <Button
                color={((disableCard!="Registration")?"primary":"success")} 
                outline
                onClick={() => {
                 (disableCard!="Registration")? setDisableCard("Registration"):setDisableCard("");
                 (disableCard!="Registration")? "":toast.error("Fill all fields")
                }}
              >
             {((disableCard!="Registration")?"Edit":"Save")}
              </Button>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" sm="2"  md="1" lg="1">
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
                   disabled={disableCard!=="Registration"}
                    type="Number"
                    id="register-mobile"
                    placeholder="XXXXXXXX"
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </Col>
                <Col xs="7" md="4" className="mb-1">
                  <Label
                    className="profile-pic-upload-label"
                    id="profile-pic-upload-label"
                    for="profile-pic-upload"
                  >
                 PAN Card
                  </Label>
                  <Input
                   disabled={(disableCard!="Registration")}
                    type="file"
                    accept="image/jpeg, image/png"
                    id="profile-pic-upload1"
                    onChange={e=>setPANPhoto(URL.createObjectURL(e.target.files[0]))}
                    
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
                    
                      disabled={(PANPhoto==="")}
                      onClick={() => {
                       window.open(PANPhoto)
                      }}
                    >
                      <Eye size={14} />
                    </Button>
                    <Button
                         disabled={(disableCard!="Registration"||PANPhoto==="")}
                      color="danger"
                      outline
                    onClick={()=>
                    {
                      const fileInput =
                      document.getElementById("profile-pic-upload1");
                    fileInput.value = ""; // Temporarily change the type to text
                    setPANPhoto("")
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
                  disabled={disableCard!=="Registration"}
                    type="Number"
                    id="register-mobile"
                    placeholder="XXXXXXX"
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </Col>
                <Col xs="7" md="4" className="mb-1">
                  <Label
                    className="profile-pic-upload-label"
                    id="profile-pic-upload-label"
                    for="profile-pic-upload"
                  >
               GST certificate
                  </Label>
                  <Input
                   disabled={(disableCard!="Registration")}
                    type="file"
                    accept="image/jpeg, image/png"
                    id="profile-pic-upload2"
                 
                    onChange={e=>setGStPhoto(URL.createObjectURL(e.target.files[0]))}
                    
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
                      disabled={(GSTPhoto==="")}
                      onClick={() => {
                       window.open(GSTPhoto)
                      }}
                    >
                      <Eye size={14} />
                    </Button>
                    <Button
                      disabled={(disableCard!="Registration"||GSTPhoto==="")}
                      color="danger"
                      outline
                    onClick={()=>
                    {
                      const fileInput =
                      document.getElementById("profile-pic-upload2");
                    fileInput.value = ""; // Temporarily change the type to text
                    setGStPhoto("")
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
                        disabled={disableCard!=="Registration"}
                          type="radio"
                          id="ex0-active"
                          name="ex0"
                          checked={cin}
                          onClick={() => {
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
                        disabled={disableCard!=="Registration"}
                          type="radio"
                          id="ex0-active"
                          name="ex0"
                          checked={!cin}
                          onClick={() => {
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
                  <Col xs="12" md="4" className="mb-1">
                    <Label className="form-label" for="register-mobile">
                      CIN
                    </Label>
                    <Input
                    disabled={disableCard!=="Registration"}
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
                      CIN Document
                    </Label>
                    <Input
                    disabled={disableCard!=="Registration"}
                      type="file"
                      id="signup-details-photo-copy"
                      placeholder=""
                    />
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
                        disabled={disableCard!=="Registration"}
                          type="radio"
                          id="ex0-active"
                          name="ex0"
                          checked={cin}
                          onClick={() => {
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
                        disabled={disableCard!=="Registration"}
                          type="radio"
                          id="ex0-active"
                          name="ex0"
                          checked={!cin}
                          onClick={() => {
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
                        disabled={disableCard!=="Registration"}
                          type="radio"
                          id="ex1-active"
                          name="ex1"
                          checked={msme}
                          onClick={() => {
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
                        disabled={disableCard!=="Registration"}
                          type="radio"
                          id="ex1-active"
                          name="ex1"
                          checked={!msme}
                          onClick={() => {
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
                  <Col xs="12" md="4" className="mb-1">
                    <Label className="form-label" for="register-mobile">
                      MSME
                    </Label>
                    <Input
                    disabled={disableCard!=="Registration"}
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
                      MSME Document
                    </Label>
                    <Input
                    disabled={disableCard!=="Registration"}
                      type="file"
                      id="signup-details-photo-copy"
                      placeholder=""
                    />
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
                        disabled={disableCard!=="Registration"}
                          type="radio"
                          id="ex1-active"
                          name="ex1"
                          checked={msme}
                          onClick={() => {
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
                        disabled={disableCard!=="Registration"}
                          type="radio"
                          id="ex1-active"
                          name="ex1"
                          checked={!msme}
                          onClick={() => {
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
            </Form>
          </CardBody>
        ) : (
          <p />
        )}
      </Card>
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
          <Col xs="7"  sm="6" md="9" lg="10">
              <div className="content-header">
                <h3 className="mb-0">Bank Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="3" sm="4" md="2" lg="1">
              <div className="content-header">
              <Button
                color={((disableCard!="BankDetails")?"primary":"success")} 
                outline
                onClick={() => {
                 (disableCard!="BankDetails")? setDisableCard("BankDetails"):setDisableCard("");
                 (disableCard!="BankDetails")? "":toast.error("Fill all fields")
                }}
              >
             {((disableCard!="BankDetails")?"Edit":"Save")}
              </Button>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" sm="2"  md="1" lg="1">
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
                   disabled={disableCard!=="BankDetails"}
                    type="text"
                    id="register-name"
                    placeholder="bank name"
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-name">
                    Branch Detail
                  </Label>
                  <Input
                    disabled={disableCard!=="BankDetails"}
                    type="text"
                    id="register-name"
                    placeholder="branch name"
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Account number
                  </Label>
                  <Input
                    disabled={disableCard!=="BankDetails"}
                    type="number"
                    id="register-email"
                    placeholder="XXXXXXX"
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    IFSC Code
                  </Label>
                  <Input
                    disabled={disableCard!=="BankDetails"}
                    type="text"
                    id="register-email"
                    placeholder="XXXXXX"
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
                    disabled={disableCard!=="BankDetails"}
                    type="text"
                    id="register-name"
                    placeholder="XXXXXXXXXXXX"
                    value={aadharNumber}
                    onChange={(e) => handleAadharFormat(e.target.value)}
                  />
                </Col>
                <Col xs="7" md="4" className="mb-1">
                  <Label
                    className="profile-pic-upload-label"
                    id="profile-pic-upload-label"
                    for="profile-pic-upload"
                  >
                    Cancelled Cheque
                  </Label>
                  <Input
                   disabled={(disableCard!="BankDetails")}
                    type="file"
                    accept="image/jpeg, image/png"
                    id="profile-pic-upload3"
                    onChange={e=>setChequePhoto(URL.createObjectURL(e.target.files[0]))}
                      
                    
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
                      disabled={(ChequePhoto==="")}
                      onClick={() => {
                       window.open(ChequePhoto)
                      }}
                    >
                      <Eye size={14} />
                    </Button>
                    <Button
                           disabled={(disableCard!="BankDetails"||ChequePhoto==="")}
                      color="danger"
                      outline
                    onClick={()=>
                    {
                      const fileInput =
                      document.getElementById("profile-pic-upload3");
                    fileInput.value = ""; // Temporarily change the type to text
                    setChequePhoto("")
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
          <Col xs="7"  sm="6" md="9" lg="10">
              <div className="content-header">
                <h3 className="mb-0">Service Pincodes</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="3" sm="4" md="2" lg="1">
              <div className="content-header">
              <Button
                color={((disableCard!="ServicePin")?"primary":"success")} 
                outline
                onClick={() => {
                 (disableCard!="ServicePin")? setDisableCard("ServicePin"):setDisableCard("");
                 (disableCard!="ServicePin")? "":toast.error("Fill all fields")
                }}
              >
             {((disableCard!="ServicePin")?"Edit":"Save")}
              </Button>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" sm="2"  md="1" lg="1">
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
                    isDisabled={disableCard!=="ServicePin"}
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
                     isDisabled={disableCard!=="ServicePin"}
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
                     isDisabled={disableCard!=="ServicePin"}
                    menuPlacement="top"
                    theme={selectThemeColors}
                    isClearable
                    id={`state-${type}`}
                
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
    </div>
  );
};

export default ManageAdditionalDetails;
