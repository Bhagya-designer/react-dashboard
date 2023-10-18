import { useLocation, NavLink } from "react-router-dom";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

import EvanoImg from "assets/images/icons/flags/Evano_8.png"

import SidenavCollapse from "examples/Sidenav/SidenavCollapse";

import SidenavRoot from "examples/Sidenav/SidenavRoot";
import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";

import { useMaterialUIController } from "context";

function Sidenav({ color, brand, brandName, routes, ...rest }) {
  const [controller] = useMaterialUIController();
  const {
    miniSidenav,
    transparentSidenav,
    whiteSidenav,
    darkMode,
    sidenavColor,
  } = controller;
  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");

  const renderRoutes = routes.map(({ name, icon, key, route }) => {
    let returnValue;

    returnValue = (
      <NavLink key={key} to={route}>
        <SidenavCollapse
          name={name}
          icon={icon}
          active={key === collapseName}
        />
      </NavLink>
    );

    return returnValue;
  });

  return (
    <SidenavRoot
      {...rest}
      variant="permanent"
      ownerState={{ transparentSidenav, whiteSidenav, miniSidenav, darkMode }}
    >
      <MDBox pt={3} pb={1} px={4} textAlign="center">
        <MDBox component={NavLink} to="/" display="flex" alignItems="center">
          {brand && (
            <MDBox bgColor={"white"} component="img" src={brand} alt="Brand" width="2rem" />
          )}
          <MDBox
            width={!brandName && "100%"}
            sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
          >
            <MDTypography color={"white"} component="h4" variant="button" fontWeight="medium">
              {brandName}
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
      <Divider />
      <List>{renderRoutes}</List>
      <MDBox p={4} mt="auto" color={sidenavColor}>
        <MDBox display="flex">
      <MDAvatar
        src={EvanoImg}
        size="xm"
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          border: `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",
        })}
      />
      <MDBox ml={1}>
        <MDTypography color={"white"} component="h4" variant="button" fontWeight="medium">
              Evano
        </MDTypography>
        <MDTypography color={"secondary"} component="h3" variant="button" fontWeight="medium">
              Project Manager
        </MDTypography>
        </MDBox>
        </MDBox>
      </MDBox>
    </SidenavRoot>
  );
}

export default Sidenav;
