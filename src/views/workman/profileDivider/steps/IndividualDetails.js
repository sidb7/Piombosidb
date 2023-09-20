// ** React Imports
import { Fragment, useState } from "react";

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

const IndividualDetails = ({ stepper, type }) => {
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
  const languages = [
    { value: "English", label: "English" },
    { value: "Hindi", label: "Hindi" },
    { value: "Marathi", label: "Marathi" },
  ];

  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const deleteForm = (e) => {
    e.preventDefault();
    e.target.closest("form").remove();
  };

  const [showPersonal, setShowPersonal] = useState(true);
  const [showLang, setShowLang] = useState(true);
  const [showEd, setShowEd] = useState(true);

  const [work, setWork] = useState(false);

  const [basiced, setBasiced] = useState(0);
  const [iti, setIti] = useState(false);
  const [dip, setDip] = useState(false);
  const [deg, setDeg] = useState(false);

  const [qual, setQual] = useState([]);

  const [langName, setLangName] = useState("");
  const [langSpeak, setLangSpeak] = useState(0);
  const [langWrite, setLangWrite] = useState(0);
  const [langRead, setLangRead] = useState(0);
  const [lang, setLang] = useState([]);

  const langLevel = {
    0: "None",
    1: "Beginner",
    2: "Fluent",
  };

  const handleNewLang = () => {
    if (
      langName !== "" &&
      (langSpeak !== 0 || langWrite !== 0 || langRead !== 0)
    ) {
      setLang([
        ...lang,
        {
          name: langName,
          speak: langSpeak,
          write: langWrite,
          read: langRead,
        },
      ]);
      setLangName("");
      setLangSpeak(0);
      setLangWrite(0);
      setLangRead(0);
    } else {
      alert("Enter fluency details for language!!");
    }
  };

  const handleEditLang = (ind) => {
    let langObj = lang.at(ind);
    handleDeleteLang(ind);
    setLangName(langObj.name);
    setLangSpeak(langObj.speak);
    setLangWrite(langObj.write);
    setLangRead(langObj.read);
  };

  const handleDeleteLang = (ind) => {
    let ar = [];
    if (lang.length <= 1) {
      ar = [];
    } else {
      if (ind == 0) {
        ar = lang.slice(1);
      } else if (ind == lang.length - 1) {
        ar = lang.slice(0, ind);
      } else {
        ar = lang.slice(0, ind).concat(lang.slice(ind + 1));
      }
    }
    setLang(ar);
  };

  return (
    <div>
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
            <Col xs="10" md="11">
              <div className="content-header">
                <h3 className="mb-0">Personal Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" md="1">
              {showPersonal ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowPersonal(!showPersonal)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowPersonal(!showPersonal)}
                ></ChevronDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showPersonal ? (
          <CardBody>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-name">
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    id="register-name"
                    placeholder="Panda Corps"
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="signup-details-photo-copy">
                    Passport Photograph
                  </Label>
                  <Input
                    type="file"
                    id="signup-details-photo-copy"
                    placeholder=""
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-mobile">
                    Mobile Number
                  </Label>
                  <Input
                    type="Number"
                    id="register-mobile"
                    placeholder="9875461258"
                    // onChange={(e) => handleEmail(e.target.value)}
                  />
                </Col>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for="register-email">
                    Email Id
                  </Label>
                  <Input
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
                    theme={selectThemeColors}
                    isClearable={false}
                    id={`state-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    options={stateOptions}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6" className="mb-1">
                  <Label className="form-label" for={`state-${type}`}>
                    Country
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    isClearable={false}
                    id={`state-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    options={countryOptions}
                  />
                </Col>
                <Col xs="12" md="6" className="mb-1">
                  <Label className="form-label" for={`city-${type}`}>
                    Open to Work outside Limit
                  </Label>
                  <div
                    className="demo-inline-spacing"
                    style={{ marginTop: "-1rem" }}
                  >
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex0-active"
                        name="ex0"
                        checked={work}
                        onClick={() => {
                          if (!work) {
                            setWork(!work);
                          }
                        }}
                      />
                      <Label className="form-label" for="ex0-active">
                        Yes
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex0-active"
                        name="ex0"
                        checked={!work}
                        onClick={() => {
                          if (work) {
                            setWork(!work);
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
                <h3 className="mb-0">Education Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" md="1">
              {showEd ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowEd(!showEd)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowEd(!showEd)}
                ></ChevronDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showEd ? (
          <CardBody>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row>
                <Col xs="6" className="mb-1">
                  <Label className="form-label" for={`city-${type}`}>
                    Basic Education
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
                        checked={basiced == 1}
                        onChange={() => {
                          if (basiced !== 1) {
                            setBasiced(1);
                          }
                          console.log("hello");
                        }}
                      />
                      <Label className="form-label" for="ex1-active">
                        below 10th grade
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex1-active"
                        name="ex1"
                        checked={basiced == 2}
                        onChange={() => {
                          if (basiced !== 2) {
                            setBasiced(2);
                          }
                          console.log("hello");
                        }}
                      />
                      <Label className="form-label" for="ex1-active">
                        10th/12th grade
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex1-active"
                        name="ex1"
                        checked={basiced == 3}
                        onChange={() => {
                          if (basiced !== 3) {
                            setBasiced(3);
                          }
                          console.log("hello");
                        }}
                      />
                      <Label className="form-label" for="ex1-active">
                        Technical Qualification
                      </Label>
                    </div>
                  </div>
                </Col>
                {basiced == 3 ? (
                  <Col xs="6" className="mb-1">
                    <Label className="form-label" for={`city-${type}`}>
                      Technical Qualification
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
                          checked={iti}
                          onClick={() => {
                            if (!iti) {
                              let arr = qual;
                              arr.push("ITI");
                              setQual(arr);
                            } else {
                              let arr = qual.filter((item) => {
                                return item !== "ITI";
                              });
                              setQual(arr);
                            }
                            setIti(!iti);
                          }}
                        />
                        <Label className="form-label" for="ex2-active">
                          ITI
                        </Label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex3-active"
                          name="ex3"
                          checked={dip}
                          onClick={() => {
                            if (!dip) {
                              let arr = qual;
                              arr.push("Diploma");
                              setQual(arr);
                            } else {
                              let arr = qual.filter((item) => {
                                return item !== "Diploma";
                              });
                              setQual(arr);
                            }
                            setDip(!dip);
                          }}
                        />
                        <Label className="form-label" for="ex3-active">
                          diploma - Specialization
                        </Label>
                      </div>
                      <div className="form-check">
                        <Input
                          type="radio"
                          id="ex4-active"
                          name="ex4"
                          checked={deg}
                          onClick={() => {
                            if (!deg) {
                              let arr = qual;
                              arr.push("Degree");
                              setQual(arr);
                            } else {
                              let arr = qual.filter((item) => {
                                return item !== "Degree";
                              });
                              setQual(arr);
                            }
                            setDeg(!deg);
                          }}
                        />
                        <Label className="form-label" for="ex4-active">
                          Degree
                        </Label>
                      </div>
                    </div>
                  </Col>
                ) : (
                  <p />
                )}
              </Row>
              {qual.length > 0 ? (
                <Row>
                  {qual.map((item, id) => (
                    <Col key={id} md="4" className="mb-1">
                      <Label
                        className="form-label"
                        for="signup-details-photo-copy"
                      >
                        {item} certififcate
                      </Label>
                      <Input
                        type="file"
                        id="signup-details-photo-copy"
                        placeholder=""
                      />
                    </Col>
                  ))}
                </Row>
              ) : (
                <p />
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
            <Col xs="10" md="11">
              <div className="content-header">
                <h3 className="mb-0">Language Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" md="1">
              {showLang ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowLang(!showLang)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowLang(!showLang)}
                ></ChevronDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showLang ? (
          <CardBody>
            {lang.map((item, i) => (
              <Row
                key={i}
                className="justify-content-between align-items-center"
              >
                <Col xs="6" md={2} className="mb-md-0 mb-1">
                  <Row>
                    <Label className="form-label" for={`item-name-${i}`}>
                      Language :
                    </Label>
                    <h4>{item.name}</h4>
                  </Row>
                </Col>
                <Col xs="6" md={2} className="mb-md-0 mb-1">
                  <Row>
                    <Label className="form-label" for={`cost-${i}`}>
                      Speaking :
                    </Label>
                    <h4>{langLevel[item.speak]}</h4>
                  </Row>
                </Col>
                <Col xs="6" md={2} className="mb-md-0 mb-1">
                  <Row>
                    <Label className="form-label" for={`quantity-${i}`}>
                      Writing :
                    </Label>
                    <h4>{langLevel[item.write]}</h4>
                  </Row>
                </Col>
                <Col xs="6" md={2} className="mb-md-0 mb-1">
                  <Row>
                    <Label className="form-label" for={`item-name-${i}`}>
                      Reading :
                    </Label>
                    <h4>{langLevel[item.read]}</h4>
                  </Row>
                </Col>
                <Col xs="6" md={2}>
                  <Button
                    style={{ marginBottom: "2rem" }}
                    color="danger"
                    className="text-nowrap px-1 mt-2"
                    onClick={() => {
                      handleEditLang(i);
                    }}
                    outline
                  >
                    <X size={14} className="me-50" />
                    <span>Edit</span>
                  </Button>
                </Col>
                <Col xs="6" md={2}>
                  <Button
                    style={{ marginBottom: "2rem" }}
                    color="danger"
                    className="text-nowrap px-1 mt-2"
                    onClick={() => {
                      handleDeleteLang(i);
                    }}
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
            ))}
            <Form>
              <Row className="justify-content-between align-items-center">
                <Col md={3} className="mb-md-0 mb-1">
                  <Label className="form-label" for={`item-name-`}>
                    Name
                  </Label>
                  <Select
                    theme={selectThemeColors}
                    id={`lang-${type}`}
                    className="react-select"
                    classNamePrefix="select"
                    options={languages.filter((obj) => {
                      return (
                        0 ===
                        lang.filter((item) => {
                          return item.name === obj.value;
                        }).length
                      );
                    })}
                    value={{ value: langName, label: langName }}
                    onChange={(e) => {
                      setLangName(e.value);
                    }}
                  />
                </Col>
                <Col md={3} className="mb-md-0 mb-1">
                  <Label className="form-label" for={`city-${type}`}>
                    Speaking Proficiency
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
                        checked={langSpeak == 1}
                        onChange={() => {
                          setLangSpeak(langSpeak == 1 ? 0 : 1);
                        }}
                        onClick={(e) => {
                          if (e.target.checked) {
                            e.target.checked = false;
                            setLangSpeak(0);
                          }
                        }}
                      />
                      <Label className="form-label" for="ex5-active">
                        Beginner
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex5-active"
                        name="ex5"
                        checked={langSpeak == 2}
                        onChange={() => {
                          setLangSpeak(langSpeak == 2 ? 0 : 2);
                        }}
                        onClick={(e) => {
                          if (e.target.checked) {
                            e.target.checked = false;
                            setLangSpeak(0);
                          }
                        }}
                      />
                      <Label className="form-label" for="ex5-active">
                        Fluent
                      </Label>
                    </div>
                  </div>
                </Col>
                <Col md={3} className="mb-md-0 mb-1">
                  <Label className="form-label" for={`city-${type}`}>
                    Writing Proficiency
                  </Label>
                  <div
                    className="demo-inline-spacing"
                    style={{ marginTop: "-1rem" }}
                  >
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex6-active"
                        name="ex6"
                        checked={langWrite == 1}
                        onChange={() => {
                          setLangWrite(langWrite == 1 ? 0 : 1);
                        }}
                        onClick={(e) => {
                          if (e.target.checked) {
                            e.target.checked = false;
                            setLangWrite(0);
                          }
                        }}
                      />
                      <Label className="form-label" for="ex6-active">
                        Beginner
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex6-active"
                        name="ex6"
                        checked={langWrite == 2}
                        onChange={() => {
                          setLangWrite(langWrite == 2 ? 0 : 2);
                        }}
                        onClick={(e) => {
                          if (e.target.checked) {
                            e.target.checked = false;
                            setLangWrite(0);
                          }
                        }}
                      />
                      <Label className="form-label" for="ex6-active">
                        Fluent
                      </Label>
                    </div>
                  </div>
                </Col>
                <Col md={3} className="mb-md-0 mb-1">
                  <Label className="form-label" for={`city-${type}`}>
                    Reading Proficiency
                  </Label>
                  <div
                    className="demo-inline-spacing"
                    style={{ marginTop: "-1rem" }}
                  >
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex7-active"
                        name="ex7"
                        checked={langRead == 1}
                        onChange={() => {
                          setLangRead(langRead == 1 ? 0 : 1);
                        }}
                        onClick={(e) => {
                          if (e.target.checked) {
                            e.target.checked = false;
                            setLangRead(0);
                          }
                        }}
                      />
                      <Label className="form-label" for="ex7-active">
                        Beginner
                      </Label>
                    </div>
                    <div className="form-check">
                      <Input
                        type="radio"
                        id="ex7-active"
                        name="ex7"
                        checked={langRead == 2}
                        onChange={() => {
                          setLangRead(langRead == 2 ? 0 : 2);
                        }}
                        onClick={(e) => {
                          if (e.target.checked) {
                            e.target.checked = false;
                            setLangRead(0);
                          }
                        }}
                      />
                      <Label className="form-label" for="ex7-active">
                        Fluent
                      </Label>
                    </div>
                  </div>
                </Col>
                <Col sm={12}>
                  <hr />
                </Col>
              </Row>
            </Form>
            <Button
              className="btn-icon"
              color="primary"
              onClick={() => {
                handleNewLang();
              }}
            >
              <Plus size={14} />
              <span className="align-middle ms-25">Add</span>
            </Button>
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
              color="primary"
              className="btn-next"
              onClick={() => stepper.next()}
            >
              <span className="align-middle d-sm-inline-block d-none">
                Next
              </span>
              <ArrowRight
                size={14}
                className="align-middle ms-sm-25 ms-0"
              ></ArrowRight>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default IndividualDetails;
