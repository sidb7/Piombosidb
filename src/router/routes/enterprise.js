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

import Dashboard from "../../views/enterprises/Dashboard";
import ProfileEdit from "../../views/enterprises/ProfileEdit";
import ManageCases from "../../views/enterprises/Cases/ManageCases";
import CreateCases from "../../views/enterprises/Cases/CreateCases";

import EnterpriseAccountSettings from "../../views/enterprises/EnterpriseAccountSettings";
import EnterpriseProfileCompletion from "../../views/enterprises/EnterpriseProfileCompletion";
import EnterpriseVerticalLayout from "../../layouts/EnterpriseVerticalLayout";

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout site="enterprise"/>,
  horizontal: <HorizontalLayout />,
 enterpriseVertical: <EnterpriseVerticalLayout  site="enterprise" />,
};

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/enterprise/dashboard";









// ** Merge Routes
const Routes = [
  //   {
  //     path: "/",
  //     index: true,
  //     element: <Navigate replace to={DefaultRoute} />,
  //   },
  {
    path: "/enterprise/dashboard",
    element: <Dashboard/>,
    meta: {
      layout: "enterpriseVertical",
    },
  },
  
  {
    path: "/enterprise/Edit-Profile",
    element: <ProfileEdit/>,
    meta: {
      layout: "enterpriseVertical",
    },
  },

  {
    path: "/enterprise/Profile-Completion",
    element: <EnterpriseProfileCompletion />,
    meta: {
      layout: "vertical",
    },
  },
  
 

  {
    path: "/enterprise/browseCases",
    element: <ManageCases />,
    meta: {
      layout: "enterpriseVertical",
    },
  },
  
  {
    path: "/enterprise/cases",
    element: <CreateCases />,
    meta: {
      layout: "enterpriseVertical",
    },
  },
  {
    path: "/enterprise/manageCases",
    element: <ManageCases />,
    meta: {
      layout: "enterpriseVertical",
    },
  },
  
  
  
 
  {
    path: "/enterprise/account-settings",
    element: <EnterpriseAccountSettings />,
    meta: {
      layout: "enterpriseVertical",
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

const getEnterpriseRoutes = (layout) => {
  const defaultLayout = layout || "enterpriseVerical";
  const layouts = ["vertical", "horizontal", "blank", "enterpriseVertical"];

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

export { DefaultRoute, TemplateTitle, Routes, getEnterpriseRoutes };
