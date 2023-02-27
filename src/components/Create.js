import React, { useState } from 'react'
import Header from './Header'
import Buttons from './Button'
const Create = () => {
  const {Button, ButtonTwo} = Buttons
  const [bg,setBg] = useState('')
  const [back,setBackground] = useState('')
  return (
    <div style={{}}>
      <Header />
    {window.innerWidth > 480 && <div style={{textAlign: 'center',padding: '16px',backgroundImage: `url(${bg})`,height: 'calc(100vh - 80px)',backgroundSize: '100%'}}>
      <h1 style={{fontFamily: 'Open Sans',color: '#561185',fontSize: '54px'}}>Antes de tudo...</h1>
      <h2 style={{fontWeight: 'normal',backgroundColor: back,width: 'fit-content',margin: '0 auto',padding: '5px 12px',borderRadius: '12px',color: back ? 'white' : 'black'}}>Diga-nos o que você quer fazer. Um personagem ou uma história?</h2>
      <div style={{display: 'flex',gap: '24px',marginTop: '32px',justifyContent: 'center'}}>
      <ButtonTwo onMouseOver={() => {setBg(`${process.env.PUBLIC_URL}/imgs/perso.jpg`) ; setBackground('rgba(0,0,0,.71)')}} style={{fontSize: '40px'}}>Personagem</ButtonTwo>
      <ButtonTwo onMouseOver={() => {setBg(`${process.env.PUBLIC_URL}/imgs/book.jpg`) ; setBackground('rgba(0,0,0,.71)')}} style={{fontSize: '40px'}}>História</ButtonTwo>
      </div>
    </div>}
    </div>
  )
}

export default Create