import './index.css'

const BannerCardsDetails = props => {
  const {cardDetail} = props
  const {headerText, description, className} = cardDetail

  return (
    <li className={`card ${className}`}>
      <h1 className="heading">{headerText}</h1>
      <p className="para">{description}</p>
      <button className="button">Show More</button>
    </li>
  )
}

export default BannerCardsDetails
