import React, { Component } from "react";
import Chart from "react-apexcharts";
import Moment from 'moment';
import {  Route, Switch } from 'react-router-dom';
import Rountings from './Rountings';
import moment from "moment";
const axios = require('axios');
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories:[30, 40, 45, 50, 49, 60, 70]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70]
        }
      ]
    };
    
 
  }

  async myfunction(){
    let username = [];
    let dates = [];
    let country = [];
    let views = [];
    const responce = await axios.get('http://localhost:3001/api/admin/users');
    console.log(responce.data);
    responce.data.map((data)=>{
      username.push(data.userName)
      var dd = Moment(data.createdAt).format('DD/MM/YYYY')
      var day = dd.split('/')
      console.log(day[0])
      dates.push(day[0])
      country.push(data.country)
      views.push(data.views);
      //console.log(dd)

    })
  this.setState({
    options:{
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories:username
      }
    },
    series: [
      {
        name: 'series',
        data: dates
      }
    ]
  })
  }
  
  async componentDidMount(){
   await this.myfunction()
  }

  render() {
    return (
      <>
        <Rountings />
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
   
      
      </>
      
    );
  }
}

export default App;

