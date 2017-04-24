// Imports
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

// Componentes
//import DashBoard from '../components/DashBoard';
//import ProfileAdm from '../components/ProfileAdm';

import MainHeader from '../components/MainHeader';
import MainNav from '../components/MainNav';
import MainFooter from '../components/MainFooter';


var LineChart = require("react-chartjs-2").Line;
var BarChart = require("react-chartjs-2").Bar;
var NutChart = require("react-chartjs-2").Doughnut;

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
      
    return (
    <Router>
        <section>
            <MainHeader />
            <MainNav />
            <main className="main-global">
                
                <div className="page-home">
                  <div className="app"><LineChart data={chartData} legend="Ultimos 6 meses" height="180" option={{maintainAspectRatio: false}} /></div>
                  <div className="app"><BarChart data={chartData} legend="Ultimos 6 meses" height="180" /></div>
                  <div className="app"><NutChart data={chartData} legend="Ultimos 6 meses" height="180" /></div>
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
                
            </main>
            <MainFooter />
        </section>
    </Router>
    )
  }
}

export default PrivateIndex;