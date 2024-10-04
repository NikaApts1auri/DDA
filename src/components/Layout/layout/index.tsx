
import { Outlet } from 'react-router-dom'
import Header from '../../base/header/header/Header'
import Footer from '../../base/footer/footer/Footer'

const DefaultLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}

export default DefaultLayout
