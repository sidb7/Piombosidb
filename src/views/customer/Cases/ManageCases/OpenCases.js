
import React, { useEffect, useState } from "react";
import { FaUserXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {  Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Progress, Badge} from "reactstrap";


const OpenCases = (args) => {

  const [modal, setModal] = useState(false);

  const toggle1 = () => setModal(!modal);


  const [data1,setData1] =useState(JSON.parse(localStorage.getItem("CustomerCaseSet"))) 
  const [open, setOpen] = useState('');
  const [closedCaseData,setClosedCaseData] = useState(JSON.parse(localStorage.getItem("CustomerClosedCase")))

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
 
  useEffect(()=>
  {
 
    setInterval(() => {
      setData1(JSON.parse(localStorage.getItem("CustomerCaseSet")))
      setClosedCaseData(JSON.parse(localStorage.getItem("CustomerClosedCase")))
    }, 1000);
    
  },[
100
  ])

 
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
          date:e.date
        }]
        localStorage.setItem("CustomerClosedCase",JSON.stringify(list));
        return list
      }
      else
      {
        const list  = [{
          id:e.id,
          Title:e.Title,
          Desc:e.Desc,
          Summary:e.Summary,
          date:e.date
        },]
        localStorage.setItem("CustomerClosedCase",JSON.stringify(list));
        return list
      }
    })

    
  
   
    const remove = data1.filter(t=>t.id!==e.id)
    setData1(remove)
    localStorage.setItem("CustomerCaseSet",JSON.stringify(remove));
  
  }
 
  return (
    <div className="row ">

      {
        (Array.isArray(data1)&&data1.length!=0)?
        data1.map((e)=>
        { 
          return (
            <>
            <div className="col-lg-3 col-md-4 col-12 " key={e.id}>
            <Card  className="w-100"
  style={{
    width: '20rem'
  }}
>
  <CardBody>
    <CardTitle tag="h2">
    <div className="position-relative d-flex"> <b> {(e.Title+"").charAt(0).toUpperCase()+(e.Title+"").substring(1)}</b>
    <div className="position-absolute end-0 d-flex align-items-center"><FaUserXmark size={18} color="#DE4459" /></div>

      </div>
    </CardTitle>
    <CardSubtitle
      className="text-muted w-100"
      tag="h5"
    >
     Id- {(e.id+"").substring(0,13)}
    </CardSubtitle>
<hr />

<div className="row mb-1">
<div className="col-6"> <b>Service :</b> sample </div>
<div className="col-6"> <b>Type :</b> none </div>
</div>
    <CardText className="mt-2">
    <h6>Case Description :</h6>
      Some quick example text to build on the card titleard‘s content.
    </CardText>
    
    <hr className="mb-0" />
<div className="text-center text-danger fs-5 fw-bolder p-0 m-0">Worker unassigned</div>
<hr className="mt-0"/>
    <CardText
      className="text-muted"
      tag="h6"
    >
    {e.date}
    </CardText>
    <CardLink tag={Link}  to={`/customer/CaseDetails/${e.id}`} >
      View details
    </CardLink>
   
  
  </CardBody>
</Card>
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
