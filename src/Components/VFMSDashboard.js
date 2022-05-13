import { CircularProgress } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function VFMSDashboard() {
  const [stations, setStations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      axios.get('https://flood-monitoring-and-predict.herokuapp.com/station_details').then((resp) => {
        console.log(resp.data)
        setStations(resp.data)
        setLoading(false)
      })
    }, 5000);
  }, [stations])

  console.log(stations)

  return (
    <>
      <div style={{ marginTop: '2%' }}>
        <div className="row text-center" style={{ margin: "0 17px", padding: '1%' }}>
          <div className='col-12 marg1'>
            <h1>Kolhapur</h1>
            <h2>(High Alert Area)</h2>
          </div>
        </div>
        <div className="row" style={{ margin: 0, padding: '1%' }}>
          {

            loading ? <div className='loading'><div className='progress'><CircularProgress className='circular-progress' /> </div></div> :
              stations.map((station) => {
                let alert1 = station.alert;
                if (alert1 === 'high') {
                  alert1 = 'linear-gradient(45deg, white, red)'
                } else if (alert1 === 'medium') {
                  alert1 = 'linear-gradient(45deg, white, yellow)'
                } else if (alert1 === 'low') {
                  alert1 = 'linear-gradient(45deg, white, green)'
                }
                return (
                  <>
                    {/* <div className='col-4' key={station['id']}>
                      <div className='marg' style={{ marginTop: '2%', color: 'black' }}>
                        <h3>{station['name']}</h3>
                        <h5>Water Level: <span>{station['predicted_wl']}</span></h5>
                        <h5>Water Flow: <span>{station['predicted_wf']}</span></h5>
                        <h5>Accuracy: <span>{station['predicted_wf']}</span></h5>
                      </div>
                    </div> */}

                    <div className="col-4" key={station['id']}>
                      <div className="card marg" style={{background: alert}}>
                        <div className="card-header">
                          <h3><span><i className='bx bx-location-plus p-2'></i></span>{station['name']}</h3>
                        </div>
                        <div className="card-body">
                          <div style={{display: 'flex', marginTop: '10px'}}>
                            <h5 className='col-6'>Water Level: </h5>
                            <span className='col-6'>
                              {/* <strong> */}
                                {station['predicted_wl']}
                              {/* </strong> */}
                            </span>
                          </div>
                          <div style={{display: 'flex', marginTop: '20px', marginBottom: '10px'}}>
                            <h5 className='col-6'> Water Flow: </h5>
                            <span className='col-6'>
                              {/* <strong> */}
                                {station['predicted_wf']}
                              {/* </strong> */}
                            </span>
                          </div>
                          {/* <h5><span>{station['predicted_wf']}</span></h5> */}
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
          }
        </div>
        {/* <div className="row" style={{ padding: '1%', width: '100%', marginTop: '2%' }}>
                <div className="col-12">
                    <div className="container">
                        <div className="row">
                            <div className="col-9 marg1" style={{ paddingBottom: '2%', marginLeft: '3%' }}>
                                <div className="co allCap text-center">
                                    <br />
                                    <h1>Kolhapur (High Alert Area)</h1>
                                </div>
                            </div>
                            <div id="div1" className="col-3 marg">
                                <div className="co">
                                    <h4>Shinganapur</h4>
                                    <h6>Water Level:</h6>
                                    <h6>Water Flow:</h6>
                                </div>
                            </div>
                            <div id="div2" className="col-3 marg">
                                <div className="cola" style={{ opacity: 1 }}>
                                    <h4>Balinga</h4>
                                    <h6>Water Level:</h6>
                                    <h6>Water Flow:</h6>
                                </div>
                            </div>
                            <div id="div3" className="col-3 marg">
                                <h4>Rajaram Bandhara</h4>
                                <h6>Water Level:</h6>
                                <h6>Water Flow:</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
      </div>
    </>
  )
}
