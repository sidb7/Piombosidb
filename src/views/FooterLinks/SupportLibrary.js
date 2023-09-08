import React, { useState } from 'react'
import { Button, Card, CardBody,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, } from 'reactstrap'

  import FooterComponent from "../../@core/layouts/components/footer";

import themeConfig from "@configs/themeConfig";
import Connect from './SupportLibraryLinks/Connect';
import FAQ from './SupportLibraryLinks/FAQ';

import Blogs from './SupportLibraryLinks/Blogs';
import Privacy from './SupportLibraryLinks/Privacy';
import PLCpolicy from './SupportLibraryLinks/PLCpolicy';
import TermsCon from './SupportLibraryLinks/TermsCon';
export default function SupportLibrary({ direction, ...args }) {
  
  const[width,setWidth] = useState(screen.width)
  const[tabs,setTabs] = useState("connect")
  window.onresize=()=>
  {
    setWidth(screen.width)
  }

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <>
    <div className='d-flex m-2 align-items-center'>
    <img src={themeConfig.app.appLogoImage} alt="logo" height="40" />
  <img
  
              src={themeConfig.app.appNameImage}
              className="ms-1"
              alt="Piombo"
              height="30"
            /></div>
  <hr />
    <div className='d-flex justify-content-center align-items-center'>
    <h1 >Support library</h1>
   
   </div>  

  
   <div className=' container-lg mt-2'>
   <div className='row '>
     <div className="col-lg-3 col-12 text-center" ><Button style={{border:"0px"}} onClick={()=>setTabs("connect")} color={(tabs==="connect")?"primary":""} className='w-100'>Connect with us</Button></div>
     <div className="col-lg-3 col-12 text-center" style={{borderLeft:(width>"970")?"1px solid gray":"0px"}} ><Button style={{border:"0px"}}  onClick={()=>setTabs("FAQ")} color={(tabs==="FAQ")?"primary":""} className='w-100'>FAQ</Button></div>
     
     <div className="col-lg-3 col-12 text-center" style={{borderLeft:(width>"970")?"1px solid gray":"0px"}} >
     <div className="d-flex ">
      <Dropdown   className='w-100' isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle   style={{border:"0px"}} className='w-100' color={(tabs==="TermPolicies"||tabs==="PLC"||tabs==="Privacy")?"primary":""}  caret>Policies</DropdownToggle>
        <DropdownMenu className='w-100' {...args}>
          <DropdownItem  onClick={()=>setTabs("TermPolicies")} className='w-100'>Terms & Conditions</DropdownItem>
          <DropdownItem  onClick={()=>setTabs("Privacy")} className='w-100'>Privacy Policy</DropdownItem>
          <DropdownItem  onClick={()=>setTabs("PLC")} className='w-100'>PLC policy</DropdownItem>
         
        </DropdownMenu>
      </Dropdown>
    </div>
    
     </div>
     <div className="col-lg-3 col-12 text-center" style={{borderLeft:(width>"970")?"1px solid gray":"0px"}} ><Button style={{border:"0px"}}  onClick={()=>setTabs("Blogs")} color={(tabs==="Blogs")?"primary":""} className='w-100'>Blogs</Button></div>
   </div>
   </div>
    <hr />
   <Card className='container-lg mt-3'>
    <CardBody>
      {(tabs==="connect")&&<Connect/>}
      {(tabs==="FAQ")&&<FAQ/>}
      {(tabs==="Policies")&&<TermsCon/>}
      {(tabs==="TermPolicies")&&<TermsCon/>}
      {(tabs==="Privacy")&&<Privacy/>}
      {(tabs==="PLC")&&<PLCpolicy/>}
      {(tabs==="Blogs")&&<Blogs/>}
    </CardBody>
   </Card>
   {/* <div className='mt-5 mb-0'>
   <FooterComponent/>
   </div> */}
    </>

  )
}
