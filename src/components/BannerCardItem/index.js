// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props

  const {headerText, description, className} = bannerDetails

  return (
    <li className={`${className} card`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description} </p>
        <button type="button" className="button btn">
          Show more
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
