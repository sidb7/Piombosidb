import React, { useState } from 'react'
import { Shield,Bell,DollarSign, Settings } from 'react-feather';
import {CardTitle,Button,} from "reactstrap";

import Security from './AccountSettingscomponents/Security';
import Notification from './AccountSettingscomponents/Notification';
import Billing from './AccountSettingscomponents/Billing';


export default function EnterpriseAccountSettings() {

    const [Setting, setSetting] =useState("Security")

 

  return (
    <div>
        < CardTitle className='fs-2 fw-bold mb-1 '>WorkMan Account settings</CardTitle>
      
       <div > 
        <Button  to="/notAuthorized" className='fs-5 border-0  d-fex align-items-center justify-content-center' 
        color={(Setting=="Security")?"primary":""} onClick={()=>setSetting("Security")}><Shield size={20}
        /> Security
        </Button>

        <Button 
        style={{backgroundColor:(Setting=="Notification")?"blue":""}}
         to="/notAuthorized" className='fs-5 border-0 d-fex align-items-center justify-content-center' 
         color={(Setting=="Notification")?"primary":""}
         onClick={()=>setSetting("Notification")}><Bell size={20}/> Notifications
         </Button>
         
        <Button 
         to="/notAuthorized" 
         className='fs-5 border-0 d-fex align-items-center  justify-content-center' 
         color={(Setting=="Billing")?"primary":""}
            onClick={()=>setSetting("Billing")}>
            <DollarSign size={20}/> Billing
            
        </Button>
        </div>

        <div className='mt-2'> 
            {(Setting=="Security")&&<Security/>}
            {(Setting=="Notification")&&<Notification/>}
            {(Setting=="Billing")&&<Billing/>}
        </div>
    


    </div>
  )
}
