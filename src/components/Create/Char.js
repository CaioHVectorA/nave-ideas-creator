import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Buttons from '../Button'
import Add from '../plus.png'
import Menos from '../menos.png'
const BoxTA = styled.div`
padding: 12px 18px;
background-color: #561185;
color: white;
font-weight: bold;
text-transform: uppercase;
font-family: 'Open Sans';
font-size: 32px;
margin: 0 auto;
width: 340px;
border-radius: 32px 8px;
display: flex;
flex-direction: column;
gap: 16px;
height: 160px;
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
    const nav = useNavigate()
    const [Char,setChar] = useState({
      Nome: '',
      Desc: '',
      Talento: 0,
      Energia: 0,
      Papo: 0,
      Sorte: 0,
      Ident: ''
    })
    const [atributos,setAtributos] = useState(30)
    const [Modal,setModal] = useState(false)
    const [enviouImg,setEnviouImg] = useState('')
    const [conteudoModal,setConteudoModal] = useState(['Aviso!','Seu personagem será enviado aos administradores que aprovarão-o o mais rápido possível para o tornar público!','Enviar','Quero Revisar'])
    useEffect(() => {
  window.document.body.style.overflowY = Modal ? 'hidden' : 'auto' 
    },[Modal])
    function HandleSubmit() {
      setModal(true)
    }
    function HandleSubmittoApi() {
      const TempChar = {...Char}
      // https://apifor-nave.onrender.com
      axios.post('https://apifor-nave.onrender.com/char',{
        Nome: Nome,
        Desc: Char.Desc,
        Ident: Char.Ident,
        ImgRef: `data:image/png;base64,${enviouImg}`,
        Atributos: {
          Talento: Char.Talento,
          Energia: Char.Energia,
          Papo: Char.Papo,
          Sorte: Char.Sorte,
        }
      })
       .then(response => {
        if (conteudoModal[0] === 'Aviso!') {
          setConteudoModal(['Sucesso!','Seu personagem foi enviado e será aprovado por um administrador em breve.','Ok'])
        } else {
          nav('/')
        }
    })
    .catch(error => console.error(error))
  }
  useEffect(() => {
    setChar(PrevState => ({...PrevState,Nome: Nome}))
  },[Nome])
  function HandleImagetoB64() {
    const reader = new FileReader();
    const input = document.querySelector('input[type="file"]');
    reader.addEventListener('load', () => {
          // Obtém a string codificada em Base64 da imagem
    const base64String = reader.result.split(',')[1];
    setEnviouImg(base64String)
    })
    // reader.onload(() => {
    //   const base64String = reader.result.split(',')[1];
    // })
    reader.readAsDataURL(input.files[0]);
  }
  return (
    <>
    {window.innerWidth < 480 && <div style={{padding: '24px',display: 'flex',flexDirection: 'column',alignItems: 'center',backgroundColor: '#e7e7e7'}}>
    {Modal && 
  <div style={  {position: 'absolute',width: '100vw',height: '100vh',backgroundColor: 'rgba(255,255,255,.75)',top: window.pageYOffset,display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
  <div style={{width: 'calc(80% - 40px)',height: 'calc(65% - 40px)',padding: '20px',textAlign: 'center',background: '#fff',borderRadius: '20px'}}>
    <h1>{conteudoModal[0]}</h1>
    <p style={{marginTop: '32px',fontSize: '18px',maxWidth: '92%',margin: '20px auto'}}>{conteudoModal[1]}</p>
    <NavLink onClick={() => {document.body.style.overflowY = 'visible' ; HandleSubmittoApi()}} to={''}><Buttons.ButtonTwo style={{fontSize: '20px'}}>Enviar</Buttons.ButtonTwo></NavLink>
    <p onClick={() => setModal(false)} style={{textDecoration: 'underline',marginTop: '32px',cursor: 'pointer',fontSize: '20px',fontFamily: 'Open Sans'}}>{conteudoModal[3]}</p>
  </div>
</div>
    }
        <input style={{width:'100%',border: 'none',background: 'transparent',fontWeight: 'bold',maxWidth: '80%',whiteSpace: 'normal',fontSize: '32px',textAlign: 'center',marginTop: '16px'}} type={'text'} value={Nome} onChange={(e) => setNome(e.target.value)} onFocus={(e) => {if (Nome === 'Novo Personagem') {setNome('')}}} onBlur={() => {if (Nome === ''){setNome('Novo Personagem')} }}/>
        {Nome === 'Novo personagem' && <p style={{FontSize: '12px'}}>Clique para mudar o nome</p>}
        <h1>AAA</h1>
        <div style={{display: 'grid',gridTemplateColumns: window.innerWidth > 480 ? '1fr 1fr' : '1fr',gap: '48px',width: '60%',margin: '0 auto',justifyContent: 'center',marginTop: '32px'}}>
        <BoxTA  style={{maxWidth: '60%'}}>
          Descrição
          <TA onChange={(e) => setChar(PrevState => ({ ...PrevState,Desc: e.target.value }))} value={Char.Desc} placeholder='André Pereira era um nobre guerreiro...'></TA>
        </BoxTA>
        <BoxTA style={{maxWidth: '60%'}}>
          Nome & Turma
          <TA onChange={(e) => setChar(PrevState => ({ ...PrevState,Ident: e.target.value }))} value={Char.Ident} placeholder='José Aldo, 2001'></TA>
        </BoxTA>
        <h1 style={{marginTop: '1px',marginBottom: '1px',textAlign: 'center'}}>Atributos Disponíveis: {atributos}</h1>
        <div style={{display: 'grid',gridTemplateColumns: '1fr',gap: '12px',justifyItems: 'center',width: '100vw'}}>
        <div style={{background: '#561185',width: '220px',color: 'white',padding: '6px 32px',alignItems: 'center',height: '52px',borderRadius: '18px 9px',display: 'flex',justifyContent: 'space-between'}}>
          <div style={{display: 'flex',gap: '24px'}}>
          <h1>TAL</h1>
          <h1>{Char.Talento}</h1>
          </div>
          <div style={{display: 'flex',gap: '24px'}}>
          <img onClick={() => {if (atributos > 0){setChar(PrevState => ({ ...PrevState,Talento: PrevState.Talento += 0.5 })) ; setAtributos(atributos => atributos -= 1)}}} style={{width: '32px',height: '32px',filter: 'invert(1)',cursor: 'pointer'}} src={Add} />
          <img onClick={() => {if (atributos < 30 && Char.Talento > 0){setChar(PrevState => ({ ...PrevState,Talento: PrevState.Talento -= 0.5 })) ; setAtributos(atributos => atributos += 1)}}} style={{width: '32px',height: '32px',filter: 'invert(1)',cursor: 'pointer'}} src={Menos} />
          </div>
          </div> 
        <div style={{background: '#561185',width: '220px',color: 'white',padding: '6px 32px',alignItems: 'center',height: '52px',borderRadius: '18px 9px',display: 'flex',justifyContent: 'space-between'}}>
          <div style={{display: 'flex',gap: '24px'}}>
          <h1>ENE</h1>
          <h1>{Char.Energia}</h1>
          </div>
          <div style={{display: 'flex',gap: '24px'}}>
          <img onClick={() => {if (atributos > 0){setChar(PrevState => ({ ...PrevState,Energia: PrevState.Energia += 0.5 })) ; setAtributos(atributos => atributos -= 1)}}} style={{width: '32px',height: '32px',filter: 'invert(1)',cursor: 'pointer'}} src={Add} />
          <img onClick={() => {if (atributos < 30 && Char.Energia > 0){setChar(PrevState => ({ ...PrevState,Energia: PrevState.Energia -= 0.5 })) ; setAtributos(atributos => atributos += 1)}}} style={{width: '32px',height: '32px',filter: 'invert(1)',cursor: 'pointer'}} src={Menos} />
          </div>
          </div> 
        <div style={{background: '#561185',width: '220px',color: 'white',padding: '6px 32px',alignItems: 'center',height: '52px',borderRadius: '18px 9px',display: 'flex',justifyContent: 'space-between'}}>
          <div style={{display: 'flex',gap: '24px'}}>
          <h1>PAP</h1>
          <h1>{Char.Papo}</h1>
          </div>
          <div style={{display: 'flex',gap: '24px'}}>
          <img onClick={() => {if (atributos > 0){setChar(PrevState => ({ ...PrevState,Papo: PrevState.Papo += 0.5 })) ; setAtributos(atributos => atributos -= 1)}}} style={{width: '32px',height: '32px',filter: 'invert(1)',cursor: 'pointer'}} src={Add} />
          <img onClick={() => {if (atributos < 30 && Char.Papo > 0){setChar(PrevState => ({ ...PrevState,Papo: PrevState.Papo -= 0.5 })) ; setAtributos(atributos => atributos += 1)}}} style={{width: '32px',height: '32px',filter: 'invert(1)',cursor: 'pointer'}} src={Menos} />
          </div>
          </div> 
        <div style={{background: '#561185',width: '220px',color: 'white',padding: '6px 32px',alignItems: 'center',height: '52px',borderRadius: '18px 9px',display: 'flex',justifyContent: 'space-between'}}>
          <div style={{display: 'flex',gap: '24px'}}>
          <h1>SOR</h1>
          <h1>{Char.Sorte}</h1>
          </div>
          <div style={{display: 'flex',gap: '24px'}}>
          <img onClick={() => {if (atributos > 0){setChar(PrevState => ({ ...PrevState,Sorte: PrevState.Sorte += 0.5 })) ; setAtributos(atributos => atributos -= 1)}}} style={{width: '32px',height: '32px',filter: 'invert(1)',cursor: 'pointer'}} src={Add} />
          <img onClick={() => {if (atributos < 30 && Char.Sorte > 0){setChar(PrevState => ({ ...PrevState,Sorte: PrevState.Sorte -= 0.5 })) ; setAtributos(atributos => atributos += 1)}}} style={{width: '32px',height: '32px',filter: 'invert(1)',cursor: 'pointer'}} src={Menos} />
          </div>
          </div> 
        </div>
        </div>
        <Buttons.ButtonTwo onClick={HandleSubmit}>Enviar</Buttons.ButtonTwo>
    </div>}
    {window.innerWidth > 480 && <div style={{padding: '24px',overflow: 'hidden',display: 'flex',flexDirection: 'column',alignItems: 'center',backgroundColor: '#e7e7e7'}}>
    {Modal && 
  <div style={{position: 'absolute',width: '100vw',height: '100vh',backgroundColor: 'rgba(255,255,255,.75)',top: window.pageYOffset,display: 'flex',alignItems: 'center',justifyContent: 'center',zIndex: '100'}}>
  <div style={{width: 'calc(60% - 40px)',height: 'calc(50% - 40px)',padding: '20px',textAlign: 'center',background: '#fff',borderRadius: '20px'}}>
    <h1>{conteudoModal[0]}</h1>
    <p style={{marginTop: '32px',fontSize: '18px',maxWidth: '80%',margin: '20px auto'}}>{conteudoModal[1]}</p>
    <NavLink onClick={() => {document.body.style.overflowY = 'visible' ; HandleSubmittoApi()}} to={''}><Buttons.ButtonTwo style={{fontSize: '20px'}}>{conteudoModal[2]}</Buttons.ButtonTwo></NavLink>
    <p onClick={() => setModal(false)} style={{textDecoration: 'underline',marginTop: '32px',cursor: 'pointer',fontSize: '20px',fontFamily: 'Open Sans'}}>{conteudoModal[3]}</p>
  </div>
</div>
    } 
    <div style={{display: 'grid',gridTemplateColumns: '2fr 1fr',width: '100vw'}}>
      <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',gap: '6px'}}>

        <input style={{width:'100%',border: 'none',background: 'transparent',fontWeight: 'bold',fontSize: '32px',textAlign: 'center',marginTop: '-14px'}} type={'text'} value={Nome} onChange={(e) => setNome(e.target.value)} onFocus={(e) => {if (Nome === 'Novo Personagem') {setNome('')}}} onBlur={() => {if (Nome === ''){setNome('Novo Personagem')} }}/>
        {Nome === 'Novo personagem' && <p style={{FontSize: '12px',textAlign: 'center'}}>Clique para mudar o nome</p>}
        <div style={{display: 'flex',gap: '8px'}}>

        <BoxTA style={{marginTop: '20px'}}>
          Descrição
          <TA maxLength={156} onChange={(e) => setChar(PrevState => ({ ...PrevState,Desc: e.target.value }))} value={Char.Desc} placeholder='André Pereira era um nobre guerreiro...'></TA>
        </BoxTA>
        <BoxTA style={{marginTop: '20px'}}>
          Nome & Turma
          <TA maxLength={20} onChange={(e) => setChar(PrevState => ({ ...PrevState,Ident: e.target.value }))} value={Char.Ident} placeholder='José Aldo, 2001'></TA>
        </BoxTA>
        </div>
        <h1 style={{marginTop: '4px',marginBottom: '4px'}}>Atributos Disponíveis: {atributos}</h1>
        <div style={{display: 'grid',gridTemplateColumns: '1fr 1fr',gridTemplateRows: '1fr 1fr',gap: '12px'}}>
        <div style={{background: '#561185',width: '220px',color: 'white',padding: '6px 32px',alignItems: 'center',height: '52px',borderRadius: '18px 9px',display: 'flex',justifyContent: 'space-between'}}>
          <div style={{display: 'flex',gap: '24px'}}>
          <h1>TAL</h1>
          <h1>{Char.Talento}</h1>
          </div>
          <div style={{display: 'flex',gap: '24px'}}>
          <img onClick={() => {if (atributos > 0){setChar(PrevState => ({ ...PrevState,Talento: PrevState.Talento += 0.5 })) ; setAtributos(atributos => atributos -= 1)}}} style={{width: '32px',height: '32px',filter: 'invert(1)',cursor: 'pointer'}} src={Add} />
          <img onClick={() => {if (atributos < 30 && Char.Talento > 0){setChar(PrevState => ({ ...PrevState,Talento: PrevState.Talento -= 0.5 })) ; setAtributos(atributos => atributos += 1)}}} style={{width: '32px',height: '32px',filter: 'invert(1)',cursor: 'pointer'}} src={Menos} />
          </div>
          </div> 
        <div style={{background: '#561185',width: '220px',color: 'white',padding: '6px 32px',alignItems: 'center',height: '52px',borderRadius: '18px 9px',display: 'flex',justifyContent: 'space-between'}}>
          <div style={{display: 'flex',gap: '24px'}}>
          <h1>ENE</h1>
          <h1>{Char.Energia}</h1>
          </div>
          <div style={{display: 'flex',gap: '24px'}}>
          <img onClick={() => {if (atributos > 0){setChar(PrevState => ({ ...PrevState,Energia: PrevState.Energia += 0.5 })) ; setAtributos(atributos => atributos -= 1)}}} style={{width: '32px',height: '32px',filter: 'invert(1)',cursor: 'pointer'}} src={Add} />
          <img onClick={() => {if (atributos < 30 && Char.Energia > 0){setChar(PrevState => ({ ...PrevState,Energia: PrevState.Energia -= 0.5 })) ; setAtributos(atributos => atributos += 1)}}} style={{width: '32px',height: '32px',filter: 'invert(1)',cursor: 'pointer'}} src={Menos} />
          </div>
          </div> 
        <div style={{background: '#561185',width: '220px',color: 'white',padding: '6px 32px',alignItems: 'center',height: '52px',borderRadius: '18px 9px',display: 'flex',justifyContent: 'space-between'}}>
          <div style={{display: 'flex',gap: '24px'}}>
          <h1>PAP</h1>
          <h1>{Char.Papo}</h1>
          </div>
          <div style={{display: 'flex',gap: '24px'}}>
          <img onClick={() => {if (atributos > 0){setChar(PrevState => ({ ...PrevState,Papo: PrevState.Papo += 0.5 })) ; setAtributos(atributos => atributos -= 1)}}} style={{width: '32px',height: '32px',filter: 'invert(1)',cursor: 'pointer'}} src={Add} />
          <img onClick={() => {if (atributos < 30 && Char.Papo > 0){setChar(PrevState => ({ ...PrevState,Papo: PrevState.Papo -= 0.5 })) ; setAtributos(atributos => atributos += 1)}}} style={{width: '32px',height: '32px',filter: 'invert(1)',cursor: 'pointer'}} src={Menos} />
          </div>
          </div> 
        <div style={{background: '#561185',width: '220px',color: 'white',padding: '6px 32px',alignItems: 'center',height: '52px',borderRadius: '18px 9px',display: 'flex',justifyContent: 'space-between'}}>
          <div style={{display: 'flex',gap: '24px'}}>
          <h1>SOR</h1>
          <h1>{Char.Sorte}</h1>
          </div>
          <div style={{display: 'flex',gap: '24px'}}>
          <img onClick={() => {if (atributos > 0){setChar(PrevState => ({ ...PrevState,Sorte: PrevState.Sorte += 0.5 })) ; setAtributos(atributos => atributos -= 1)}}} style={{width: '32px',height: '32px',filter: 'invert(1)',cursor: 'pointer'}} src={Add} />
          <img onClick={() => {if (atributos < 30 && Char.Sorte > 0){setChar(PrevState => ({ ...PrevState,Sorte: PrevState.Sorte -= 0.5 })) ; setAtributos(atributos => atributos += 1)}}} style={{width: '32px',height: '32px',filter: 'invert(1)',cursor: 'pointer'}} src={Menos} />
          </div>
          </div> 
        </div>
        {/* atributos */}
      </div>
      <div>
        <h1 style={{textAlign: 'start'}}>Preview</h1>
        <div style={{width: 'calc(300px - 24px)',height: 'calc(440px - 24px)',backgroundColor: '#561185',borderRadius: '8px',border: '#340852 2px solid',display: 'flex',flexDirection: 'column',alignItems: 'center',color: 'white',padding: '12px'}}>
        <h2>{Char.Nome}</h2>
        <div style={{display: 'grid',width: '100%',gridTemplateColumns: '1fr 1fr',marginTop: '12px'}}>
        {!enviouImg && <div style={{ position: 'relative',height: '150px',width: '110px'}}>
      <input onChange={(e) => HandleImagetoB64(e)}
        type="file"
        style={{
          opacity: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          cursor: 'pointer',
        }}
      />
      <div
        style={{
          backgroundColor: '#f2f2f2',
          padding: '10px',
          color: 'black',
          borderRadius: '5px',
          border: '1px solid #ddd',
          textAlign: 'center',
          cursor: 'pointer',
          height: '100%'
        }}
      >
        INSIRA SUA IMAGEM AQUI.
      </div>
    </div>}
          {enviouImg && <img src={`data:image/png;base64,${enviouImg}`} style={{width: '110px',height: '150px',background: 'white',borderRadius: '8px'}} />}
          <div style={{display: 'flex',flexDirection: 'column',gap: '4px'}}>
            <h3 style={{}}>Habilidades</h3>
              <div style={{display: 'flex',justifyContent: 'space-between',width: '80%'}}>
                <p>Talento</p>
                <p>{Char.Talento}</p>
              </div>
              <div style={{display: 'flex',justifyContent: 'space-between',width: '80%'}}>
                <p>Energia</p>
                <p>{Char.Energia}</p>
              </div>
              <div style={{display: 'flex',justifyContent: 'space-between',width: '80%'}}>
                <p>Papo</p>
                <p>{Char.Papo}</p>
              </div>
              <div style={{display: 'flex',justifyContent: 'space-between',width: '80%'}}>
                <p>Sorte</p>
                <p>{Char.Sorte}</p>
              </div>
          </div>
        </div>
        <div style={{marginTop: '60px',padding: '16px',height: '112px',width: 'calc(100% - 40px)',borderRadius: '8px',backgroundColor: '#e7e7e7',color: 'black'}}><p style={{width: '100%',overflowWrap: 'break-word',overflowY: 'auto',maxHeight: '100%'}}>{Char.Desc}</p></div>
        <p style={{marginTop: '20px'}}>Feito por {Char.Ident}</p>
        </div>
      </div>
    </div>
        <Buttons.ButtonTwo style={{marginTop: '8px'}} onClick={HandleSubmit}>Enviar</Buttons.ButtonTwo>
    </div>}
    </>
  )
}

export default Char