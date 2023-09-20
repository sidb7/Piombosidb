// ** Router imports
import { useRoutes } from "react-router-dom";

// ** GetRoutes
import { getRoutes } from "./routes";
import { getWorkmanRoutes } from "./routes/workman";
import { getSupplierRoutes } from "./routes/supplier";
import { getCustomerRoutes } from "./routes/customer";
import { getEnterpriseRoutes } from "./routes/enterprise";
import { getDeveloperRoutes } from "./routes/developer";
import { getDesignRoutes } from "./routes/design";
// ** Hooks Imports
import { useLayout } from "@hooks/useLayout";
import { getWorkmanFirmRoutes } from "./routes/workmanFirm";

const Router = () => {
  // ** Hooks
  const { layout } = useLayout();

  const allRoutes = getRoutes(layout);
  const workmanRoutes = getWorkmanRoutes(layout);
  const supplierRoutes = getSupplierRoutes(layout);
  const customerRoutes = getCustomerRoutes(layout);
  const enterpriseRoutes = getEnterpriseRoutes(layout);
  const developerRoutes = getDeveloperRoutes(layout);
  const designRoutes = getDesignRoutes(layout);
  const workmanFirmRoutes = getWorkmanFirmRoutes(layout);
  // const allRoutes = getRoutes(layout);

  const routes = useRoutes([...allRoutes, ...workmanRoutes,...supplierRoutes,
    ...customerRoutes,...workmanFirmRoutes,...enterpriseRoutes,...developerRoutes,...designRoutes]);

  return routes;
};

export default Router;
