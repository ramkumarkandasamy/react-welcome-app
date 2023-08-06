import {components} from 'react'

import './index.css'

class Welcome extends components {
  state = {isLoggedIn: true}

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button>Subscribe</button>
    }
    return <button>Subscribed</button>
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank You! Happy Learning</p>
        <div>{this.renderAuthButton()}</div>
      </div>
    )
  }
}

export default Welcome
