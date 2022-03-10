import axios from 'axios'
import React, { useState } from 'react'

export default function InputData() {
    const [insertData, setInsertData] = useState({
        nitawade_wl: 546.1253063,
        nitawade_wf: 61791,
        balinge_wl: 544.35,
        balinge_wf: 62685
    })
    const changeHandle = (e) => {
        setInsertData({...insertData, [e.target.name]: e.target.value})
    }

    const submit = (e) => {
        e.preventDefault()
        axios.post("https://flood-monitoring-and-predict.herokuapp.com/predict", insertData).then((resp) => {
            console.log(resp.data)
        })
    }

    return (
        <section className="login-dark">
            <form method='post' onSubmit={submit}>
                <h2 className="visually-hidden">Login Form</h2>
                <div className="illustration">
                    <h3>Nitawade</h3>
                </div>
                <div className="row">
                    <p className="form-label col-5"><strong>Water Level:</strong></p>
                    <input 
                    type="text" 
                    className="form-input col-7" 
                    name="nitawade_wl" 
                    placeholder="Water Level" 
                    value={insertData.nitawade_wl}
                    onChange={changeHandle}
                    />
                </div>
                <div className="row">
                    <p className="form-label col-5"><strong>Water Flow:</strong></p>
                    <input 
                    type="text" 
                    className="form-input col-7" 
                    name="nitawade_wf" 
                    placeholder="Water Flow" 
                    value={insertData.nitawade_wf}
                    onChange={changeHandle} />

                </div>
                <div className="illustration mt-3">
                    <h3>Balinge</h3>
                </div>
                <div className="row">
                    <p className="form-label col-5"><strong>Water Level:</strong></p>
                    <input 
                    type="text" 
                    className="form-input col-7" 
                    name="balinge_wl" 
                    placeholder="Water Level" 
                    value={insertData.balinge_wl}
                    onChange={changeHandle} />
                </div>
                <div className="row">
                    <p className="form-label col-5"><strong>Water Flow:</strong></p>
                    <input 
                    type="text" 
                    className="form-input col-7" 
                    name="balinge_wf" 
                    placeholder="Water Flow"  
                    value={insertData.balinge_wf}
                    onChange={changeHandle} />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary d-block w-100" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </section>
    )
}
