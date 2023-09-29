// ** React Imports
import { Fragment, useEffect, useState } from "react";

// ** Third Party Components
import Select from "react-select";
import { 
  BrowserRouter, Routes, Route, useNavigate 
} from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  X,
  Plus,
  ChevronUp,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
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
import "@styles/react/libs/react-select/_react-select.scss";
import data from "../pincodeData";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return [innerWidth, innerHeight];
}
const ProfileEdit = ({ stepper, type }) => {
  const cityOptions = [
    { value: "Mumbai", label: "Mumbai" },
    { value: "Pune", label: "Pune" },
    { value: "Bangalore", label: "Bangalore" },
    { value: "Delhi", label: "Delhi" },
    { value: "Pune", label: "Pune" },
    { value: "Bangalore", label: "Bangalore" },
    { value: "Delhi", label: "Delhi" },
    { value: "Pune", label: "Pune" },
    { value: "Bangalore", label: "Bangalore" },
    { value: "Delhi", label: "Delhi" },
  ];

  const countryOptions = [
    { value: "India", label: "India" },
    { value: "Japan", label: "Japan" },
    { value: "Norway", label: "Norway" },
  ];

  const stateOptions = [
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Kerala", label: "Kerala" },
    { value: "Punjab", label: "Punjab" },
  ];
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

 const[disableCard,setDisableCard] =useState("")

// ADDITIONAL DETAILS

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



// AFFILIATION

const [showDet, setShowDet] = useState(true);
  const [newProd, setNewProd] = useState("");
  const [newSegment, setNewSegment] = useState("");

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

  const [productSelected, setProductSelected] = useState([]);

  const handleProducts = (val) => {
    setProductSelected([...productSelected, { value: val }]);
  };

  const handleRemoveProduct = (val) => {
    let arr = productSelected;
    arr = arr.filter((obj) => {
      return obj.value !== val;
    });
    console.log(arr);
    setProductSelected(arr);
  };
  const navigate = useNavigate();
  const redirect = () => {
    toast.success("Submitted Successfully")
    navigate(`/developer/Edit-Profile`)
  }
  const companyActOptions = [
    { value: "Interior Contractor", label: "Interior Contractor" },
    { value: "Interior Designer", label: "Interior Designer" },
    { value: "Architect", label: "Architect" },
    {
      value: "General construction contractor",
      label: "General construction contractor",
    },
    { value: "Fabricator", label: "Fabricator" },
    { value: "System integrator", label: "System integrator" },
  ];

  const marketSegmentOptions = [
    { value: "Residential", label: "Residential" },
    { value: "Commercial office", label: "Commercial office" },
    { value: "Hospitality", label: "Hospitality" },
    { value: "Hospital", label: "Hospital" },
    { value: " Educational institutions", label: " Educational institutions" },
    { value: "Infrastructures", label: "Infrastructures" },
    { value: "Govt Buildings", label: "Govt Buildings" },
    { value: "Malls & Entertainment", label: "Malls & Entertainment" },
    { value: "Others (please specify)", label: "Others (please specify)" },
  ];

  const businessAssociationOptions = [
    { value: "Timber Door", label: "Timber Door" },
    { value: "Timber Door - fire rated", label: "Timber Door - fire rated" },
    { value: "Metal Door", label: "Metal Door" },
    {
      value: "Glass Door - Framed/ Frameless",
      label: "Glass Door - Framed/ Frameless",
    },
    { value: "Door Access & Automation", label: "Door Access & Automation" },
    {
      value: "Door security - Digital / Mechanical",
      label: "Door security - Digital / Mechanical",
    },
    {
      value: "Door control - Digital / Mechanical",
      label: "Door control - Digital / Mechanical",
    },
    {
      value: "Fixed partitions - Glass / Wooden",
      label: "Fixed partitions - Glass / Wooden",
    },
    { value: "Aluminum partitions", label: "Aluminum partitions" },
    { value: "Movable partitions", label: "Movable partitions" },
    {
      value: "Movable partitions- Acoustic",
      label: "Movable partitions- Acoustic",
    },
    {
      value: "Glass Sliding systems - Normal / Feather",
      label: "Glass Sliding systems - Normal / Feather",
    },
    {
      value: "Wooden Sliding systems - Normal/ Feather",
      label: "Wooden Sliding systems - Normal/ Feather",
    },
    {
      value: "Glass Shower and Washroom closet",
      label: "Glass Shower and Washroom closet",
    },
    { value: "Stainless steel palling", label: "Stainless steel palling" },
    {
      value: "Railings - Framed / Frameless glass",
      label: "Railings - Framed / Frameless glass",
    },
    { value: "Kitchen", label: "Kitchen" },
    {
      value: "Wardrobe- openable & sliding",
      label: "Wardrobe- openable & sliding",
    },
    { value: "French windows - Aluminum", label: "French windows - Aluminum" },
    { value: "French Windows - uPVC", label: "French Windows - uPVC" },
    { value: "Louvers sliding", label: "Louvers sliding" },
    { value: "Hermetic Door", label: "Hermetic Door" },
    { value: "Others (Please specify)", label: "Others (Please specify)" },
  ];

  const [segmentRow, setSegmentRow] = useState(false);
  const [selected, setSelected] = useState([]);

  const handleSegments = (e) => {
    console.log(selected);
    setSelected(e);
    if (
      e.filter((obj) => {
        return obj.value === "Others (please specify)";
      }).length === 1
    ) {
      setSegmentRow(true);
      setSelected(
        e.filter((obj) => {
          return obj.value !== "Others (please specify)";
        })
      );
    } else {
      setSegmentRow(false);
    }
  };

  const [addAssociation, setAddAssociation] = useState(false);
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
                <h3 className="mb-0">Basic Details</h3>
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
                 (disableCard!="Basic")? "":toast.error("Fill all fields");
                 setShowBasic(true)
                }}
              >
             {((disableCard!="Basic")?"Edit":"Save")}
              </Button>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" sm="2"  md="1" lg="1">
              {showBasic ? (
                <ArrowUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowBasic(!showBasic)}
                ></ArrowUp>
              ) : (
                <ArrowDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowBasic(!showBasic)}
                ></ArrowDown>
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
                    disabled={disableCard!=="Basic"}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    Company/Firm Type
                  </Label>
                  <Select
                  isDisabled={disableCard!=="Basic"}
                    theme={selectThemeColors}
                    isClearable={false}
                    id={`state-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    options={companyTypeOptions}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-mobile">
                    Registered Mobile
                  </Label>
                  <Input
                  disabled={disableCard!=="Basic"}
                    type="Number"
                    id="register-mobile"
                    placeholder="9875461258"
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Registered Email
                  </Label>
                  <Input
                  disabled={disableCard!=="Basic"}
                    type="email"
                    id="register-email"
                    placeholder="john@example.com"
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Address
                  </Label>
                  <Input
                  disabled={disableCard!=="Basic"}
                    type="text"
                    id="register-email"
                    placeholder="711-2880 Nulla St., Mankato"
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Locality/Area
                  </Label>
                  <Input
                  disabled={disableCard!=="Basic"}
                    type="text"
                    id="register-email"
                    placeholder="Andheri east"
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
                  disabled={disableCard!=="Basic"}
                    type="text"
                    id="register-email"
                    placeholder="Opposite Ganesh Mandir"
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Pincode
                  </Label>
                  <Input
                  disabled={disableCard!=="Basic"}
                    type="number"
                    id="register-email"
                    placeholder="400025"
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
                  isDisabled={disableCard!=="Basic"}
                    theme={selectThemeColors}
                    isClearable={false}
                    id={`city-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    options={cityOptions}
                    defaultValue={cityOptions[0]}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    State
                  </Label>
                  <Select
                  isDisabled={disableCard!=="Basic"}
                    theme={selectThemeColors}
                    isClearable={false}
                    id={`state-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    options={stateOptions}
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
          <Col xs="7"  sm="6" md="9" lg="10">
              <div className="content-header">
                <h3 className="mb-0">Authorised Person</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="3" sm="4" md="2" lg="1">
              <div className="content-header">
              <Button
                color={((disableCard!="AuthorisedPerson")?"primary":"success")} 
                outline
                onClick={() => {
                 (disableCard!="AuthorisedPerson")? setDisableCard("AuthorisedPerson"):setDisableCard("");
                 (disableCard!="AuthorisedPerson")? "":toast.error("Fill all fields")
                }}
              >
             {((disableCard!="AuthorisedPerson")?"Edit":"Save")}
              </Button>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" sm="2"  md="1" lg="1">
              {showAuth ? (
                <ArrowUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowAuth(!showAuth)}
                ></ArrowUp>
              ) : (
                <ArrowDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowAuth(!showAuth)}
                ></ArrowDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showAuth ? (
          <CardBody>
            <Repeater count={authCount}>
              {(i) => (
                <Form key={i}>
                  <Row className="justify-content-between align-items-center">
                    <Col md={2} className="mb-md-0 mb-1">
                      <Label className="form-label" for={`item-name-${i}`}>
                        Name
                      </Label>
                      <Input
                        disabled={disableCard!=="AuthorisedPerson"}
                        type="text"
                        id={`item-name-${i}`}
                        placeholder="Pranav Nair"
                      />
                    </Col>
                    <Col md={3} className="mb-md-0 mb-1">
                      <Label className="form-label" for={`cost-${i}`}>
                        Email
                      </Label>
                      <Input
                       disabled={disableCard!=="AuthorisedPerson"}
                        type="email"
                        id={`email-${i}`}
                        placeholder="panda@gmail.com"
                      />
                    </Col>
                    <Col md={2} className="mb-md-0 mb-1">
                      <Label className="form-label" for={`quantity-${i}`}>
                        Mobile
                      </Label>
                      <Input
                       disabled={disableCard!=="AuthorisedPerson"}
                        type="number"
                        id={`quantity-${i}`}
                        placeholder="9876543210"
                      />
                    </Col>
                    <Col md={3} className="mb-md-0 mb-1">
                      <Label className="form-label" for={`item-name-${i}`}>
                        Designation
                      </Label>
                      <Input
                       disabled={disableCard!=="AuthorisedPerson"}
                        type="text"
                        id={`item-designation-${i}`}
                        placeholder="Manager"
                      />
                    </Col>
                    <Col md={2}>
                      <Button
                       disabled={disableCard!=="AuthorisedPerson"}
                        color="danger"
                        className="text-nowrap px-1 mt-2"
                        onClick={deleteForm}
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
                </Form>
              )}
            </Repeater>
            <Button
             disabled={disableCard!=="AuthorisedPerson"}
              className="btn-icon"
              color="primary"
              onClick={increaseAuthCount}
            >
              <Plus size={14} />
              <span className="align-middle ms-25">Add New</span>
            </Button>
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
                <h3 className="mb-0">Escalation </h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="3" sm="4" md="2" lg="1">
              <div className="content-header">
              <Button
                color={((disableCard!="Escalation")?"primary":"success")} 
                outline
                onClick={() => {
                 (disableCard!="Escalation")? setDisableCard("Escalation"):setDisableCard("");
                 (disableCard!="Escalation")? "":toast.error("Fill all fields")
                }}
              >
             {((disableCard!="Escalation")?"Edit":"Save")}
              </Button>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" sm="2"  md="1" lg="1">
              {showEsc ? (
                <ArrowUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowEsc(!showEsc)}
                ></ArrowUp>
              ) : (
                <ArrowDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowEsc(!showEsc)}
                ></ArrowDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showEsc ? (
          <CardBody>
            <Repeater count={escCount}>
              {(i) => (
                <Form key={i}>
                  <Row className="justify-content-between align-items-center">
                    <Col md={2} className="mb-md-0 mb-1">
                      <Label className="form-label" for={`item-name-${i}`}>
                        Name
                      </Label>
                      <Input
                      disabled={disableCard!=="Escalation"}
                        type="text"
                        id={`item-name-${i}`}
                        placeholder="Pranav Nair"
                      />
                    </Col>
                    <Col md={3} className="mb-md-0 mb-1">
                      <Label className="form-label" for={`cost-${i}`}>
                        Email
                      </Label>
                      <Input
                           disabled={disableCard!=="Escalation"}
                        type="email"
                        id={`email-${i}`}
                        placeholder="panda@gmail.com"
                      />
                    </Col>
                    <Col md={2} className="mb-md-0 mb-1">
                      <Label className="form-label" for={`quantity-${i}`}>
                        Mobile
                      </Label>
                      <Input
                           disabled={disableCard!=="Escalation"}
                        type="number"
                        id={`quantity-${i}`}
                        placeholder="9876543210"
                      />
                    </Col>
                    <Col md={3} className="mb-md-0 mb-1">
                      <Label className="form-label" for={`item-name-${i}`}>
                        Designation
                      </Label>
                      <Input
                           disabled={disableCard!=="Escalation"}
                        type="text"
                        id={`item-designation-${i}`}
                        placeholder="Manager"
                      />
                    </Col>
                    <Col md={2}>
                      <Button
                           disabled={disableCard!=="Escalation"}
                        color="danger"
                        className="text-nowrap px-1 mt-2"
                        onClick={deleteForm}
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
                </Form>
              )}
            </Repeater>
            <Button
                 disabled={disableCard!=="Escalation"}
              className="btn-icon"
              color="primary"
              onClick={increaseEscCount}
            >
              <Plus size={14} />
              <span className="align-middle ms-25">Add New</span>
            </Button>
            <Col sm={12}>
              <p />
            </Col>
          </CardBody>
        ) : (
          <p />
        )}
      </Card>


     {/* ADDITIONAL DETAILS */}


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
                <ArrowUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowReg(!showReg)}
                ></ArrowUp>
              ) : (
                <ArrowDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowReg(!showReg)}
                ></ArrowDown>
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
                    id="profile-pic-upload"
                 
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
                      document.getElementById("profile-pic-upload");
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
                      CIN
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
                      CIN
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
                      MSME
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
                      MSME
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
              {/* {pf ? (
                <Row>
                  <Col xs="12" sm="4" md="2" className="mb-1">
                    <Label className="form-label" for={`city-${type}`}>
                      PF
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
                  <Col xs="12" md="4" className="mb-1">
                    <Label className="form-label" for="register-mobile">
                      PF
                    </Label>
                    <Input
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
                      PF Document
                    </Label>
                    <Input
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
                      PF
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
              )} */}
              {/* {esic ? (
                <Row>
                  <Col xs="12" sm="4" md="2" className="mb-1">
                    <Label className="form-label" for={`city-${type}`}>
                      ESIC
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
                          onClick={() => {
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
                          onClick={() => {
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
                  <Col xs="12" md="4" className="mb-1">
                    <Label className="form-label" for="register-mobile">
                      ESIC
                    </Label>
                    <Input
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
                      ESIC Document
                    </Label>
                    <Input
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
                      ESIC
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
                          onClick={() => {
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
                          onClick={() => {
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
              )} */}
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
                <ArrowUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowBank(!showBank)}
                ></ArrowUp>
              ) : (
                <ArrowDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowBank(!showBank)}
                ></ArrowDown>
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



{/* AFFILIATION */}

<Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
             <Col xs="7"  sm="6" md="9" lg="10">
              <div className="content-header">
                <h3 className="mb-0">Affiliation Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="3" sm="4" md="2" lg="1">
              <div className="content-header">
              <Button
                color={((disableCard!="Affiliation")?"primary":"success")} 
                outline
                onClick={() => {
                 (disableCard!="Affiliation")? setDisableCard("Affiliation"):setDisableCard("");
                 (disableCard!="Affiliation")? "":toast.error("Fill all fields")
                }}
              >
             {((disableCard!="Affiliation")?"Edit":"Save")}
              </Button>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" sm="2"  md="1" lg="1">
              {showDet ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowDet(!showDet)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowDet(!showDet)}
                ></ChevronDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showDet ? (
          <CardBody>
            <Form onSubmit={(e) => e.preventDefault()}>
              {segmentRow ? (
                <Row>
                  <Col md="4" className="mb-1">
                    <Label className="form-label" for={`state-${type}`}>
                      Project location
                    </Label>
                    <Input
                     disabled={disableCard!=="Affilitation"}
                     type="text"
                    />
                  </Col>
                  <Col md="4" className="mb-1">
                    <Label className="form-label" for={`state-${type}`}>
                      Market Segment
                    </Label>
                    <Select
                     isDisabled={disableCard!=="Affiliation"}
                      theme={selectThemeColors}
                      id={`state-${type}`}
                      isMulti
                      className="react-select"
                      classNamePrefix="select"
                      value={selected}
                      options={marketSegmentOptions}
                      onChange={(e) => {
                        handleSegments(e);
                      }}
                    />
                  </Col>
                  <Col xs="12" md="4" className="mb-1">
                    <Label className="form-label" for={`segment-${type}`}>
                      Add New Segment
                    </Label>
                    <Row>
                      <Col xs="9" className="mb-1">
                        <Input
                         disabled={disableCard!=="Affiliation"}
                          type="text"
                          id="register-name"
                          placeholder="please specify"
                          value={newSegment}
                          onChange={(e) => setNewSegment(e.target.value)}
                        />
                      </Col>
                      <Col xs="3" className="mb-1">
                        <Button
                         disabled={disableCard!=="Affiliation"}
                          color="primary"
                          onClick={() => {
                            if (
                              selected.filter((item) => {
                                return item.value === newSegment;
                              }).length === 0
                            ) {
                              console.log(newSegment);
                              setSelected([
                                ...selected,
                                { value: newSegment, label: newSegment },
                              ]);
                              setNewSegment("");
                            } else {
                              alert("Segment already Present!!");
                            }
                            setSegmentRow(false);
                          }}
                        >
                          <Plus size={12} />
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col md="6" className="mb-1">
                    <Label className="form-label" for={`state-${type}`}>
                    Project Location
                    </Label>
                    <Input
                     disabled={disableCard!=="Affiliation"}
                    type="text"
                    />
                  </Col>
                  <Col md="6" className="mb-1">
                    <Label className="form-label" for={`state-${type}`}>
                     Business Segment
                    </Label>
                    <Select
                     isDisabled={disableCard!=="Affiliation"}
                      theme={selectThemeColors}
                      id={`state-${type}`}
                      isMulti
                      className="react-select"
                      classNamePrefix="select"
                      value={selected}
                      options={marketSegmentOptions}
                      onChange={(e) => {
                        handleSegments(e);
                      }}
                    />
                  </Col>
                </Row>
              )}
              <Row>
                <Col xs="12" className="mb-1">
                  <Label className="form-label" for="register-name">
                    Business Association
                  </Label>
                  <Button  disabled={disableCard!=="Affiliation"} color="" className="border-0" style={{fontSize:"0.9rem"}}  onClick={()=>setProductSelected([])}> Clear all</Button>
                  <Row
                    xs="2"
                    sm="3"
                    md="6"
                    style={{
                      minHeight: "38px",
                      border: "1px solid #ededed",
                      borderRadius: "4px",
                      marginLeft: "0.20rem",
                      marginRight: "0.2rem",
                      padding: "0.5rem 0",
                    }}
                  >
                    {productSelected.length ? (
                      <>
                        {productSelected.map((item, idx) => (
                          <Card
                            className="select__multi-value"
                            key={idx}
                            color="primary"
                            style={{
                              width: "fit-content",
                              borderRadius: "2px",
                              height: "23px",
                              margin: "auto 0.5rem",
                              marginTop: "2px",
                              padding: "1px 8px",
                            }}
                          >
                            <Row>
                              <div
                                className="d-flex flex-row "
                                // onClick={() =>
                                //   handleRemoveProduct(item.value, item.label)
                                // }
                              >
                                <div
                                  style={{
                                    width: "fit-content",
                                    margin: "auto 0",
                                    marginTop: "3px",
                                    marginRight: "1rem",
                                    color: "white",
                                    cursor: "context-menu",
                                    fontSize: "85%",
                                    userSelect: "none",
                                  }}
                                >
                                  {windowSize[0] < 392 && item.value.length
                                    ? item.value.slice(0, 9).concat("...")
                                    : item.value}
                                </div>
                                <X
                                  size={12}
                                  cursor="pointer"
                                  onClick={() =>
                                    handleRemoveProduct(item.value)
                                  }
                                  style={{ color: "white", margin: "auto 0 " }}
                                />
                              </div>
                            </Row>
                          </Card>
                        ))}
                      </>
                    ) : (
                     ""
                    )}
                  </Row>
                </Col>
              </Row>
              
                      
              {/* <Row>
                <Col xs="12" className="mb-1">
                  <Label className="form-label" for="register-name">
                    Product (Deals in)
                  </Label>
                  <Row
                    xs="2"
                    sm="3"
                    md="6"
                    style={{
                      minHeight: "38px",
                      border: "1px solid #ededed",
                      borderRadius: "4px",
                      marginLeft: "0.20rem",
                      marginRight: "0.2rem",
                      padding: "0.5rem 0",
                    }}
                  >
                    {productSelected.map((item, idx) => (
                      <Card
                        key={idx}
                        color="primary"
                        style={{
                          width: "fit-content",
                          borderRadius: "2px",
                          height: "20px",
                          margin: "auto 0.5rem",
                          marginTop: "3px",
                          padding: "1px 8px",
                        }}
                      >
                        <Row>
                          <div
                            className="d-flex flex-row"
                            // onClick={() =>
                            //   handleRemoveProduct(item.value, item.label)
                            // }
                          >
                            <div
                              style={{
                                width: "fit-content",
                                margin: "auto 0",
                                marginRight: "1rem",
                                color: "white",
                                cursor: "context-menu",
                              }}
                            >
                              {windowSize[0] < 392 && item.value.length
                                ? item.value.slice(0, 9).concat("...")
                                : item.value}
                            </div>
                            <X
                              size={12}
                              cursor="pointer"
                              onClick={() =>
                                handleRemoveProduct(item.value, item.label)
                              }
                              style={{ color: "white", margin: "auto 0 " }}
                            />
                          </div>
                        </Row>
                      </Card>
                    ))}
                  </Row>
                </Col>
              </Row>
              {productOptions.map((data, id) => (
                <div key={id}>
                  {productSelected.filter((x) => {
                    return x.label == data.label;
                  }).length <
                    productOptions.filter((y) => {
                      return y.label == data.label;
                    })[0].options.length || data.label === "Others" ? (
                    <Card>
                      <h3
                        style={{
                          marginTop: "-5px",
                        }}
                      >
                        {data.label}
                      </h3>
                      <div className="d-flex flex-wrap">
                        {data.options
                          .filter((obj) => {
                            return (
                              productSelected.filter((i) => {
                                return (
                                  i.value == obj.value && i.label == data.label
                                );
                              }).length == 0
                            );
                          })
                          .map((item, idx) => (
                            <div>
                              {data.label !== "Others" ? (
                                <Card
                                  key={idx}
                                  color="primary"
                                  style={{
                                    width: "fit-content",
                                    borderRadius: "2px",
                                    height: "25px",
                                    margin: "auto 0.5rem",
                                    marginTop: "3px",
                                    padding: "1px 8px",
                                  }}
                                  onClick={() =>
                                    handleProducts(item.value, data.label)
                                  }
                                >
                                  <div
                                    style={{
                                      color: "white",
                                      cursor: "context-menu",
                                    }}
                                  >
                                    {windowSize[0] < 392 && item.value.length
                                      ? item.value.slice(0, 16).concat("...")
                                      : item.value}
                                  </div>
                                </Card>
                              ) : (
                                <Row>
                                  <Col xs="12" md="9" className="mb-1">
                                    <Input
                                      type="text"
                                      id="register-name"
                                      placeholder="please specify"
                                      value={newProd}
                                      onChange={(e) =>
                                        setNewProd(e.target.value)
                                      }
                                    />
                                  </Col>
                                  <Col xs="12" md="3">
                                    <Button
                                      color="primary"
                                      onClick={() => {
                                        setNewProd(newProd);
                                        let isNew =
                                          productSelected.filter((obj) => {
                                            return obj.value === newProd.trim();
                                          }).length == 0;

                                        if (isNew && newProd.trim() !== "") {
                                          handleProducts(
                                            newProd.trim(),
                                            "Others"
                                          );
                                        } else {
                                          alert("Product Already Present!!");
                                        }
                                        setNewProd("");
                                      }}
                                    >
                                      Add
                                    </Button>
                                  </Col>
                                </Row>
                              )}
                            </div>
                          ))}
                      </div>
                    </Card>
                  ) : (
                    <div />
                  )}
                </div>
              ))} */}
            </Form>
          </CardBody>
        ) : (
          <p />
        )}
      </Card>
     



      
    </div>
  );
};

export default ProfileEdit;
