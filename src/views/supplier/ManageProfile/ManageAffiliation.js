// ** React Imports
import { Fragment, useState, useEffect } from "react";

// ** Third Party Components
import Select from "react-select";

import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  X,
  Plus,
} from "react-feather";
import toast from "react-hot-toast";
import { 
  BrowserRouter, Routes, Route, useNavigate 
} from "react-router-dom";
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

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return [innerWidth, innerHeight];
}

const ManageAffiliation = ({ stepper, type }) => {
  const [showDet, setShowDet] = useState(true);
  const [newProd, setNewProd] = useState("");

  const [windowSize, setWindowSize] = useState(getWindowSize());
  const[disableCard,setDisableCard] =useState("")
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const navigate = useNavigate();
  const redirect = () => {
    toast.success("Submitted Successfully")
    navigate(`/enterprise/Edit-Profile`)}

  const productOptions = [
    {
      label: "Glass",
      options: [
        { value: "Annealed", label: "Annealed" },
        { value: "Toughened", label: "Toughened" },
        { value: "Lacquered", label: "Lacquered" },
        { value: " Bend (Curve)", label: " Bend (Curve)" },
        { value: " Lamination - EVA", label: " Lamination - EVA" },
        { value: " Lamination - PVB", label: " Lamination - PVB" },
        { value: " Special property ", label: " Special property " },
      ],
    },
    {
      label: "Timber",
      options: [
        { value: "Plywood & Blockboard", label: "Plywood & Blockboard" },
        { value: "MDF", label: "MDF" },
        { value: "Laminates", label: "Laminates" },
        { value: "Veneers", label: "Veneers" },
        { value: "Door", label: "Door" },
        { value: "Door - Fire rated", label: "Door - Fire rated" },
      ],
    },
    {
      label: "Architectural Hardware",
      options: [
        { value: "Glass - Door control", label: "Glass - Door control" },
        {
          value: "Glass - Shower & Washroom",
          label: "Glass - Shower & Washroom",
        },
        {
          value: "Glass - Sliding Partition",
          label: "Glass - Sliding Partition",
        },
        { value: "Glass - Fixed Partition", label: "Glass - Fixed Partition" },
        { value: "Glass - Facade & Canopy", label: "Glass - Facade & Canopy" },
        {
          value: "Glass - Locking solutions",
          label: "Glass - Locking solutions",
        },
        { value: "Glass - Door automation", label: "Glass - Door automation" },
        { value: "Glass - Access control", label: "Glass - Access control" },
        { value: "Door - Mechanical Locks", label: "Door - Mechanical Locks" },
        {
          value: "Door - Electromechanical Locks",
          label: "Door - Electromechanical Locks",
        },
        { value: "Door - Digital Locks", label: "Door - Digital Locks" },
        { value: "Door - Fire rated", label: "Door - Fire rated" },
        { value: "Door - Mortice Handle", label: "Door - Mortice Handle" },
        { value: "Door - Escape", label: "Door - Escape" },
        { value: "Door - RFID locks", label: "Door - RFID locks" },
        { value: "Door - Hinges SS", label: "Door - Hinges SS" },
        { value: "Door - Hinges Brass", label: "Door - Hinges Brass" },
        {
          value: "Door - Fancy Pull handles",
          label: "Door - Fancy Pull handles",
        },
        { value: "Wooden - Door Control", label: "Wooden - Door Control" },
        {
          value: "Wooden - Sliding Partitions",
          label: "Wooden - Sliding Partitions",
        },
        {
          value: "Wooden - Door automation",
          label: "Wooden - Door automation",
        },
        {
          value: "Wooden - Door accessories",
          label: "Wooden - Door accessories",
        },
      ],
    },
    {
      label: "Aluminum",
      options: [
        { value: "Profile - interior", label: "Profile - interior" },
        { value: "Profile - exterior", label: "Profile - exterior" },
        { value: "Profile - Partition", label: "Profile - Partition" },
        { value: "Louvres", label: "Louvres" },
      ],
    },
    {
      label: " Stainless steel",
      options: [
        { value: "Profile - interior", label: "Profile - interior" },
        { value: "Profile - exterior", label: "Profile - exterior" },
        { value: "Railings - SS", label: "Railings - SS" },
        { value: "Railings - Fixtures", label: "Railings - Fixtures" },
        { value: "Pull handle", label: "Pull handle" },
      ],
    },
    {
      label: "Kitchen",
      options: [
        { value: "Wire Basket", label: "Wire Basket" },
        { value: "Tandem", label: "Tandem" },
        { value: "Unit - Locational", label: "Unit - Locational" },
        { value: "Kitchen fittings", label: "Kitchen fittings" },
        { value: "Shutters", label: "Shutters" },
        { value: "Drawer slides", label: "Drawer slides" },
        { value: "Auto Hinges / SS Hinges", label: "Auto Hinges / SS Hinges" },
        { value: "Complete unit", label: "Complete unit" },
      ],
    },
    {
      label: "Window Hardware ",
      options: [
        { value: "Aluminum Fittings", label: "Aluminum Fittings" },
        { value: "uPVC Fittings", label: "uPVC Fittings" },
        { value: "Complete unit", label: "Complete unit" },
      ],
    },
    {
      label: "Wardrobe",
      options: [
        { value: "Panels", label: "Panels" },
        { value: "Complete unit", label: "Complete unit" },
        { value: "Accessories", label: "Accessories" },
        { value: " Bend (Curve)", label: " Bend (Curve)" },
        { value: " Lamination - EVA", label: " Lamination - EVA" },
        { value: " Lamination - PVB", label: " Lamination - PVB" },
        { value: " Special property ", label: " Special property " },
      ],
    },
    {
      label: "Special Products",
      options: [
        { value: " Acoustic partition", label: " Acoustic partition" },
        { value: " Hermetic Door", label: " Hermetic Door" },
        { value: "Metal Door", label: "Metal Door" },
      ],
    },
    {
      label: "Misc",
      options: [
        { value: "Adhesive & Tape", label: "Adhesive & Tape" },
        { value: "Screws", label: "Screws" },
        { value: "Timber accessories", label: "Timber accessories " },
        { value: "Glass accessories", label: " Glass accessories " },
      ],
    },
    {
      label: "Others",
      options: [{ value: "Please specify", label: "Please specify" }],
    },
  ];

  const [productSelected, setProductSelected] = useState([]);

  const handleProducts = (val, lbl) => {
    setProductSelected([...productSelected, { value: val, label: lbl }]);
  };

  const handleRemoveProduct = (val, lbl) => {
    let arr = productSelected;
    arr = arr.filter((obj) => {
      return obj.value !== val || obj.label !== lbl;
    });
    console.log(arr);
    setProductSelected(arr);
  };

  const companyActOptions = [
    { value: "Retail", label: "Retail" },
    { value: "Trade", label: "Trade" },
    { value: "Manufacturing", label: "Manufacturing" },
  ];

  const [brandSelected, setBrandSelected] = useState([]);
  const [newBrand, setNewBrand] = useState("");
  const handleBrands = (e) => {
    console.log(brandSelected);
    setBrandSelected(e);
    // if (
    //   e.filter((obj) => {
    //     return obj.value === "Others (please specify)";
    //   }).length === 1
    // ) {
    //   setBrandSelected(
    //     e.filter((obj) => {
    //       return obj.value !== "Others (please specify)";
    //     })
    //   );
    // }
  };

  return (
    <div>
      <Card
        style={{
          userSelect: "none",
        }}
      >
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
              <Row>
                <Col md="4" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    Company Activity
                  </Label>
                  <Select
                    isDisabled={disableCard!=="Affiliation"}
                    theme={selectThemeColors}
                    // isClearable={false}
                    id={`state-${type}`}
                    isMulti
                    className="react-select"
                    classNamePrefix="select"
                    options={companyActOptions}
                    closeMenuOnSelect={false}
                    blurInputOnSelect={false}
                  />
                </Col>
                <Col md="4" className="mb-1">
                  <Label className="form-label" for="register-name">
                    Brand Name (only for Manufacturing)
                  </Label>
                  <Select
                   isDisabled={disableCard!=="Affiliation"}
                    theme={selectThemeColors}
                    id={`state-${type}`}
                    value={brandSelected}
                    isMulti
                    className="react-select"
                    classNamePrefix="select"
                    closeMenuOnSelect={false}
                    blurInputOnSelect={false}
                    // options={[]}
                    disabled={true}
                    onChange={(e) => {
                      handleBrands(e);
                    }}
                  />
                </Col>
                <Col md="4" className="mb-1">
                  <Label className="form-label" for={`segment-${type}`}>
                    Add Brands
                  </Label>
                  <Row>
                    <Col xs="9" className="mb-1">
                      <Input
                       disabled={disableCard!=="Affiliation"}
                        type="text"
                        id="register-name"
                        placeholder="please specify"
                        value={newBrand}
                        onChange={(e) => setNewBrand(e.target.value)}
                      />
                    </Col>
                    <Col xs="3" className="mb-1">
                      <Button
                       disabled={disableCard!=="Affiliation"}
                        color="primary"
                        onClick={() => {
                          if (
                            brandSelected.filter((item) => {
                              return item.value === newBrand;
                            }).length === 0
                          ) {
                            console.log(newBrand);
                            setBrandSelected([
                              ...brandSelected,
                              { value: newBrand, label: newBrand },
                            ]);
                            setNewBrand("");
                          } else {
                            alert("Brand already Present!!");
                          }
                        }}
                      >
                        <Plus size={12} />
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{ marginBottom: "0.5rem" }}>
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
                    
                  </Row>
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

export default ManageAffiliation;
