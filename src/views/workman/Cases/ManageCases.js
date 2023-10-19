import React, { useEffect, useState } from 'react'
import { BookOpen,Book } from 'react-feather';
import {CardTitle,Button, Badge,} from "reactstrap";
import OpenCases from './ManageCases/OpenCases';
import ClosedCases from './ManageCases/ClosedCases';
import {TbClockBolt,TbClockCheck,TbClockExclamation} from 'react-icons/tb'
import {PiWarningCircleBold} from 'react-icons/pi'
import Scheduled from './ManageCases/Scheduled';

export default function ManageCases() {

    const [Setting, setSetting] =useState("ScheduledCases")

  
  const[OpenCasesNO,setOpenCasesNO] = useState([])
  const[ScheduledNO,setScheduledNO] = useState([])

  useEffect(() => {
   setOpenCasesNO(JSON.parse(localStorage.getItem("CustomerCaseSet")))
   setScheduledNO(JSON.parse(localStorage.getItem("CustomerClosedCase")))
  });
  return (
    <div>
       
      
       <div className='row mt-0 ' > 
       

        <Button   className='col-lg-3 col-6 fs-5 border-0 position-relative d-fex align-items-center justify-content-center' 
        color={(Setting=="ScheduledCases")?"primary":""} onClick={()=>setSetting("ScheduledCases")}><TbClockBolt color={(Setting=="ScheduledCases")?"":"#63B9CD"}  size={25}
        />&nbsp; Accepted
           <Badge className='position-absolute end-25  text-light' color="danger" pill> {(Array.isArray(ScheduledNO))? ScheduledNO.length:"0"}</Badge>
        </Button>

        <Button className='col-lg-3 col-6 fs-5 border-0 position-relative  d-fex align-items-center justify-content-center' 
        color={(Setting=="ClosedCases")?"primary":""} onClick={()=>setSetting("ClosedCases")}><TbClockCheck color={(Setting=="ClosedCases")?"":"#1dc249"}  size={25}
        />&nbsp; Completed
           <Badge className='position-absolute end-25  text-light' color="danger" pill> 2</Badge>
        </Button>

        <Button  className='col-lg-3 col-6 fs-5 border-0 position-relative d-fex align-items-center justify-content-center' 
        color={(Setting=="Escalation")?"primary":""} onClick={()=>setSetting("Escalation")}><PiWarningCircleBold color={(Setting=="Escalation")?"":"red"}  size={25}
        />&nbsp; Redressal
        <Badge className='position-absolute end-25  text-light' color="danger" pill> 2</Badge>
        </Button>
         
        
        </div>
    <hr />
        <div className='mt-2'> 
            {/* {(Setting=="OpenCases")&& <OpenCases /> } */}
            {(Setting=="ScheduledCases")&& <Scheduled /> }
            {(Setting=="ClosedCases")&& <ClosedCases/> }
           
        </div>
    

    
    </div>
  )
}
