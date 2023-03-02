import React, { useContext, useState } from 'react'
import Header from './Header'
import Buttons from './Button'
import userContext from '../UserContext'
import Hist from './Create/Hist'
import Char from './Create/Char'
const Create = () => {
  const {Button, ButtonTwo} = Buttons
  const [bg,setBg] = useState(`${process.env.PUBLIC_URL}/imgs/w.png`)
  const [back,setBackground] = useState('')
  const { create,setCreate } = useContext(userContext)
  return (
    <div style={{}}>
      <Header />
      {!create && <div>
    {window.innerWidth > 480 && <div style={{textAlign: 'center',padding: '16px',transition: '600ms',backgroundImage: `url(${bg})`,height: 'calc(100vh - 80px)',backgroundSize: '100%'}}>
      <h1 style={{fontFamily: 'Open Sans',color: '#561185',fontSize: '54px'}}>Antes de tudo...</h1>
      <h2 style={{fontWeight: 'normal',backgroundColor: back,width: 'fit-content',margin: '0 auto',padding: '5px 12px',borderRadius: '12px',color: back ? 'white' : 'black'}}>Diga-nos o que você quer fazer. Um personagem ou uma história?</h2>
      <div style={{display: 'flex',gap: '24px',marginTop: '32px',justifyContent: 'center'}}>
      <ButtonTwo onClick={() => setCreate('Char')} onMouseOver={() => {setBg(`${process.env.PUBLIC_URL}/imgs/perso.jpg`) ; setBackground('rgba(0,0,0,.76)')}} style={{fontSize: '32px'}}>Personagem</ButtonTwo>
      <ButtonTwo onClick={() => setCreate('Hist')} onMouseOver={() => {setBg(`${process.env.PUBLIC_URL}/imgs/book.jpg`) ; setBackground('rgba(0,0,0,.76)')}} style={{fontSize: '32px'}}>História</ButtonTwo>
      </div>
    </div>}
    {window.innerWidth < 480 && <div style={{textAlign: 'center',padding: '16px',paddingTop: '64px',transition: '600ms',backgroundImage: `url(${bg})`,height: 'calc(100vh - 80px)',backgroundSize: '100%'}}>
      <h1 style={{fontFamily: 'Open Sans',color: '#561185',fontSize: '32px'}}>Antes de tudo...</h1>
      <h2 style={{fontWeight: 'normal',backgroundColor: back,width: 'fit-content',margin: '0 auto',padding: '5px 12px',borderRadius: '12px',color: back ? 'white' : 'black',fontSize: '19px'}}>Diga-nos o que você quer fazer. Um personagem ou uma história?</h2>
      <div style={{display: 'flex',gap: '24px',marginTop: '32px',alignItems: 'center',flexDirection: 'column'}}>
      <ButtonTwo onClick={() => setCreate('Char')} onMouseOver={() => {setBg(`${process.env.PUBLIC_URL}/imgs/perso.jpg`) ; setBackground('rgba(0,0,0,.76)')}} style={{fontSize: '20px',width: '200px',textAlign: 'centerS'}}>Personagem</ButtonTwo>
      <ButtonTwo onClick={() => setCreate('Hist')} onMouseOver={() => {setBg(`${process.env.PUBLIC_URL}/imgs/book.jpg`) ; setBackground('rgba(0,0,0,.76)')}} style={{fontSize: '20px',width: '200px',textAlign: 'centerS'}}>História</ButtonTwo>
      </div>
    </div>}
        </div>}
        {create === 'Hist' && <div>
          <Hist />
          </div>}
        {create === 'Char' && <div>
          <Char />
          </div>}
    </div>
  )
}

export default Create