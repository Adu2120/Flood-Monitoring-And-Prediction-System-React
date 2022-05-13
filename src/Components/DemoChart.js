import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Chart } from "react-google-charts";

export default function StationDetails() {
  const [waterLevel, setWaterLevel] = useState(432.11)
  const [waterFlow, setWaterFlow] = useState(54321)
  const [waterLevelData, setWaterLevelData] = useState([
    ["Fri, 25 Mar 2022 23:49:51 GMT", 432],
    ["Fri, 25 Mar 2022 23:49:51 GMT", 432],
    ["Fri, 25 Mar 2022 23:49:51 GMT", 432],
    ["Fri, 25 Mar 2022 23:49:51 GMT", 432],
    ["Fri, 25 Mar 2022 23:49:51 GMT", 432],
    ["Fri, 25 Mar 2022 23:49:51 GMT", 432],
    ["Fri, 25 Mar 2022 23:49:51 GMT", 432]
  ])
  const [waterFlowData, setWaterFlowData] = useState([
    ["Fri, 25 Mar 2022 23:49:51 GMT", 54321],
    ["Fri, 25 Mar 2022 23:49:51 GMT", 54321],
    ["Fri, 25 Mar 2022 23:49:51 GMT", 54321],
    ["Fri, 25 Mar 2022 23:49:51 GMT", 54321],
    ["Fri, 25 Mar 2022 23:49:51 GMT", 54321],
    ["Fri, 25 Mar 2022 23:49:51 GMT", 54321],
    ["Fri, 25 Mar 2022 23:49:51 GMT", 54321],
  ])

  const column1 = [
    {type: 'string', label: 'Timestamp'},
    "Water Level",
  ]

  const column2 = [
    {type: 'string', label: 'Water Level'},
    "Timestamp", "Water Flow",
  ]

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://127.0.0.1:5000/iot_waterlevel").then((resp) => {
        console.log(resp.data)
        setWaterLevel(resp.data[1][1])
        let temp = resp.data
        for (var i = 0; i < resp.data.length; i++) {
          temp[i][1] = parseFloat(temp[i][1])
        }
        setWaterLevelData(temp)
      })
    }, 2000);
  }, [waterLevelData])

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://127.0.0.1:5000/iot_waterflow").then((resp) => {
        console.log(resp.data)
        setWaterFlow(resp.data[1][1])
        let temp = resp.data
        for (var i = 0; i < resp.data.length; i++) {
          temp[i][1] = parseFloat(temp[i][1])
        }
        setWaterFlowData(temp)
      })
    }, 2000);
  }, [waterFlowData])

  const options = {
    title: "Water Flow Chart",
    subtitle: "in cusec",
    height: 500,
  };
  return (
    <div>
      <div className="rounded-0 shadow-lg text-center allCap">
        <h1 className="border heading1">Shingnapur</h1>
      </div>
      {/* Add Icon end */}
      {/* Charts */}
      <div className="row">
        {/* Water Flow Chart */}
        <div className="col-6 px-5 pt-5">

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
              <h5 className="card-title text-center allCap" style={{ width: '100%' }}>
                {/* <i class="far fa-chart-bar"></i> */}
                Water Flow Chart
              </h5>
              {/* Heading end */}
            </div>
            {/* Card header end */}
            {/* Card Body */}
            <div className="card-body">
              <Chart
                chartType="Line"
                data={[column2, ...waterFlowData]}
                options={options}
                width="100%"
                height="400px"
                legendToggle
              />
            </div>
            {/* /.card-body*/}
          </div>
          {/* /.card */}
        </div>
        {/* Water Flow Chart end*/}
        {/* Water Level Chart*/}
        <div className="col-6 pt-5 px-5">
          {/* interactive chart */}

          {/* Live Value */}
          <div className="card-tools demo1" style={{ display: 'flex' }}>
            <h4 id="Water_Level">{waterLevel}</h4>
            <h4>m</h4>
          </div>
          {/* Live Value */}
          <div className="card card-primary card-outline">
            {/* Card header */}
            <div className="card-header">
              {/* Heading */}
              <h5 className="card-title text-center allCap" style={{ width: '100%' }}>
                <i className="far fa-chart-bar" />
                Water Level Chart
              </h5>
              {/* Heading end */}
            </div>
            {/* Card header end */}
            {/* Card Body */}
            <div className="card-body">
              <Chart
                chartType="Line"
                data={[column1, ...waterLevelData]}
                options={options}
                legendToggle
              />
            </div>
            {/* /.card-body*/}
          </div>
          {/* /.card */}
        </div>
        {/* Water Level Chart end*/}
        {/* /.col */}
      </div>
      {/* Charts end */}
    </div>
  )
}
