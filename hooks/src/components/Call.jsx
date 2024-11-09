import React, { useCallback, useState } from 'react'
import CallButtons from './CallButtons'

/*  
O useCallback é um Hook do React que serve para memorizar uma função, evitando que ela seja recriada em cada renderização do componente. Isso é útil quando você passa funções como props para componentes filhos, ou quando a função é usada em uma dependência de outro Hook, como o useEffect ou o useMemo.
*/

const Call = () => {
  const [num, setNum] = useState(0)
  const inc = useCallback(function (delta) {
    setNum(current => current + delta)
  }, [setNum])
  return (
    <div>
      <h1>Olá mundo!</h1>
      <h3>Numero: <strong>{num}</strong></h3>
      <CallButtons inc={inc}/>
    </div>
  )
}

export default Call