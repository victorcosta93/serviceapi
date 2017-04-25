// Imports
import React from 'react'
import ReactDOM from 'react-dom';
import {
    Line as LineChart,
    Bar as BarChart,
    Doughnut as NutChart
} from "react-chartjs-2";

class PrivateIndex extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    var chartData = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
        datasets: [
            {
                label: "Receitas",
                borderColor: "rgba(157, 55, 37,1)",
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
            },{
                label: "Despesas",
                borderColor: "rgba(75,192,192,1)",
                data: [81, 59, 40, 59, 56, 65, 55],
                fill: false,
            }
        ]
    };
    
    var chartBar = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
        datasets: [
            {
                label: "Receitas",
                borderColor: "rgba(157, 55, 37,1)",
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: true,
                fillColor: "rgba(157, 55, 37,1)",
            },{
                label: "Despesas",
                borderColor: "rgba(75,192,192,1)",
                data: [81, 59, 40, 59, 56, 65, 55],
                fill: true,
                fillColor: "rgba(157, 55, 37,1)",
            }
        ]
    };
    
    var ChartDonut = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
        datasets: [
            {
                label: "Receitas",
                borderColor: "rgba(157, 55, 37,1)",
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
            }
        ]
    };
      
    return (
    <div className="page-home">
      <div className="app"><LineChart data={chartData} height={180} /></div>
      <div className="app"><BarChart data={chartBar} height={180} /></div>
      <div className="app"><NutChart data={ChartDonut} height={180} /></div>
      <div className="app">.col-md-6</div>
      <div className="app">.col-md-6</div>
      <div className="app">.col-md-6</div>
      <div className="app">.col-md-6</div>
      <div className="app">.col-md-6</div>
      <div className="app">.col-md-6</div>
      <div className="app">.col-md-6</div>
      <div className="app">.col-md-6</div>
      <div className="app">.col-md-6</div>
    </div>
    )
  }
}

ReactDOM.render(<PrivateIndex />, document.getElementById('private-app'));