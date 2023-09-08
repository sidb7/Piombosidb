// ** React Imports
import { Link } from "react-router-dom";

// ** Custom Components
import Avatar from "../../../components/avatar";

// ** Third Party Components
import {
  User,
  Mail,
  CheckSquare,
  MessageSquare,
  Settings,
  CreditCard,
  HelpCircle,
  Power,
} from "react-feather";

// ** Reactstrap Imports
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

// ** Default Avatar Image
import defaultAvatar from "@src/assets/images/portrait/small/avatar-s-9.jpg";
import { useEffect, useState } from "react";

const UserDropdown = (props) => {
  
 
  console.log("SITE: "+props.site)

  return (
    
  <>
 
  
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      
      <DropdownToggle
        id="demo"
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        <div className="user-nav d-sm-flex d-none">
          <span className="user-name fw-bold">Rahul Kumar</span>
          <span className="user-status">Admin</span>
        </div>
        <Avatar
          img={defaultAvatar}
          imgHeight="40"
          imgWidth="40"
          status="online"
        />
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem tag={Link} to={"/"+props.site+"/ProfileEdit"}>
          <User size={14} className="me-75" />
          <span className="align-middle">Profile</span>
        </DropdownItem>
    
        <DropdownItem divider />
        <DropdownItem
          tag={Link}
          to={"/"+props.site+"/account-settings"}
          
        >
          <Settings size={14} className="me-75" />
          <span className="align-middle">Settings</span>
        </DropdownItem>
       
        <DropdownItem tag={Link} to="/login">
          <Power size={14} className="me-75" />
          <span className="align-middle">Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown></>
  );
};

export default UserDropdown;
