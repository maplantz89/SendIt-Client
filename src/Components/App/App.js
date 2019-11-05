import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import TokenService from '../../Services/token-service';

import LandingPage from '../LandingPage/LandingPage';
import Registration from '../Registration/Registration';
import Dashboard from '../Dashboard/Dashboard';
import Climbs from '../Climbs/Climbs';
import AddClimb from '../AddClimb/AddClimb';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

class App extends React.Component {
  render(){
    return (
      <main className="App row no-gutters">
        {TokenService.hasAuthToken() ? 
        <Header></Header>
        : ''}
        <Switch>
        <Route
          exact path='/'
          component={LandingPage}
        />
        <Route
          exact path='/registration'
          component={Registration}
        />
        <Route
          exact path='/login'
          component={Login}
        />
        <Route
          exact path='/dashboard'
          component={Dashboard}
        />
        <Route 
          exact path='/add-climb'
          component={AddClimb}
        />
        <Route 
          exact path='/climbs'
          component={Climbs}
        />
        </Switch>
        {TokenService.hasAuthToken() ?
        <Footer></Footer> 
        : ''}
      </main>
    );
  }
}

export default App;
