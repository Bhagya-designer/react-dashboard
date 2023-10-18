  

/* eslint-disable no-dupe-keys */
   
import colors from "assets/theme/base/colors";

const { gradients, dark } = colors;

function configs(labels, datasets, cutout = 60) {
  const backgroundColors = [];

  if (datasets.backgroundColors) {
    datasets.backgroundColors.forEach((color) => {
      if (gradients[color]) {
        if (color === "info") {
          backgroundColors.push(gradients.info.main);
        } else {
          backgroundColors.push(gradients[color].state);
        }
      } else {
        backgroundColors.push(dark.main);
      }
    });
  } else {
    backgroundColors.push(dark.main);
  }

  return {
    data: {
      labels,
      datasets: [
        {
          label: datasets.label,
          weight: 9,
          cutout,
          tension: 0.9,
          pointRadius: 2,
          borderWidth: 2,
          backgroundColor: [
            '#FF007A',
            '#148fdb',
            '#F1EFFB'
          ],
          fill: false,
          hoverBorderWidth:3,
          hoverBackgroundColor:"#5932EA",
          data: datasets.data
        },
      ],
    },
    options: {
      name:{
        elements: {
          center: {
            text: 'Red is 2/3 the total numbers',
            color: '#FF6384', // Default is #000000
            fontStyle: 'Arial', // Default is Arial
            sidePadding: 20, // Default is 20 (as a percentage)
            minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
            lineHeight: 25 // Default is 25 (in px), used for when text wraps
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
    },
  };
}

export default configs;
