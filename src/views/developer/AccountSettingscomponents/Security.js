import React, { Fragment } from 'react'

import { Form,Card, CardBody, CardHeader, CardTitle, Col, FormFeedback, FormGroup, Input, Label, Row, Button } from 'reactstrap'

export default function Security() {
  return (
    
    <Card>
      <CardHeader className='border-bottom'>
        <CardTitle tag='h4'>Change Password</CardTitle>
      </CardHeader>
      <CardBody className='pt-1'>
      <Form>
  <Row className="row-cols-lg-auto g-3 align-items-center" xs={1}>
    <Col >
      <Label
        className="visually-hidden"
        for="CurrentPassword"
      >
        Current Password
      </Label>
      <Input
        id="CurrentPassword"
        name="CurrentPassword"
        placeholder="Current Password"
        type="password"
      />
    </Col>
    <Col>
      <Label
        className="visually-hidden"
        for="New Password"
      >
        New Password
      </Label>
      <Input
        id="New Password"
        name="New Password"
        placeholder="New Password"
        type="password"
      />
    </Col>
    <Col>
      <Label
        className="visually-hidden"
        for="RepeatPassword"
      >
        Retype new password
      </Label>
      <Input
        id="RepeatPassword"
        name="RepeatPassword"
        placeholder=" Retype new password"
        type="password"
      />
    </Col>
    {/* <Col>
      <FormGroup check>
        <Input
          id="exampleCheckbox"
          name="checkbox"
          type="checkbox"
        />
        <Label
          check
          for="exampleCheckbox"
        >
          Remember Me
        </Label>
      </FormGroup>
    </Col> */}
    
    <Col>
      <Button>
        Submit
      </Button>
    </Col>
 
  </Row>
  <Row >
  <Col xs={12} className='mt-2'>
                <p className='fw-bolder'>Password requirements:</p>
                <ul className='ps-1 ms-25'>
                  <li className='mb-50'>Minimum 8 characters long - the more, the better</li>
                  <li className='mb-50'>At least one lowercase character</li>
                  <li>At least one number, symbol, or whitespace character</li>
                </ul>
              </Col>
  </Row>
</Form>
      </CardBody>
    </Card>
  
  
  )
}
