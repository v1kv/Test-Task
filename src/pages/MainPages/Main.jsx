import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import List from '../../components/ListCards/List'
import Loader from '../../components/Loader/Loader'
import * as actions from '../../store/actions'
import './Main.scss'

const Main = () => {
  const dispatch = useDispatch()
  const data = useSelector((store) => store.data)
  const loader = useSelector((store) => store.loader)

  useEffect(() => {
    dispatch(actions.actionFetchData())
  }, [dispatch])

  const productsMap = data?.map((element) => {
    const { urls, user, alt_description } = element
    const obj = {
      id: element.id,
      photoSmall: urls.small,
      photoFull: urls.full,
      name: alt_description,
      author: user.name,
    }
    return <List key={obj.id} cards={obj}></List>
  })

  return (
    <>
      {!loader ? (
        <div className="container">
          <div className="wrapper-cards">{productsMap}</div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Main
