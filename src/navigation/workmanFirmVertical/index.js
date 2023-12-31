import {
    Archive,
   CornerDownRight,
    Tool,
    Home,
    User,
    Circle,
    Loader,
    Globe,
    Users
   
  } from "react-feather";
  
  export default [
    {
      id: "Dashboard",
      title: "Dashboard",
      icon: <Home size={20} />,
      navLink: "/workman-Firm/dashboard",
    },
    {
      id: "workmanFirmProfile",
      title: "Profile",
      icon: <User size={20} />,
      navLink: "/workman-Firm/Edit-Profile"
      
    },
    {
      id: "WorkmanFirmCases",
      title: "Cases",
      icon: <Archive size={20} />,
      // navLink: "/workmanFirm/cases",
      children: [
        {
          
              id: "WorkmanFirmCreateCase",
              title: "Create",
              icon: <CornerDownRight size={20} />,
              navLink: "/workman-Firm/cases",
        },
            
         
       
        {
          id: "WorkmanFirmManageCase",
          title: "Manage",
          icon: <CornerDownRight size={20} />,
          navLink: "/workman-Firm/manageCases",
        },
      ],
    },
    {
      id: "WorkmanFirmBrowseCases",
      title: "Browse Cases",
      icon: <Globe size={20} />,
      navLink: "/workman-Firm/browseCases",
    },

    {
      id: "WorkmanFirmWorkmen",
      title: "Workmen",
      icon: <Users size={20} />,
      // navLink: "/workmanFirm/cases",
      children: [
        {
          
              id: "WorkmanFirmAddWorkmen",
              title: "Add workmen",
              icon: <CornerDownRight size={20} />,
              navLink: "/workman-Firm/add-workmen",
        },
            
         
       
        {
          id: "WorkmanFirmManageWorkmen",
          title: "Manage workmen",
          icon: <CornerDownRight size={20} />,
          navLink: "/workman-Firm/manage-workmen",
        },
      ],
    },

    {
      id: "WorkmanFirmLMS",
      title: "LMS",
      icon: <Loader size={20} />,
      // navLink: "/workmanFirm/LMS",
      children: [
        {
          
              id: "WorkmanFirmCreateCase",
              title: "What is LMS ?",
              icon: <CornerDownRight size={20} />,
              navLink: "/workman-Firm/lms/about",
        },
            
         
       
        {
          id: "WorkmanFirmCurrentGrade",
          title: "Current Grade",
          icon: <CornerDownRight size={20} />,
          navLink: "/workman-Firm/lms/current-grade",
        },
  
        {
          id: "WorkmanFirmManageCase",
          title: "Next Level",
          icon: <CornerDownRight size={20} />,
          navLink: "/workman-Firm/lms/next-level",
        },
  
        {
          id: "WorkmanFirmManageCase",
          title: "Upcoming events",
          icon: <CornerDownRight size={20} />,
          navLink: "/workman-Firm/lms/upcoming-events",
        },
      ],
    },
  ];
  