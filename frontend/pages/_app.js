import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Login from './Login'
import Swiping from './Swiping'
import Navbar from '../components/Navbar'
import BottomBar from '../components/BottomBar'

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Navbar/>
    {/* <Login/> */}
    <Swiping/>
    <BottomBar/>
  </div>
  )
}

export default MyApp
