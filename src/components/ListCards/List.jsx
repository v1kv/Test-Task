import Card from '../CardsImg/Cards'
import './List.scss'
const List = ({ cards }) => {
  return (
    <Card
      photo={cards.photoSmall}
      key={cards.id}
      card={cards}
      name={cards.name}
      author={cards.author}
      reddyToFull={cards.photoFull}
    />
  )
}

export default List
