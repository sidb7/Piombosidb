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
import CreateCases from "../../views/workman/Cases/CreateCases";

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />,
  workmanVertical: <WorkmanVerticalLayout site="workman" />,
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
    path: "/workman/dashboard",
    element: <WorkmanDashboard />,
    meta: {
      layout: "workmanVertical",
    },
  },
  
  {
    path: "/workman/ProfileEdit",
    element: <WorkmanProfileCompletion />,
    meta: {
      layout: "workmanVertical",
    },
  },
  {
    path: "/workman/manageSubAccounts",
    element: <WorkmanSubaccount />,
    meta: {
      layout: "workmanVertical",
    },
  },
 

  {
    path: "/workman/browseCases",
    element: <ManageCases />,
    meta: {
      layout: "workmanVertical",
    },
  },
  
  {
    path: "/workman/cases",
    element: <CreateCases />,
    meta: {
      layout: "workmanVertical",
    },
  },
  {
    path: "/workman/manageCases",
    element: <ManageCases />,
    meta: {
      layout: "workmanVertical",
    },
  },
  
  {
    path: "/workman/lms/about",
    element: <WorkmanLMS />,
    meta: {
      layout: "workmanVertical",
    },
  },
  
  
 
  {
    path: "/workman/account-settings",
    element: <AccountSettings />,
    meta: {
      layout: "workmanVertical",
    },
  },

  {
    path: "/workman/lms/current-grade",
    element: <CurrentGrade />,
    meta: {
      layout: "workmanVertical",
    },
  },

  {
    path: "/workman/lms/next-level",
    element: <NextLevel />,
    meta: {
      layout: "workmanVertical",
    },
  },
  {
    path: "/workman/lms/upcoming-events",
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
