
import React, { useEffect, useState } from "react";
import { X } from "react-feather";
import { BiCollapse, BiExpand } from "react-icons/bi";
import { PiHammer } from "react-icons/pi";
import { LuTimer} from "react-icons/lu";
import {ImLocation} from "react-icons/im";
import {AiOutlineBuild} from "react-icons/ai";
import {FiTool } from "react-icons/fi";
import { Link } from "react-router-dom";
import {  Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Progress, Button, Spinner, CardHeader} from "reactstrap";


const OpenCases = () => {

  const [modal, setModal] = useState(false);
  const [WindowWidth, setWindowWidth] = useState("");
  
  const toggle1 = () => setModal(!modal);


  let [data1,setData1] =useState([]) 
  const [open, setOpen] = useState('');
  const [closedCaseData,setClosedCaseData] = useState([])
  const [Expand, setExpand] = useState(false);
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
 
  useEffect(()=>
  {
    setData1(JSON.parse(localStorage.getItem("CustomerCaseSet")))
    setClosedCaseData(JSON.parse(localStorage.getItem("CustomerClosedCase")))
  
   window.scrollBy(0,-1000)
  },[])

 
  const handleAccept= (e)=>
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
          ServiceType:e.ServiceType,
          SubServiceType:e.SubServiceType,
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
          ServiceType:e.ServiceType,
          SubServiceType:e.SubServiceType,
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

  const handleRemove= (e)=>
  { 
    setModal(!modal);
    
    const remove = data1.filter(t=>t.id!==e.id)
    setData1(remove)
    localStorage.setItem("CustomerCaseSet",JSON.stringify(remove));
  
  }
  useEffect(()=>
  {
    setWindowWidth(screen.availWidth)
  
  })
  return (
    <>
            {data1.length!=0? (
              <>
                
              <div className="row">
                  {data1.map((e) => {
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
<hr />

<div className="row mb-1">
<div className="col-6"> <b>Service :</b> {e.ServiceType}</div>
<div className="col-6"> <b>type :</b> {e.SubServiceType} </div>
</div>
<div className="row mb-1">
<div className="col-6"> <b>Worker :</b> none </div>
<div className="col-6"> <b>Location :</b> Andheri </div>

</div>
    <CardText className="mt-2">
    <h6>Case Description :</h6>
      Some quick example text to build on the card titleard‘s content.
    </CardText>
    
    
    <CardText
      className="text-muted"
      tag="h6"
    >
    {e.date}
    </CardText>
    <CardLink tag={Link}   to={`/workman-Individual/OpenCasesDetails/${e.id}`} >
      View details
    </CardLink>
   <div className="row mt-1">
<div className="col-6 "><Button className="w-100" onClick={()=>handleAccept(e)} color="primary">Accept</Button></div>
<div className="col-6 "><Button className="w-100" onClick={()=>handleRemove(e)} color="danger">Decline</Button></div>
   </div>
  
  </CardBody>
</Card>
</div>
            </>
                    );
                  })}
              </div>
              </>
            ): <h3>No Data : /</h3> }
          </>
  );
};

export default OpenCases;
