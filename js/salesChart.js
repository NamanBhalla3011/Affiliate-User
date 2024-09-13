const xValues = ["Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",];
const yValues = [1000, 2000, 3000, 4000, 4000, 4000, 1000,5000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        borderColor: "#fcc100", // Line color (yellow)
        borderWidth: 4, // Line thickness (adjust as needed)
        data: yValues,
        pointBackgroundColor: "#fff", // Circle color (yellow)
        pointBorderColor: "#fcc100", // Circle outline color (white)
        pointBorderWidth: 4, // Circle outline thickness
        pointRadius: 6, // Circle size
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 1000, max: 5000 } }],
      xAxes: [{ ticks: { min: 50, max: 150 } }],
    },
  },
});


const ctx = document.getElementById("myBarChart").getContext("2d");
const myBarChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Income",
        data: [2000, 4000, 3500, 5000, 4500, 3800, 4100, 4700],
        backgroundColor: "rgba(255, 205, 86, 1)",
        borderColor: "rgba(255, 205, 86, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#FFF",
        },
        title: {
          display: true,
          text: "Amount (in R)",
          color: "#FFF",
          font: {
            size: 16,
          },
        },
      },
      x: {
        ticks: {
          color: "#FFF",
        },
        title: {
          display: true,
          text: "Months",
          color: "#FFF",
          font: {
            size: 16,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
