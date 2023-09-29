import React, { useState } from 'react'
import { BookOpen,Book } from 'react-feather';
import {CardTitle,Button,} from "reactstrap";
import OpenCases from './ManageCases/OpenCases';
import ClosedCases from './ManageCases/ClosedCases';



export default function ManageCases() {

    const [Setting, setSetting] =useState("OpenCases")

 

  return (
    <div>
       
      
       <div > 
        <Button  to="/notAuthorized" className='fs-5 border-0  d-fex align-items-center justify-content-center' 
        color={(Setting=="OpenCases")?"primary":""} onClick={()=>setSetting("OpenCases")}><BookOpen size={20}
        /> Scheduled
        </Button>

        <Button  to="/notAuthorized" className='fs-5 border-0  d-fex align-items-center justify-content-center' 
        color={(Setting=="ClosedCases")?"primary":""} onClick={()=>setSetting("ClosedCases")}><Book size={20}
        /> Completed
        </Button>
         
        
        </div>
    <hr />
        <div className='mt-2'> 
            {(Setting=="OpenCases")&& <OpenCases/> }
            {(Setting=="ClosedCases")&& <ClosedCases/> }
           
        </div>
    

    
    </div>
  )
}
