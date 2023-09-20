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
      navLink: "/developer/dashboard",
    },
    {
      id: "DeveloperProfile",
      title: "Profile",
      icon: <User size={20} />,
      // navLink: "/developer/ProfileCompletion",
      children: [
        {
          id: "DeveloperProfileCompletion",
          title: "Edit Profile",
          icon: <CornerDownRight size={20} />,
          navLink: "/developer/ProfileEdit",
        },
       
      ],
    },
    {
      id: "DeveloperCases",
      title: "Cases",
      icon: <Archive size={20} />,
      // navLink: "/developer/cases",
      children: [
        {
          
              id: "DeveloperCreateCase",
              title: "Create",
              icon: <CornerDownRight size={20} />,
              navLink: "/developer/cases",
        },
            
         
       
        {
          id: "DeveloperManageCase",
          title: "Manage",
          icon: <CornerDownRight size={20} />,
          navLink: "/developer/manageCases",
        },
      ],
    },
    {
      id: "DeveloperBrowseCases",
      title: "Browse Cases",
      icon: <Globe size={20} />,
      navLink: "/developer/browseCases",
    },
    
  
  ];
  