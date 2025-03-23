import './App.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import SignIn from './components/SignIn'
import Setting from './components/Setting'
import Signup from './components/Signup'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/setting' element={<Setting/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
