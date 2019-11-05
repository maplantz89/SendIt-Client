import React from 'react';
import './AddClimb.scss';

class AddClimb extends React.Component{
  state = {
    attempts: 1
  }

  decrement = () => {
    this.state.attempts === 0 ?
    this.setState({
      attempts: this.state.attempts
    })
    :
    this.setState({
      attempts: this.state.attempts-1
    })
  }

  increment = () => {
    this.setState({
      attempts: this.state.attempts+1
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log('submitted form')
  }

  render(){
    return (
      <div className="add-climbs col">
        <form onSubmit={this.submitForm} className="add-climb-form">
          <div className="form-group">
            <label>Difficulty</label>
            <select className="form-control add-input">
              <option>VB</option>
              <option>V1</option>
              <option>V2</option>
              <option>V3</option>
              <option>V4</option>
              <option>V5+</option>
            </select>
          </div>
          <div className="form-group">
            <label>Date</label>
            <input type="text" className="form-control add-input" id="difficulty" />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input type="text" className="form-control add-input" id="location" />
          </div>
          </form>
          <div className="attempts text-center">
          Attempts
            <div className="change-attempts">
              <button onClick={this.decrement} className="attempt-btn btn"> - </button> 
                {this.state.attempts} 
              <button onClick={this.increment} className="attempt-btn btn"> + </button>
              {this.state.attempts < 2 ?
              <div>Flashed</div>: 
              this.state.attempts > 5 ?
              <div>Long Project</div> 
              :<div>Sent It!</div>}
            </div>
          </div>
          <div className="text-center">
            <button onClick={this.submitForm} type="submit" className="add-climb-btn btn">Submit Climb</button>
          </div>
      </div>
    )
  }
}

export default AddClimb;

