import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Buttons from '../Button'
const Input = styled.input`
border-radius: 5px;
width: 80px;
border: 1.4px solid rgba(0,0,0,.4);
padding: 12px 6px;
`
const TA = styled.textarea`
border-radius: 5px;
width: 80px;
border: 1.4px solid rgba(0,0,0,.4);
padding: 12px 6px;
`
const Hist = () => {
  const [link,setLink] = useState('')
  const [modal,setModal] = useState(null)
  const [chars,setChars] = useState(null)
  const [personagensvinculados,setPV] = useState([])
  const [titulo,setTitulo]= useState('')
  const [subtitulo,setSubtitulo]= useState('')
  const [sinopse,setSinopse]= useState('')
  const [autoria, setAutoria] = useState('')
  const [historia, setHistoria] = useState('')
  useEffect(() => {
    const interval = setInterval(() => {
      let db = [];
      fetch('https://apifor-nave.onrender.com/aprovedChar').then(Response => Response.json().then(Data => {
  // console.log(Data)
Data.forEach(element => {
  db.push(element)
});  
if (!modal){
  setChars([... new Set(db.map(item => JSON.stringify(item)))].map(item => JSON.parse(item)))
}
}))
}, 5000);
return () => clearInterval(interval)
  },[])
  // useEffect(() => {
  //   console.log(link)
  // },[link])
  function Submit() {
    console.log('aaa')
    axios.post('https://apifor-nave.onrender.com/Hist', {
      Titulo: titulo,
      Subtitulo: subtitulo,
      Sinopse: sinopse,
      Autoria: autoria,
      Historia: historia,
      Personagens: personagensvinculados,
    })
  }
  return (
    <div style={{display: 'flex',flexDirection: 'column',padding: '32px',alignItems: 'center',width: 'calc(100vw - 64px)'}}>
      {/* <h1>Tem uma História no Google Docs?</h1>
      <label htmlFor='link'>aaaaa</label>
      <input id='link' value={link} onChange={(e) => setLink(e.target.value)}></input>
      <iframe src={link} style={{margin: '0 auto',width: '600px',height: '600px',overflow: 'auto',minHeight: 'fit-content'}}/> */}
      <h1 style={{}}>Escreva <span style={{color: 'green'}}>sua</span> história do <span style={{color: 'green'}}>seu</span> jeito!</h1>
      <h2 style={{marginTop: '16px'}}>Título</h2>
      <Input value={titulo} onChange={(e) => setTitulo(e.target.value)} style={{width: '42%'}} placeholder={'A história do Joelson'}></Input>
      <h2 style={{marginTop: '16px'}}>Sinopse</h2>
      <Input value={subtitulo} onChange={(e) => setSubtitulo(e.target.value)} style={{width: '42%'}} placeholder={'Joelson era um homem que vivia normalmente...'}></Input>
      <h2 style={{marginTop: '16px'}}>Autoria</h2>
      <Input value={autoria} onChange={(e) => setAutoria(e.target.value)} style={{width: '42%'}} placeholder={'Amilton, 2002'}></Input>
      <h2 style={{marginTop: '16px'}}>História</h2>
      <TA value={historia} onChange={(e) => setHistoria(e.target.value)} style={{width: '58%',minHeight: '300px',fontFamily: 'Open Sans',padding: '16px',fontSize: '16px'}} placeholder={'Era uma vez Joelson..'}></TA>
     <div style={{padding: '32px',display: 'flex',flexDirection: 'column',alignItems: 'center',width: 'calc(100vw - 64px)'}}>
      <h2 style={{marginTop: '40px'}}>Vincular personagens</h2>
      <div style={{display: 'flex',gap: '6px',flexWrap: 'wrap',width: '60%',marginTop: '20px'}}>
      {personagensvinculados.map((item) => (
        <>
        <p style={{backgroundColor: 'rgba(0,0,0,.9)',padding: '16px',color: 'white',borderRadius: '55px',whiteSpace: 'nowrap'}}>{item.Nome}</p>
        </>
      ))}
      </div>
      <Buttons.ButtonTwo onClick={() => setModal(!modal)} style={{fontSize: '20px',width: 'fit-content',padding: '8px 12px'}}>{!modal ? 'Adicionar' : 'Fechar'}</Buttons.ButtonTwo>
      {modal && chars && <div style={{width: '50%',display: 'flex',flexDirection: 'column',gap: '12px',backgroundColor: '#f3f3f3',border: '1.8px solid rgba(0,0,0,.12)',marginTop: '12px',padding: '16px',borderRadius: '5px'}}>
        {chars.map((item) => (
          <div style={{display: 'flex',gap: '12px',alignItems: 'center'}}>
          <h3> - {item.Nome}, {item.Autoria}</h3>
          <Buttons.ButtonTwo onClick={() => {const tempAr = [...personagensvinculados] ; tempAr.push(item) ; if(!personagensvinculados.includes(item))setPV(tempAr)}} style={{fontSize: '16px',width: 'fit-content',padding: '8px 12px',position: 'relative',bottom: '7px'}}>Adicionar</Buttons.ButtonTwo>
          </div>  
        ))}
        </div>}
        </div>
        <Buttons.ButtonTwo onClick={Submit}>Enviar</Buttons.ButtonTwo>
    </div>
  )
}

export default Hist