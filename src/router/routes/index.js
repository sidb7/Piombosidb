// ** React Imports
import { Fragment, lazy } from "react";
import { Navigate } from "react-router-dom";
// ** Layouts
import BlankLayout from "@layouts/BlankLayout";
import VerticalLayout from "@src/layouts/VerticalLayout";
import WorkmanVerticalLayout from "@src/layouts/WorkmanVerticalLayout";
import HorizontalLayout from "@src/layouts/HorizontalLayout";
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper";
const Calendar = lazy(() => import('../../views/apps/calendar'))
// ** Route Components
import PublicRoute from "@components/routes/PublicRoute";

// ** Utils
import { isObjEmpty } from "@utils";

import AboutUs from "../../views/FooterLinks/AboutUs";
import HowItWorks from "../../views/FooterLinks/HowItWorks";
import Services from "../../views/FooterLinks/Services";
import SupportLibrary from "../../views/FooterLinks/SupportLibrary";
import LoginBasic from "../../views/common/LoginBasic";
import RegisterBasic from "../../views/common/RegisterBasic";
import LoginWorkman from "../../views/common/workmanLogin/LoginWorkman";
import RegisterWorkman from "../../views/common/workmanLogin/RegisterWorkman";
import LandingPage from "../../views/LandingPage";



const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />,
  workmanVertical: <WorkmanVerticalLayout  />,
  // supplierVertical:<SupplierVerticalLayout/>,
  // customerVertical:<CustomerVerticalLayout/>
};

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/landing-page";

const Login = lazy(() => import("../../views/Login"));
const Register = lazy(() => import("../../views/Register"));

// ** Merge Routes
const Routes = [
  {
    path: "/",
    index: true,
    element: <Navigate replace to={DefaultRoute} />,
  },
  {
    path: "/landing-page",

    element: <LandingPage/>,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/login",
    element: <Login />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/register",
    element: <Register />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/piombo/about",
    element: <AboutUs/>,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/piombo/how-it-works",
    element: <HowItWorks/>,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/piombo/services",
    element: <Services/>,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/loginbasic",
    element: <LoginBasic />,
    meta: {
      layout: "blank",
    },
  },
 
  {
    path: "/registerbasic",
    element: <RegisterBasic />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/login-workman",
    element: <LoginWorkman />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/register-workman",
    element: <RegisterWorkman />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/piombo/support-library",
    element: <SupportLibrary/>,
    meta: {
      layout: "blank",
    },
  },
];

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta };
    } else {
      return {};
    }
  }
};

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = [];

  if (Routes) {
    Routes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute;

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
                LayoutWrapper
              : Fragment;

          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Wrapper>
          );
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = (layout) => {
  const defaultLayout = layout || "vertical";
  const layouts = ["vertical", "horizontal", "blank", "workmanVertical","supplierVertical","customerVertical"];

  const AllRoutes = [];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

    AllRoutes.push({
      path: "/",
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes,
    });
  });
  return AllRoutes;
};

export { DefaultRoute, TemplateTitle, Routes, getRoutes };
