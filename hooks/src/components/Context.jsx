import React, { useContext, useState } from 'react'
import DataContext from '../data/DataContext'
import { LocalData } from '../store/Store'

/*  
O useContext é um Hook do React que permite acessar valores de um Contexto diretamente, sem a necessidade de passar props manualmente por cada nível da árvore de componentes (o chamado "prop drilling"). Ele é útil para compartilhar dados entre vários componentes sem ter que passar esses dados repetidamente por meio de props.
*/

const Context = () => {
  const [name, setName] = useState("")
  const [pais, setPais] = useState("")
  const data = useContext(DataContext)

  function mudarState(delta){
    data.setState({
      ...data.state,
      cidade: delta
    })
  }

  function mudarStatePais(delta){
    data.setState({
      ...data.state,
      pais: delta
    })
  }

  const {text1, text2 ,setText1, setText2} = useContext(LocalData)



  return (
    <div>
      <h1>{data.state.pais}</h1>
      <h1>{data.state.cidade}</h1><br /><br />
      <input type="text" value={name} onChange={e => setName(e.target.value)}/> <br /><br />
      <button onClick={() => mudarState(name)}>Mudar cidade</button><br /><br />
      <input type="text" value={pais} onChange={e => setPais(e.target.value)}/> <br /><br />
      <button onClick={() => mudarStatePais(pais)}>Mudar pais</button>
      <hr />
      <h3>{text1}</h3>
      <h3>{text2}</h3>
      <input type="text" value={text1} onChange={e => setText1(e.target.value)}/> <br /><br />
      <input type="text" value={text2} onChange={e => setText2(e.target.value)}/> <br /><br />
    </div>
  )
}

export default Context