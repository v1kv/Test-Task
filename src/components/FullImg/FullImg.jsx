import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader/Loader'
import * as actions from '../../store/actions'

import './FullImg.scss'

const FullImg = () => {
  const img = useSelector((state) => state.fullImg)
  const loader = useSelector((store) => store.loader)
  const dispatch = useDispatch()
  const imgRef = useRef(null)
  const isLoaded = useRef(false)

  useEffect(() => {
    dispatch(actions.actionLoader(true))

    const handleLoad = () => {
      isLoaded.current = true
      dispatch(actions.actionLoader(false))
    }

    const imgRefCurrent = imgRef.current

    if (imgRefCurrent && !isLoaded.current) {
      imgRefCurrent.addEventListener('load', handleLoad)
    }

    return () => {
      if (imgRefCurrent) {
        imgRefCurrent.removeEventListener('load', handleLoad)
      }
    }
  }, [dispatch])

  useEffect(() => {
    if (!loader && !isLoaded.current) {
      dispatch(actions.actionLoader(true))
    }
  }, [loader, dispatch])

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="photo-page">
          <div className="photo-container">
            <img ref={imgRef} className="photo" src={img} alt="Full Img" />
          </div>
        </div>
      )}
    </>
  )
}

export default FullImg
