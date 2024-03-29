// Write your code here
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1>The Button has been clicked {count} times</h1>
        <p>Click the button to increase the count!</p>
        <button>Click Me</button>
      </div>
    )
  }
}

export default ClickCounter
