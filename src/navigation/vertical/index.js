import {
  Archive,
  Edit,
  Book,
  Tool,
  Home,
  User,
  Info,
  Phone,
  DollarSign,
  Users,
} from "react-feather";

export default [
  {
    id: "home",
    title: "Dashboard",
    icon: <Home size={20} />,
    navLink: "/workman/dashboard",
  },
  {
    id: "workmanProfileCompletion",
    title: "Profile Completion",
    icon: <User size={20} />,
    navLink: "/workman/ProfileCompletion",
  },
  // {
  //   id: "WorkmanNewCase",
  //   title: "New Case",
  //   icon: <Edit size={20} />,
  //   navLink: "/workman/newCase",
  // },
  // {
  //   id: "WorkmanCases",
  //   title: "Cases",
  //   icon: <Archive size={20} />,
  //   navLink: "/workman/cases",
  // },
  // {
  //   id: "WorkmanAvailableCases",
  //   title: "Available Cases",
  //   icon: <Tool size={20} />,
  //   navLink: "/workman/availableCases",
  // },
  // {
  //   id: "manageWorkmen",
  //   title: "Manage Workmen",
  //   icon: <Users size={20} />,
  //   navLink: "/manageWorkmen",
  // },
  // {
  //   id: "WorkmanFinancialReport",
  //   title: "Financials",
  //   icon: <DollarSign size={20} />,
  //   navLink: "/workman/financialReport",
  // },
  // {
  //   id: "WorkmanLearningSystem",
  //   title: "Learning System",
  //   icon: <Book size={20} />,
  //   navLink: "/workman/LearningSystem",
  // },
  // {
  //   id: "workmanSupport",
  //   title: "Support",
  //   icon: <Phone size={20} />,
  //   navLink: "/workman/support",
  // },
  // {
  //   id: "workmanAboutUs",
  //   title: "About Us",
  //   icon: <Info size={20} />,
  //   navLink: "/workman/aboutUs",
  // },
];
