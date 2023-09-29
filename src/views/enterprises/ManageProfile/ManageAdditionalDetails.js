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

  const [PANPhoto, setPANPhoto] = useState("");
  const [GSTPhoto, setGStPhoto] = useState("");
  const [ChequePhoto, setChequePhoto] = useState("");
  return (
    <div>
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
            <Col xs="7"  sm="6" md="9" lg="10" >
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
                    Pan Card
                  </Label>
                  <Input
                        disabled={(disableCard!="Registration")}
                    type="file"
                    accept="image/jpeg, image/png"
                    id="profile-pic-upload2"
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
                      document.getElementById("profile-pic-upload2");
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
                    id="profile-pic-upload1"
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
                      document.getElementById("profile-pic-upload1");
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
            <Col xs="7"  sm="6" md="9" lg="10" >
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
   
    </div>
  );
};

export default ManageAdditionalDetails;
