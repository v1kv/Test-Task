import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as actions from '../../store/actions'

import './Cards.scss'
const Card = ({ photo, name, author, reddyToFull, ...restProps }) => {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const addReddyToFull = () => {
    dispatch(actions.actionFullImg(reddyToFull))
    navigation(`/photo`)
  }
  return (
    <div className="g-card">
      <img onClick={addReddyToFull} className="img" src={photo} alt="" />
      <div>
        <h1 className="title">Name: {name}</h1>
        <p className="name">Author: {author}</p>
      </div>
    </div>
  )
}

export default Card
