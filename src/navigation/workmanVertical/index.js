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
    navLink: "/workman/dashboard",
  },
  {
    id: "workmanProfile",
    title: "Profile",
    icon: <User size={20} />,
    // navLink: "/workman/ProfileCompletion",
    children: [
      {
        id: "workmanProfileCompletion",
        title: "Edit Profile",
        icon: <CornerDownRight size={20} />,
        navLink: "/workman/ProfileEdit",
      },
      {
        id: "workmanManageSubaccounts",
        title: "Sub Accounts",
        icon: <CornerDownRight size={20} />,
        navLink: "/workman/manageSubAccounts",
      },
    ],
  },
  {
    id: "WorkmanCases",
    title: "Cases",
    icon: <Archive size={20} />,
    // navLink: "/workman/cases",
    children: [
      {
        
            id: "WorkmanCreateCase",
            title: "Create",
            icon: <CornerDownRight size={20} />,
            navLink: "/workman/cases",
      },
          
       
     
      {
        id: "WorkmanManageCase",
        title: "Manage",
        icon: <CornerDownRight size={20} />,
        navLink: "/workman/manageCases",
      },
    ],
  },
  {
    id: "WorkmanBrowseCases",
    title: "Browse Cases",
    icon: <Globe size={20} />,
    navLink: "/workman/browseCases",
  },
  
  {
    id: "WorkmanLMS",
    title: "LMS",
    icon: <Loader size={20} />,
    // navLink: "/workman/LMS",
    children: [
      {
        
            id: "WorkmanCreateCase",
            title: "What is LMS ?",
            icon: <CornerDownRight size={20} />,
            navLink: "/workman/lms/about",
      },
          
       
     
      {
        id: "WorkmanCurrentGrade",
        title: "Current Grade",
        icon: <CornerDownRight size={20} />,
        navLink: "/workman/lms/current-grade",
      },

      {
        id: "WorkmanManageCase",
        title: "Next Level",
        icon: <CornerDownRight size={20} />,
        navLink: "/workman/lms/next-level",
      },

      {
        id: "WorkmanManageCase",
        title: "Upcoming events",
        icon: <CornerDownRight size={20} />,
        navLink: "/workman/lms/upcoming-events",
      },
    ],
  },
];
