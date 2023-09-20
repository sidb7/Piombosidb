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
      navLink: "/designContract/dashboard",
    },
    {
      id: "DesignProfile",
      title: "Profile",
      icon: <User size={20} />,
      // navLink: "/designContract/ProfileCompletion",
      children: [
        {
          id: "DesignProfileCompletion",
          title: "Edit Profile",
          icon: <CornerDownRight size={20} />,
          navLink: "/designContract/ProfileEdit",
        },
       
      ],
    },
    {
      id: "DesignCases",
      title: "Cases",
      icon: <Archive size={20} />,
      // navLink: "/designContract/cases",
      children: [
        {
          
              id: "DesignCreateCase",
              title: "Create",
              icon: <CornerDownRight size={20} />,
              navLink: "/designContract/cases",
        },
            
         
       
        {
          id: "DesignManageCase",
          title: "Manage",
          icon: <CornerDownRight size={20} />,
          navLink: "/designContract/manageCases",
        },
      ],
    },
    {
      id: "DesignBrowseCases",
      title: "Browse Cases",
      icon: <Globe size={20} />,
      navLink: "/designContract/browseCases",
    },
    
  
  ];
  