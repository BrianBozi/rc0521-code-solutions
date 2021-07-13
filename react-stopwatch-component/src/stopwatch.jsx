import React from 'react'
import ReactDOM from 'react-dom'

class StopWatch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      button: false,
      time: 0
    }
    this.stopWatch = this.stopWatch.bind(this)
  }

  stopWatch() {
    if(!this.state.button){
      this.intervalId = setInterval( () => {
        this.setState(prevState => {
          return {
            time: prevState.time +1,
            button: true
          }
        })
      }, 1000);
    } else {
      clearInterval(this.intervalId)
      this.setState( state => {
        return {
          time: state.time,
          button: false
        }
      })
    }
  }

  reset() {
    if(this.state.button === false){
      this.setState({ time: 0 })
    }
  }

  timers(){
    if(this.state.button === false){
      return 'fas fa-play icon'
    } else {
      return 'fas fa-pause icon'
    }
  }

  render(){
    return (
      <div>
      <div className={'circle'}>
        <div onClick={()=> this.reset()}  className="watchFace">
        <h1>{this.state.time}</h1>
        </div>
      </div>
        <i onClick={()=> this.stopWatch()} className={this.timers()}></i>
      </div>
      )
    }
  }

export default StopWatch
