
import React, { useEffect, useState } from "react";
import { X } from "react-feather";
import { BiCollapse, BiExpand } from "react-icons/bi";
import { PiHammer } from "react-icons/pi";
import { LuTimer} from "react-icons/lu";
import {ImLocation} from "react-icons/im";
import {AiOutlineBuild} from "react-icons/ai";
import {FiTool } from "react-icons/fi";
import { Link } from "react-router-dom";
import {  Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Progress, Button, Spinner} from "reactstrap";


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
  useEffect(()=>
  {
    setWindowWidth(screen.availWidth)
  
  })
  return (
    <Card style={{  overflowX: (WindowWidth<"850")? "scroll":"visible",}}>
            {Array.isArray(data1)? (
              <>
                
              <div className="my-1 d-flex justify-content-center position-sticky top-0 w-100">
               <div className="position-absolute start-0 ms-1" style={{cursor:"pointer"}}  onClick={()=>{setExpand(!Expand)}} > {Expand!=true?<BiExpand size={20}/>:<BiCollapse size={20}/> } </div>
                <div><h3>
                
                  <b>{data1.length}&nbsp;Open Cases</b>
                
                </h3></div></div>
                <div
                  className=" row mb-1   px-1"
                  id="AddProductList"
                  style={{
                    height: "auto",
                    width: (WindowWidth<"850")? "1000px":"" ,
                   
                    maxHeight: (Expand===true)? "800px":"500px",
                    overflowY: "auto",
                   
                  }}
                >
                  <hr className="mb-0" />
                  <div
                    className="col-1 bg-primary text-light py-1 d-flex justify-content-center align-items-center position-sticky top-0"
                    style={{
                      borderRight: "1px solid gray",
                      borderRadius: "6px 0px 0px 0px",
                    }}
                  >
                    <b>Id</b>
                  </div>

                  <div className="col-2 text-center bg-primary text-light py-1 d-flex justify-content-center align-items-center position-sticky top-0">
                    <b>Case Title</b>
                  </div>
                  <div
                    className="col-2 bg-primary text-light py-1 d-flex justify-content-center align-items-center position-sticky top-0"
                    style={{
                      
                      borderLeft: "1px solid gray",
                    }}
                  >
                       <b>Application</b>
                  </div>
                  <div
                    className="col-3 bg-primary text-light py-1 d-flex justify-content-center align-items-center position-sticky top-0"
                    style={{
                      
                      borderLeft: "1px solid gray",
                    }}
                  >
                    <b>Description</b>
                  </div>
                  
                  <div
                    className="col-2 bg-primary text-light py-1 d-flex justify-content-center align-items-center position-sticky top-0"
                    style={{
                      borderRight: "1px solid gray",
                      borderLeft: "1px solid gray",
                    }}
                  >
                    <b>Location</b>
                  </div>
                 
                  <div
                    className="col-2 bg-primary text-light py-1 d-flex justify-content-center align-items-center position-sticky top-0"
                    style={{ borderRadius: "0px 6px 0px 0px", zIndex: 1 }}
                  >
                    <b>Details</b>
                  </div>
                  <hr className="mb-0" />
                  {data1.map((e) => {
                    return (
                      <>
                        <hr className="mb-0 mt-0" />
                        <div 
                          className="col-1 text-center p-0  d-flex justify-content-center align-items-center "
                      
                        >
                         <b>{(e.id+"").slice(0,4)}</b>
                        </div>

                        <div
                          className="col-2 text-center py-1  d-flex justify-content-center align-items-center "
                          style={{
                            borderLeft: "1px solid gray",
                           borderLeftStyle:" dashed"
                          }}
                        >
                         <div className="text-center"><b>{(e.Title+"").charAt(0).toUpperCase()+(e.Title).slice(1)}</b>
                          {(e.Title=="case 1")&&<p className="text-muted d-flex align-items-center  m-0">
                            <PiHammer size={16} color="#63B9CD"/>&nbsp;Installation</p>
                            }
                             {(e.Title=="case 2")&&<p  className="text-muted d-flex align-items-center  m-0">
                            <FiTool size={16} color="#f5a002"/>&nbsp;Repair/Replace</p>
                            }
                            {(e.Title=="case 3")&&<p className="text-muted d-flex align-items-center  m-0">
                            <AiOutlineBuild size={17} color="#1dc249"/>&nbsp;New Build</p>
                            }
                        </div> 
                        </div>
                        <div
                          className="col-2 text-center py-0 d-flex justify-content-center align-items-center "
                          style={{
                            borderLeft: "1px solid gray",
                            borderLeftStyle:" dashed"
                          }}
                        >
                         Timber Door
                        </div>
                        <div
                          className="col-3 text-center py-0 d-flex justify-content-center align-items-center "
                          style={{
                            borderLeft: "1px solid gray",
                            borderLeftStyle:" dashed"
                          }}
                        >
                       <p className="m-0 p-0" style={{textAlign:"justify"}}> Lorem, ipsum dolor sit fass vero a rsdaf... <Link>View more</Link></p>
                        </div>

                      
                        <div
                          className="col-2 text-center py-0 d-flex justify-content-center align-items-center "
                          style={{
                            borderLeft: "1px solid gray",
                            borderLeftStyle:" dashed",
                         
                          }}
                        >
                       <ImLocation size={18} color="#e04604"/>&nbsp;Mumbai
                        </div>
                       
                        <div
                          className="col-2 text-center py-0 d-flex justify-content-center align-items-center position-relative "
                          style={{ borderLeft: "1px solid gray", borderLeftStyle:" dashed" }}
                        >
                          <div >
                            {" "}
                           <div className="d-flex align-items-center"><LuTimer color="#999797" size={18}/>&nbsp;14 October 2023</div>
                            <div><Link to={`/workman-Firm/OpenCasesDetails/${e.id}`}>View Details</Link></div>
                          </div>
                          <div className="position-absolute end-0 me-1">
                            <X
                             onClick={()=>handleRemove(e)}
                              style={{ cursor: "pointer" }}
                              size={17}
                            />
                          </div>
                        </div>
                        <hr className="mt-0" />
                      </>
                    );
                  })}
                </div>{" "}
              </>
            ): <h3>No Data:/</h3> }
          </Card>
  );
};

export default OpenCases;
