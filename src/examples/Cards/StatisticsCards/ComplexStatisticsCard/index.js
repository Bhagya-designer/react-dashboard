import Card from "@mui/material/Card";
import MDAvatar from "components/MDAvatar";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function ComplexStatisticsCard({ title, count, percentage, icon }) {
  return (
    <Card>
      <MDBox display="flex" pt={1} px={2}>
        <MDBox
          variant="gradient"
          color={"white"}
          borderRadius="xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          ml={6}
          my={4}
        >
          <MDAvatar src={icon} size="xl" />
        </MDBox>
        <MDBox textAlign="left" lineHeight={1.25} my={3} ml={2}>
          <MDTypography variant="button" fontWeight="light" color="text">
            {title}
          </MDTypography>
          <MDTypography variant="h4">{count}</MDTypography>
          <MDTypography component="p" variant="button" color="text" display="flex">
          <MDTypography
            component="span"
            variant="button"
            fontWeight="bold"
            color={percentage.color}
          >
            {percentage.amount}
          </MDTypography>
          &nbsp;{percentage.label}
        </MDTypography>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ComplexStatisticsCard;
