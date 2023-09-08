import { Mail, Home, User } from "react-feather";

export default [
  {
    id: "home",
    title: "WorkmanDashboard",
    icon: <Home size={20} />,
    navLink: "/workman/dashboard",
  },
  {
    id: "WorkmanProfileCompletion",
    title: "WorkmanProfileCompletion",
    icon: <User size={20} />,
    navLink: "/workman/profileCompleteOne",
  },
  {
    id: "profileCompleteTwo",
    title: "ProfileCompleteTwo",
    icon: <User size={20} />,
    navLink: "/profileCompleteTwo",
  },
  {
    id: "secondPage",
    title: "Second Page",
    icon: <Mail size={20} />,
    navLink: "/second-page",
  },
];
