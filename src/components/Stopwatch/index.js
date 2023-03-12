// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isRunningTimer: false, timeElapsedInSeconds: 0}

  componentDidMount() {
    clearInterval(this.timeInterval)
  }

  updateTimer = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onClickStart = () => {
    this.timeInterval = setInterval(this.updateTimer, 1000)
    this.setState({isRunningTimer: true})
  }

  onClickStop = () => {
    clearInterval(this.timeInterval)
    this.setState({isRunningTimer: false})
  }

  onClickReset = () => {
    clearInterval(this.timeInterval)
    this.setState({isRunningTimer: false, timeElapsedInSeconds: 0})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isRunningTimer} = this.state
    const times = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="main-container">
        <div className="app-container">
          <h1 className="title">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-img-text">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-image"
              />
              <h1 className="timer-title">Timer</h1>
            </div>
            <h1 className="timer-display">{times}</h1>
            <div className="button-container">
              <button
                className="timer-button start"
                type="button"
                onClick={this.onClickStart}
                disabled={isRunningTimer}
              >
                Start
              </button>
              <button
                className="timer-button stop"
                type="button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                className="timer-button reset"
                type="button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
