// **

import Flatpickr from "react-flatpickr";
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
  Trash,
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
  const [documents,setDocument] =useState([])
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
const [AddProducts,setAddProducts] =useState([])

const handleProductsAdded=()=>
{
 setAddProducts(prev=>
  {
    if(prev)
    {
      const List = [...prev,{Name:"Product 1",Brand:"Brand 1"}]
      return List
    }
    else
    {
      const List = [{Name:"Product 1",Brand:"Brand 1"}]
           return List
    }
  })

}

  return (
    <Fragment>
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

    <div className="row mb-1">
      <div className={(SelectDoc==="Other")? "col-6 col-lg-3 mb-1":"col-6 mb-1"}>
        <Label>Document Type</Label>
        <Select
                    theme={selectThemeColors}
                    name="RoomName"
                    id=""
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={{label:SelectDoc}}
                    value={{label:SelectDoc}}
                    options={[
                      {value:"Invoice",label:"Invoice"},
                      {value:"Product Usage Location",label:"Product Usage Location"},
                    {value:"Floor Plan",label:"Floor Plan"},
                    {value:"Other",label:"Other"},
                   ]}
                    maxMenuHeight={400}
                    menuPlacement="top"
                   onChange={e=>setSelectDoc(e.value)}
                  />
      </div>
      { SelectDoc==="Other"&&
      <div className="col-6 col-lg-3 ">
        <Label>Document Name</Label>
        <Input type="text" onChange={e=>setOtherDoc(e.target.value)}></Input>
      </div>

      }
     <div className= {(SelectDoc==="Other")? "col-12 col-lg-6 ":"col-6"}>
     <Label
                    className="profile-pic-upload-label"
                    id="profile-pic-upload-label"
                    for="profile-pic-upload"
                  >
                   Document Upload
                  </Label>
                  <Input
                    
                    type= "file"
                    accept="image/jpeg, image/png"
                    id="profile-pic-upload"
                   onChange={e=>setPhoto((e.target.files[0]!=null)?URL.createObjectURL(e.target.files[0]):null)}
                  
                  />
     </div>
    </div>
    <div className="row mb-5 px-1">
    <div className=" position-relative"><div className="position-absolute end-0">
      <Button 
      outline onClick={handleDocuments}
      disabled={SelectDoc==="Select"||Photo===null}
      
      ><b>Add Document</b></Button>
      </div></div>
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
            <div className="position-absolute end-0 me-1"><Trash onClick={()=>DeleteDoc(e.Name+"")}  style={{cursor:"pointer"}} size={18}/></div>
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
      <div className="col-6 col-lg-4 d-flex justify-content-center"> <Button onClick={handleProductsAdded}  className="w-100">ADD PRODUCT</Button></div> 
        
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
        <Button  className="position-absolute d-flex end-0" onClick={()=>stepper.next()}>Next</Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ProductDetails;
