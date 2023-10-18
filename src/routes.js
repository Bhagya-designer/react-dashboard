import Dashboard from "layouts/dashboard";

import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Product",
    key: "product",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/product",
  },
  {
    type: "collapse",
    name: "Customers",
    key: "customers",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/customers",
  },
  {
    type: "collapse",
    name: "Income",
    key: "income",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/income",
  },
  {
    type: "collapse",
    name: "Promote",
    key: "promote",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/promote",
  },
  {
    type: "collapse",
    name: "Help",
    key: "help",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/help",
  }
];

export default routes;
