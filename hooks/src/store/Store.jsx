import React, { useState } from 'react'
import PropTypes from 'prop-types';

    const InitialStage = {
        pais: 'Portugal',
        cidade: 'Cascais'
    }

export const LocalData = React.createContext(InitialStage)

const Store = (props) => {
    const [state, setState] = useState(InitialStage)

    function UpdateStage(key, value){
        setState({
            ...state,
            [key]: value
        })
    }

  return (
    <LocalData.Provider value={{
        text1: state.pais,
        text2: state.cidade,
        setText1: t => UpdateStage('pais', t),
        setText2: t => UpdateStage('cidade', t)
    }}>
        <div>{props.children}</div>
    </LocalData.Provider>
  )
}

Store.propTypes = {
    children: PropTypes.node,
  };

export default Store