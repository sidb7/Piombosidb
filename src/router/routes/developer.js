// ** React Imports
import { Fragment, lazy } from "react";
import { Navigate } from "react-router-dom";
// ** Layouts
import BlankLayout from "@layouts/BlankLayout";
import VerticalLayout from "@src/layouts/VerticalLayout";

import HorizontalLayout from "@src/layouts/HorizontalLayout";
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper";

// ** Route Components
import PublicRoute from "@components/routes/PublicRoute";

// ** Utils
import { isObjEmpty } from "@utils";

import Dashboard from "../../views/developer/Dashboard";
import ProfileEdit from "../../views/developer/ProfileEdit";
import ManageCases from "../../views/developer/Cases/ManageCases";
import CreateCases from "../../views/developer/Cases/CreateCases";

import DeveloperAccountSettings from "../../views/developer/DeveloperAccountSettings";
import DeveloperProfileCompletion from "../../views/developer/DeveloperProfileCompletion";
import DeveloperVerticalLayout from "../../layouts/DeveloperVerticalLayout";

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />,
 developerVertical: <DeveloperVerticalLayout  site="developer" />,
};

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/developer/dashboard";









// ** Merge Routes
const Routes = [
  //   {
  //     path: "/",
  //     index: true,
  //     element: <Navigate replace to={DefaultRoute} />,
  //   },
  {
    path: "/developer/dashboard",
    element: <Dashboard/>,
    meta: {
      layout: "developerVertical",
    },
  },
  
  {
    path: "/developer/ProfileEdit",
    element: <ProfileEdit/>,
    meta: {
      layout: "developerVertical",
    },
  },

  {
    path: "/developer/Profile-Completion",
    element: <DeveloperProfileCompletion site="developer"/>,
    meta: {
      layout: "blank",
    },
  },
  
 

  {
    path: "/developer/browseCases",
    element: <ManageCases />,
    meta: {
      layout: "developerVertical",
    },
  },
  
  {
    path: "/developer/cases",
    element: <CreateCases />,
    meta: {
      layout: "developerVertical",
    },
  },
  {
    path: "/developer/manageCases",
    element: <ManageCases />,
    meta: {
      layout: "developerVertical",
    },
  },
  
  
  
 
  {
    path: "/developer/account-settings",
    element: <DeveloperAccountSettings />,
    meta: {
      layout: "developerVertical",
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

const getDeveloperRoutes = (layout) => {
  const defaultLayout = layout || "developerVerical";
  const layouts = ["vertical", "horizontal", "blank", "developerVertical"];

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

export { DefaultRoute, TemplateTitle, Routes, getDeveloperRoutes };
