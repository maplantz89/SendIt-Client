import React from 'react';
import { Link } from 'react-router-dom';
import sendItApiService from '../../Services/sendIt-api-services';
import './Registration.scss';

class Registration extends React.Component{
  state= { error: null }

  submitNewUser = (e) => {
    e.preventDefault();
    const {username, email, password} = e.target;
    const newUser = {
      username: username.value,
      email: email.value,
      password: password.value
    }
      sendItApiService.postUser(newUser)
      sendItApiService.postLogin(newUser)
      .then(user => {
        username.value = ''
        email.value= ''
        password.value=''
        this.props.history.push('/dashboard')
      })
      .catch(res => {
        this.setState({
          error: res.error
        })
      })
  }

  render(){
    const { error } = this.state;
    return (
      <div className="registration-from col">
        <Link to="/">
          <div className="background-form container">
            <h1 className="logo logo-register">Send It!</h1>
          </div>
        </Link>
        <div className="col">
        <h3 className="registration-title">Create New Account</h3>
          <form onSubmit={this.submitNewUser} className="registration-form">
            <div className='alert' role='alert'>
              {error && <p>{error}</p>}
            </div>
            <div className="form-group">
              <input type="text" className="form-control register-input" id="username_register" name="username" placeholder="Username" required/>
            </div>
            <div className="form-group">
              <input type="email" className="form-control email-input register-input" id="email_register" name="email" placeholder="Email" required/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control register-input" id="password_register" name="password" placeholder="Password" required/>
              <small id="password-register" className="pass-help form-text text-muted">Must be atleast 8 characters long</small>
            </div>
            <div className="register-btn text-center">
              <button type="submit" className="registration-button btn-sytle-1 btn">Create Account</button>
            </div> 
          </form>
        </div>
      </div>
    )
  }
}

export default Registration;