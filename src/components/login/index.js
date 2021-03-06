import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import "./style.scss";
class Login extends Component {
    state = {
        signUpEmail: "",
        logInEmail: "",
        signUpPassword: "",
        logInPassword: "",
        firstName:"",
        lastName:"",
        phoneNumber:"",
        logInError: null,
        signUpError: null
    }
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleLogin = event => {
        event.preventDefault()
        const { logInEmail, logInPassword } = this.state
        this.props.firebase
            .auth()
            .signInWithEmailAndPassword(logInEmail, logInPassword)
            .then(user => {
                this.props.history.push("/")
                this.props.userCredentials(logInEmail)
            })
            .catch(error => {
                this.setState({ logInError: error })
            })
    }

    handleSignUp = event => {
        event.preventDefault()
        const { signUpEmail, signUpPassword, firstName, lastName, phoneNumber } = this.state
        this.props.firebase
            .auth()
            .createUserWithEmailAndPassword(signUpEmail, signUpPassword)
            .then(user => {
                this.props.firebase
                    .auth()
                    .signInWithEmailAndPassword(signUpEmail, signUpPassword)
                    .then(user => {
                        this.props.history.push("/")
                        this.props.userCredentials(signUpEmail)
                    })
                    .catch(error => {
                        this.setState({ error: error })
                    })
            })
            .catch(error => {
                this.setState({ signUpError: error })
            })
        let user = { firstName: firstName, lastName: lastName, phoneNumber: phoneNumber }
        this.props.createNewUser(user, signUpEmail.split('@')[0]);
    }

    render() {
        const { signUpEmail, logInEmail, signUpPassword, logInPassword, firstName, lastName, phoneNumber, signUpError, logInError } = this.state
        return (
            <div>
                <div>
                    <div className="titleStyling">
                        <h1>Log In</h1>
                    </div>
                </div>
                {logInError ? (
                    <div>
                        <div>
                            <p>{logInError.message}</p>
                        </div>
                    </div>
                ) : null}
                <div>
                    <div className="logInForm">
                        <form onSubmit={this.handleLogin}>
                            <input
                                className="formItem"
                                type="text"
                                name="logInEmail"
                                placeholder="Email"
                                value={logInEmail}
                                onChange={this.handleInputChange}
                            />
                            <input
                                className="formItem"
                                type="password"
                                name="logInPassword"
                                placeholder="Password"
                                value={logInPassword}
                                onChange={this.handleInputChange}
                            />
                            <button
                                className="buttonStyling"
                                children="Log In"
                                onClick={this.handleLogin}/>
                        </form>
                    </div>
                </div>
                <div>
                    <div className="titleStyling">
                        <h1>Sign Up</h1>
                    </div>
                </div>
                {signUpError ? (
                    <div>
                        <div>
                            <p>{signUpError.message}</p>
                        </div>
                    </div>
                ) : null}
                <div>
                    <div className="signInForm">
                        <form onSubmit={this.handleSignUp}>
                            <input
                                className="formItem"
                                type="text"
                                name="signUpEmail"
                                placeholder="Email"
                                value={signUpEmail}
                                onChange={this.handleInputChange}
                            />
                            <input
                                className="formItem"
                                type="password"
                                name="signUpPassword"
                                placeholder="Password"
                                value={signUpPassword}
                                onChange={this.handleInputChange}
                            />
                            <input
                                className="formItem"
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={firstName}
                                onChange={this.handleInputChange}
                            />
                            <input
                                className="formItem"
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={this.handleInputChange}
                            />
                            <input
                                className="formItem"
                                type="text"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={this.handleInputChange}
                            />
                            <button
                                className="buttonStyling"
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
