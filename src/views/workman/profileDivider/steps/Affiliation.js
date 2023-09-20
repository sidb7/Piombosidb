// ** React Imports
import { Fragment, useState, useEffect } from "react";
// import InputNumber from "rc-input-number";
import { InputNumber } from "antd";

// ** Third Party Components
import Select from "react-select";

import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  X,
  Plus,
  Minus,
} from "react-feather";

// ** Utils
import { selectThemeColors } from "@utils";
import "@styles/react/libs/input-number/input-number.scss";

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
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return [innerWidth, innerHeight];
}

const Affiliation = ({ stepper, type }) => {
  const [showSkill, setShowSkill] = useState(true);

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

  const [selectedSkills, setSelectedSkills] = useState([]);
  const pseudoSkillSelected = [
    {
      value: "skill2",
      options: [
        { value: "skill-sub2", experience: "2", testemonial: true },
        { value: "skill-sub3", experience: "1", testemonial: false },
        { value: "skill-sub2", experience: "2", testemonial: true },
        { value: "skill-sub3", experience: "1", testemonial: false },
        { value: "skill-sub2", experience: "2", testemonial: true },
        { value: "skill-sub3", experience: "1", testemonial: false },
        { value: "skill-sub2", experience: "2", testemonial: true },
        { value: "skill-sub3", experience: "1", testemonial: false },
      ],
    },
    {
      value: "skill4",
      options: [
        { value: "skill-sub1", experience: "0", testemonial: false },
        { value: "skill-sub3", experience: "1", testemonial: false },
      ],
    },
  ];
  const skillSet = [
    {
      value: "skill 1",
      options: [
        { value: "skill-sub1" },
        { value: "skill-sub2" },
        { value: "skill-sub3" },
        { value: "skill-sub4" },
      ],
    },
    {
      value: "skill 2",
      options: [
        { value: "skill-sub1" },
        { value: "skill-sub2" },
        { value: "skill-sub3" },
        { value: "skill-sub4" },
      ],
    },
    {
      value: "skill 3",
      options: [
        { value: "skill-sub1" },
        { value: "skill-sub2" },
        { value: "skill-sub3" },
        { value: "skill-sub4" },
      ],
    },
    {
      value: "skill 4",
      options: [
        { value: "skill-sub1" },
        { value: "skill-sub2" },
        { value: "skill-sub3" },
        { value: "skill-sub4" },
      ],
    },
  ];

  const [arr, setArr] = useState([]);
  const [addSkill, setAddSkill] = useState(false);
  const [skills, setSkills] = useState([]);
  const [selectSkill, setSelectSkill] = useState([]);

  const handleSkillAddButton = () => {
    setAddSkill(true);
    handleAddSkill(selectedSkills);
  };

  const handleAddSkill = (skillArr) => {
    let ar = [];
    let sk = [];
    skillSet.forEach((element) => {
      let i = skillArr.filter((obj) => {
        return obj.value === element.value;
      });
      if (i.length === 1) {
        let j = element.options.filter((k) => {
          return (
            0 ===
            i[0].options.filter((l) => {
              return l.value === k.value;
            }).length
          );
        });
        if (j.length > 0) {
          sk.push({ value: element.value, label: element.value });
          ar.push({ value: element.value, options: j });
        }
      } else {
        sk.push({ value: element.value, label: element.value });
        ar.push({ value: element.value, options: element.options });
      }
    });
    setArr(ar);
    // console.log(sk);
    setSkills(sk);
  };

  const handleAddSubSkill = (item, val, exp) => {
    // console.log(selectedSkills);
    let i = selectedSkills.filter((obj) => {
      return obj.value === item.value;
    });
    if (i.length === 0) {
      setSelectedSkills([
        ...selectedSkills,
        {
          value: item.value,
          options: [
            {
              value: val,
              experience: exp,
              testemonial: false,
            },
          ],
        },
      ]);
    } else {
      let j = selectedSkills.filter((obj) => {
        return obj.value !== item.value;
      });
      let k = i[0].options.filter((x) => {
        return x.value !== val;
      });
      k.push({
        value: val,
        experience: exp,
        testemonial: false,
      });
      i[0].options = k;
      // console.log(j, i);
      j.push(i[0]);
      setSelectedSkills(j);
      // handleAddSkill(j);
    }
  };

  return (
    <div>
      <Card>
        <CardHeader style={{ display: "block", marginBottom: "-1rem" }}>
          <Row>
            <Col xs="10" md="11">
              <div className="content-header">
                <h3 className="mb-0">Skills Details</h3>
                {/* <small>Enter Your Company Details.</small> */}
              </div>
            </Col>
            <Col xs="2" md="1">
              {showSkill ? (
                <ChevronUp
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowSkill(!showSkill)}
                ></ChevronUp>
              ) : (
                <ChevronDown
                  size={20}
                  className="align-middle ms-sm-25 ms-0"
                  onClick={() => setShowSkill(!showSkill)}
                ></ChevronDown>
              )}
            </Col>
          </Row>
        </CardHeader>
        {showSkill ? (
          <CardBody>
            <Row>
              <Col md="4">
                <Button
                  color="primary"
                  style={{ marginBottom: "1rem" }}
                  onClick={handleSkillAddButton}
                  disabled={addSkill}
                >
                  Add Skills
                </Button>
              </Col>
            </Row>
            {addSkill ? (
              <>
                <Row>
                  <Col xs="12" className="mb-md-0 mb-1">
                    <Label className="form-label" for={`item-name-`}>
                      Skills
                    </Label>
                    <Select
                      theme={selectThemeColors}
                      id={`skill-${type}`}
                      className="react-select"
                      classNamePrefix="select"
                      isMulti
                      menuPlacement="top"
                      closeMenuOnSelect={false}
                      blurInputOnSelect={false}
                      value={selectSkill}
                      options={skills.filter((obj) => {
                        return (
                          0 ===
                          selectSkill.filter((item) => {
                            return obj.value === item.value;
                          }).length
                        );
                      })}
                      onChange={(e) => {
                        setSelectSkill(e);
                      }}
                    />
                  </Col>
                </Row>
                {arr
                  .filter((obj) => {
                    return (
                      1 ===
                      selectSkill.filter((item) => {
                        return item.value === obj.value;
                      }).length
                    );
                  })
                  .map((item, id) => (
                    <div key={id} style={{ marginTop: "1.5rem" }}>
                      <h3>{item.value}</h3>
                      {item.options.map((itm, idx) => (
                        <div
                          style={{ display: "inline-flex", flexWrap: "wrap" }}
                        >
                          <div
                            style={{ display: "flex-1", marginRight: "1rem" }}
                          >
                            <Row style={{ marginTop: "0.3rem" }}>
                              <Label
                                className="form-label"
                                for="decimal-number-input"
                              >
                                {itm.value}-experience (in years)
                              </Label>
                            </Row>
                            <Row
                              style={{ width: "130px", marginLeft: "0.3rem" }}
                            >
                              <InputNumber
                                step={0.5}
                                min={0}
                                defaultValue={0}
                                // upHandler={<Plus />}
                                // downHandler={<Minus />}
                                id={`decimal-number-input-${idx}-${item.value}-${itm.value}`}
                              />
                            </Row>
                          </div>
                          <div
                            style={{
                              display: "flex-1",
                              marginRight: "1rem",
                              maxWidth: "300px",
                            }}
                          >
                            <Label
                              className="form-label"
                              for="signup-details-photo-copy"
                            >
                              Testemonial
                            </Label>
                            <Input
                              type="file"
                              multiple
                              id="signup-details-photo-copy"
                              placeholder="Upload Testemonial"
                            />
                          </div>
                          {windowSize[0] < 493 ? (
                            <div
                              style={{ display: "flex-1", marginRight: "1rem" }}
                            >
                              <Button
                                color="primary"
                                style={{
                                  marginTop: "0.2rem",
                                  marginBottom: "1rem",
                                  padding: "0.5rem",
                                }}
                                onClick={() => {
                                  // console.log(`${item.options[idx].value} - `);
                                  let exp = document.getElementById(
                                    `decimal-number-input-${idx}-${item.value}-${itm.value}`
                                  ).value;
                                  // document.getElementById(
                                  //   `decimal-number-input-${idx}`
                                  // ).value = 0;
                                  if (exp > 0.0) {
                                    setArr(arr);
                                    handleAddSubSkill(item, itm.value, exp);
                                  } else {
                                    alert("add experience!!");
                                  }
                                }}
                              >
                                <Plus size={14} />
                              </Button>
                            </div>
                          ) : (
                            <div
                              style={{ display: "flex-1", marginRight: "1rem" }}
                            >
                              <Button
                                color="primary"
                                style={{
                                  marginTop: "1.7rem",
                                  padding: "0.5rem",
                                }}
                                onClick={() => {
                                  // console.log(`${item.options[idx].value} - `);
                                  let exp = document.getElementById(
                                    `decimal-number-input-${idx}-${item.value}-${itm.value}`
                                  ).value;
                                  // document.getElementById(
                                  //   `decimal-number-input-${idx}`
                                  // ).value = 0;
                                  if (exp > 0.0) {
                                    setArr(arr);
                                    handleAddSubSkill(item, itm.value, exp);
                                  } else {
                                    alert("add experience!!");
                                  }
                                }}
                              >
                                <Plus size={14} />
                              </Button>
                            </div>
                          )}

                          {selectedSkills.filter((x) => {
                            return x.value === item.value;
                          }).length === 1 &&
                          selectedSkills
                            .filter((x) => {
                              return x.value === item.value;
                            })[0]
                            .options.filter((z) => {
                              return z.value === itm.value;
                            }).length === 1 ? (
                            <div
                              style={{ display: "flex-1", marginRight: "3rem" }}
                            >
                              <Button
                                color="danger"
                                outline
                                style={{
                                  marginTop: "1.7rem",
                                  padding: "0.5rem",
                                }}
                                onClick={() => {
                                  let a = selectedSkills
                                    .filter((o) => {
                                      return o.value === item.value;
                                    })[0]
                                    .options.filter((s) => {
                                      return s.value !== itm.value;
                                    });
                                  let b = selectedSkills.filter((o) => {
                                    return o.value !== item.value;
                                  });
                                  if (a.length > 0) {
                                    b.push({
                                      value: item.value,
                                      options: a,
                                    });
                                  }
                                  setSelectedSkills(b);
                                }}
                              >
                                <X size={14} />
                              </Button>
                            </div>
                          ) : (
                            <div
                              style={{
                                marginRight: "5rem",
                                display: "flex-1",
                              }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                <Row style={{ marginTop: "2rem" }}>
                  <Col xs="6" md="4">
                    <Button
                      color="primary"
                      style={{ marginBottom: "1rem" }}
                      onClick={() => {
                        setAddSkill(false);
                      }}
                    >
                      Close
                    </Button>
                  </Col>
                </Row>
              </>
            ) : (
              <p />
            )}
            {selectedSkills.length > 0 ? (
              <Card
                style={{
                  boxShadow: "2rem",
                  backgroundColor: "#ededed",
                  borderRadius: "2rem",
                }}
              >
                <CardHeader>
                  <b>Skill Summary</b>
                </CardHeader>
                <CardBody>
                  {selectedSkills.map((obj) => (
                    <Row
                      style={{
                        margin: "1rem 2rem",
                      }}
                    >
                      <Col className="d-flex justify-content-center" md="1">
                        <h5>{obj.value}</h5>
                      </Col>
                      <Col
                        md="7"
                        style={{ display: "inline-flex", flexWrap: "wrap" }}
                      >
                        {obj.options.map((item) => (
                          <div
                            style={{ display: "flex-1", marginRight: "1rem" }}
                          >
                            {item.value} - {item.experience} years
                          </div>
                        ))}
                      </Col>
                      <Col md="2" className="d-flex justify-content-center">
                        {windowSize[0] < 768 || windowSize[0] > 1091 ? (
                          <Button
                            color="danger"
                            style={{ height: "3rem" }}
                            outline
                            disabled={addSkill}
                            onClick={() => {
                              setAddSkill(true);
                              let i = [{ value: obj.value, label: obj.value }];
                              setSelectSkill(i);
                            }}
                          >
                            <X size={14} className="me-50" />
                            <span>Edit</span>
                          </Button>
                        ) : (
                          <Button
                            color="danger"
                            style={{ height: "3rem" }}
                            outline
                            // disabled={addSkill}
                            onClick={() => {
                              if (!addSkill) {
                                setAddSkill(true);
                                let i = [
                                  { value: obj.value, label: obj.value },
                                ];
                                setSelectSkill(i);
                              } else {
                                alert("Close Input section first!");
                              }
                            }}
                          >
                            <span>Edit</span>
                          </Button>
                        )}
                      </Col>
                      <Col md="2" className="d-flex justify-content-center">
                        {windowSize[0] < 768 || windowSize[0] > 1091 ? (
                          <Button
                            color="danger"
                            style={{ height: "3rem" }}
                            outline
                            // disabled={addSkill}
                            onClick={() => {
                              if (!addSkill) {
                                let i = selectedSkills.filter((o) => {
                                  return o.value !== obj.value;
                                });
                                setSelectedSkills(i);
                              } else {
                                alert("Close Input section first!");
                              }
                            }}
                          >
                            <X size={14} className="me-50" />
                            <span>Delete</span>
                          </Button>
                        ) : (
                          <Button
                            color="danger"
                            style={{ height: "3rem" }}
                            outline
                            disabled={addSkill}
                            onClick={() => {
                              let i = selectedSkills.filter((o) => {
                                return o.value !== obj.value;
                              });
                              setSelectedSkills(i);
                            }}
                          >
                            <span>Delete</span>
                          </Button>
                        )}
                      </Col>
                    </Row>
                  ))}
                </CardBody>
              </Card>
            ) : (
              <p />
            )}
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row></Row>
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
              onClick={() => toast.success("Submitted successfull")}
              tag={Link}
              to={"/workman-Individual/dashboard"}
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
