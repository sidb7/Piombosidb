// ** Reactstrap Imports
import {
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { useState } from "react";
import { Link } from "react-router-dom";

import CardMedal from "./ui-elements/cards/advance/CardMedal";
import UserTimeline from "./ui-elements/cards/advance/CardUserTimeline";
import Sales2 from "./ui-elements/cards/analytics/Sales2";

const ProfileCompleteTwo = () => {
  // // Field validation states
  const [companyNumberValid, setCompanyNumberValid] = useState(false);
  const [companyNumber, setCompanyNumber] = useState("");
  const [gstNumberValid, setgstNumberValid] = useState(false);
  const [gstNumber, setgstNumber] = useState("");
  const [servicecityDropDown, setserviceCityDropDown] = useState(false);
  const [servicecityName, setserviceCityName] = useState([]);
  const [skillsDropDown, setskillsDropDown] = useState(false);
  const [skillsName, setskillsName] = useState([]);
  const [stateDropDown, setStateDropDown] = useState(false);
  const [stateName, setStateName] = useState("Maharashtra");

  const [firmDropDown, setFirmDropDown] = useState(false);
  const [firmName, setFirmName] = useState("Individual");

  //handle company number
  const handleCompanyNumber = (value) => {
    setCompanyNumber(value);
    const alphabet = new RegExp("(?=.*[a-zA-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&* ])");
    let i = 0;
    if (alphabet.test(value)) {
      i += 1;
    }
    if (number.test(value)) {
      i += 1;
    }
    if (!special.test(value)) {
      i += 1;
    }
    if (value.length <= 15) {
      i += 1;
    }
    if (i == 4) {
      setCompanyNumberValid(true);
    } else {
      setCompanyNumberValid(false);
    }
  };

  //handle gst number
  const handleGSTNumber = (value) => {
    setgstNumber(value);
    const alphabet = new RegExp("(?=.*[a-zA-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&* ])");
    let i = 0;
    if (alphabet.test(value)) {
      i += 1;
    }
    if (number.test(value)) {
      i += 1;
    }
    if (!special.test(value)) {
      i += 1;
    }
    if (value.length <= 15) {
      i += 1;
    }
    if (i == 4) {
      setgstNumberValid(true);
    } else {
      setgstNumberValid(false);
    }
  };

  //handle firm dropdown
  const handleFirmDrop = () => {
    setFirmDropDown(!firmDropDown);
  };

  //handle state dropdown
  const handleStateDrop = () => {
    setStateDropDown(!stateDropDown);
  };

  //handle city dropdown
  const handleserviceCityDrop = () => {
    setserviceCityDropDown(!servicecityDropDown);
  };

  //handle skills dropdown
  const handleskillsDrop = () => {
    setskillsDropDown(!skillsDropDown);
  };

  const handleskillsArray = (name) => {
    if (
      skillsName.find((skills) => {
        return skills == name;
      }) == undefined
    ) {
      let newArr = skillsName;
      newArr.push(name);
      setskillsName(newArr);
    } else {
      let newArr = skillsName.filter((skills) => {
        return skills != name;
      });
      setskillsName(newArr);
    }
  };

  const handleserviceCityArray = (name) => {
    if (
      servicecityName.find((city) => {
        return city == name;
      }) == undefined
    ) {
      let newArr = servicecityName;
      newArr.push(name);
      setserviceCityName(newArr);
    } else {
      let newArr = servicecityName.filter((city) => {
        return city != name;
      });
      setserviceCityName(newArr);
    }
  };
  return (
    <div>
      <Row xs="1">
        <Col>
          <CardTitle tag="h2" className="fw-bold mb-1">
            Welcome to Piombo. Please fill in the empty fields!
          </CardTitle>
        </Col>
      </Row>
      <Row md="2" sm="2" xs="1">
        <Col>
          <Form
            className="auth-register-form mt-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-1">
              <Label className="form-label" for="register-name">
                Bank Name
              </Label>
              <Input
                type="text"
                id="register-name"
                placeholder="bank name"
                autoFocus
              />
            </div>
            <div className="mb-1">
              <Label className="form-label" for="register-name">
                Bank Branch Name
              </Label>
              <Input
                type="text"
                id="register-name"
                placeholder="branch name"
                autoFocus
              />
            </div>
            <div className="mb-1">
              <Label className="form-label" for="register-email">
                Account number
              </Label>
              <Input
                type="number"
                id="register-email"
                placeholder="XXXXXXX"
                // onChange={(e) => handleEmail(e.target.value)}
              />
            </div>
            <div className="mb-1">
              <Label className="form-label" for="register-email">
                IFSC Code
              </Label>
              <Input
                type="text"
                id="register-email"
                placeholder="XXXXXX"
                // onChange={(e) => handleEmail(e.target.value)}
              />
            </div>
            <div className="mb-1">
              <Label className="form-label" for="register-name">
                Serviceable City
              </Label>
              <Dropdown
                isOpen={servicecityDropDown}
                toggle={handleserviceCityDrop}
              >
                <DropdownToggle caret color="primary">
                  {servicecityName.length} cities selected
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    children
                    active={
                      servicecityName.find((city) => {
                        return city == "Mumbai";
                      }) != undefined
                    }
                    onClick={() => {
                      handleserviceCityArray("Mumbai");
                    }}
                  >
                    Mumbai
                  </DropdownItem>
                  <DropdownItem
                    children
                    active={
                      servicecityName.find((city) => {
                        return city == "Pune";
                      }) != undefined
                    }
                    onClick={() => {
                      handleserviceCityArray("Pune");
                    }}
                  >
                    Pune
                  </DropdownItem>
                  <DropdownItem
                    children
                    active={
                      servicecityName.find((city) => {
                        return city == "Delhi";
                      }) != undefined
                    }
                    onClick={() => {
                      handleserviceCityArray("Delhi");
                    }}
                  >
                    Delhi
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="mb-1">
              <Label className="form-label" for="register-name">
                Skill Set
              </Label>
              <Dropdown isOpen={skillsDropDown} toggle={handleskillsDrop}>
                <DropdownToggle caret color="primary">
                  {skillsName.length} skills selected
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    children
                    active={
                      skillsName.find((skills) => {
                        return skills == "Skill 1";
                      }) != undefined
                    }
                    onClick={() => {
                      handleskillsArray("Skill 1");
                    }}
                  >
                    Skill 1
                  </DropdownItem>
                  <DropdownItem
                    children
                    active={
                      skillsName.find((skills) => {
                        return skills == "Skill 2";
                      }) != undefined
                    }
                    onClick={() => {
                      handleskillsArray("Skill 2");
                    }}
                  >
                    Skill 2
                  </DropdownItem>
                  <DropdownItem
                    children
                    active={
                      skillsName.find((skills) => {
                        return skills == "Skill 3";
                      }) != undefined
                    }
                    onClick={() => {
                      handleskillsArray("Skill 3");
                    }}
                  >
                    Skill 3
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </Form>
        </Col>

        {/* -------------------------------------------------------------- */}

        <Col>
          <Form
            className="auth-register-form mt-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-1">
              <Label className="form-label" for="signup-details-photo-copy">
                Passport Photograph
              </Label>
              <Input
                type="file"
                id="signup-details-photo-copy"
                placeholder=""
              />
            </div>
            <div className="mb-1">
              <Label
                className="form-label"
                for="signup-details-aadhar-card-copy"
              >
                AADHAR card
              </Label>
              <Input
                type="file"
                id="signup-details-aadhar-card-copy"
                placeholder=""
              />
            </div>
            <div className="mb-1">
              <Label className="form-label" for="signup-details-pan-card-copy">
                PAN Card
              </Label>
              <Input
                type="file"
                id="signup-details-pan-card-copy"
                placeholder=""
              />
            </div>
            <div className="mb-1">
              <Label className="form-label" for="signup-details-Cheque-copy">
                Cancelled Cheque
              </Label>
              <Input
                type="file"
                id="signup-details-Cheque-copy"
                placeholder=""
              />
            </div>
            <div className="mb-1">
              <Label className="form-label" for="signup-details-GST-card-copy">
                GST certificate
              </Label>
              <Input
                type="file"
                id="signup-details-GST-card-copy"
                placeholder=""
              />
            </div>
            <div className="mb-1">
              <Label
                className="form-label"
                for="signup-details-Authorization-card-copy"
              >
                Authorization Letter
              </Label>
              <Input
                type="file"
                id="signup-details-Authorization-card-copy"
                placeholder=""
              />
            </div>
          </Form>
        </Col>
      </Row>
      <Row xs="1">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            // marginTop: "-8rem",
          }}
        >
          <Button tag={Link} to="/notAuthorized" color="primary">
            Finish
          </Button>
        </div>
      </Row>
    </div>
  );
};

export default ProfileCompleteTwo;
