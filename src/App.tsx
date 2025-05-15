import { NavLink, Route, Switch} from 'react-router-dom'
import './App.css'
import Test from './pages/Test'
import HomePage from './pages/HomePage'

function App() {


  return (
    <>
<div className='flex gap-4 text-sm bg-[#F6F6F6]'>
      <NavLink to="/anasayfa">Anasayfa</NavLink>
      <NavLink to="/test">Test</NavLink></div>
      <Switch>
        <Route path="/anasayfa"><HomePage /></Route>
        <Route path="/test"><Test /></Route>
      </Switch>
      
    </>
  )
}

export default App
