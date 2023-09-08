// ** Router imports
import { useRoutes } from "react-router-dom";

// ** GetRoutes
import { getRoutes } from "./routes";
import { getWorkmanRoutes } from "./routes/workman";
import { getSupplierRoutes } from "./routes/supplier";
import { getCustomerRoutes } from "./routes/customer";
// ** Hooks Imports
import { useLayout } from "@hooks/useLayout";

const Router = () => {
  // ** Hooks
  const { layout } = useLayout();

  const allRoutes = getRoutes(layout);
  const workmanRoutes = getWorkmanRoutes(layout);
  const supplierRoutes = getSupplierRoutes(layout);
  const customerRoutes = getCustomerRoutes(layout);
  // const allRoutes = getRoutes(layout);

  const routes = useRoutes([...allRoutes, ...workmanRoutes,...supplierRoutes,...customerRoutes]);

  return routes;
};

export default Router;
