import React from 'react'
import ManageCompanyDetails from './ManageProfile/ManageCompanyDetails'
import ManageAdditionalDetails from './ManageProfile/ManageAdditionalDetails'
import ManageAffiliation from './ManageProfile/ManageAffiliation'

export default function ProfileEdit() {
  return (
    <div>
      <ManageCompanyDetails/>
      <ManageAdditionalDetails/>
      <ManageAffiliation/>
    </div>
  )
}
