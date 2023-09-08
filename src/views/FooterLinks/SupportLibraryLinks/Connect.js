import React from 'react'
import {Instagram,Linkedin,Facebook,Twitter,Youtube} from "react-feather"
import { Link } from 'react-router-dom'
export default function Connect() {
  return (
    <div>
      
      <div className='d-flex mt-5 flex-column flex-lg-row gap-4 justify-content-center align-items-center'>
        <div className='fs-2 fw-bold'> Let's get social </div>
        <div className='d-flex gap-3'>
        <div ><a href='' target='_blank'><Instagram/></a></div> 
        <div ><a href='https://www.linkedin.com/home/?originalSubdomain=in' target='_blank'><Linkedin/> </a></div>
        <div ><a href='' target='_blank'><Facebook/> </a></div>
        <div ><a href='' target='_blank'><Youtube/>  </a></div>
        <div ><a href='' target='_blank'><Twitter/>  </a></div></div>
        
        </div>
      
        <p className='mt-5 w-100 d-flex justify-content-center ' style={{textAlign:'justify'}}> <b> Mail us at:</b> &nbsp;Piombo@gmail.com</p>
      
      <p className='mt-2 ' style={{textAlign:'justify'}}> <b> For queries contact us:</b> Manager, Imagine Marketing Limited Unit no. 204 & 205, 2nd floor, D-wing & E-wing,
Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharashtra-4000, India</p>

      </div>
  )
}
