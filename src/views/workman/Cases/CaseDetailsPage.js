import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import InsallationCaseDetails from './CaseCaregory/InstallationCaseDetails';
import RepairCaseDetails from './CaseCaregory/RepairCaseDetails';
import NewBuildCaseDetails from './CaseCaregory/NewBuildCaseDetails';

export default function CaseDetailsPage() {
    const { id } = useParams();
    const [data, setData] = useState(JSON.parse(localStorage.getItem("CustomerClosedCase")));
    const [arr, setArr] = useState(data.filter((e) => e.id === id));
    useEffect(() => {
       
        setInterval(() => {
          setData(JSON.parse(localStorage.getItem("CustomerClosedCase")));
          setArr(data.filter((e) => e.id === id));
        }, 1000);
      },[]);
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

{
    arr[0].ServiceType==="NewBuild"&&
    <div><NewBuildCaseDetails id ={id}/></div>
   } 

    </>
  )
}
