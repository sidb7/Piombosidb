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
      navLink: "/customer/dashboard",
    },
    {
      id: "CustomerProfile",
      title: "Profile",
      icon: <User size={20} />,
      // navLink: "/customer/ProfileCompletion",
      children: [
        {
          id: "CustomerProfileCompletion",
          title: "Edit Profile",
          icon: <CornerDownRight size={20} />,
          navLink: "/customer/ProfileEdit",
        },
       
      ],
    },
    {
      id: "CustomerCases",
      title: "Cases",
      icon: <Archive size={20} />,
      // navLink: "/customer/cases",
      children: [
        {
          
              id: "CustomerCreateCase",
              title: "Create",
              icon: <CornerDownRight size={20} />,
              navLink: "/customer/cases",
        },
            
         
       
        {
          id: "CustomerManageCase",
          title: "Manage",
          icon: <CornerDownRight size={20} />,
          navLink: "/customer/manageCases",
        },
      ],
    },
    {
      id: "CustomerBrowseCases",
      title: "Browse Cases",
      icon: <Globe size={20} />,
      navLink: "/customer/browseCases",
    },
    
  
  ];
  