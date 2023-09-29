import {
    Archive,
   CornerDownRight,
    Tool,
    Home,
    User,
    Circle,
    Loader,
    Globe,
   
  } from "react-feather";
  
  export default [
    {
      id: "Dashboard",
      title: "Dashboard",
      icon: <Home size={20} />,
      navLink: "/enterprise/dashboard",
    },
    {
      id: "EnterpriseProfile",
      title: "Profile",
      icon: <User size={20} />,
      navLink: "/enterprise/Edit-Profile",
     
    },
    {
      id: "EnterpriseCases",
      title: "Cases",
      icon: <Archive size={20} />,
      // navLink: "/enterprise/cases",
      children: [
        {
          
              id: "EnterpriseCreateCase",
              title: "Create",
              icon: <CornerDownRight size={20} />,
              navLink: "/enterprise/cases",
        },
            
         
       
        {
          id: "EnterpriseManageCase",
          title: "Manage",
          icon: <CornerDownRight size={20} />,
          navLink: "/enterprise/manageCases",
        },
      ],
    },
    {
      id: "EnterpriseBrowseCases",
      title: "Browse Cases",
      icon: <Globe size={20} />,
      navLink: "/enterprise/browseCases",
    },
    
  
  ];
  