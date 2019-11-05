import React from 'react';
import Moment from 'react-moment';
import UserContext from '../../Context/UserContext';
import sendItApiService from '../../Services/sendIt-api-services';
import './Climbs.scss';

class Climbs extends React.Component{
  static contextType = UserContext;
  state= {
    climbs: []
  }
  componentDidMount = () => {
    const user_id = this.context.user.id
    sendItApiService.getClimbs(user_id)
      .then(climbs => 
        this.setState({
          climbs: climbs
      }))
  }
  render(){
    const climbCard = this.state.climbs.map((climb, index) => {
      return (
        <li key={index} className="climb-item">
          <span className="difficulty col">
            V{climb.difficulty}
          </span>
          <span className="location">
            {climb.location}
            <br/>
            <span className="date">
              <Moment format="MM/DD/YYYY">
                {climb.date}
              </Moment> 
            </span>
          </span>
          <span className="attempts">
            {climb.attempts} Attempts
          </span>
        </li>
      )
    })
    return(
      <div className="climbs col">
        <div className="filters">No Filters Active</div>
        <ul className="list-climbs">
          {climbCard}
        </ul>
      </div>
    )
  }
}

export default Climbs;