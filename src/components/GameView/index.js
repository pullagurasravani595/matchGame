import {Component} from 'react'
import Navbar from '../Navbar'
import './index.css'

class GameView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      seconds: 60,
      imageShow: props.imagesList[0].imageUrl,
    }
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState(prevState => ({seconds: prevState.seconds - 1}))
  }

  render() {
    const {score, seconds} = this.state
    const {tabsList, imagesList} = this.props

    return (
      <>
        <Navbar score={score} seconds={seconds} />
        <div className="banner-container">
          <img src="" />
          <p>p</p>
        </div>
      </>
    )
  }
}

export default GameView
