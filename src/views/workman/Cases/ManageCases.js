import React, { useEffect, useState } from "react";
import CaseData from "./CaseData";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
const ManageCases = () => {
  let [data1,setData1] =useState([]) 
  const [open, setOpen] = useState('');
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
  
  },[])

  return (
    <div>
      {
        (Array.isArray(data1))?
        data1.map((e)=>
        { 
          return (
            <div key={e.id} className="row mt-1">
            <Accordion  flush open={open} toggle={toggle} >
      <AccordionItem  >
        <AccordionHeader style={{borderBottom:"1px dashed gray" }} targetId={e.id}> <span className="fs-4"> {e.Title} </span></AccordionHeader>
        
        <AccordionBody  accordionId={e.id} >
          <div className="row">
          <p className="mt-1 col-6"><h6>Descriptions :</h6> {e.Desc}</p>
          <p className="mt-1 col-6"><h6>Identification no. :</h6>{e.id}</p>
          </div>
          <hr />
          <p><h6>Summary :</h6> {e.Summary}</p>
        </AccordionBody>
      </AccordionItem> </Accordion>
            </div>
          )
        })
        :<h4 className="container">No data found : \</h4>
      }
    </div>
  );
};

export default ManageCases;
