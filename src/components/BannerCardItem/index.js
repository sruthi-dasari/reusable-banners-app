import './index.css'

const BannerCardsDetails = props => {
  const {cardDetail} = props
  const {headerText, description, className} = cardDetail

  return (
    <li className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button>Show More</button>
    </li>
  )
}

export default BannerCardsDetails
