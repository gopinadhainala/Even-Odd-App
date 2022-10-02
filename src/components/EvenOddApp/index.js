import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(previousNum => ({
      count: previousNum.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state

    const isEven = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <div className="counter-card">
          <h1 className="count-heading">Count {count}</h1>
          <p className="count-text">Count is {isEven} </p>
          <button
            type="button"
            className="button-increment"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="instruction">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
