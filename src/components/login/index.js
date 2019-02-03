import React, { Component } from "react"
import { withRouter } from "react-router-dom"
class Login extends Component {
    state = {
        email: "",
        password: "",
        error: null
    }
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleLogin = event => {
        event.preventDefault()
        const { email, password } = this.state
        this.props.firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                this.props.history.push("/")
            })
            .catch(error => {
                this.setState({ error: error })
            })
        this.props.userCredentials(email)
    }

    handleSignUp = event => {
        event.preventDefault()
        const { email, password } = this.state
        this.props.firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => {
                this.props.firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password)
                    .then(user => {
                        this.props.history.push("/")
                    })
                    .catch(error => {
                        this.setState({ error: error })
                    })
            })
            .catch(error => {
                this.setState({ error: error })
            })
    }

    render() {
        const { email, password, error } = this.state
        return (
            <div>
                <div>
                    <div>
                        <h1>Log In</h1>
                    </div>
                </div>
                {error ? (
                    <div>
                        <div>
                            <p>{error.message}</p>
                        </div>
                    </div>
                ) : null}
                <div>
                    <div>
                        <form onSubmit={this.handleLogin}>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={this.handleInputChange}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={this.handleInputChange}
                            />
                            <button children="Log In" />
                            <button
                                children="Sign Up"
                                onClick={this.handleSignUp}
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Login)
