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
import WorkmanFirmEditProf from "../../views/workmanFirm/WorkmanFirmEditProf";
import WorkmanFirmDashProfile from "../../views/workmanFirm/WorkmanFirmDashProfile";
import BrowseCases from "../../views/workmanFirm/Cases/BrowseCases";
import OpenCaseDetails from "../../views/workmanFirm/Cases/OpenCaseDetails";
import CaseDetails from "../../views/workmanFirm/Cases/CaseDetails";
import CreateCase from "../../views/workmanFirm/Cases/CreateCase/CreateCase";

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout site="workman-Firm" />,
  horizontal: <HorizontalLayout />,
  workmanFirmVertical: <WorkmanFirmVerticalLayout site="workman-Firm" />,
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
    path: "/workman-Firm/dashboard",
    element: <WorkmanDashboard />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },
  {
    path: "/workman-Firm/dashboardProfileStatus",
    element: <WorkmanFirmDashProfile />,
    meta: {
      layout: "vertical",
    },
  },
  
  
  {
    path: "/workman-Firm/Profile-Completion",
    element: <WorkmanProfileCompletion />,
    meta: {
      layout: "vertical",
    },
  },
  {
    path: "/workman-Firm/Edit-Profile",
    element: <WorkmanFirmEditProf />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },
  {
    path: "/workman-Firm/manageSubAccounts",
    element: <WorkmanSubaccount />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },
 

  {
    path: "/workman-Firm/browseCases",
    element: <BrowseCases />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },
  
  {
    path: "/workman-Firm/cases",
    element: <CreateCase />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },
  {
    path: "/workman-Firm/manageCases",
    element: <ManageCases />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },

  {
    path: "/workman-Firm/CasesDetails/:id",
    element: <CaseDetails/>,
    meta: {
      layout: "workmanFirmVertical",
    },
  },
  {
    path: "/workman-Firm/OpenCasesDetails/:id",
    element: <OpenCaseDetails/>  ,
    meta: {
      layout: "workmanFirmVertical",
    },
  },
  
  {
    path: "/workman-Firm/lms/about",
    element: <WorkmanLMS />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },
  
  
 
  {
    path: "/workman-Firm/account-settings",
    element: <AccountSettings />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },

  {
    path: "/workman-Firm/add-workmen",
    element: <AddWorkmen />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },
  {
    path: "/workman-Firm/manage-workmen",
    element: <ManageWorkmen />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },

  {
    path: "/workman-Firm/lms/current-grade",
    element: <CurrentGrade />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },

  {
    path: "/workman-Firm/lms/next-level",
    element: <NextLevel />,
    meta: {
      layout: "workmanFirmVertical",
    },
  },
  {
    path: "/workman-Firm/lms/upcoming-events",
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
