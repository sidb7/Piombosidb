import React, { useEffect, useState } from "react";
import {CheckCircle, Trash2} from 'react-feather'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Button,
  Modal, ModalHeader, ModalBody, ModalFooter, Toast} from "reactstrap";
const ClosedCases = (args) => {

  let [data1,setData1] =useState([]) 
  const [open, setOpen] = useState('');

  const [modal, setModal] = useState(false);

  const toggle1 = () => setModal(!modal);

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  useEffect(()=>
  {
   setData1(JSON.parse(localStorage.getItem("WorkmanClosedCase")))
  
  },[])

  const handleRemove=(e)=>
  {
    setModal(!modal);
    const remove = data1.filter(t=>t.id!==e.id)
    setData1(remove)
    localStorage.setItem("WorkmanClosedCase",JSON.stringify(remove));
    
  }
  return (
    <div>
      {
        (Array.isArray(data1)&&data1.length!=0)?
        data1.map((e)=>
        { 
          return (
            <>
            
            <div key={e.id} className="row mt-1 " >
              <div className="col-11 ">
            <Accordion flush open={open} toggle={toggle}>
      <AccordionItem>
      <AccordionHeader  style={{boxShadow:"1px 1px 8px  rgba(128, 128, 128, 0.577)"}} targetId={e.id}><CheckCircle size={25} color="lightgreen"/>&nbsp; &nbsp; <span className="fs-4 d-flex align-items-center"> {e.Title} </span></AccordionHeader>
        
        <AccordionBody style={{boxShadow:"1px 1px 8px rgba(128, 128, 128, 0.577)"}} accordionId={e.id}>
          <div className="row " style={{color:"gray"}}>
          <p className="mt-1 col-6 "><h6><b>Descriptions :</b></h6> {e.Desc}</p>
          <p className="mt-1 col-6"><h6><b>Identification no. :</b></h6>{e.id}</p>
          </div>
          <hr />
          <p style={{color:"gray"}}><h6><b>Summary :</b></h6> {e.Summary}</p>
        </AccordionBody>
      </AccordionItem> </Accordion>
            
            </div >
           
            <div className="col-1  d-flex justify-content-center align-items-center">
            <Button  onClick={toggle1}  color="" style={{border:"none"}} className="text-danger" >< Trash2 /></Button> 
            </div>
            <Modal isOpen={modal} toggle={toggle1} {...args}>
              <ModalHeader toggle={toggle1}>Confirm</ModalHeader>
              
              <ModalBody>
                  Do you want to delete this case ?
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={m=>handleRemove(e)}>
                 Yes
                </Button>{' '}
                <Button color="secondary" onClick={toggle1}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
         
          </div>
            </>
          )
        })
        :<h4 className="container-sm">No data found : \</h4>
      }
    </div>
  );
};

export default ClosedCases;
