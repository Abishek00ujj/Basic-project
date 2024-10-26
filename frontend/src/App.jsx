import {Navbar} from './components/Navbar'
import {Login} from './components/Login'
import {Register} from './components/Register'
import {Home} from './components/Home'
import { BrowserRouter } from 'react-router-dom'
import RootPage from './components/RootPage'
import About from './components/About'
export default function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<RootPage/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/register"} element={<Register/>}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/Home"} element={<Home/>}/>
      </Routes>
      </BrowserRouter>
   </>
  )
}