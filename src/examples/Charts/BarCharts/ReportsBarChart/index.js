import { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

 
import Card from "@mui/material/Card";

 
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import configs from "examples/Charts/BarCharts/ReportsBarChart/configs";
import MDButton from "../../../../components/MDButton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ReportsBarChart({ color, title, description, chart }) {
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            {title}
          </MDTypography>
          <MDTypography
            component="div"
            variant="button"
            color="text"
            fontWeight="light"
          >
            {description}
          </MDTypography>
        </MDBox>
        <MDBox display="flex" justifyContent="flex-end">
          <MDBox pl={2}>
            <MDButton color={"white"} variant={"contained"}>
              Quaterly ⬇
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
      <MDBox padding="1rem" mt={3} mb={3} mx={1}>
        {useMemo(
          () => (
            <MDBox
              variant="gradient"
              bgColor={"white"}
              borderRadius="lg"
              pr={0.5}
              height="12.5rem"
            >
              <Bar data={data} options={options} redraw />
            </MDBox>
          ),
          [color, chart]
        )}
      </MDBox>
    </Card>
  );
}

export default ReportsBarChart;
