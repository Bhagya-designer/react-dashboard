  

import { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import configs from "examples/Charts/DoughnutCharts/DefaultDoughnutChart/configs";

ChartJS.register(ArcElement, Tooltip, Legend);

function DefaultDoughnutChart({ icon, title, description, height, chart }) {
  const { data, options } = configs(chart.labels || [], chart.datasets || {}, chart.cutout);

  const renderChart = (
    <MDBox pt={3} pr={2} pl={icon.component ? 1 : 2}>
            {title && <MDTypography variant="h6">{title}</MDTypography>}
            <MDBox>
              <MDTypography component="div" variant="button" color="text">
                {description}
              </MDTypography>
            </MDBox>
      {useMemo(
        () => (
          <MDBox height={height} p={3}>
            <Doughnut data={data} options={options} redraw />
          </MDBox>
        ),
        [chart, height]
      )}
    </MDBox>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

DefaultDoughnutChart.defaultProps = {
  icon: { color: "info", component: "" },
  title: "",
  description: "",
  height: "19.125rem",
};

export default DefaultDoughnutChart;
