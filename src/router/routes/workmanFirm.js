// ** React Imports
import { Fragment, lazy } from "react";

// ** Layouts
import BlankLayout from "@layouts/BlankLayout";
import VerticalLayout from "@src/layouts/VerticalLayout";

import HorizontalLayout from "@src/layouts/HorizontalLayout";
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper";

// ** Route Components
import PublicRoute from "@components/routes/PublicRoute";

// ** Utils
import { isObjEmpty } from "@utils";
import WorkmanLMS from "../../views/workmanFirm/LMS/WorkmanLMS";
import CurrentGrade from "../../views/workmanFirm/LMS/CurrentGrade";
import NextLevel from "../../views/workmanFirm/LMS/NextLevel";
import UpcomingEvents from "../../views/workmanFirm/LMS/UpcomingEvents";
import ManageCases from "../../views/workmanFirm/Cases/ManageCases";
import CreateCases from "../../views/workmanFirm/Cases/CreateCases";
import WorkmanFirmVerticalLayout from "../../layouts/WorkmanFirmVerticalLayout";
import AddWorkmen from "../../views/workmanFirm/WorkmenPanel/AddWorkmen";
import ManageWorkmen from "../../views/workmanFirm/WorkmenPanel/ManageWorkmen";

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />,
  workmanFirmVertical: <WorkmanFirmVerticalLayout site="workmanFirm" />,
};

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/workmanFirm/dashboard";

const WorkmanDashboard = lazy(() =>
  import("../../views/workmanFirm/WorkmanDashboard")
);

const WorkmanProfileCompletion = lazy(() =>
  import("../../views/workmanFirm/WorkmanProfileCompletion")
);
// const ProfileCompleteTwo = lazy(() => import("../../views/ProfileCompleteTwo"));







const AccountSettings = lazy(() => import('../../views/workmanFirm/WorkmanAccountSettings'))

const WorkmanSubaccount = lazy(() =>
  import("../../views/workmanFirm/WorkmanSubaccount")
);





// ** Merge Routes
const Routes = [
  //   {
  //     path: "/",
  //     index: true,
  //     element: <Navigate replace to={DefaultRoute} />,
  //   },
  {
    path: "/workmanFirm/dashboard",
    element: <WorkmanDashboard />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },
  
  {
    path: "/workmanFirm/ProfileEdit",
    element: <WorkmanProfileCompletion />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },
  {
    path: "/workmanFirm/manageSubAccounts",
    element: <WorkmanSubaccount />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },
 

  {
    path: "/workmanFirm/browseCases",
    element: <ManageCases />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },
  
  {
    path: "/workmanFirm/cases",
    element: <CreateCases />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },
  {
    path: "/workmanFirm/manageCases",
    element: <ManageCases />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },
  
  {
    path: "/workmanFirm/lms/about",
    element: <WorkmanLMS />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },
  
  
 
  {
    path: "/workmanFirm/account-settings",
    element: <AccountSettings />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },

  {
    path: "/workmanFirm/add-workmen",
    element: <AddWorkmen />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },
  {
    path: "/workmanFirm/manage-workmen",
    element: <ManageWorkmen />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },

  {
    path: "/workmanFirm/lms/current-grade",
    element: <CurrentGrade />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },

  {
    path: "/workmanFirm/lms/next-level",
    element: <NextLevel />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },
  {
    path: "/workmanFirm/lms/upcoming-events",
    element: <UpcomingEvents />,
    meta: {
      layout: "workmanFirmVertical",
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

const getWorkmanFirmRoutes = (layout) => {
  const defaultLayout = layout || "workmanFirmVertical";
  const layouts = ["vertical", "horizontal", "blank", "workmanFirmVertical"];

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

export { DefaultRoute, TemplateTitle, Routes, getWorkmanFirmRoutes };
