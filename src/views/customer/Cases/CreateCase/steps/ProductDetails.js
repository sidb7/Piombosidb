// **

import Flatpickr from "react-flatpickr";
import "@styles/react/libs/flatpickr/flatpickr.scss";
import "./CSS/ProductList.css";
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
import { Fragment, useEffect, useState } from "react";
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
import SingleProductDetails from "./SingleProductDetails";

const ProductDetails = ({ stepper, type,ServiceTypeProduct }) => {
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
  const Brand = [
    { value: "Brand1", label: "Brand1" },
    { value: "Brand2", label: "Brand2" },
    { value: "Brand3", label: "Brand3" },
    { value: "Brand4", label: "Brand4" },
  ];
  const [documents, setDocument] = useState([]);
  const [SelectDoc, setSelectDoc] = useState("Select");
  const [SelectOtherDoc, setOtherDoc] = useState("");
  const [clearDoc, setClearDoc] = useState("");
  const [Photo, setPhoto] = useState(null);
  const [AreaSelect, setAreaSelect] = useState("Select");
  const [SingleProduct, setSingleProduct] = useState(false);
  const [DocTypeOptions, setDocTypeOptions] = useState([
    {
      value: "Product Usage Location",
      label: "Product Usage Location",
    },
    { value: "Floor Plan", label: "Floor Plan" },
    { value: "Other", label: "Other" },
  ]);
  
  const handleDocuments = () => {
    setDocument((prev) => {
      if (prev) {
        const List = [
          ...prev,
          {
            Name: SelectDoc != "Other" ? SelectDoc : SelectOtherDoc,
            File: Photo,
          },
        ];
        return List;
      } else {
        const List = [
          {
            Name: SelectDoc != "Other" ? SelectDoc : SelectOtherDoc,
            File: Photo,
          },
        ];
        return List;
      }

    
    });
    const fileInput = document.getElementById("profile-pic-upload");
    fileInput.value = ""; // Temporarily change the type to text
    setDocTypeOptions(DocTypeOptions.filter((e) => e.label != SelectDoc))
    setPhoto(null);
    setSelectDoc("Select");
  };

  const DeleteDoc = (t) => {
    setDocument(documents.filter((e) => e.Name != t));
  };

  const DeleteProduct = (t) => {
    setAddProducts(AddProducts.filter((e) => e.Number!= t));
  };

  const [ProductName, setProductName] = useState("Select");
  const [AddProducts, setAddProducts] = useState([]);
  const [WindowWidth, setWindowWidth] = useState("");
  const handleProductsAdded = () => {
    setAddProducts((prev) => {
      if (prev) {
        const List = [
          ...prev,
          {
            Name: "" + ProductName,
            Brand: "Brand 1",
            Number: AddProducts.length + 1,
          },
        ];
        return List;
      } else {
        const List = [
          {
            Name: ProductName + "",
            Brand: "Brand 1",
            Number: AddProducts.length + 1,
          },
        ];
        return List;
      }
    });
    window.scrollBy(0,500)
    setDocument([]);
  
  };

  useEffect(()=>
  {
    setWindowWidth(screen.availWidth)
   
  })
  useEffect(()=>
  { setTimeout(() =>   document.getElementById("AddProductList").scrollBy(0,1000), 0);
  },[AddProducts.length])

  return (
  
    <Fragment>
    
      { (ServiceTypeProduct!="NewBuild")?  (SingleProduct != true) ? (
        <>
          {" "}
          <Card className=" p-1">
            <h3 className="mb-0">Product Details</h3>
            <Form>
              <div className="row mb-1 mt-2">
                <div className="col-6 col-lg-3 mb-1">
                  <Label>Product</Label>
                  <Select
                    theme={selectThemeColors}
                    name="Products"
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={{ label: "Select" }}
                    options={Products}
                    onChange={(e) => setProductName(e.value)}
                  />
                </div>{" "}
                <div className="col-6 col-lg-3 mb-1">
                  <Label>Brand</Label>
                  <Select
                    theme={selectThemeColors}
                    name="Brand"
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={{ label: "Select" }}
                    options={Brand}
                  />
                </div>
                <div className="col-6 col-lg-3">
                  <Label>Product code - SKU</Label>
                  <Input type="text"></Input>
                </div>{" "}
                <div className="col-6 col-lg-3">
                  <Label>Design</Label>
                  <Input type="text">Select one</Input>
                </div>
              </div>
            </Form>
          </Card>
          <Card className=" p-1">
            <h3 className="mb-1">Product Dimension & Usage Details</h3>
            <h5 className="mt-1 mb-1">Dimension Details :</h5>
            <Form>
              <div className="row mb-1 ">
                <div className="col-lg-3 col-6 mb-1 ">
                  <div className="row px-1">
                    <Label className="ps-0" for={`dimension-${type}`}>
                      Width
                    </Label>
                    <div className="col-7 p-0 ">
                      <Input type="number" placeholder="Width"></Input>
                    </div>
                    <div className="col-5 p-0">
                      <Select
                        theme={selectThemeColors}
                        name="Width"
                        id={`dimension-${type}`}
                        className="react-select"
                        classNamePrefix="select"
                        defaultValue={{ label: "Units" }}
                        options={DimensionUnits}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6 ">
                  <div className="row px-1">
                    <Label className="ps-0" for={`dimension-${type}`}>
                      Height
                    </Label>

                    <div className="col-7 p-0 ">
                      <Input type="number" placeholder="Height"></Input>
                    </div>
                    <div className="col-5 p-0">
                      <Select
                        theme={selectThemeColors}
                        name="Width"
                        id={`dimension-${type}`}
                        className="react-select"
                        classNamePrefix="select"
                        defaultValue={{ label: "Units" }}
                        options={DimensionUnits}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6 ">
                  <div className="row px-1">
                    <Label className="ps-0" for={`dimension-${type}`}>
                      Thickness
                    </Label>

                    <div className="col-7 p-0">
                      <Input type="number" placeholder="Thickness"></Input>
                    </div>
                    <div className="col-5 p-0">
                      <Select
                        theme={selectThemeColors}
                        name="Width"
                        id={`dimension-${type}`}
                        className="react-select"
                        classNamePrefix="select"
                        defaultValue={{ label: "Units" }}
                        options={DimensionUnits}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-6 ">
                  <div className="row px-1">
                    <Label className="ps-0" for={`dimension-${type}`}>
                      Quantity
                    </Label>

                    <div className="col-7 p-0">
                      <Input type="number" placeholder="Quantity"></Input>
                    </div>
                    <div className="col-5 p-0">
                      <Select
                        theme={selectThemeColors}
                        name="Width"
                        id={`dimension-${type}`}
                        className="react-select"
                        classNamePrefix="select"
                        defaultValue={{ label: "Units" }}
                        options={QuantityUnits}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-2" />

              <h5 className="mb-1 ">Usage Details :</h5>

              <div className="row mb-1">
                <div className="col-4 col-lg-2 mb-1">
                  <Label>Building No.</Label>
                  <Input type="number"></Input>
                </div>
                <div className="col-4 col-lg-2">
                  <Label>Floor No.</Label>
                  <Input type="number" className="w-100">
                    Select one
                  </Input>
                </div>
                <div className="col-4 col-lg-2">
                  <Label>Flat No.</Label>
                  <Input type="number">Select one</Input>
                </div>

                <div className="col-6 col-lg-3">
                  <Label>Area Name</Label>
                  <Select
                    theme={selectThemeColors}
                    name="AreaName"
                    id=""
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={{ label: AreaSelect }}
                    options={AreaName}
                    maxMenuHeight={400}
                    menuPlacement="top"
                    onChange={(e) => setAreaSelect(e.value)}
                  />
                </div>
                {AreaSelect !== "Room" && (
                  <div className="col-6 col-lg-3">
                    <Label
                      className={AreaSelect !== "Other" ? "text-muted" : ""}
                    >
                      Other
                    </Label>
                    <Input disabled={AreaSelect !== "Other"} type="text">
                      Select one
                    </Input>
                  </div>
                )}
                {AreaSelect === "Room" && (
                  <div className="col-6 col-lg-3">
                    <Label>Room Type</Label>
                    <Select
                      theme={selectThemeColors}
                      name="RoomName"
                      id=""
                      className="react-select"
                      classNamePrefix="select"
                      defaultValue={{ label: "Select" }}
                      options={[
                        { value: "Bedroom", label: "Bedroom" },
                        { value: "Kitchen", label: "Kitchen" },
                        { value: "Guest", label: "Guest" },
                        { value: "GM Office", label: "GM Office" },
                      ]}
                      maxMenuHeight={400}
                      menuPlacement="top"
                    />
                  </div>
                )}
              </div>


              <div className="row mb-1">
                <div
                  className={
                    SelectDoc === "Other"
                      ? "col-6 col-lg-3 mb-1"
                      : "col-6 col-lg-5"
                  }
                >
                  <Label>Document Type</Label>
                  <Select
                    theme={selectThemeColors}
                    name="RoomName"
                    id=""
                    className="react-select"
                    classNamePrefix="select"
                    defaultValue={{ label: SelectDoc }}
                    value={{ label: SelectDoc }}
                    options={DocTypeOptions}
                    maxMenuHeight={400}
                    menuPlacement="top"
                    onChange={(e) => setSelectDoc(e.value)}
                  />
                </div>
                {SelectDoc === "Other" && (
                  <div className="col-6 col-lg-3 ">
                    <Label className="text-center">Document Name</Label>
                    <Input
                      type="text"
                      onChange={(e) => setOtherDoc(e.target.value)}
                    ></Input>
                  </div>
                )}
                <div
                  className={
                    SelectDoc === "Other"
                      ? "col-12 col-lg-4 "
                      : "col-6 col-lg-4"
                  }
                >
                  <Label
                    className="profile-pic-upload-label"
                    id="profile-pic-upload-label"
                    for="profile-pic-upload"
                  >
                   Document Upload
                  </Label>
                  <Input
                    type="file"
                    accept="image/jpeg, image/png"
                    id="profile-pic-upload"
                    onChange={(e) =>
                      setPhoto(
                        e.target.files[0] != null
                          ? URL.createObjectURL(e.target.files[0])
                          : null
                      )
                    }
                  />
                </div>

                <div
                  className={
                    SelectDoc === "Other"
                      ? "col-lg-2 col-9  mt-2 mx-auto "
                      : "col-lg-3 col-9  mt-2 mx-auto"
                  }
                >
                  {" "}
                  <Button
                    outline
                    onClick={handleDocuments}
                    disabled={SelectDoc === "Select" || Photo === null}
                    className="w-100"
                  >
                    <b>Add Document</b>
                  </Button>
                </div>
              </div>

              {documents.length != 0 && (
                <div className="row p-1  px-1">
                  <hr className="mb-1" />
                  <h4 className="mb-1 d-flex justify-content-center">
                    Documents Added
                  </h4>
                  <hr />
                  <hr className="mb-0" />
                  <div
                    className="col-6 text-center  d-flex justify-content-center align-items-center "
                    style={{
                      border: "1px solid gray",
                      borderRadius: "6px 0px 0px 0px",
                      padding: "5px",
                    }}
                  >
                    <b>Document Name</b>
                  </div>
                  <div
                    className="col-6  d-flex justify-content-center align-items-center"
                    style={{
                      border: "1px solid gray",
                      borderRadius: "0px 6px 0px 0px",
                      padding: "5px",
                    }}
                  >
                    <b>Details</b>
                  </div>
                  <hr className="m-0" />
                  {documents.map((e) => {
                    return (
                      <>
                        <hr className="mb-0 mt-0" />
                        <div
                          className="col-6 text-center   d-flex justify-content-center align-items-center "
                          style={{
                            borderRight: "1px solid gray",
                            padding: "3px",
                          }}
                        >
                          {e.Name}
                        </div>
                        <div
                          className="col-6 text-center   d-flex justify-content-center align-items-center"
                          style={{
                            borderLeft: "1px solid gray",
                            padding: "3px",
                          }}
                        >
                          <a href={e.File} target="_blank">
                            View File
                          </a>
                          <div className="position-absolute end-0 me-1">
                            <X
                              onClick={() => DeleteDoc(e.Name + "")}
                              style={{ cursor: "pointer" }}
                              size={17}
                            />
                          </div>
                        </div>
                        <hr className="m-0" />
                      </>
                    );
                  })}
                </div>
              )}

            </Form>
          </Card>
          <Card className=" p-1 mb-1">
            <h3 className="mb-0">Purchase Details</h3>

            <Form>
              <div className="row mb-1 mt-2 ">
                <div className="col-6 col-lg-4 mb-1">
                  <Label>Date of Purchase</Label>
                  <Flatpickr
                    value={"today"}
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
                </div>
                <div className="col-6 col-lg-4">
                  <Label>Purchased from</Label>
                  <Input type="text" placeholder="Supplier Name">
                    Select one
                  </Input>
                </div>

                <div className=" col-12 col-lg-4">
                  <Label
                    className="profile-pic-upload-label"
                    id="profile-pic-upload-label"
                    for="profile-pic-upload"
                  >
                    Invoice
                  </Label>
                  <Input
                    type="file"
                    accept="image/jpeg, image/png"
                    id="profile-pic-upload"
                    // onChange={(e) =>
                    //   setPhoto(
                    //     e.target.files[0] != null
                    //       ? URL.createObjectURL(e.target.files[0])
                    //       : null
                    //   )
                    // }
                  />
                </div>
              </div>

             

              <div className="row ">
                <div className="col-6">
                  <div>
                    <Label>Payment Method</Label>
                  </div>
                  <div className="d-flex gap-1">
                    <div className="form-check">
                      <Input type="radio" id="ex4-active" name="ex4" checked />
                      <Label className="form-label" for="ex4-active">
                        Free
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex5-active"
                        name="ex5"
                        checked={false}
                      />
                      <Label className="form-label" for="ex5-active">
                        Paid
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            
            </Form>
          </Card>
          <div className="row d-flex justify-content-center mb-2">
            <div className="col-12 col-lg-4 d-flex justify-content-center">
              {" "}
              <Button
                disabled={ProductName === "Select"}
                onClick={handleProductsAdded}
                className="w-100"
              >
                ADD PRODUCT
              </Button>
            </div>

            {/* <div className="col-3 d-flex justify-content-center"> <Button  color="warning" className="w-100" >Clear All</Button></div>  */}
          </div>
          <Card style={{  overflowX: (WindowWidth<"550")? "scroll":"visible",}}>
            {AddProducts.length != 0 && (
              <>
                {" "}
                <h3 className="my-1 d-flex justify-content-center position-sticky top-0">
                  <b>{AddProducts.length}&nbsp;Products Added</b>
                </h3>
                <div
                  className="row mb-1   px-1"
                  id="AddProductList"
                  style={{
                    height: "auto",
                    width: (WindowWidth<"550")? "500px":"" ,
                   
                    maxHeight: "300px",
                    overflowY: "auto",
                   
                  }}
                >
                  <hr className="mb-0" />
                  <div
                    className="col-1 bg-primary text-light py-1 d-flex justify-content-center align-items-center position-sticky top-0"
                    style={{
                      borderRight: "1px solid gray",
                      borderRadius: "6px 0px 0px 0px",
                    }}
                  >
                    <b>Sr. no.</b>
                  </div>

                  <div className="col-3 bg-primary text-light py-1 d-flex justify-content-center align-items-center position-sticky top-0">
                    <b>Product Name</b>
                  </div>
                  <div
                    className="col-4 bg-primary text-light py-1 d-flex justify-content-center align-items-center position-sticky top-0"
                    style={{
                      borderRight: "1px solid gray",
                      borderLeft: "1px solid gray",
                    }}
                  >
                    <b>Brand</b>
                  </div>
                  <div
                    className="col-4 bg-primary text-light py-1 d-flex justify-content-center align-items-center position-sticky top-0"
                    style={{ borderRadius: "0px 6px 0px 0px", zIndex: 1 }}
                  >
                    <b>Details</b>
                  </div>
                  <hr className="mb-0" />
                  {AddProducts.map((e) => {
                    return (
                      <>
                        <hr className="mb-0 mt-0" />
                        <div
                          className="col-1 text-center py-0 d-flex justify-content-center align-items-center "
                          style={{ borderRight: "1px solid gray" }}
                        >
                          {e.Number}
                        </div>

                        <div
                          className="col-3 text-center py-0 d-flex justify-content-center align-items-center "
                          style={{
                            borderLeft: "1px solid gray",
                            borderRight: "1px solid gray",
                          }}
                        >
                          {e.Name}
                        </div>
                        <div
                          className="col-4 text-center py-0 d-flex justify-content-center align-items-center "
                          style={{
                            borderLeft: "1px solid gray",
                            borderRight: "1px solid gray",
                          }}
                        >
                          {e.Brand}
                        </div>
                        <div
                          className="col-4 text-center py-0 d-flex justify-content-center align-items-center position-relative "
                          style={{ borderLeft: "1px solid gray" }}
                        >
                          <Button
                            color=""
                            onClick={() => setSingleProduct(true)}
                            className="text-primary"
                          >
                            {" "}
                            View Details
                          </Button>
                          <div className="position-absolute end-0 me-1">
                            <X
                              onClick={() => DeleteProduct(e.Number + "")}
                              style={{ cursor: "pointer" }}
                              size={17}
                            />
                          </div>
                        </div>
                        <hr />
                      </>
                    );
                  })}
                </div>{" "}
              </>
            )}
          </Card>
          <Row className="d-flex position-relative mt-1">
            <Col md={6}>
              <Button
                className="position-absolute d-flex start-0"
                onClick={() => {
                  stepper.previous();
                  window.scrollBy(0,-1000)
                }}
              >
                Previous
              </Button>
            </Col>
            <Col md={6}>
              <Button
                className="position-absolute d-flex end-0"
                onClick={() => {
                  stepper.next();window.scrollBy(0,-1000)
                }}
              >
                Next
              </Button>
            </Col>
          </Row>
        </>
      ) 
      : 
      
      (
        <SingleProductDetails setSingleProduct={setSingleProduct} />
      ) 
      
      :
      
      <Card className=" p-1">
            <h3 className="mb-1">Product Usage Details</h3>
            

<div className="row mb-1">
  <div className="col-4 col-lg-2 mb-1">
    <Label>Building No.</Label>
    <Input type="number"></Input>
  </div>
  <div className="col-4 col-lg-2">
    <Label>Floor No.</Label>
    <Input type="number" className="w-100">
      Select one
    </Input>
  </div>
  <div className="col-4 col-lg-2">
    <Label>Flat No.</Label>
    <Input type="number">Select one</Input>
  </div>

  <div className="col-6 col-lg-3">
    <Label>Area Name</Label>
    <Select
      theme={selectThemeColors}
      name="AreaName"
      id=""
      className="react-select"
      classNamePrefix="select"
      defaultValue={{ label: AreaSelect }}
      options={AreaName}
      maxMenuHeight={400}
      menuPlacement="top"
      onChange={(e) => setAreaSelect(e.value)}
    />
  </div>
  {AreaSelect !== "Room" && (
    <div className="col-6 col-lg-3">
      <Label
        className={AreaSelect !== "Other" ? "text-muted" : ""}
      >
        Other
      </Label>
      <Input disabled={AreaSelect !== "Other"} type="text">
        Select one
      </Input>
    </div>
  )}
  {AreaSelect === "Room" && (
    <div className="col-6 col-lg-3">
      <Label>Room Type</Label>
      <Select
        theme={selectThemeColors}
        name="RoomName"
        id=""
        className="react-select"
        classNamePrefix="select"
        defaultValue={{ label: "Select" }}
        options={[
          { value: "Bedroom", label: "Bedroom" },
          { value: "Kitchen", label: "Kitchen" },
          { value: "Guest", label: "Guest" },
          { value: "GM Office", label: "GM Office" },
        ]}
        maxMenuHeight={400}
        menuPlacement="top"
      />
    </div>
  )}
</div>


<div className="row mb-1">
  <div
    className={
      SelectDoc === "Other"
        ? "col-6 col-lg-3 mb-1"
        : "col-6 col-lg-5"
    }
  >
    <Label>Document Type</Label>
    <Select
      theme={selectThemeColors}
      name="RoomName"
      id=""
      className="react-select"
      classNamePrefix="select"
      defaultValue={{ label: SelectDoc }}
      value={{ label: SelectDoc }}
      options={DocTypeOptions}
      maxMenuHeight={400}
      menuPlacement="top"
      onChange={(e) => setSelectDoc(e.value)}
    />
  </div>
  {SelectDoc === "Other" && (
    <div className="col-6 col-lg-3 ">
      <Label className="text-center">Document Name</Label>
      <Input
        type="text"
        onChange={(e) => setOtherDoc(e.target.value)}
      ></Input>
    </div>
  )}
  <div
    className={
      SelectDoc === "Other"
        ? "col-12 col-lg-4 "
        : "col-6 col-lg-4"
    }
  >
    <Label
      className="profile-pic-upload-label"
      id="profile-pic-upload-label"
      for="profile-pic-upload"
    >
     Document Upload
    </Label>
    <Input
      type="file"
      accept="image/jpeg, image/png"
      id="profile-pic-upload"
      onChange={(e) =>
        setPhoto(
          e.target.files[0] != null
            ? URL.createObjectURL(e.target.files[0])
            : null
        )
      }
    />
  </div>

  <div
    className={
      SelectDoc === "Other"
        ? "col-lg-2 col-9  mt-2 mx-auto "
        : "col-lg-3 col-9  mt-2 mx-auto"
    }
  >
    {" "}
    <Button
      outline
      onClick={handleDocuments}
      disabled={SelectDoc === "Select" || Photo === null}
      className="w-100"
    >
      <b>Add Document</b>
    </Button>
  </div>
</div>

{documents.length != 0 && (
  <div className="row p-1  mt-2 px-1">
    <hr className="mb-1" />
    <h4 className="mb-1 d-flex justify-content-center">
      Documents Added
    </h4>
    <hr />
    <hr className="mb-0" />
    <div
      className="col-6 text-center  d-flex justify-content-center align-items-center "
      style={{
        border: "1px solid gray",
        borderRadius: "6px 0px 0px 0px",
        padding: "5px",
      }}
    >
      <b>Document Name</b>
    </div>
    <div
      className="col-6  d-flex justify-content-center align-items-center"
      style={{
        border: "1px solid gray",
        borderRadius: "0px 6px 0px 0px",
        padding: "5px",
      }}
    >
      <b>Details</b>
    </div>
    <hr className="m-0" />
    {documents.map((e) => {
      return (
        <>
          <hr className="mb-0 mt-0" />
          <div
            className="col-6 text-center   d-flex justify-content-center align-items-center "
            style={{
              borderRight: "1px solid gray",
              padding: "3px",
            }}
          >
            {e.Name}
          </div>
          <div
            className="col-6 text-center   d-flex justify-content-center align-items-center"
            style={{
              borderLeft: "1px solid gray",
              padding: "3px",
            }}
          >
            <a href={e.File} target="_blank">
              View File
            </a>
            <div className="position-absolute end-0 me-1">
              <X
                onClick={() => DeleteDoc(e.Name + "")}
                style={{ cursor: "pointer" }}
                size={17}
              />
            </div>
          </div>
          <hr className="m-0" />
        </>
      );
    })}
  </div>
)}
      </Card>
      
      
      } 
    </Fragment>
  );
};

export default ProductDetails;
