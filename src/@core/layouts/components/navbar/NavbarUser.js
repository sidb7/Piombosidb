// ** Dropdowns Imports
import IntlDropdown from "./IntlDropdown";
import NotificationDropdown from "./NotificationDropdown";
import UserDropdown from "./UserDropdown";

const NavbarUser = (props) => {
  return (
    <> 
    
    <ul className="nav navbar-nav align-items-center ms-auto">
      <IntlDropdown/>
      <NotificationDropdown/>
      <UserDropdown  site={props.site} />
     
    </ul></>
  );
};
export default NavbarUser;
