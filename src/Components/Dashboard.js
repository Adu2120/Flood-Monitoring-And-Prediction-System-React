import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './footer.css'
import HECRAS from './HECRAS'
import Home from './Home'
import RoadAlerts from './RoadAlerts'
import StationDetails from './StationDetails'
import VFMSDashboard from './VFMSDashboard'

export default function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
    <div className="sidebar open" style={{ height: '100%' }}>
        <div className="logo-details text-center">
            <h1 style={{ width: '100%', color: 'cyan' }}>FMPS</h1>
        </div>
        <ul className="nav-list" style={{ padding: '10%', margin: 0 }}>
            <li>
                <Link to="/">
                    <i className="bx bxs-home" />
                    <span className="links_name">Home</span>
                </Link>
                <span className="tooltip">Home</span>
            </li>
            <li>
                <Link to="/VFMS_Dashboard">
                    <i className="bx bxs-dashboard" />
                    <span className="links_name">Alert Dashboard</span>
                </Link>
                <span className="tooltip" style={{ width: '270%' }}>V-FMS Dashboard</span>
            </li>
            <li>
                <Link to="/Input">
                    <i className='bx bxs-right-arrow-square' />
                    <span className="links_name">Input</span>
                </Link>
                <span className="tooltip" style={{ width: '270%' }}>Input</span>
            </li>
        </ul>
    </div>
    <div className="home-section">
        <div style={{ position: 'absolute', zIndex: '-1'}}>
            <video src="https://traversymedia.com/downloads/video.mov" autoPlay muted loop style={{ position: 'fixed', top: 0, left: 0, objectFit: 'cover', width: '100%', height: '100%', pointerEvents: 'none' }} />
        </div>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/VFMS_Dashboard'>
                <VFMSDashboard />
            </Route>
            <Route path='/Station_Details'>
                <StationDetails />
            </Route>
            <Route path='/HEC-RAS'>
                <HECRAS />
            </Route>
            <Route path='/Road-Alert'>
                <RoadAlerts />
            </Route>
        </Switch>
    </div>
</div>

  )
}
