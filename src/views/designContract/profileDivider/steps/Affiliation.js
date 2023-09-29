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

import toast from "react-hot-toast";
import { 
  BrowserRouter, Routes, Route, useNavigate 
} from "react-router-dom";
// ** Styles
import "@styles/react/libs/react-select/_react-select.scss";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return [innerWidth, innerHeight];
}

const Affiliation = ({ stepper, type }) => {
  const [showDet, setShowDet] = useState(true);
  const [newProd, setNewProd] = useState("");

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
    navigate(`/designContract/Edit-Profile`)
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

  const [newSegment, setNewSegment] = useState("");
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

  return (
    <div>
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
            <Col xs="10" md="11">
              <div className="content-header">
                <h3 className="mb-0">Affiliation Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" md="1">
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
                      Company Activity
                    </Label>
                    <Select
                      theme={selectThemeColors}
                      isClearable={false}
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
                    <Label className="form-label" for={`state-${type}`}>
                      Market Segment
                    </Label>
                    <Select
                      theme={selectThemeColors}
                      id={`state-${type}`}
                      isMulti
                      className="react-select"
                      classNamePrefix="select"
                      value={selected}
                      options={marketSegmentOptions}
                      closeMenuOnSelect={false}
                      blurInputOnSelect={false}
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
                          type="text"
                          id="register-name"
                          placeholder="please specify"
                          value={newSegment}
                          onChange={(e) => setNewSegment(e.target.value)}
                        />
                      </Col>
                      <Col xs="3" className="mb-1">
                        <Button
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
                      Company Activity
                    </Label>
                    <Select
                      theme={selectThemeColors}
                      isClearable={false}
                      id={`state-${type}`}
                      isMulti
                      className="react-select"
                      classNamePrefix="select"
                      options={companyActOptions}
                      closeMenuOnSelect={false}
                      blurInputOnSelect={false}
                    />
                  </Col>
                  <Col md="6" className="mb-1">
                    <Label className="form-label" for={`state-${type}`}>
                      Market Segment
                    </Label>
                    <Select
                      theme={selectThemeColors}
                      id={`state-${type}`}
                      isMulti
                      className="react-select"
                      classNamePrefix="select"
                      value={selected}
                      options={marketSegmentOptions}
                      closeMenuOnSelect={false}
                      blurInputOnSelect={false}
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
                  <Button color="" className="border-0" style={{fontSize:"0.9rem"}}  onClick={()=>setProductSelected([])}> Clear all</Button>

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
                                className="d-flex flex-row"
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
              {businessAssociationOptions
                .filter((obj) => {
                  return (
                    productSelected.filter((data) => {
                      return data.value === obj.value;
                    }).length !== 1
                  );
                })
                .map((item, idx) => (
                  <Card
                    key={idx}
                    color="primary"
                    style={{
                      display: "inline-flex",
                      width: "fit-content",
                      borderRadius: "2px",
                      height: "25px",
                      margin: "auto 0.5rem",
                      marginTop: "3px",
                      padding: "1px 8px",
                    }}
                    onClick={() => {
                      if (item.value !== "Others (Please specify)") {
                        handleProducts(item.value);
                      } else {
                        setAddAssociation(true);
                      }
                    }}
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
                ))}
              {addAssociation ? (
                <>
                  <h3 style={{ marginTop: "2rem" }}>Others</h3>{" "}
                  <Row>
                    <Col xs="8" md="3">
                      <Input
                        type="text"
                        id="register-name"
                        placeholder="please specify"
                        value={newProd}
                        onChange={(e) => setNewProd(e.target.value)}
                      />
                    </Col>
                    <Col xs="4" md="1">
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
                              "Others (Please specify)"
                            );
                          } else {
                            alert("Product Already Present!!");
                          }
                          setNewProd("");
                          setAddAssociation(false);
                        }}
                      >
                        Add
                      </Button>
                    </Col>
                  </Row>
                </>
              ) : (
                <p />
              )}
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
      <Row>
        <Col xs="12">
          <div className="d-flex justify-content-between">
            <Button
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
            </Button>
            <Button
              color="success"
              className="btn-submit"
              onClick={redirect}
            >
              Submit
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Affiliation;
