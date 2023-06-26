// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="list-item-container">
      <img src={imageUrl} alt={`planet ${name}`} className="item-image" />
      <h1 className="heading">{name}</h1>
      <p className="text">{description}</p>
    </div>
  )
}

export default PlanetItem
