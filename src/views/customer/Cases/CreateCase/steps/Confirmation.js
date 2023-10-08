// **
import "@styles/react/libs/flatpickr/flatpickr.scss";

// ** Reactstrap Imports
import Flatpickr from "react-flatpickr";

// ** Reactstrap Imports





// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";






// ** Styles

import CaseDetails from "./CaseDetails";
import ProductDetails from "./ProductDetails";
import Select from "react-select";

import { v4 as uuidv4 } from 'uuid';
import {
  FileText,

  DownloadCloud,
  ArrowLeft,
  ArrowRight,
  Trash,
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


import skillData from "../../../../skillData/CreateCaseSkillData";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";
import moment from "moment";
import { Link } from "react-router-dom";

const Confirmation = ({ stepper, type }) => {
  
  const DimensionUnits = [
    { value: "mm", label: "mm" },
    { value: "cm", label: "cm" },
    { value: "Inch", label: "Inch" },
    { value: "Meter", label: "Meter" },
  ];

  const QuantityUnits = [
    { value: "Nos", label: "Nos" },
    { value: "Sq ft", label: "Sq ft" },
    { value: "R ft", label: "R ft" },
    { value: "R Meter", label: "R Meter" },
    { value: "Sq Meter", label: "Sq Meter" },
  ];
  const AreaName = [
    { value: "Entry", label: "Entry" },
    { value: "Hall", label: "Hall" },
    { value: "Room", label: "Room" },
    { value: "Other", label: "Other" },
  ];
  const Products = [
    { value: "Product1", label: "Product1" },
    { value: "Product2", label: "Product2" },
    { value: "Product3", label: "Product3" },
    { value: "Product4", label: "Product4" },
  ];
  const Brand= [
    { value: "Brand1", label: "Brand1" },
    { value: "Brand2", label: "Brand2" },
    { value: "Brand3", label: "Brand3" },
    { value: "Brand4", label: "Brand4" },
  ];
  const [documents,setDocument] =useState([{Name:"Floor Plan",File:"dfasfa"},{Name:"Floor Plan",File:"dfasfa"},{Name:"Floor Plan",File:"dfasfa"}])
  const [SelectDoc,setSelectDoc] =useState("Select")
  const [SelectOtherDoc,setOtherDoc] =useState("")
  const [clearDoc,setClearDoc] = useState("")
  const [Photo,setPhoto] =useState("")
const [AreaSelect,setAreaSelect] = useState("Select")

const handleDocuments=()=>
{
 setDocument(prev=>
  {
    if(prev)
    {
      const List = [...prev,{Name:(SelectDoc!="Other")? SelectDoc:SelectOtherDoc,File:Photo}]
      return List
    }
    else
    {
      const List  =  [{Name:(SelectDoc!="Other")? SelectDoc:SelectOtherDoc,File:Photo},]
           return List
    }
  })                    
    const fileInput =
      document.getElementById("profile-pic-upload");
    fileInput.value = ""; // Temporarily change the type to text

    setPhoto(null);
    setSelectDoc("Select")
  
}

const DeleteDoc=(t)=>
{
  setDocument( documents.filter(e=>e.Name!=t) )   
}
const [AddProducts,setAddProducts] =useState([{Name:"Product 1",Brand:"Brand 1"},
{Name:"Product 1",Brand:"Brand 1"},{Name:"Product 1",Brand:"Brand 1"},{Name:"Product 1",Brand:"Brand 1"}])


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

const handleCaseSubmit=()=>
{
  // e.preventDefault();

   SetCaseData((prev)=>
   {
       if(Array.isArray(prev))
       {
           const List =[...prev,arr]
           console.log(List)
        localStorage.setItem("CustomerCaseSet",JSON.stringify(List));
          return List; 
       }
       else
       {
           const List =[arr]
           console.log(List)
        localStorage.setItem("CustomerCaseSet",JSON.stringify(List));
          return List; 
       }
  
   })
  setTitle("")
  setCity("")
  setAddress("")
  setAddCity("")
  setAddLanmark("")
  setAddState("")
  setArea("")
  setPinCode("")
  setArr(
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

}
  return (
    <div>
 
      <Card>
     
          <CardBody>
          <h3 className="mb-1">Site Details</h3>
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
        
      </Card>
      <Card>
        
          <CardBody>
            <h3 className="mb-1">Service Details</h3>
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
                     checked={true}
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
                      
                     
                      />
                      <Label className="form-label" for="ex1-active">
                        Repair/Replacement
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex1-active"
                        name="ex1"
                 
                      />
                      <Label className="form-label" for="ex1-active">
                        New Build
                      </Label>
                    </div>
                  </div>
                </Col>
               
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
                     checked
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
               
              </Row>


          
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
       
      </Card>
      <Card>
        
          <CardBody>
            <h3 className="mb-1">Schedule Details</h3>
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
                                checked
                               
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
       
      </Card>

{/* PRODUCT DETAILSS */}
      <Card className=" p-1">

<h3 className="mb-0">Basic Details</h3>
<Form>

<div className="row mb-1 mt-2">
   <div className="col-6">
    <Label>Product</Label>
    <Select
                theme={selectThemeColors}
                name="Products"
             
                className="react-select"
                classNamePrefix="select"
                defaultValue={{label:"Select"}}
                options={Products}
         
            
              />
   </div><div className="col-6">
    <Label>Brand</Label>
    <Select
                theme={selectThemeColors}
                name="Brand"
             
                className="react-select"
                classNamePrefix="select"
                defaultValue={{label:"Select"}}
                options={Brand}
         
            
              />
   </div>
</div>

<div className="row mb-1">
   <div className="col-6">
    <Label>Stock Keeping Unit</Label>
    <Input type="text" ></Input>
   </div><div className="col-6">
    <Label>Design</Label>
    <Input type="text" >Select one</Input>
   </div>
</div>



</Form>

  </Card>


<Card className=" p-1">
<h3 className="mb-0">Product Dimension & Product Usage details</h3>
 
  <Form>

<div className="row mb-1  mt-1 ">
 
      <div className="col-lg-4 col-12 mt-1">
      
      <div className="row px-1">
      <Label className="ps-0" for={`dimension-${type}`}>Width</Label>
        <div className="col-8 p-0 " ><Input type="number" placeholder="Width"></Input></div>
        <div className="col-4 p-0">
    
              <Select
                theme={selectThemeColors}
                name="Width"
                id={`dimension-${type}`}
                className="react-select"
                classNamePrefix="select"
                defaultValue={{label:"Units"}}
                options={DimensionUnits}
         
            
              /></div>
      </div>
      </div>
      <div className="col-lg-4 col-12 mt-1">
        <div className="row px-1">
        <Label className="ps-0"  for={`dimension-${type}`}>Height</Label>

        <div className="col-8 p-0 "><Input type="number" placeholder="Height"></Input></div>
        <div className="col-4 p-0"><Select
                theme={selectThemeColors}
                name="Width"
                id={`dimension-${type}`}
                className="react-select"
                classNamePrefix="select"
                defaultValue={{label:"Units"}}
                options={DimensionUnits}
         
            
              /></div>
      </div>
      </div>
      <div className="col-lg-4 col-12 mt-1">
      <div className="row px-1">
      <Label className="ps-0"  for={`dimension-${type}`}>Thickness</Label>

      <div className="col-8 p-0"><Input type="number" placeholder="Thickness"></Input></div>
        <div className="col-4 p-0"><Select
                theme={selectThemeColors}
                name="Width"
                id={`dimension-${type}`}
                className="react-select"
                classNamePrefix="select"
                defaultValue={{label:"Units"}}
                options={DimensionUnits}
         
            
              /></div>
      </div>
      </div>
  
</div>

<div className="row mb-1">
   <div className="col-8">
    <Label>Quantity</Label>
    <Input type="number" ></Input>
   </div><div className="col-4">
    <Label>Unit</Label>
   < Select
                theme={selectThemeColors}
                name="Units"
                id={`dimension-${type}`}
                className="react-select"
                classNamePrefix="select"
                defaultValue={{label:"Units"}}
                options={QuantityUnits}
         
            
              />
   </div>
</div>


  
  <div className="row mb-1">
   <div className="col-4 ">
    <Label>Building No.</Label>
    <Input type="number" ></Input>
   </div>
   <div className="col-4">
    <Label>Floor No.</Label>
    <Input type="number"  className="w-100">Select one</Input>
   </div>
   <div className="col-4">
    <Label>Flat No.</Label>
    <Input type="number"  >Select one</Input>
   </div>
   </div>

   <div className="row mb-1" >
<div className="col-6">
<Label>Area Name</Label>
<Select
                theme={selectThemeColors}
                name="AreaName"
                id=""
                className="react-select"
                classNamePrefix="select"
                defaultValue={{label:AreaSelect}}
                options={AreaName}
                maxMenuHeight={400}
                menuPlacement="top"
                onChange={e=>setAreaSelect(e.value)}
              />
</div>
 { (AreaSelect!=="Room")&&
<div className="col-6">
<Label className= {AreaSelect!=="Other"?"text-muted":""}>Other</Label>
    <Input disabled={AreaSelect!=="Other"} type="text" >Select one</Input>
</div>}
{ AreaSelect==="Room"&&
<div className="col-6">
<Label>Room Type</Label>
<Select
                theme={selectThemeColors}
                name="RoomName"
                id=""
                className="react-select"
                classNamePrefix="select"
                defaultValue={{label:"Select"}}
                options={[{value:"Bedroom",label:"Bedroom"},
                {value:"Kitchen",label:"Kitchen"},
                {value:"Guest",label:"Guest"},
                {value:"GM Office",label:"GM Office"}]}
                maxMenuHeight={400}
                menuPlacement="top"
               
              />
</div>}
   </div>



</Form>

  </Card>   

  <Card className=" p-1 mb-1">
<h3 className="mb-0">Purchase Details</h3>
 
  <Form>

  <div className="row mb-1 mt-2">
   <div className="col-6">
    <Label>Date of Purchase</Label>
    <Flatpickr
                        value={ "today"}
                        // disabled={scheduled}
                        id="date-time-picker"
                        // className="form-control"
                        // data-enable-time
                        // onChange={(date) => {
                        //   setPicker(date);
                        // }}
                        options={{
                         
                          altInput: true,
                          
                        }}
                      />
   </div><div className="col-6">
    <Label>Purchased from</Label>
    <Input type="text" placeholder="Supplier Name">Select one</Input>
   </div>
</div>




{documents.length!=0&& <div className="row mb-1 p-1  px-1" >

<hr  className="mb-1"/>
<h3 className="mb-1 d-flex justify-content-center">Documents Added</h3>
<hr />
<hr className="mb-0" />
<div className="col-6 py-1  d-flex justify-content-center align-items-center " style={{border:"1px solid gray",borderRadius:"6px 0px 0px 0px"}} ><b >Document Name</b></div> 
<div className="col-6 py-1 d-flex justify-content-center align-items-center"  style={{border:"1px solid gray",borderRadius:"0px 6px 0px 0px"}}  ><b >Details</b></div> 
<hr className="mb-0"/>
{
documents.map((e)=>
{ 
  return(
   <>
   <hr className="mb-0 mt-0" />
      <div className="col-6 text-center py-1 "  style={{borderRight:"1px solid gray"}}>{e.Name}</div> 
      <div className="col-6 justify-content-center py-1 position-relative d-flex "  style={{borderLeft:"1px solid gray"}}>
        <a href={e.File} target="_blank">View File</a> 
        </div>
<hr className="mb-0" />
      </>
  )
})
}
</div>}
</Form>
  </Card>  
  <div className="row d-flex justify-content-center mb-2">
    
  {/* <div className="col-3 d-flex justify-content-center"> <Button  color="warning" className="w-100" >Clear All</Button></div>  */}
    </div>
<Card>
{AddProducts.length!=0&& <div className="row mb-1 p-1  px-1" >


<h3 className="mb-1 d-flex justify-content-center">Products Added</h3>
 
<hr className="mb-0" />
  <div className="col-4 py-1  d-flex justify-content-center align-items-center " style={{border:"1px solid gray",borderRadius:"6px 0px 0px 0px"}} ><b >Product Name</b></div> 
  <div className="col-4 py-1 d-flex justify-content-center align-items-center"  style={{border:"1px solid gray",borderRight:"1px solid gray"}}  ><b >Brand</b></div> 
  <div className="col-4 py-1 d-flex justify-content-center align-items-center"  style={{border:"1px solid gray",borderRadius:"0px 6px 0px 0px"}}  ><b >Details</b></div> 
<hr className="mb-0"/>
{
  AddProducts.map((e)=>
  { 
    return(
     <>
     <hr className="mb-0 mt-0" />
        <div className="col-4 text-center py-1 "  style={{borderRight:"1px solid gray"}}>{e.Name}</div> 
        <div className="col-4 text-center py-1 "  style={{borderLeft:"1px solid gray",borderRight:"1px solid gray"}}>{e.Brand}</div>
        <div className="col-4 text-center py-1 "  style={{borderLeft:"1px solid gray"}}><a href={e.File} target="_blank">View Details</a></div>
<hr />
        </>
    )
  })
}
</div>}
</Card>

  <Row className="d-flex position-relative mt-1">
    <Col md={6}>
    <Button className="position-absolute d-flex start-0"  onClick={()=>stepper.previous()}>Previous</Button>
    </Col>
    <Col md={6}>
    <Button  onClick={handleCaseSubmit} tag={Link} to={"/customer/manageCases"} color="success" className="position-absolute d-flex end-0">Submit</Button>
    </Col>
  </Row>

      
    </div>
  );
};

export default Confirmation;
