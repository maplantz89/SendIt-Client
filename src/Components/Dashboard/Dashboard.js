import React from 'react';
import Moment from 'react-moment';
import UserContext from '../../Context/UserContext';
import sendItApiService from '../../Services/sendIt-api-services';
import './Dashboard.scss';

class Dashboard extends React.Component{
  static contextType = UserContext;
  state= {
    highest_difficulty: [],
    total_attempts: [],
    total_projects:[],
    attempts_per_difficulty: [],
  }
  componentDidMount = () => {
    const user_id = this.context.user.id
    sendItApiService.getHighestDifficulty(user_id)
      .then(highest_difficulty => 
        this.setState({
          highest_difficulty: highest_difficulty
      }))
      sendItApiService.getTotalAttempts(user_id)
        .then(total_attempts => 
        this.setState({
          total_attempts: total_attempts
        }))
  }

  render(){
    return (
      <div className="dashboard container">
        <div className="data-cont-1 row">Highest Difficulty Sent</div>
        <p className="highest-difficulty col">
          <span className="difficulty">V{this.state.highest_difficulty.difficulty}</span>
          <span className="location">{this.state.highest_difficulty.location}</span>
          <br/>
          <Moment format="MM/DD/YYYY" className="date">
            {this.state.highest_difficulty.date}
          </Moment> 
        </p>
        <div className="total-projects row">Total Projects Completed</div>

        <div className="total-attempts row">Total Attempts</div>
        <p>{this.state.total_attempts.attempts}</p>
      </div>
    )
  }
}

export default Dashboard;