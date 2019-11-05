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
    projects_per_difficulty:[],
    attempts_per_difficulty:[]
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
    sendItApiService.getProjectsPerDifficulty(user_id)
      .then(result => this.numberOfProjects(result))
  }

  numberOfProjects = (result) => {
    let vb = 0;
    let v1 = 0;
    let v2 = 0;
    let v3 = 0;
    let v4 = 0;
    let v5 = 0;
    let v6 = 0;
    let v7 = 0;
    let v8 = 0;
    let v9 = 0;
    let v10 = 0;
    let vba = 0;
    let v1a = 0;
    let v2a = 0;
    let v3a = 0;
    let v4a = 0;
    let v5a = 0;
    let v6a = 0;
    let v7a = 0;
    let v8a = 0;
    let v9a = 0;
    let v10a = 0;
    result.forEach(project => {
      if(project.difficulty === 0){
        vb++;
        vba += project.attempts
      }
      if(project.difficulty === 1){
        v1++;
        v1a += project.attempts
      }
      if(project.difficulty === 2){
        v2++;
        v2a += project.attempts
      }
      if(project.difficulty === 3){
        v3++;
        v3a += project.attempts
      }
      if(project.difficulty === 4){
        v4++;
        v4a += project.attempts
      }
      if(project.difficulty === 5){
        v5++;
        v5a += project.attempts
      }
      if(project.difficulty === 6){
        v6++;
        v6a += project.attempts
      }
      if(project.difficulty === 7){
        v7++;
        v7a += project.attempts
      }
      if(project.difficulty === 8){
        v8++;
        v8a += project.attempts
      }
      if(project.difficulty === 9){
        v9++;
        v9a += project.attempts
      }
      if(project.difficulty === 10){
        v10++;
        v10a += project.attempts
      }
    })
    this.setState({
      projects_per_difficulty: [vb, v1, v2, v3, v4, v5, v6, v7, v8, v9, v10],
      attempts_per_difficulty: [vba, v1a, v2a, v3a, v4a, v5a, v6a, v7a, v8a, v9a, v10a]
    })
  }

  render(){
    const projectCard = this.state.projects_per_difficulty.forEach(project => {
      return (
        <li>{project} Projects</li>
      )
    })
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
          <ul>
            {projectCard}
          </ul>
        <div className="total-attempts row">Total Attempts</div>
        <p>{this.state.total_attempts.attempts}</p>
      </div>
    )
  }
}

export default Dashboard;