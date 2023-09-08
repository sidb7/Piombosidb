// ** Icons Import
import { Heart } from "react-feather";
import { Link } from "react-router-dom";
import { Card, CardBody, CardSubtitle, CardTitle, Col, Row } from "reactstrap";

const Footer = () => {
  return (
    <div>
       <Card className="p-1 mb-0 ">
      <p className='clearfix mb-0'>
      <span className='float-md-start d-block d-md-inline-block mt-25'>
        COPYRIGHT © {new Date().getFullYear()}{' '}
        <a href='/' rel='noopener noreferrer'>
          Piombo
        </a>
        <span className='d-none d-sm-inline-block'>, All rights Reserved</span>
      </span>
      <span className='float-md-end d-none d-md-block'>
        Hand-crafted & Made with
        <Heart size={14} />
      </span>

      

    </p>
   <hr />
  
   {
    (screen.width>768)?
 <>
     <CardBody className="">
      <Row xs={1} md={4} className="m-auto w-50">
        <Col tag={Link} style={{borderRight:"1px solid gray"}} to="/piombo/about" className="text-center">About us</Col>
        <Col tag={Link} style={{borderRight:"1px solid gray"}} to="/piombo/services" className="text-center">Services</Col>
        <Col tag={Link} style={{borderRight:"1px solid gray"}} to="/piombo/how-it-works" className="text-center">How it works</Col>
        <Col tag={Link} to="/piombo/support-library" className="text-center">Support library</Col>
      </Row>
    </CardBody>
  
  <p className="d-flex justify-content-center mt-2 " style={{color:"gray"}} >
    <span className="w-50 text-center">
      
For queries contact us: Manager, Imagine Marketing Limited Unit no. 204 & 205, 2nd floor, D-wing & E-wing,
Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharashtra-400093, India
    </span>
  </p>
  </>
  :
  <>
  <CardBody className="">
   <Row xs={1} md={4} className="m-auto w-50">
     <Col tag={Link}  to="/piombo/about" className="text-center">About us</Col>
     <Col tag={Link}  to="/piombo/services" className="text-center">Services</Col>
     <Col tag={Link}  to="/piombo/how-it-works" className="text-center">How it works</Col>
     <Col tag={Link} to="/piombo/support-library" className="text-center">Support library</Col>
   </Row>
 </CardBody>

<p className="d-flex justify-content-center  " style={{color:"gray"}} >
 <span className="w-100 text-center">
   
For queries contact us: Manager, Imagine Marketing Limited Unit no. 204 & 205, 2nd floor, D-wing & E-wing,
Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharashtra-400093, India
 </span>
</p>
</>
 }

    </Card>
    </div>
 
    
    
   
  );
};

export default Footer;
