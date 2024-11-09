import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

const IndiretaPai = () => {
    const [pais, setPais] = useState("")
    const [cidade, setCidade] = useState("")
    const [comida, setComida] = useState("")
    function Informacoes(pais, cidade, comida) {
        setPais(pais)
        setCidade(cidade)
        setComida(comida)
    }
  return (
    <div>
        <span>{pais} - </span>
        <span>{cidade} - </span>
        <span>{comida}</span>
        <IndiretaFilho Clicar={Informacoes}/>
    </div>
  )
}

export default IndiretaPai