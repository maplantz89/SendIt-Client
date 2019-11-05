import React from 'react';
import GoogleIcon from '../../images/google-icon.png';
import './LandingPage.scss';

class LandingPage extends React.Component{

  pushLogin = () => {
    this.props.history.push('/login');
  }

  pushGoogleLogin = () => {
    //login with google
  }

  pushRegistration = () => {
    this.props.history.push('/registration');
  }

  render(){
    return(
      <div className="col">
        <div className="background container">
          <h1 className="logo">Send It!</h1>
        </div>
        <div className="col">
          <ul className="sign-in-buttons">
            <li>
              <button onClick={this.pushLogin} type="button" className="registration-button btn-sytle-1 btn">
                Sign-in with Username
              </button>
            </li>
            <li>
              <button onClick={this.pushGoogleLogin} type="button" className="google-button btn btn-sytle-1 btn-light">
                <img src={GoogleIcon} height="30px" alt="google icon" />
                <span>Sign-in with Google</span>
              </button>
            </li>
            <li>
              <button onClick={this.pushRegistration} type="button" className="create-account-button btn-sytle-1 btn btn-link">
                Create New Account
              </button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default LandingPage;