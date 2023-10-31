import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import InsallationCaseDetails from './CaseCaregory/InstallationCaseDetails';
import RepairCaseDetails from './CaseCaregory/RepairCaseDetails';

export default function CaseDetailsPage() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [arr, setArr] = useState([]);
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("CustomerClosedCase")));
        setArr(data.filter((e) => e.id === id));
     
      },[arr]);
  return (
    arr.length!=0&&
    <>

   {
    arr[0].ServiceType==="Installation"&&
    <div><InsallationCaseDetails id ={id}/></div>
   }  
    {
    arr[0].ServiceType==="Repair"&&
    <div><RepairCaseDetails id ={id}/></div>
   } 

    </>
  )
}
