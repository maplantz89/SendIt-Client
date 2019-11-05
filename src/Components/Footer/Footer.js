import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

class Footer extends React.Component{
  //on click set active state to make icon grey and change the header title 
  //need user_id here

  render(){
    return (
      <div className="footer col">
        <ul className="footer-icons row">
          <li className="col">
            <Link to='/dashboard' className="footer-link">Dashboard</Link>
          </li>
          <li className="col">
            <Link to='/add-climb' className="footer-link">Add Climb</Link>
          </li>
          <li className="col">
            <Link to='/climbs' className="footer-link">Climbs</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Footer;