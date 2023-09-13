import React, { useEffect, useState } from "react";
import {Trash2,CheckSquare} from 'react-feather'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Button,
   Modal, ModalHeader, ModalBody, ModalFooter, Toast} from "reactstrap";


const OpenCases = (args) => {

  const [modal, setModal] = useState(false);

  const toggle1 = () => setModal(!modal);


  let [data1,setData1] =useState([]) 
  const [open, setOpen] = useState('');
  const [closedCaseData,setClosedCaseData] = useState([])

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  useEffect(()=>
  {
   setData1(JSON.parse(localStorage.getItem("WorkmanCaseSet")))
   setClosedCaseData(JSON.parse(localStorage.getItem("WorkmanClosedCase")))
   
  },[])

 
  const handleRemove= (e)=>
  { 
    setModal(!modal);
    
    // console.log(e.Summary)
     
    // const Status = data1.map(m =>
    //   {
    //     if(m.id===e.id)
    //     {
    //     return{
    //       ...m,
    //       Status:"Closed"
    //     } }
    //     else{
    //       return m
    //     }
    //   })

    //   setData1(Status)
    
    //   localStorage.setItem("WorkmanCaseSet",JSON.stringify(Status));
    
    setClosedCaseData((prev)=>
    {
      if(Array.isArray(prev))
      {
        const list  = [...prev,{
          id:e.id,
          Title:e.Title,
          Desc:e.Desc,
          Summary:e.Summary,
          Status:e.Status
        }]
        localStorage.setItem("WorkmanClosedCase",JSON.stringify(list));
        return list
      }
      else
      {
        const list  = [{
          id:e.id,
          Title:e.Title,
          Desc:e.Desc,
          Summary:e.Summary,
          Status:e.Status
        },]
        localStorage.setItem("WorkmanClosedCase",JSON.stringify(list));
        return list
      }
    })

    
  
   
    const remove = data1.filter(t=>t.id!==e.id)
    setData1(remove)
    localStorage.setItem("WorkmanCaseSet",JSON.stringify(remove));
  
  }
  
  return (
    <div>

      {
        (Array.isArray(data1)&&data1.length!=0)?
        data1.map((e)=>
        { 
          return (
            <>
            
            <div key={e.id} className="row mt-1 d-flex justify-content-center">
             <div className="col-11  ">
            <Accordion flush open={open} toggle={toggle}>
      <AccordionItem>
        <AccordionHeader  style={{boxShadow:"2px 2px 8px  rgba(128, 128, 128, 0.577)"}} targetId={e.id}> <span className="fs-4 d-flex align-items-center"> {e.Title} </span></AccordionHeader>
      
        <AccordionBody style={{boxShadow:"1px 1px 8px rgba(128, 128, 128, 0.577)"}} accordionId={e.id}>
        <div className="row " style={{color:"gray"}}>
          <p className="mt-1 col-6 "><h6><b>Descriptions :</b></h6> {e.Desc}</p>
          <p className="mt-1 col-6"><h6><b>Identification no. :</b></h6>{e.id}</p>
          </div>
          <hr />
          <p style={{color:"gray"}} ><h6><b>Summary :</b></h6> {e.Summary}</p>
        </AccordionBody>
      </AccordionItem> </Accordion>
            
      </div> 

            <div className="col-1  d-flex justify-content-center align-items-center">
            <Button onClick={toggle1} className="d-flex justify-content-center align-items-center"  color="" ><CheckSquare size={20}/></Button> 
            </div>

            </div >
            
            <div>
            
      <Modal isOpen={modal} toggle={toggle1} {...args}  >
        <ModalHeader toggle={toggle1}>Confirm</ModalHeader>
        
        <ModalBody>
            Do you want to close this case ?
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

export default OpenCases;
