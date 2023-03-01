import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Hist = () => {
  const [link,setLink] = useState('')
  useEffect(() => {
    console.log(link)
  },[link])
  return (
    <div style={{display: 'flex',flexDirection: 'column'}}>
      <h1>Tem uma História no Google Docs?</h1>
      <label htmlFor='link'>aaaaa</label>
      <input id='link' value={link} onChange={(e) => setLink(e.target.value)}></input>
      <iframe src={link} style={{margin: '0 auto',width: '600px',height: '600px',overflow: 'auto',minHeight: 'fit-content'}}/>
    </div>
  )
}

export default Hist