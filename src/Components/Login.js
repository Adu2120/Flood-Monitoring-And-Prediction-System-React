import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function Login() {
    const history = useHistory();

    const submit = () => {
        history.push('/')
    }

    return (
        <section className="login-dark">
            <form method='post' onSubmit={submit}>
                <div className="illustration">
                    <h3>Welcome To VFMS</h3>
                </div>
                <div className="row">
                    <p className="form-label col-5"><strong>User ID:</strong></p>
                    <input type="text" className="form-input col-7" name="nitawade_wl" placeholder="Water Level" />
                </div>
                <div className="row mt-2">
                    <p className="form-label col-5"><strong>Password:</strong></p>
                    <input type="text" className="form-input col-7" name="nitawade_wl" placeholder="Water Level" />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary d-block w-100" type="submit">
                        Log In
                    </button>
                </div>
                <Link className="forgot" to="/">Forgot your password?</Link>
            </form>
        </section>
    )
}
