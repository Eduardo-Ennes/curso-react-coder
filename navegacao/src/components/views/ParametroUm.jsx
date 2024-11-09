import React from 'react'
import { useParams } from 'react-router-dom'

const ParametroUm = () => {
  const {id} = useParams()
  return (
    <div>
        <h1>ParametroUm</h1>
        <p>parametro: {id}</p>
    </div>
  )
}

export default ParametroUm