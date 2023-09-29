import {
    Archive,
   CornerDownRight,
    Tool,
    Home,
    User,
    
   
  } from "react-feather";
  
  export default [
    {
      id: "Dashboard",
      title: "Dashboard",
      icon: <Home size={20} />,
      navLink: "/supplier/dashboard",
    },
    {
      id: "supplierProfile",
      title: "Profile",
      icon: <User size={20} />,
      navLink: "/supplier/Edit-Profile",
      
    },
    {
      id: "SupplierEnquires",
      title: "Manage enquires",
      icon: <Archive size={20} />,
      // navLink: "/workman/cases",
      children: [
        {
          
              id: "SupplierCreateCase",
              title: "Open orders",
              icon: <CornerDownRight size={20} />,
              navLink: "/supplier/manage-enquires-open",
        },
            
         
       
        {
          id: "SupplierManageCase",
          title: "Closed orders",
          icon: <CornerDownRight size={20} />,
          navLink: "/supplier/manage-enquires-closed",
        },
      ],
    },
    
  ];
  