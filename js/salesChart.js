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
