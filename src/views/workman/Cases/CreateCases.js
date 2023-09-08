import React, { useState } from "react";
// import CaseData from "./CaseData";
import { v4 as uuidv4 } from 'uuid';
import { Button, Col, Form, FormGroup, FormText, Input, Label } from "reactstrap";
const CreateCases = () => {


  const [CaseData,SetCaseData] = useState(JSON.parse(localStorage.getItem("WorkmanCaseSet")))
  const [CaseSet,setCase] = useState({
    id:"",
    Title:"",
    Desc:"",
    Summary:""
  })
  
  const handleChange=(e)=>
  {
    const value = e.target.value;
  setCase({
    ...CaseSet,
    id:uuidv4(),
    [e.target.name]: value
  });
  }

  const handleCaseSubmit=(e)=>
  {
    e.preventDefault();

    SetCaseData((prev)=>
    {
        if(Array.isArray(prev))
        {
            const List =[...prev,CaseSet]
            localStorage.setItem("WorkmanCaseSet",JSON.stringify(List));
           return List; 
        }
        else
        {
            const List =[CaseSet]
            localStorage.setItem("WorkmanCaseSet",JSON.stringify(List));
           return List; 
        }
      
    })

    
    setCase({

      id:"",
      Title:"",
      Desc:"",
      Summary:""
    });
  }

  
  return (
    <div className="container-lg">

<Form onSubmit={e=>handleCaseSubmit(e)}>
  <FormGroup row>
    <Label
      for="Title"
      sm={2}
    >
      <h5>Title</h5>
    </Label>
    <Col sm={10}>
      <Input
        onChange={handleChange}
        id="Title"
        name="Title"
        value={CaseSet.Title}
        placeholder="Enter case Title"
        type="text"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="CaseDescription"
      sm={2}
    >
      <h5> Case description</h5>
    </Label>
    <Col sm={10}>
      <Input
        onChange={handleChange}
        id="CaseDescription"
        name="Desc"
        value={CaseSet.Desc}
        placeholder="Enter description for the case"
        type="text"
      />
    </Col>
  </FormGroup>
  
 
  <FormGroup row>
    <Label
      for="CaseSummary"
      sm={2}
    >
     <h5> Case summary</h5>
    </Label>
    <Col sm={10}>
      <Input
      onChange={handleChange}
        id="CaseSummary"
        value={CaseSet.Summary}
        name="Summary"
        type="textarea"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="File"
      sm={2}
    >
      <h5>File</h5>
    </Label>
    <Col sm={10}>
      <Input
        id="File"
        name="file"
        type="file"
      />
      <FormText>
        This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
      </FormText>
    </Col>
  </FormGroup>
  {/* <FormGroup
    row
    tag="fieldset"
  >
    <legend className="col-form-label col-sm-2">
      Radio Buttons
    </legend>
    <Col sm={10}>
      <FormGroup check>
        <Input
          name="radio2"
          type="radio"
        />
        {' '}
        <Label check>
          Option one is this and that—be sure to include why it‘s great
        </Label>
      </FormGroup>
      <FormGroup check>
        <Input
          name="radio2"
          type="radio"
        />
        {' '}
        <Label check>
          Option two can be something else and selecting it will deselect option one
        </Label>
      </FormGroup>
      <FormGroup
        check
        disabled
      >
        <Input
          disabled
          name="radio2"
          type="radio"
        />
        {' '}
        <Label check>
          Option three is disabled
        </Label>
      </FormGroup>
    </Col>
  </FormGroup> */}
  <FormGroup row>
    <Label
      for="checkbox2"
      sm={2}
    >
     
    </Label>
    <Col
      sm={{
        size: 10
      }}
    >
      <FormGroup check>
        <Input
          id="checkbox2"
          type="checkbox"
          required
        />
        {' '}
        <Label check>
          Yes, I agree to the terms and conditions
        </Label>
      </FormGroup>
    </Col>
  </FormGroup>
  <FormGroup
    check
    row
  >
    <Col
      sm={{
        offset: 2,
        size: 15
      }}
    >
      <Button id="b1" >
        Create Case
      </Button>
    </Col>
  </FormGroup>
</Form>

    
    </div>
  );
};

export default CreateCases;
