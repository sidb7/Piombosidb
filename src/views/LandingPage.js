import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'reactstrap'

export default function LandingPage() {
  return (
    <div className='d-flex gap-2 justify-content-center mt-3'>
        <div   >
            <Button
             tag={Link}
             to={"/loginbasic"}
          >
            Create a case
        </Button></div>
        <div>
        <Button
        tag={Link}
        to={"/login-workman"}>
            Join as workpro
        </Button></div>
    </div>
  )
}
