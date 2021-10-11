import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";



const Chartboard = () => {
  const [chartData, setChartData] = useState({});
  const [products, setproducts] = useState([]);


  const chart = () => {
    let productName = [];
    let Amount = [];
    axios.get("http://localhost:5000/stock/")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
          productName.push(dataObj.ProductName);
          Amount.push(parseInt(dataObj.Amount));
        }
        setChartData({
          labels: productName,
          datasets: [
            {
              label: "level of thiccness",
              data: Amount,
              backgroundColor: ["#060B26"],
              borderWidth: 4

            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(productName, Amount);
  };

  useEffect(() => {
    chart();
  }, []);


  return (
    <div >

      <div style={{ marginLeft: "400px", maxWidth: "800px", marginTop: "20px" }}>
        <Line

          data={chartData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  )
}

export default Chartboard
