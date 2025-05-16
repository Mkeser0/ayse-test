import { useState } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import Test from './pages/Test';
import HomePage from './pages/HomePage';
import Result from './pages/Result';

function App() {
  const [score, setScore] = useState<number>(0);

  return (
    <>
      <div className='flex gap-4 text-sm bg-[#F6F6F6]'>
        <NavLink to="/anasayfa">Anasayfa</NavLink>
        <NavLink to="/test">Test</NavLink>
        <NavLink to="/sonuc">Sonuç</NavLink>
      </div>
      <Switch>
        <Route path="/anasayfa"><HomePage /></Route>
        <Route path="/test"><Test handleScoreChange={setScore} /></Route>
        <Route path="/sonuc"><Result score={score} /></Route>
      </Switch>
    </>
  );
}

export default App;
