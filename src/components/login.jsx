import React, {Component} from 'react';
class Login extends Component {
    state={
        username : 'viren',
        password: ''
    }


    submitClick = () => {
        this.props.setUser(this.state.username, this.state.password)
    }
    handleUsernameChange = (event) => {
        this.setState({username : event.target.value})
    }
    handlePasswordChange = (event) => {
        this.setState({password : event.target.value})
    }

render() {
    return (
        <div className="login">
           <div className="card card-style">
                <div className="card-header">
                    <h1 className="text-center">Login</h1>
                </div>
                <div className="card-body">
                        <div className="mb-3">
                            <label for="username" className="form-label">Username</label>
                            <input className="form-control" type="text"   value={this.state.username} onChange={this.handleUsernameChange} id="username"/>
                            
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label>
                            <input type="password"   onChange={this.handlePasswordChange} className="form-control" id="password"/>
                        </div>
                        <button className="btn btn-primary" onClick={this.submitClick}>login</button>
                </div>
</div>




        </div>
    )
}
}
export default Login