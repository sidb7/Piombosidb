// ** React Imports
import { Fragment, lazy } from "react";
import { Navigate } from "react-router-dom";
// ** Layouts
import BlankLayout from "@layouts/BlankLayout";
import VerticalLayout from "@src/layouts/VerticalLayout";
import WorkmanVerticalLayout from "@src/layouts/WorkmanVerticalLayout";
import HorizontalLayout from "@src/layouts/HorizontalLayout";
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper";

// ** Route Components
import PublicRoute from "@components/routes/PublicRoute";

// ** Utils
import { isObjEmpty } from "@utils";
import WorkmanLMS from "../../views/workman/LMS/WorkmanLMS";
import CurrentGrade from "../../views/workman/LMS/CurrentGrade";
import NextLevel from "../../views/workman/LMS/NextLevel";
import UpcomingEvents from "../../views/workman/LMS/UpcomingEvents";
import ManageCases from "../../views/workman/Cases/ManageCases";


import WorkmanEditProf from "../../views/workman/WorkmanEditProf";
import WorkmanDashProfile from "../../views/workman/WorkmanDashProfile";
import CreateCase from "../../views/workman/Cases/CreateCase/CreateCase";
import BrowseCases from "../../views/workman/Cases/BrowseCases";
import OpenCaseDetails from "../../views/workman/Cases/OpenCaseDetails";

import REACTDraw from "../../views/workman/REACTDraw";

import CaseDetailsPage from "../../views/workman/Cases/CaseDetailsPage";

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout site="workman-Individual" />,
  horizontal: <HorizontalLayout />,
  workmanVertical: <WorkmanVerticalLayout site="workman-Individual" />,
};

// ** Document title
const TemplateTitle = "%s - Vuexy React Admin Template";

// ** Default Route
const DefaultRoute = "/workman/dashboard";

const WorkmanDashboard = lazy(() =>
  import("../../views/workman/WorkmanDashboard")
);

const WorkmanProfileCompletion = lazy(() =>
  import("../../views/workman/WorkmanProfileCompletion")
);
// const ProfileCompleteTwo = lazy(() => import("../../views/ProfileCompleteTwo"));







const AccountSettings = lazy(() => import('../../views/workman/WorkmanAccountSettings'))

const WorkmanSubaccount = lazy(() =>
  import("../../views/workman/WorkmanSubaccount")
);





// ** Merge Routes
const Routes = [
  //   {
  //     path: "/",
  //     index: true,
  //     element: <Navigate replace to={DefaultRoute} />,
  //   },
  {
    path: "/workman-Individual/dashboard",
    element: <WorkmanDashboard />,
    meta: {
      layout: "workmanVertical",
    },
  },
  {
    path: "/workman-Individual/dashboardProfileStatus",
    element: <WorkmanDashProfile />,
    meta: {
      layout: "vertical",
    },
  },
  {
    path: "/workman-Individual/Edit-Profile",
    element: <WorkmanEditProf />,
    meta: {
      layout: "workmanVertical",
    },
  },
  {
    path: "/workman-Individual/Profile-Completion",
    element: <WorkmanProfileCompletion />,
    meta: {
      layout: "vertical",
    },
   
  },
  {
    path: "/workman-Individual/manageSubAccounts",
    element: <WorkmanSubaccount />,
    meta: {
      layout: "workmanVertical",
    },
  },
  {
    path: "/workman-Individual/CasesDetails/:id",
    element: <CaseDetailsPage/>,
    meta: {
      layout: "workmanVertical",
    },
  },
  {
    path: "/workman-individual/OpenCasesDetails/:id",
    element: <OpenCaseDetails/>  ,
    meta: {
      layout: "workmanVertical",
    },
  },
  

  {
    path: "/workman-Individual/browseCases",
    element: <BrowseCases />,
    meta: {
      layout: "workmanVertical",
    },
  },

  {
    path: "/workman-Individual/Canvas",
    element: <REACTDraw/>,
    meta: {
      layout: "workmanVertical",
    },
  },
  
  
  {
    path: "/workman-Individual/cases",
    element: <CreateCase />,
    meta: {
      layout: "workmanVertical",
    },
  },
  {
    path: "/workman-Individual/manageCases",
    element: <ManageCases />,
    meta: {
      layout: "workmanVertical",
    },
  },
  
  {
    path: "/workman-Individual/lms/about",
    element: <WorkmanLMS />,
    meta: {
      layout: "workmanVertical",
    },
  },
  
  
 
  {
    path: "/workman-Individual/account-settings",
    element: <AccountSettings />,
    meta: {
      layout: "workmanVertical",
    },
  },

  {
    path: "/workman-Individual/lms/current-grade",
    element: <CurrentGrade />,
    meta: {
      layout: "workmanVertical",
    },
  },

  {
    path: "/workman-Individual/lms/next-level",
    element: <NextLevel />,
    meta: {
      layout: "workmanVertical",
    },
  },
  {
    path: "/workman-Individual/lms/upcoming-events",
    element: <UpcomingEvents />,
    meta: {
      layout: "workmanVertical",
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

const getWorkmanRoutes = (layout) => {
  const defaultLayout = layout || "workmanVertical";
  const layouts = ["vertical", "horizontal", "blank", "workmanVertical"];

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

export { DefaultRoute, TemplateTitle, Routes, getWorkmanRoutes };
