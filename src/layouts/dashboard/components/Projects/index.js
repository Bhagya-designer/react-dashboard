import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";

import DataTable from "examples/Tables/DataTable";

import data from "layouts/dashboard/components/Projects/data";
import MDButton from "components/MDButton";

function Projects() {
  const { columns, rows } = data();

  const renderMenu = (
    <MDBox display="flex" justifyContent="flex-end">
      <MDBox color={"white"} pr={1}>
        <MDInput label="&#x1F50D; Search" />
      </MDBox>
      <MDBox pl={2}>
        <MDButton color={"white"} variant={"contained"}>Last 30 days ⬇</MDButton>
      </MDBox>
    </MDBox>
  );

  return (
    <Card>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Product Sell
          </MDTypography>
        </MDBox>
        {renderMenu}
      </MDBox>
      <MDBox>
        <DataTable
          table={{ columns, rows }}
          showTotalEntries={false}
          isSorted={false}
          noEndBorder
          entriesPerPage={false}
        />
      </MDBox>
    </Card>
  );
}

export default Projects;
