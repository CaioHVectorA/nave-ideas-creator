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
  const [hist,setHist] = useState(null)
  const [stories,setStorys] = useState(null)
  const {view, setView} = useContext(userContext)
  const [viewChar, setViewChar] = useState(null)
  const [viewHist, setVH] = useState(null)
  useEffect(() => {
    fetch('https://apifor-nave.onrender.com/aprovedChar').then(Response => Response.json()).then(data => setChars(data))
  },[])
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://apifor-nave.onrender.com/aprovedChar').then(Response => Response.json()).then(data => setChars(data)).catch(err => console.log('aaaa'))
    },5000)
    return () => clearInterval(interval)
  },[])
  useEffect(() => {
    fetch('https://apifor-nave.onrender.com/aprovedhist').then(Response => Response.json()).then(data => setHist(data))
  },[])
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://apifor-nave.onrender.com/aprovedhist').then(Response => Response.json()).then(data => setHist(data)).catch(err => console.log('aaaa'))
    },5000)
    return () => clearInterval(interval)
  },[])
  return (
    <div style={{overflowX: 'hidden'}}>
      <Header />
    {!viewChar && !viewHist && <div style={{display: 'flex',flexDirection: 'column',width: '100vw',minHeight: '100vh'}}>
        <h1 style={{fontFamily: 'Open Sans',color: '#561185',marginLeft: '32px',marginTop: '32px'}}>Navegue entre as ideias de outras pessoas!</h1>
        <div style={{display: 'flex',marginTop: '20px'}}>
      <Select onClick={() => {setSelect('Perso') ; setView()}} style={{borderRadius: '25px 0px 0px 25px',backgroundColor: selected === 'Perso' ? '#202020' : null,color: selected === 'Perso' ? 'white' : 'black'}}>Personagens</Select>
      <Select onClick={() => {setSelect('') ; setView()}} style={{backgroundColor: selected === '' ? '#202020' : null,color: selected === '' ? 'white' : 'black'}}>Todos</Select>
      <Select onClick={() => {setSelect('Hist') ; setView()}} style={{borderRadius: '0px 25px 25px 0px',backgroundColor: selected === 'Hist' ? '#202020' : null,color: selected === 'Hist' ? 'white' : 'black'}}>Histórias</Select>
        </div>
        <div style={{width: '100vw',display: 'grid',gridTemplateColumns: 'repeat(auto-fit,350px)',padding: '12px 32px',gap: '32px',marginTop: '20px',justifyContent: 'center'}}>
        {chars && selected !== 'Hist' && chars.map(item => (
          <div key={item._id} style={{position: 'relative',backgroundColor: '#080808',color: 'white',width: window.innerWidth > 480 ? '320px' : '280px',display: 'flex',flexDirection: 'column',alignItems: 'center',borderRadius: '25px',maxHeight: '240px',padding: '8px 12px'}}>
            <h1>{item.Nome}</h1>
            <div style={{height: '131px'}}>
            <p style={{color: 'rgba(255,255,255,.8)',maxHeight: '30px',whiteSpace: 'nowrap',maxWidth: '300px',overflowX: 'hidden'}}>{item.Autoria}</p>
            <p style={{maxHeight: '110px',overflowY: 'hidden',margin: '0 auto',textAlign: 'center'}}>{item.Desc}</p>
            </div>
            <Buttons.Button onClick={() => setViewChar(item)} style={{fontSize: '20px',padding: '5px 8px',boderRadius: '55px'}}>Visualizar</Buttons.Button>
          </div>
        ))}
        {hist && selected !== 'Perso' && hist.map(item => (
          <div key={item._id} style={{position: 'relative',backgroundColor: 'rgb(59, 0, 106)',color: 'white',width: window.innerWidth > 480 ? '320px' : '280px',display: 'flex',flexDirection: 'column',alignItems: 'center',borderRadius: '25px',maxHeight: '480px',padding: '8px 12px'}}>
          <h2 style={{textAlign: 'center',marginBottom: '16px'}}>{item.Titulo}</h2>
          <div style={{height: '200px'}}>
          <p style={{color: 'rgba(255,255,255,.8)',maxHeight: '30px',whiteSpace: 'nowrap',maxWidth: '300px',overflowX: 'hidden',margin: '0 auto',textAlign: 'center',marginBottom: '10px'}}>{item.Autoria}</p>
          <p style={{maxHeight: '110px',overflowY: 'hidden',margin: '0 auto',textAlign: 'center'}}>{item.Subtitulo}</p>
          <p style={{maxHeight: '110px',overflowY: 'hidden',margin: '0 auto',textAlign: 'center'}}>{item.Sinopse}</p>
          </div>
          <Buttons.Button onClick={() => setVH(item)} style={{fontSize: '20px',padding: '5px 8px',boderRadius: '55px'}}>Visualizar</Buttons.Button>
        </div>
        ))} 
        </div>
    </div>}
    {viewChar && <div style={{padding: '20px',display: 'grid',gridTemplateColumns: '7fr 3fr'}}>
          <div>
      <button onClick={() => setViewChar(null)} style={{cursor: 'pointer',fontSize: '20px',padding: '6px 8px'}}><img src={process.env.PUBLIC_URL + '/imgs/seta.png'} style={{width: '24px'}}></img>Voltar</button>
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
      {viewHist && <div style={{width: '100vw',display: 'flex',flexDirection: 'column',gap: '20px',alignItems: 'center',marginTop: '48px'}}>
          <button onClick={() => setVH(null)} style={{cursor: 'pointer',fontSize: '20px',padding: '6px 60px',display: 'flex',alignItems:'center',position: 'relative'}}><img src={process.env.PUBLIC_URL + '/imgs/seta.png'} style={{width: '24px',position: 'absolute',left: '12px'}}></img>Voltar</button>
          <h1 style={{backgroundColor: 'rgb(59, 0, 106)',padding: '16px',fontFamily: 'Open Sans',color: 'white',borderRadius: '5px'}}>{viewHist.Titulo}</h1>
          <div style={{backgroundColor: '#fff',display: 'flex',flexDirection: 'column',gap: '8px',alignItems: 'center',padding: '16px',borderRadius: '20px'}}>
          <h3>Personagens Envolvidos</h3>
          <div style={{display: 'flex',gap: '8px'}}>
          {viewHist.Personagens.map((item) => (
            <p style={{backgroundColor:'rgb(59, 0, 106)',color: 'white',borderRadius: '50px',padding: '12px'}}>{item.Nome}</p>
            ))}
            </div>
            </div>
          <div style={{width: '60%',padding: '32px',border: '1.2px solid rgba(0,0,0,.2)',borderRadius: '5px',backgroundColor: '#fff'}}>
          <p style={{fontFamily: 'Open Sans'}}>{viewHist.Historia}</p>
          </div>
        </div>}
    </div>
  )
}

export default View