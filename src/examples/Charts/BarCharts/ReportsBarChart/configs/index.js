  

function configs(labels, datasets) {
  return {
    data: {
      labels,
      datasets: [
        {
          label: datasets.label,
          tension: 0.4,
          borderWidth: 0,
          borderRadius: 4,
          borderSkipped: false,
          backgroundColor: "#F2EFFF",
          hoverBackgroundColor:"#5932EA",
          data: datasets.data,
          maxBarThickness: 32,
        },
      ],
    },
    options: {
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
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: "#fff",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 500,
            beginAtZero: true,
            font: {
              size: 0,
              weight: 300,
              family: "Roboto",
              style: "normal",
              lineHeight: 2,
            },
            color: "#fff",
          },
          display: false
        },
        x: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: "#fff",
          },
          ticks: {
            display: true,
            color: "#000",
            font: {
              size: 12,
              weight: 300,
              family: "Roboto",
              style: "normal",
              lineHeight: 2,
            },
          },
        },
      },
    },
  };
}

export default configs;
