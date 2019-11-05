import React from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../Context/UserContext';
import sendItApiService from '../../Services/sendIt-api-services';
import './Login.scss';

class Login extends React.Component{
  static contextType = UserContext;

  state= { 
    error: null, 
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || `/dashboard`
    history.push(destination)
  }

  loginUser = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    this.setState({ error: null})
    const user = { 
      username: username.value,
      password: password.value
    }
    sendItApiService.postLogin(user)
    .then(res => {
      username.value = ''
      password.value = ''
      this.context.processLogin(res.authToken)
      this.handleLoginSuccess()
    })
    .catch(res => {
      this.setState({ error: res.error })
    })
  }

  render(){
    const { error } = this.state;
    return(
      <div className="login-form col">
        <Link to="/">
          <div className="background-login-form container">
            <h1 className="logo logo-login">Send It!</h1>
          </div>
        </Link>
        <div className="col">
          <form onSubmit={this.loginUser} className="login-form">
            <div className='alert' role='alert'>
              {error && <p>{error}</p>}
            </div>
            <div className="form-group">
              <input type="text" className="form-control username-input login-input" id="username_login" name="username" placeholder="Username" required />
            </div>
            <div className="form-group">
              <input type="password" className="form-control login-input" id="password-login" name="password" placeholder="Password" required />
            </div>
            <div className="login-btn text-center">
              <button type="submit" className="registration-button btn-sytle-1 btn">Login</button>
            </div>
          </form>
        </div>
        <div className="forgot-btn text-center">
          <button className="create-account-button forgot-password btn btn-link disabled">Forgot Password?</button>
        </div>
      </div>
    )
  }
}

export default Login;