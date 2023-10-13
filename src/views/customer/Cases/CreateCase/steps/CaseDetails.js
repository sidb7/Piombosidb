// ** React Imports

// ** Third Party Components
import Select from "react-select";

import { v4 as uuidv4 } from 'uuid';
import {

  ChevronDown,
  ChevronUp,
  X,
  Plus,
  Sunrise,
  Sun,
  Sunset,
  Moon,
} from "react-feather";

// ** Utils
import { selectThemeColors } from "@utils";
import "@styles/react/libs/flatpickr/flatpickr.scss";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Label,
  Row,
  Col,
  Form,
  Input,
  Button,
} from "reactstrap";

import { Fragment, useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";

import skillData from "../../../../skillData/CreateCaseSkillData";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";
import moment from "moment";

const CaseDetails = ({ stepper, type,setServiceTypeProduct }) => {
  const [scheduled, setScheduled] = useState(false);
  const [picker, setPicker] = useState(new Date());

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
    { value: "Not Mentioned Here", label: "Not Mentioned Here" },
  ];

  const stateOptions = [
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Kerala", label: "Kerala" },
    { value: "Punjab", label: "Punjab" },
  ];



  const slotOptions1 = ["Before 10am", "10am - 2pm", "2pm - 6pm", "After 6pm"];
  const [showSite, setShowSite] = useState(true);
  const [showService, setShowService] = useState(true);
  const [showSchedule, setShowSchedule] = useState(true);

  const serviceApplication = skillData.servAppl;



  const [serviceTypeSelected, setServiceTypeSelected] = useState("");

 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slotEnter, setSlotEnter] = useState(-1);
  const [slotValue, setSlotValue] = useState(-1);
  const [CaseData,SetCaseData] = useState(JSON.parse(localStorage.getItem("CustomerCaseSet")))


//  INPUT Fields states
  const [city, setCity] = useState("Select city");
  const [Title, setTitle] = useState("");
  const [Address, setAddress] = useState("");
  const [Area, setArea] = useState("");
  const [AddCity, setAddCity] = useState("");
  const [AddState, setAddState] = useState("");
  const [AddLandmark, setAddLanmark] = useState("");
  const [PinCode, setPinCode] = useState("");
  const [ServiceType, setServiceType] = useState("");
  const [ServiceApp, setServiceApp] = useState("");
  const [ServiceCategory, setServiceCategory] = useState("");
  const [SubServiceCategory, setSubServiceCategory] = useState("");
  const [ServiceSub, setServiceSub] = useState("");
  const [CaseDesc, setCaseDesc] = useState("");


  const [arr, setArr] = useState(
    {
      date:"",
      Title:"",
      City:"Select city",
      Address:"",
      Landmark:"",
   ServiceType:"",
   ServiceApp:"",
   ServiceSub:"",
   CaseDescription:""
    }
  );

  const handleCaseSubmit=()=>
{
  // e.preventDefault();

//    SetCaseData((prev)=>
//    {
//        if(Array.isArray(prev))
//        {
//            const List =[...prev,arr]
//            console.log(List)
//         localStorage.setItem("CustomerCaseSet",JSON.stringify(List));
//           return List; 
//        }
//        else
//        {
//            const List =[arr]
//            console.log(List)
//         localStorage.setItem("CustomerCaseSet",JSON.stringify(List));
//           return List; 
//        }
  
//    })
//   setTitle("")
//   setCity("")
//   setAddress("")
//   setAddCity("")
//   setAddLanmark("")
//   setAddState("")
//   setArea("")
//   setPinCode("")
//   setArr(
//    {
//      date:"",
//      Title:"",
//      City:"Select city",
//      Address:"",
//      Landmark:"",
//   ServiceType:"",
//   ServiceApp:"",
//   ServiceSub:"",
//   CaseDescription:""
//    }
//  );

setServiceTypeProduct(serviceTypeSelected)
stepper.next()
window.scrollBy(0,-1000)
}

useEffect(()=>
{  
  setArr({
    City:city,
    Title: Title,
    Address:  Address  +"," +Area +"," + AddCity +"," +AddState +"-" + PinCode ,
    Landmark:AddLandmark,
    ServiceType:serviceTypeSelected,
   ServiceApp:ServiceApp,
   ServiceSub:ServiceSub,
   CaseDescription:CaseDesc,
   id: uuidv4(),
   date: moment(new Date()).format('DD MMMM YYYY | HH:mm ')
  
  })
},[Title,city,AddLandmark,
  Address,Area,AddCity,AddState,PinCode,
  serviceTypeSelected,ServiceApp,ServiceSub,CaseDesc])

const HandleServiceType =(type)=>
{
  setServiceTypeSelected(type)
  setServiceApp("")
  setServiceCategory("")
setSubServiceCategory("")
}


  return (
    <div>
 
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
            <Col xs="10" md="11">
              <div className="content-header">
                <h3 className="mb-0">Site Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" md="1">
              {showSite ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowSite(!showSite)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowSite(!showSite)}
                ></ChevronDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showSite ? (
          <CardBody>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-name">
                    Case Title/ Site Name
                  </Label>
                  <Input
                    type="text"
                    id="register-name"
                    placeholder="site name..."
                    name="Title"
                    value={Title}
                    onChange={e=>setTitle(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for={`city-${type}`}>
                    Service City (below cities can avail service)
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    name="City"
                    id={`city-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    options={cityOptions}
                  value= {{label:city}}
                    onChange={e=>setCity(e.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Address
                  </Label>
                  <Input
                    type="text"
                    id="register-email"
                    placeholder="john@example.com"
                    value={Address}
                    onChange={e=>setAddress(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Area/Locality
                  </Label>
                  <Input
                    type="text"
                    id="register-email"
                    placeholder="Munshi Nagar"
                    value={Area}
                    onChange={e=>setArea(e.target.value)}
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
                    isClearable={false}
                    id={`city-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    options={cityOptions}
                    value= {{label:AddCity}}
                    onChange={e=>setAddCity(e.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    State
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={false}
                    id={`state-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    options={stateOptions}
                    value= {{label:AddState}}
                    onChange={e=>setAddState(e.value)}
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
                    placeholder="Opp. Ganesh Mandir"
                    name="AddLandmark"
                    value={AddLandmark}
                    onChange={e=>setAddLanmark(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Pincode
                  </Label>
                  <Input
                    type="Number"
                    id="register-email"
                    placeholder="400071"
                    value={PinCode}
                    onChange={e=>setPinCode(e.target.value)}
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
                <h3 className="mb-0">Service Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" md="1">
              {showService ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowService(!showService)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowService(!showService)}
                ></ChevronDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showService ? (
          <CardBody>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row>
              <Col md="12" sm="12" lg="6" className="mb-1">
                  <Label className="form-label" for={`city-${type}`}>
                    Service Type
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
                      //  onClick={() => { setServiceTypeSelected("Installation"),setServiceApp(""),setServiceCategory("") }}
                        onClick={()=>HandleServiceType("Installation")}
                      />
                      <Label className="form-label" for="ex1-active">
                        Installation
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex1-active"
                        name="ex1"
                      
                        onClick={()=>HandleServiceType("Repair")}
                      />
                      <Label className="form-label" for="ex1-active">
                        Repair
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex1-active"
                        name="ex1"
                 
                        onClick={()=>HandleServiceType("NewBuild")}
                      />
                      <Label className="form-label" for="ex1-active">
                        New Build
                      </Label>
                    </div>
                  </div>
                </Col>
                {(serviceTypeSelected!==""&&serviceTypeSelected!=="NewBuild")&&
                <Col md="12" sm="12"  lg="6" className="mb-1">
                  <Label className="form-label" for={`city-${type}`}>
                   Sub-service Details
                  </Label>
                  <div
                    className="demo-inline-spacing"
                    style={{ marginTop: "-1rem" }}
                  >
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex1-active1"
                        name="ex11"
                     
                      />
                      <Label className="form-label" for="ex1-active1">
                       {(serviceTypeSelected==="Installation")?"Someone to visit":"Someone to inspect"}
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex1-active1"
                        name="ex11"
           
                      />
                      <Label className="form-label" for="ex1-active1">
                      {(serviceTypeSelected==="Installation")?"Product to demo":"Parts to be replaced"}
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex1-active1"
                        name="ex11"
                        
                        defaultChecked={serviceTypeSelected==="Installation"||serviceTypeSelected==="Repair"}
                      />
                      <Label className="form-label" for="ex1-active1">
                      {(serviceTypeSelected==="Installation")?"Installation":"Repair"}
                      </Label>
                    </div>
                  </div>
                </Col>
                  }
              </Row>


             {(serviceTypeSelected==="Repair")&&<> <Row>
              <Col md="12" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    Service Application
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={false}
                    id={`state-${type}`}
                   
                    isDisabled={serviceTypeSelected === ""}
                    className="react-select"
                    classNamePrefix="select"
                    options={serviceApplication}
                    onChange={e=>{setServiceApp(e.value),setServiceCategory("")}}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    Service Category
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={false}
                    id="ServiceCategorySelect"
                    isDisabled={ServiceApp === ""}
                    className="react-select"
                    classNamePrefix="select"
                    
                    options={ 
                    (serviceTypeSelected==="Repair")&&serviceApplication[skillData.applicationCode[""+ServiceApp]].repair
                  }
                  onChange={e=>{setServiceCategory(e.value),setSubServiceCategory("")}}
           
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    Service Sub-Category
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={false}
                    isDisabled={ServiceCategory === ""}
                    id={`state-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    options={ (serviceTypeSelected==="Installation")&&serviceApplication[skillData.applicationCode[""+ServiceApp]].installation[skillData.InstallationCategoryCode[""+ServiceCategory]].SubService
                    ||
                    (serviceTypeSelected==="Repair")&&serviceApplication[skillData.applicationCode[""+ServiceApp]].repair[skillData.RepairCategoryCode[""+ServiceCategory]].SubService
                    ||
                    (serviceTypeSelected==="NewBuild")&&serviceApplication[skillData.applicationCode[""+ServiceApp]].newBuild

                  }
                  onChange={e=>setSubServiceCategory(e.value)}
                  />
                </Col>
              </Row> </>}
{(serviceTypeSelected==="Installation")&&
<>
<Row>
              <Col md="12" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    Service Application
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={false}
                    id={`state-${type}`}
                   
                    isDisabled={serviceTypeSelected === ""}
                    className="react-select"
                    classNamePrefix="select"
                    options={serviceApplication}
                    onChange={e=>{setServiceApp(e.value),setServiceCategory("")}}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    Service Category
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={false}
                    id="ServiceCategorySelect"
                    isDisabled={ServiceApp === ""}
                    className="react-select"
                    classNamePrefix="select"
                    
                    options={ (serviceTypeSelected==="Installation")&&serviceApplication[skillData.applicationCode[""+ServiceApp]].installation
                    
                  }
                  onChange={e=>{setServiceCategory(e.value),setSubServiceCategory("")}}
           
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    Service Sub-Category
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={false}
                    isDisabled={ServiceCategory === ""}
                    id={`state-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    options={ (serviceTypeSelected==="Installation")&&serviceApplication[skillData.applicationCode[""+ServiceApp]].installation[skillData.InstallationCategoryCode[""+ServiceCategory]].SubService
                    ||
                    (serviceTypeSelected==="Repair")&&serviceApplication[skillData.applicationCode[""+ServiceApp]].repair[skillData.RepairCategoryCode[""+ServiceCategory]].SubService
                    ||
                    (serviceTypeSelected==="NewBuild")&&serviceApplication[skillData.applicationCode[""+ServiceApp]].newBuild

                  }
                  onChange={e=>setSubServiceCategory(e.value)}
                  />
                </Col>
              </Row></>}

              {(serviceTypeSelected===""||serviceTypeSelected==="NewBuild")&&<> <Row>
              <Col md="12" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    Service Application
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={false}
                    id={`state-${type}`}
                   
                    isDisabled={serviceTypeSelected === ""}
                    className="react-select"
                    classNamePrefix="select"
                    options={serviceApplication}
                    onChange={e=>{setServiceApp(e.value),setServiceCategory("")}}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    Service Category
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={false}
                    id="ServiceCategorySelect"
                    isDisabled={ServiceApp === ""}
                    className="react-select"
                    classNamePrefix="select"
                    
                    options={ 
                   serviceApplication[skillData.applicationCode[""+ServiceApp]].newBuild
                  }
                  onChange={e=>{setServiceCategory(e.value),setSubServiceCategory("")}}
           
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    Service Sub-Category
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={false}
                    isDisabled={ServiceCategory === ""}
                    id={`state-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    options={ 
                    serviceApplication[skillData.applicationCode[""+ServiceApp]].repair[skillData.NewBuildCategoryCode[""+ServiceCategory]].SubService

                  }
                  onChange={e=>setSubServiceCategory(e.value)}
                  />
                </Col>
              </Row> </>}

              <Row>
                <Col md="12" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    Enter description about the case. (optional)
                  </Label>
                  <Input
                    type="textarea"
                    name="text"
                    id="exampleText"
                    rows="3"
                    placeholder="Text Area"
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
                <h3 className="mb-0">Schedule Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" md="1">
              {showSchedule ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowSchedule(!showSchedule)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowSchedule(!showSchedule)}
                ></ChevronDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showSchedule ? (
          <CardBody>
            <div
                    
                  >
                    <Form
                    
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <Row>
                        <Col md="6" className="mb-1">
                          <Label
                            className="form-label"
                            for={`city`}
                            style={{
                              fontSize: windowWidth > 768 ? "13px" : "10px",
                            }}
                          >
                            Schedule Case
                          </Label>
                          <div
                            className="demo-inline-spacing"
                            style={{ marginTop: "-1rem" }}
                          >
                            <div className="form-check">
                              <Input
                                type="radio"
                                id="ex4-active"
                                name="ex4"
                                checked={!scheduled}
                                onClick={() => setScheduled(false)}
                              />
                              <Label
                                className="form-label"
                                for="ex4-active"
                                style={{
                                  fontSize: windowWidth > 768 ? "13px" : "10px",
                                }}
                              >
                                Now
                              </Label>
                            </div>
                            <div className="form-check">
                              <Input
                                type="radio"
                                id="ex5-active"
                                name="ex5"
                                checked={scheduled}
                                onClick={() => setScheduled(true)}
                              />
                              <Label
                                className="form-label"
                                for="ex5-active"
                                style={{
                                  fontSize: windowWidth > 768 ? "13px" : "10px",
                                }}
                              >
                                Later
                              </Label>
                            </div>
                          </div>
                        </Col>
                        <Col
                          md="6"
                          className="mb-1"
                          style={{
                            fontSize: windowWidth > 768 ? "13px" : "10px",
                          }}
                        >
                          <Label
                            className="form-label"
                            for="date-time-picker"
                            style={{
                              fontSize: windowWidth > 768 ? "13px" : "10px",
                            }}
                          >
                            Pick a Date (if scheduling later)
                          </Label>
                          <Flatpickr
                            value={scheduled ? picker : "today"}
                            // disabled={scheduled}
                            id="date-time-picker"
                            // className="form-control"
                            // data-enable-time
                            onChange={(date) => {
                              setPicker(date);
                            }}
                            options={{
                              minDate: "today",
                              altInput: true,
                              maxDate: scheduled ? "none" : "today",
                            }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">
                          <Label
                            className="form-label"
                            style={{
                              fontSize: windowWidth > 768 ? "13px" : "10px",
                              marginBottom: "20px",
                            }}
                          >
                            Choose Time slot
                          </Label>
                          <Row>
                            {slotOptions1.map((obj, ind) => (
                              <Col
                                key={ind}
                                xs={windowWidth > 450 ? "6" : "12"}
                                sm="6"
                                md="3"
                                className="mb-1"
                                style={{
                                  fontSize: windowWidth > 768 ? "13px" : "10px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <div
                                  onMouseEnter={() => setSlotEnter(ind + 1)}
                                  onMouseLeave={() => {
                                    setSlotEnter(-1);
                                  }}
                                  onClick={() => setSlotValue(ind)}
                                  style={{
                                    width: "80%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    border:
                                      slotEnter === ind + 1 || slotValue === ind
                                        ? "none"
                                        : "1px solid #6e6b7b",
                                    padding: "10px",
                                    borderRadius: "20px",
                                    cursor: "pointer",
                                    transform:
                                      slotEnter === ind + 1 || slotValue === ind
                                        ? "scale(1.2,1.2"
                                        : "scale(1,1)",
                                    backgroundColor:
                                      slotEnter === ind + 1 || slotValue === ind
                                        ? "#52b7d0"
                                        : "transparent",
                                  }}
                                >
                                  {ind === 0 ? (
                                    <Sunrise
                                      color={
                                        slotEnter === ind + 1 ||
                                        slotValue === ind
                                          ? "white"
                                          : "#6e6b7b"
                                      }
                                    />
                                  ) : ind === 1 ? (
                                    <Sun
                                      color={
                                        slotEnter === ind + 1 ||
                                        slotValue === ind
                                          ? "white"
                                          : "#6e6b7b"
                                      }
                                    />
                                  ) : ind === 2 ? (
                                    <Sunset
                                      color={
                                        slotEnter === ind + 1 ||
                                        slotValue === ind
                                          ? "white"
                                          : "#6e6b7b"
                                      }
                                    />
                                  ) : (
                                    <Moon 
                                      color={
                                        slotEnter === ind + 1 ||
                                        slotValue === ind
                                          ? "white"
                                          : "#6e6b7b"
                                      }
                                    />
                                  )}
                                  <p
                                    style={{
                                      margin: "0px",
                                      padding: "0px",
                                      fontSize:
                                        windowWidth > 768 ? "11px" : "8px",
                                      color:
                                        slotEnter === ind + 1 ||
                                        slotValue === ind
                                          ? "white"
                                          : "#6e6b7b",
                                    }}
                                  >
                                    {obj}
                                  </p>
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </Col>
                      </Row>
                      <div style={{ height: "20px" }} />
                    </Form>
                  </div>
          </CardBody>
        ) : (
          <p />
        )}
      </Card>
      <Row className="d-flex position-relative">
      
        <Col md={6}>
        <Button onClick={handleCaseSubmit}  className="position-absolute d-flex end-0">Next</Button>
        </Col>
      </Row>
    </div>
  );
};

export default CaseDetails;
