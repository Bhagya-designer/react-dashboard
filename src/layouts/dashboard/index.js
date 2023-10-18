import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import DefaultDoughnutChart from "examples/Charts/DoughnutCharts/DefaultDoughnutChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

import Group10 from "assets/images/icons/flags/Group_10.png";
import Group11 from "assets/images/icons/flags/Group_11.png";
import Group12 from "assets/images/icons/flags/Group_12.png";

import Projects from "layouts/dashboard/components/Projects";

function Dashboard() {
  const { sales } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon={Group10}
                title="Earning"
                count="$198k"
                percentage={{
                  color: "success",
                  amount: "⬆37.8%",
                  label: "this month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="info"
                icon={Group11}
                title="Orders"
                count="$2.4k"
                percentage={{
                  color: "error",
                  amount: "⬇2%",
                  label: "this month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="info"
                icon={Group11}
                title="Balance"
                count="$2.4k"
                percentage={{
                  color: "error",
                  amount: "⬇2%",
                  label: "this month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon={Group12}
                title="Total Sales"
                count="$89k"
                percentage={{
                  color: "success",
                  amount: "⬆11%",
                  label: "this week",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Overview"
                  description="Monthly Earning"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <DefaultDoughnutChart
                  color="info"
                  title="Customers"
                  description={
                    <>
                      Customers that buy products
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={12}>
              <Projects />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
