const backgroundColors = [
  "rgba(54, 162, 235, 0.8)",
  "rgba(255, 206, 86, 0.8)",
  "rgba(255, 99, 132, 0.8)",
  "rgba(75, 192, 192, 0.8)",
  "rgba(153, 102, 255, 0.8)",
  "rgba(255, 159, 64, 0.8)",
  "rgba(199, 199, 199, 0.8)",
  "rgba(83, 102, 255, 0.8)",
  "rgba(40, 159, 64, 0.8)",
  "rgba(210, 199, 199, 0.8)",
  "rgba(78, 52, 199, 0.8)",
  "rgba(54, 162, 235, 0.8)",
  "rgba(255, 206, 86, 0.8)",
  "rgba(255, 99, 132, 0.8)",
  "rgba(75, 192, 192, 0.8)",
  "rgba(153, 102, 255, 0.8)",
  "rgba(255, 159, 64, 0.8)",
  "rgba(199, 199, 199, 0.8)",
  "rgba(83, 102, 255, 0.8)",
  "rgba(40, 159, 64, 0.8)",
  "rgba(210, 199, 199, 0.8)",
  "rgba(78, 52, 199, 0.8)",
  "rgba(255, 159, 64, 0.8)",
  "rgba(199, 199, 199, 0.8)",
  "rgba(83, 102, 255, 0.8)",
];

const borderColors = [
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(255, 99, 132, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(159, 159, 159, 1)",
  "rgba(83, 102, 255, 1)",
  "rgba(40, 159, 64, 1)",
  "rgba(210, 199, 199, 1)",
  "rgba(78, 52, 199, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(255, 99, 132, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(159, 159, 159, 1)",
  "rgba(83, 102, 255, 1)",
  "rgba(40, 159, 64, 1)",
  "rgba(210, 199, 199, 1)",
  "rgba(78, 52, 199, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(159, 159, 159, 1)",
  "rgba(83, 102, 255, 1)",
];

// url for the Thrones API
const url = "https://thronesapi.com/api/v2/Characters";

async function getCharactersHouseCount() {
  const response = await fetch(url);
  const data = await response.json();
  const houses = {};
  data.forEach((character) => {
    let house = character.family;
    if (
      house === "" ||
      house === null ||
      house === undefined ||
      house === "Unknown" ||
      house === "Unkown" ||
      house === "None"
    ) {
      return;
    }
    // handle typos in house names
    if (
      house === "House Targaryn" ||
      house === "Targaryn" ||
      house === "Targaryan"
    ) {
      house = "House Targaryen";
    }

    if (houses[house]) {
      houses[house]++;
    } else if (houses[`House ${house}`]) {
      houses[`House ${house}`]++;
    } else {
      houses[house] = 1;
    }
  });
  return houses;
}

const renderChart = async () => {
  const donutChart = document.querySelector(".donut-chart");
  const houses = await getCharactersHouseCount();
  const houseNames = Object.keys(houses);
  const houseCounts = Object.values(houses);
  new Chart(donutChart, {
    type: "doughnut",
    data: {
      labels: houseNames,
      datasets: [
        {
          label: "Doughnut Chart",
          data: houseCounts,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
};

renderChart();
