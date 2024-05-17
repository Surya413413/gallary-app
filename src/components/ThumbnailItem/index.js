// Write your code here.
const ThumbnailItem = props => {
  const {eachDetails, changeImg, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachDetails

  const thumnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const displayImg = () => {
    changeImg(id)
  }

  return (
    <li className='list-container'>
      <button className='button-style' onClick={displayImg}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
