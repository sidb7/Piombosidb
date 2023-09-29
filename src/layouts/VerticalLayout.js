// ** React Imports
import { Outlet } from "react-router-dom";

// ** Core Layout Import
// !Do not remove the Layout import
import Layout from "@layouts/VerticalLayout";
import { Home, User } from "react-feather";

// ** Menu Items Array
// import navigation from "@src/navigation/vertical";

const VerticalLayout = (props) => {
  // const [menuData, setMenuData] = useState([])

  // ** For ServerSide navigation
  // useEffect(() => {
  //   axios.get(URL).then(response => setMenuData(response.data))
  // }, [])

const navigation =[
  {
    id: "home",
    title: "Dashboard",
    icon: <Home size={20} />,
    navLink: `/${props.site}/dashboardProfileStatus`,
  },
  {
    id: "workmanProfileCompletion",
    title: "Profile Completion",
    icon: <User size={20} />,
    navLink: `/${props.site}/Profile-Completion`,
  },
]
  
  return (
    <Layout menuData={navigation} {...props}>
      <Outlet />
    </Layout>
  );
};

export default VerticalLayout;
