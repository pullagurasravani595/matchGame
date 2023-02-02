import './indec.css'

const ImageItem = props => {
  const {imageDetails, imagesList, onClickThumbnailItem} = props
  const {thumbnailUrl} = imageDetails

  const onClickThumbnailImg = () => {
    const randomIndex = Math.floor(Math.random() * imagesList.length - 1)
    onClickThumbnailItem(randomIndex)
  }

  return (
    <li>
      <button
        type="button"
        className="button-btn"
        onClick={onClickThumbnailImg}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ImageItem
