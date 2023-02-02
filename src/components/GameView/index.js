import {Component} from 'react'
import Navbar from '../Navbar'
import TabItem from '../TabItem'
import ImageItem from '../ImageItem'
import ScoreCardItem from '../ScoreCardItem'
import './index.css'

class GameView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      seconds: 60,
      imageShow: props.imagesList[0].imageUrl,
      activeTabId: props.tabsList[0].tabId,
      clickedThumbnailList: [],
      gameInProcess: false,
    }
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)

    this.setState({seconds: 60, gameInProcess: false})
  }

  tick = () => {
    this.setState(prevState => ({seconds: prevState.seconds - 1}))
  }

  onClickTabItem = tabId => {
    this.setState({activeTabId: tabId})
  }

  divideImagesBasedOnTabId = () => {
    const {activeTabId} = this.state
    const {imagesList} = this.props

    const filterList = imagesList.filter(
      eachImg => eachImg.category === activeTabId,
    )

    return filterList
  }

  endMatchGame = scoreValue => {
    this.setState({score: scoreValue, seconds: 60, gameInProcess: false})
  }

  onClickThumbnailItem = index => {
    const {imagesList} = this.props
    const {clickedThumbnailList} = this.state
    const matchImage = clickedThumbnailList.includes(index)

    if (matchImage) {
      this.endMatchGame(clickedThumbnailList.length)
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        imageShow: imagesList[index].imageUrl,
        clickedThumbnailList: [...prevState.clickedThumbnailList, index],
      }))
    }
  }

  renderBottomSection = () => {
    const {imageShow, activeTabId} = this.state
    const {tabsList, imagesList} = this.props
    const filterImagesList = this.divideImagesBasedOnTabId()

    return (
      <>
        <img src={imageShow} alt="match" className="match-img" />
        <ul className="tab-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              isActive={tabDetails.tabId === activeTabId}
              onClickTabItem={this.onClickTabItem}
            />
          ))}
        </ul>
        <ul className="images-container">
          {filterImagesList.map(imageDetails => (
            <ImageItem
              imageDetails={imageDetails}
              key={imageDetails.id}
              imagesList={imagesList}
              onClickThumbnailItem={this.onClickThumbnailItem}
            />
          ))}
        </ul>
      </>
    )
  }

  resetGameScore = () => {
    clearInterval(this.timerId)

    this.setState({score: 0, seconds: 60, gameInProcess: false})
  }

  renderGameScore = () => {
    const {score} = this.state

    return <ScoreCardItem score={score} resetGameScore={this.resetGameScore} />
  }

  render() {
    const {score, seconds, clickedThumbnailList} = this.state
    console.log(clickedThumbnailList)
    return (
      <>
        <ul>
          <Navbar score={score} seconds={seconds} />
          <div className="banner-container">
            {seconds === 0
              ? this.renderGameScore()
              : this.renderBottomSection()}
          </div>
        </ul>
      </>
    )
  }
}

export default GameView
