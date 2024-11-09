import React, { useReducer } from 'react'

/*  
O useReducer é um Hook do React usado para gerenciar o estado de componentes complexos, especialmente quando o estado envolve várias transições ou dependências. Ele é uma alternativa ao useState quando a lógica de atualização do estado é mais elaborada, permitindo maior controle sobre as mudanças de estado através de um padrão semelhante ao do Redux, utilizando dispatch e reducers
*/

const Initial = {
  pais: 'Portugal',
  number: 0
}


function reducer(state, action) {
  switch(action.type){
    case '1':
      return {...state, number: state.number + 1}
    case "2":
      return {...state, pais: action.pais}
    case "3":
      return {...state, number: state.number * 7}
    case "4":
      return {...state, number: state.number / 25}
    case "5":
      if(Number.isInteger(state.number)){
        return state
      }
      else{
        return {...state, number: parseInt(state.number)}
      }
    default:
      return state
  }
}


const Reducer = () => {
  const [state, setState] = useReducer(reducer, Initial)
  return (
    <div>
      <h2>{state.pais ? 
        (<span>pais: {state.pais}</span>) : (<span>Sem destino</span>)}</h2>
      <h2>{state.number}</h2><br /><br />
      <button onClick={() => setState({type:"5"})}>+1</button>
    </div>
  )
}

export default Reducer