import logo from './logo.svg';
import './App.css';
import svgs from './components/svgs';
import ideia from './imgs/undraw_electricity_k2ft.svg'
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import View from './components/View';
import userContext from './UserContext';
import { useEffect, useState } from 'react';
function App() {
  const [mobile,setMobile] = useState(false)
  useEffect(() => {
    setMobile(window.innerWidth < 480)
  },[])
  window.addEventListener('resize',() => {
    setMobile(window.innerWidth < 480)
    console.log(mobile,window.innerWidth)
  })
  const [conteudo,setConteudo] = useState(null)
  const [create,setCreate] = useState(null)
  return (
      <>
      <BrowserRouter>
        <userContext.Provider value={{ mobile,create,setCreate}}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Create' element={<Create />}></Route>
        <Route path='/View' element={<View />}></Route>
      </Routes>
        </userContext.Provider>
      </BrowserRouter>
      </>
  );
}

export default App;
