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

import Dashboard from "../../views/customer/Dashboard";
import ProfileEdit from "../../views/customer/ProfileEdit";
import ManageCases from "../../views/customer/Cases/ManageCases";
import CreateCases from "../../views/customer/Cases/CreateCases";
import CustomerVerticalLayout from "../../layouts/CustomerVericalLayout";
import CustomerAccountSettings from "../../views/customer/CustomerAccountSettings";
import SupplierDashboard from "../../views/supplier/SupplierDashboard";
import CustomerProfileCompletion from "../../views/customer/CustomerProfileCompletion";

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout site="customer" />,
  horizontal: <HorizontalLayout />,
  customerVertical: <CustomerVerticalLayout  site="customer" />,
};

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/workman/dashboard";









// ** Merge Routes
const Routes = [
  //   {
  //     path: "/",
  //     index: true,
  //     element: <Navigate replace to={DefaultRoute} />,
  //   },
  {
    path: "/customer/dashboard",
    element: <Dashboard/>,
    meta: {
      layout: "customerVertical",
    },
  },
  
  {
    path: "/customer/Edit-Profile",
    element: <ProfileEdit/>,
    meta: {
      layout: "customerVertical",
    },
  },

  {
    path: "/customer/Profile-Completion",
    element: <CustomerProfileCompletion />,
    meta: {
      layout: "vertical",
    },
  },
  
 

  {
    path: "/customer/browseCases",
    element: <ManageCases />,
    meta: {
      layout: "customerVertical",
    },
  },
  
  {
    path: "/customer/cases",
    element: <CreateCases />,
    meta: {
      layout: "customerVertical",
    },
  },
  {
    path: "/customer/manageCases",
    element: <ManageCases />,
    meta: {
      layout: "customerVertical",
    },
  },
  
  
  
 
  {
    path: "/customer/account-settings",
    element: <CustomerAccountSettings />,
    meta: {
      layout: "customerVertical",
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

const getCustomerRoutes = (layout) => {
  const defaultLayout = layout || "customerVerical";
  const layouts = ["vertical", "horizontal", "blank", "customerVertical"];

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

export { DefaultRoute, TemplateTitle, Routes, getCustomerRoutes };
