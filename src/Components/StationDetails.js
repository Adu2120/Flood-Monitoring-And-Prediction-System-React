import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import Thermometer from 'react-thermometer-component'

export default function StationDetails() {
  const [waterLevel, setWaterLevel] = useState(0) //432.11
  const [waterFlow, setWaterFlow] = useState(0) //54321
  const [waterLevelData, setWaterLevelData] = useState([])
  const [waterFlowData, setWaterFlowData] = useState([])

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://flood-monitoring-and-predict.herokuapp.com/iot_waterlevel").then((resp) => {
        setWaterLevelData(resp.data)
        setWaterLevel(resp.data[0][1])
      })
    }, 2000);
  }, [waterLevelData])

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://flood-monitoring-and-predict.herokuapp.com/iot_waterflow").then((resp) => {
        setWaterFlowData(resp.data)
        // setWaterFlow(resp.data[0][1])
        setWaterFlow(5000)
      })
    }, 2000);
  }, [waterFlowData])

  return (
    <div>
      <div className="rounded-0 shadow-lg text-center allCap">
        <h1 className="border heading1">Shingnapur</h1>
      </div>
      {/* Add Icon end */}
      {/* Charts */}
      <div className="row">
        {/* Water Flow Chart */}
        {/* Water Level Chart*/}
        <div className="col-4 pt-2 px-5 waterlevel">
          {/* interactive chart */}

          {/* Live Value */}
          <div className="card-tools demo1" style={{ display: 'flex' }}>
            <h4 id="Water_Level">{waterLevel}</h4>
            <h4>m</h4>
          </div>
          {/* Live Value */}
          <div className="card card-primary card-outline ">
            {/* Card header */}
            <div className="card-header">
              {/* Heading */}
              <h3 className="card-title text-center allCap" style={{ width: '100%' }}>
                <i className="far fa-chart-bar" />
                Water Level Chart
              </h3>
              {/* Heading end */}
            </div>
            {/* Card header end */}
            {/* Card Body */}
            <div className="card-body">

              <Thermometer
                theme="light"
                value={waterLevel}
                max="200"
                steps="10"
                format="m"
                size="medium"
                height="400"
              />
              
              {/* <img src="img/chart.JPG" alt="chart" style={{ width: '100%', padding: '5%' }} />
              <div id="chartdiv1" style={{ width: '100%', height: '150%', backgroundColor: '#FFFFFF' }} /> */}
            </div>
            {/* /.card-body*/}
          </div>
          {/* /.card */}
        </div>
        {/* Water Level Chart end*/}
        <div className="col-4 px-5 pt-2">

          {/* Live Value */}
          <div className="demo1" style={{ display: 'flex' }}>
            <h4 id="Water_Flow">{waterFlow}</h4>
            <h4>L/hr</h4>
          </div>
          {/* Live Value end*/}
          {/* interactive chart */}
          <div className="card card-primary card-outline">
            {/* Card header */}
            <div className="card-header">
              {/* Heading */}
              <h3 className="card-title text-center allCap" style={{ width: '100%' }}>
                {/* <i class="far fa-chart-bar"></i> */}
                Water Flow Chart
              </h3>
              {/* Heading end */}
            </div>
            {/* Card header end */}
            {/* Card Body */}
            <div className="card-body" style={{ padding: "10%!important" }}>

              <ReactSpeedometer 
              maxValue={10000}
              value={waterFlow}
              needleColor="blue"
              startColor="green"
              segments={10}
              endColor="red" />

              {/* <img src="img/chart.JPG" alt="chart" style={{ width: '100%', padding: '5%' }} />
              <div id="chartdiv" style={{ width: '100%', height: '150%', backgroundColor: '#FFFFFF' }} /> */}
            </div>
            {/* /.card-body*/}
          </div>
          {/* /.card */}
        </div>
        {/* Water Flow Chart end*/}
        
        {/* /.col */}
      </div>
      {/* Charts end */}
    </div>
  )
}
