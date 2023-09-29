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

import Dashboard from "../../views/designContract/Dashboard";
import ProfileEdit from "../../views/designContract/ProfileEdit";
import ManageCases from "../../views/designContract/Cases/ManageCases";
import CreateCases from "../../views/designContract/Cases/CreateCases";

import DesignAccountSettings from "../../views/designContract/DesignAccountSettings";
import DesignProfileCompletion from "../../views/designContract/DesignProfileCompletion";
import DesignVerticalLayout from "../../layouts/DesignVerticalLayout";

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout site="designContract" />,
  horizontal: <HorizontalLayout />,
 designVertical: <DesignVerticalLayout  site="designContract" />,
};

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/designContract/dashboard";









// ** Merge Routes
const Routes = [
  //   {
  //     path: "/",
  //     index: true,
  //     element: <Navigate replace to={DefaultRoute} />,
  //   },
  {
    path: "/designContract/dashboard",
    element: <Dashboard/>,
    meta: {
      layout: "designVertical",
    },
  },
  
  {
    path: "/designContract/Edit-Profile",
    element: <ProfileEdit/>,
    meta: {
      layout: "designVertical",
    },
  },

  {
    path: "/designContract/Profile-Completion",
    element: <DesignProfileCompletion />,
    meta: {
      layout: "vertical",
    },
  },
  
 

  {
    path: "/designContract/browseCases",
    element: <ManageCases />,
    meta: {
      layout: "designVertical",
    },
  },
  
  {
    path: "/designContract/cases",
    element: <CreateCases />,
    meta: {
      layout: "designVertical",
    },
  },
  {
    path: "/designContract/manageCases",
    element: <ManageCases />,
    meta: {
      layout: "designVertical",
    },
  },
  
  
  
 
  {
    path: "/designContract/account-settings",
    element: <DesignAccountSettings />,
    meta: {
      layout: "designVertical",
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

const getDesignRoutes = (layout) => {
  const defaultLayout = layout || "designVerical";
  const layouts = ["vertical", "horizontal", "blank", "designVertical"];

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

export { DefaultRoute, TemplateTitle, Routes, getDesignRoutes };
