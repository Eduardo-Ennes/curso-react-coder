import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const State = () => {
  const {title} = useParams()
  const [numero, setNumero] = useState(0)
  const [name, setName] = useState("")

  function inc() {
    setNumero(numero + 1000)
  }

  // function dec() {
  //   setNumero(numero - 100)
  // }

  return (
    <div>
      <h1>{title}</h1>
      <h3>Numero: {numero}</h3>
      <button onClick={inc}>+1</button>
      <button onClick={() => setNumero(numero - 100)}>-1</button>
      <div>
        <input type="text" placeholder='Digite um nome:' onChange={(e) => setName(e.target.value)}/>
        <h3>Name: {name}</h3>
      </div>
    </div>
  )
}

export default State