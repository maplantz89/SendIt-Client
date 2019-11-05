import React from 'react'
import './Header.scss'

class Header extends React.Component{
  render(){
    return (
      <div className='header container'>
        <div className="row">
          <div className="hamburger-menu text-center col">menu</div>
          <h2 className="title text-center col">Dashboard</h2>
          <div className="col text-center">
            <button className="filter-btn btn">Filters</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;