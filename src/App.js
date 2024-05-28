
import './App.css';
import {Routes , Route} from 'react-router-dom'
import NavMenu from './components/NavMenu';
import MainPage from './pages/MainPage';
import CategoryTimePage from './pages/CategoryTimePage';
import StatisticPage from './pages/StatisticPage';
import { useEffect, useState } from 'react';
import { Context } from './context';
import  { db} from './firebase';
import { ref, onValue, set, off } from "firebase/database";
function App() {

  const [time, setTime] = useState([]);

  useEffect(() => {
    const dataRef = ref(db, 'add_time');
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      setTime(data ? Object.values(data) : []);
    });
    return () => {
      
      off(dataRef, 'value', unsubscribe);
    };
  }, []);

  const addTime = (newTime) => {
    const newId = Date.now();
    const updatedTime = { ...newTime, id: newId };
    
    set(ref(db, `add_time/${newId}`), updatedTime);
    setTime((prevTime) => [...prevTime, updatedTime]);
  };

  const updateTime = (updatedTime) => {
    
    set(ref(db, `add_time/${updatedTime.id}`), updatedTime);
    setTime((prevTime) => prevTime.map((time) => (time.id === updatedTime.id ? updatedTime : time)));
  };
  


  return (
    <div >
      <Context.Provider value={{ time, setTime, addTime, updateTime}}>
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
