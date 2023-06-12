import { Routes, Route } from 'react-router-dom'
import Main from '../pages/MainPages/Main'
import PhotoPages from '../pages/PhotoPages/PhotoPages'
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/photo" element={<PhotoPages />}></Route>
    </Routes>
  )
}
export default AppRoutes
