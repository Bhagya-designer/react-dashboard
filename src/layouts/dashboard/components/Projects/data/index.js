import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Images
import logoXD from "assets/images/icons/flags/unsplash_4.png";
import logoAtlassian from "assets/images/icons/flags/unsplash_3.png";
import logoSlack from "assets/images/icons/flags/unsplash_2.png";
import logoSpotify from "assets/images/icons/flags/unsplash_1.png";

export default function data() {
  const Company = ({ image, name, subtitle }) => (
    <MDBox display="flex" px={1}>
      <MDBox display="flex" justifyContent="center" alignItems="center">
        <img src={image} />
      </MDBox>
      <MDBox textAlign="left" my={1} ml={2}>
        <MDTypography variant="h5">{name}</MDTypography>
        <MDTypography variant="button" fontWeight="light" color="text">
          {subtitle}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      {
        Header: "Product Name",
        accessor: "companies",
        width: "45%",
        align: "left",
      },
      { Header: "Stock", accessor: "members", width: "10%", align: "left" },
      { Header: "Price", accessor: "budget", align: "center" },
      { Header: "Total Sales", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        companies: <Company image={logoXD} name="Abstract 3D" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />,
        members: (
          <MDBox display="flex" py={1}>
            <MDTypography variant="caption" color="text" fontWeight="medium">
              32 in stock
            </MDTypography>
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $45.99
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            20
          </MDTypography>
        ),
      },
      {
        companies: (
          <Company image={logoAtlassian} name="Sarphens Illustration" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        ),
        members: (
          <MDBox display="flex" py={1}>
            <MDTypography variant="caption" color="text" fontWeight="medium">
              32 in stock
            </MDTypography>
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $45.99
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            20
          </MDTypography>
        ),
      },
      {
        companies: <Company image={logoSlack} name="Landing Page 3D max" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />,
        members: (
          <MDBox display="flex" py={1}>
            <MDTypography variant="caption" color="text" fontWeight="medium">
              32 in stock
            </MDTypography>
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $45.99
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            20
          </MDTypography>
        ),
      },
      {
        companies: <Company image={logoSpotify} name="Collab Illustration" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />,
        members: (
          <MDBox display="flex" py={1}>
            <MDTypography variant="caption" color="text" fontWeight="medium">
              32 in stock
            </MDTypography>
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $45.99
          </MDTypography>
        ),
        completion: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            20
          </MDTypography>
        ),
      },
    ],
  };
}
