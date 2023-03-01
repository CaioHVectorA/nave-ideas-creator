import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Buttons from '../Button'
const BoxTA = styled.div`
padding: 12px 18px;
background-color: #561185;
color: white;
font-weight: bold;
text-transform: uppercase;
font-family: 'Open Sans';
font-size: 32px;
margin: 0 auto;
width: 420px;
border-radius: 32px 8px;
display: flex;
flex-direction: column;
gap: 16px;
height: 240px;
`


const TA = styled.textarea`
&:focus {
  outline: none;
  border: none;
  border: 2px solid rgba(0,0,0,.8);
  background-color: #fff;
}
background-color: #e7e7e7;
border: 2px solid transparent;
border-radius: 8px;
outline: none;
padding: 12px 8px;
/* border-radius: 32px 8px; */
font-size: 17px;
transition: 0s;
height: 60%;
`

const Char = () => {
    const [Nome,setNome] = useState('Novo personagem')
    const [Char,setChar] = useState({
      Nome: '',
      Desc: '',
      Poder: '',
    })
    const [Modal,setModal] = useState(false)
    useEffect(() => {
  window.document.body.style.overflowY = Modal ? 'hidden' : 'auto' 
    },[Modal])

    function HandleSubmit() {
      setModal(true)
    }
  return (
    <>
    {window.innerWidth < 480 && <div style={{padding: '24px',display: 'flex',flexDirection: 'column',alignItems: 'center',backgroundColor: '#e7e7e7'}}>
    {Modal && 
  <div style={{position: 'absolute',width: '100vw',height: '100vh',backgroundColor: 'rgba(255,255,255,.75)',top: window.pageYOffset,display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
  <div style={{width: 'calc(80% - 40px)',height: 'calc(65% - 40px)',padding: '20px',textAlign: 'center',background: '#fff',borderRadius: '20px'}}>
    <h1>Aviso!</h1>
    <p style={{marginTop: '32px',fontSize: '18px',maxWidth: '92%',margin: '20px auto'}}>Seu personagem será enviado aos administradores que aprovarão-o o mais rápido possível para o tornar público!</p>
    <NavLink to={'/'}><Buttons.ButtonTwo style={{fontSize: '20px'}}>Enviar</Buttons.ButtonTwo></NavLink>
    <p onClick={() => setModal(false)} style={{textDecoration: 'underline',marginTop: '32px',cursor: 'pointer',fontSize: '20px',fontFamily: 'Open Sans'}}>Quero Revisar.</p>
  </div>
</div>
    }
        <input style={{border: 'none',background: 'transparent',fontWeight: 'bold',maxWidth: '80%',whiteSpace: 'normal',fontSize: '32px',textAlign: 'center',marginTop: '16px'}} type={'text'} value={Nome} onChange={(e) => setNome(e.target.value)} onFocus={(e) => {if (Nome === 'Novo Personagem') {setNome('')}}} onBlur={() => {if (Nome === ''){setNome('Novo Personagem')} }}/>
        {Nome === 'Novo personagem' && <p style={{FontSize: '12px'}}>Clique para mudar o nome</p>}
        <div style={{display: 'grid',gridTemplateColumns: window.innerWidth > 480 ? '1fr 1fr' : '1fr',gap: '48px',width: '60%',margin: '0 auto',justifyContent: 'center',marginTop: '32px'}}>
        <BoxTA style={{maxWidth: '60%'}}>
          Nome
          <TA placeholder='André Pereira'></TA>
        </BoxTA>
        <BoxTA style={{maxWidth: '60%'}}>
          Descrição
          <TA placeholder='André Pereira era um nobre guerreiro...'></TA>
        </BoxTA>
        <BoxTA style={{maxWidth: '60%'}}>
          Habilidades
          <TA placeholder='André Pereira manejava uma espada como ninguém...'></TA>
        </BoxTA>
        <BoxTA style={{maxWidth: '60%'}}>
          Aparência
          <TA placeholder='André Pereira era jovem, forte, alto...'></TA>
        </BoxTA>
        </div>
        <Buttons.ButtonTwo onClick={HandleSubmit}>Enviar</Buttons.ButtonTwo>
    </div>}
    {window.innerWidth > 480 && <div style={{padding: '24px',display: 'flex',flexDirection: 'column',alignItems: 'center',backgroundColor: '#e7e7e7'}}>
    {Modal && 
  <div style={{position: 'absolute',width: '100vw',height: '100vh',backgroundColor: 'rgba(255,255,255,.75)',top: window.pageYOffset,display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
  <div style={{width: 'calc(60% - 40px)',height: 'calc(50% - 40px)',padding: '20px',textAlign: 'center',background: '#fff',borderRadius: '20px'}}>
    <h1>Aviso!</h1>
    <p style={{marginTop: '32px',fontSize: '18px',maxWidth: '80%',margin: '20px auto'}}>Seu personagem será enviado aos administradores que aprovarão-o o mais rápido possível para o tornar público!</p>
    <NavLink to={'/'}><Buttons.ButtonTwo style={{fontSize: '20px'}}>Enviar</Buttons.ButtonTwo></NavLink>
    <p onClick={() => setModal(false)} style={{textDecoration: 'underline',marginTop: '32px',cursor: 'pointer',fontSize: '20px',fontFamily: 'Open Sans'}}>Quero Revisar.</p>
  </div>
</div>
    }
        <input style={{border: 'none',background: 'transparent',fontWeight: 'bold',fontSize: '32px',textAlign: 'center',marginTop: '16px'}} type={'text'} value={Nome} onChange={(e) => setNome(e.target.value)} onFocus={(e) => {if (Nome === 'Novo Personagem') {setNome('')}}} onBlur={() => {if (Nome === ''){setNome('Novo Personagem')} }}/>
        {Nome === 'Novo personagem' && <p style={{FontSize: '12px'}}>Clique para mudar o nome</p>}
        <div style={{display: 'grid',gridTemplateColumns: window.innerWidth > 480 ? '1fr 1fr' : '1fr',gap: '48px',width: '60%',margin: '0 auto',justifyContent: 'center',marginTop: '32px'}}>
        <BoxTA>
          Nome
          <TA placeholder='André Pereira'></TA>
        </BoxTA>
        <BoxTA>
          Descrição
          <TA placeholder='André Pereira era um nobre guerreiro...'></TA>
        </BoxTA>
        <BoxTA>
          Habilidades
          <TA placeholder='André Pereira manejava uma espada como ninguém...'></TA>
        </BoxTA>
        <BoxTA>
          Aparência
          <TA placeholder='André Pereira era jovem, forte, alto...'></TA>
        </BoxTA>
        </div>
        <Buttons.ButtonTwo onClick={HandleSubmit}>Enviar</Buttons.ButtonTwo>
    </div>}
    </>
  )
}

export default Char