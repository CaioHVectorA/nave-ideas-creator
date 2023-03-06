import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import styled from 'styled-components'
import axios from 'axios'
import Buttons from './Button'
import userContext from '../UserContext'
const Select = styled.button`
background-color: #fff;
font-size: 24px;
border: 1px solid rgba(0,0,0,.3);
padding: 6px 10px;
width: 160px;
transition: 0s;
&:first-child {
margin-left: 32px;
}
&:hover {
  cursor: pointer;
  background-color: #e7e7e7;
}
`
const Division = styled.div`
width: 90%;
background-color: rgba(0,0,0,.7);
height: 2px;
`
const View = () => {
  const [selected,setSelect] = useState(null)
  const [chars,setChars] = useState(null)
  const [stories,setStorys] = useState(null)
  const {view, setView} = useContext(userContext)
  const [viewChar, setViewChar] = useState(null)
  useEffect(() => {
    fetch('https://apifor-nave.onrender.com/aprovedChar').then(Response => Response.json()).then(data => setChars(data))
  },[])
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://apifor-nave.onrender.com/aprovedChar').then(Response => Response.json()).then(data => setChars(data)).catch(err => console.log('aaaa'))
      console.log('aaaa')
    },5000)
    return () => clearInterval(interval)
  },[])
  return (
    <div style={{overflowX: 'hidden'}}>
      <Header />
    {!viewChar && <div style={{display: 'flex',flexDirection: 'column',width: '100vw',minHeight: '100vh'}}>
        <h1 style={{fontFamily: 'Open Sans',color: '#561185',marginLeft: '32px',marginTop: '32px'}}>Navegue entre as ideias de outras pessoas!</h1>
        <div style={{display: 'flex',marginTop: '20px'}}>
      <Select onClick={() => {setSelect('Perso') ; setView()}} style={{borderRadius: '25px 0px 0px 25px',backgroundColor: selected === 'Perso' ? '#202020' : null,color: selected === 'Perso' ? 'white' : 'black'}}>Personagens</Select>
      <Select onClick={() => {setSelect('Hist') ; setView()}} style={{borderRadius: '0px 25px 25px 0px',backgroundColor: selected === 'Hist' ? '#202020' : null,color: selected === 'Hist' ? 'white' : 'black'}}>Histórias</Select>
        </div>
        <div style={{width: '100vw',display: 'grid',gridTemplateColumns: 'repeat(auto-fit,350px)',padding: '12px 32px',gap: '32px',marginTop: '20px',justifyContent: 'center'}}>
        {chars && chars.map(item => (
          <div key={item.Autoria} style={{position: 'relative',backgroundColor: '#080808',color: 'white',width: window.innerWidth > 480 ? '320px' : '280px',display: 'flex',flexDirection: 'column',alignItems: 'center',borderRadius: '25px',maxHeight: '240px',padding: '8px 12px'}}>
            <h1>{item.Nome}</h1>
            <div style={{height: '131px'}}>
            <p style={{color: 'rgba(255,255,255,.8)',maxHeight: '30px',whiteSpace: 'nowrap',maxWidth: '300px',overflowX: 'hidden'}}>{item.Autoria}</p>
            <p style={{maxHeight: '110px',overflowY: 'hidden',margin: '0 auto',textAlign: 'center'}}>{item.Desc}</p>
            </div>
            <Buttons.Button onClick={() => setViewChar(item)} style={{fontSize: '20px',padding: '5px 8px',boderRadius: '55px'}}>Visualizar</Buttons.Button>
          </div>
        ))}
        </div>
    </div>}
    {viewChar && <div style={{padding: '20px',display: 'grid',gridTemplateColumns: '7fr 3fr'}}>
          <div>
      <button onClick={() => setViewChar(null)} style={{cursor: 'pointer',fontSize: '20px',padding: '6px 8px'}}>Voltar</button>
      <h1 style={{fontSize: '48px'}}>{viewChar.Nome}</h1>
      <h2 style={{maxWidth: '90%',margin: '4px 0px'}}>Personagem de {viewChar.Autoria}</h2>
      <Division></Division>
      <h1>Descrição</h1>
      <p style={{maxWidth: '90%',margin: '4px 0px',fontSize: '20px'}}>{viewChar.Desc}</p>
      <Division></Division>
      <h1>Poder</h1>
      <p style={{maxWidth: '90%',margin: '4px 0px',fontSize: '20px'}}>{viewChar.Poder}</p>
      <Division></Division>
      <h1>Aparencia</h1>
      <p style={{maxWidth: '90%',margin: '4px 0px',fontSize: '20px'}}>{viewChar.Aparencia}</p>
      <Division></Division>
      </div>
      <div></div>
      </div>}
    </div>
  )
}

export default View