
import './App.css';
import {Routes , Route} from 'react-router-dom'
import NavMenu from './components/NavMenu';
import MainPage from './pages/MainPage';
import CategoryTimePage from './pages/CategoryTimePage';
import StatisticPage from './pages/StatisticPage';
import { useEffect, useState } from 'react';
import { Context } from './context';
function App() {

  const [time, setTime] = useState(() => {
    const savedTime = localStorage.getItem('add_time');
    return savedTime ? JSON.parse(savedTime) : [];
  });

  useEffect(() => {
    localStorage.setItem('add_time', JSON.stringify(time));
  }, [time]);

  const data = add_time => {setTime([...time , add_time])
  };
  


  return (
    <div >
      <Context.Provider value={{data , time, setTime}}>
     <NavMenu/>

     <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/category' element={<CategoryTimePage/>}/>
      <Route path='/statistic' element={<StatisticPage/>}/>



     </Routes>
     </Context.Provider>
    </div>
  );
}

export default App;
