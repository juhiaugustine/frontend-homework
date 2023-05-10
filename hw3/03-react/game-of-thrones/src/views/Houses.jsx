import React, { Component } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

class Houses extends Component {
  state = {
    charactersCount: [],
    houses: [],
  };
  componentDidMount() {
    axios.get(`https://thronesapi.com/api/v2/Characters`).then((res) => {
      const characters = res.data;
      let houses = {};
      characters.forEach((character) => {
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
      this.setState({
        charactersCount: Object.values(houses),
        houses: Object.keys(houses),
      });
    });
  }

  render() {
    let data = {
      labels: this.state.houses,
      datasets: [
        {
          label: "Number of Characters",
          data: this.state.charactersCount,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    return (
      <div>
        <h1>
          <center>Family Chart</center>
        </h1>
        <Doughnut className="donut-chart" data={data} />
      </div>
    );
  }
}

export default Houses;
