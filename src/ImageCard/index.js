import './index.css'

const ImageCard = props => {
  const {imageDetails} = props
  const {imageUrl, imageAltText} = imageDetails
  return (
    <>
      <img src={imageUrl} alt={imageAltText} className="image" />
    </>
  )
}
export default ImageCard
