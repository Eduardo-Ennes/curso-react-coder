import "./Intervalo.css"
import React from 'react'
import Card from "./Card"
import { connect } from "react-redux"
import {AlterarNumeroMin} from "../../store/actions/numeros"
import { AlterarNumeroMax } from "../../store/actions/numeros"

const intervalo = (props) => {
  const min = props.min
  const max = props.max
  return (
    <Card title="Intervalo de Números" red>
        <div className="intervalo">
            <span>
                <strong>Mínimo:</strong>
                <input type="number" value={min} onChange={e => props.AlterMin(+e.target.value)}/>
            </span>
            <span>
                <strong>Máximo:</strong>
                <input type="number" value={max} onChange={e => props.AlterMax(e.target.value)}/>
            </span>
        </div>
    </Card>
  )
}

function mapSelectToProps(state){
  return{
    min: state.numeros.min,
    max: state.numeros.max
  }
}

function mapDispatchToProp(dispatch){
  return {
    AlterMin(novoNumero){
      const action = AlterarNumeroMin(novoNumero)
      dispatch(action)
    },
    AlterMax(novoNumero){
      const action = AlterarNumeroMax(novoNumero)
      dispatch(action)
    }
  }
}

export default connect(mapSelectToProps, mapDispatchToProp)(intervalo)