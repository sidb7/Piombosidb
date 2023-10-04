// **
import "@styles/react/libs/flatpickr/flatpickr.scss";

// ** Reactstrap Imports
import {
  ListGroup,
  ListGroupItem,
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
  CardSubtitle,
} from "reactstrap";
import { selectThemeColors } from "@utils";
import { Fragment, useState } from "react";
import {
  FileText,
  X,
  DownloadCloud,
  ArrowLeft,
  ArrowRight,
} from "react-feather";
import { useDropzone } from "react-dropzone";

// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";
import Select from "react-select";

const ProductDetails = ({ stepper, type }) => {

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
const [AreaSelect,setAreaSelect] = useState("Select")
  return (
    <Fragment>
      <Card className=" p-1">

    <h3 className="mb-0">Basic Details</h3>
    <Form>
    
    <div className="row mb-1 mt-2">
       <div className="col-6">
        <Label>Product</Label>
        <Input type="select" >Select one</Input>
       </div><div className="col-6">
        <Label>Brand</Label>
        <Input type="select" >Select one</Input>
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
                    defaultValue={{label:"Unit"}}
                    options={QuantityUnits}
             
                
                  />
       </div>
    </div>

    
      
      <div className="row mb-1">
       <div className="col-4">
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
      <Row className="d-flex position-relative mt-1">
        <Col md={6}>
        <Button className="position-absolute d-flex start-0"  onClick={()=>stepper.previous()}>Previous</Button>
        </Col>
        <Col md={6}>
        <Button  className="position-absolute d-flex end-0" onClick={()=>stepper.next()}>Next</Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ProductDetails;
