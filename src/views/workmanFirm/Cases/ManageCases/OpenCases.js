
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import {  Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Progress} from "reactstrap";


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
          date:e.date
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
          date:e.date
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
     <b> {(e.Title+"").charAt(0).toUpperCase()+(e.Title+"").substring(1)}</b>
    </CardTitle>
    <CardSubtitle
      className="text-muted w-100"
      tag="h5"
    >
     Id- {(e.id+"").substring(0,13)}
    </CardSubtitle>
  </CardBody>
  <img
    alt="Card cap"
    src="https://picsum.photos/id/297/318/180"
    width="100%"
  />
  <CardBody>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>

    <div>
    <div  style={{lineHeight:"2rem"}} >
   <b > Progress - 83% </b></div>

   <div > <Progress
    className="mb-1"
    style={{
      height: '5px'
    }}
    value={83}
    
  > </Progress> </div> </div>
    <CardText
      className="text-muted"
      tag="h6"
    >
    {e.date}
    </CardText>
    <CardLink tag={Link}  to={`/workman-Individual/CaseDetails/${e.id}`} >
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
