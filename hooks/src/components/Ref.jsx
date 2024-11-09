import React, { useEffect, useRef, useState } from 'react'

/* 
O useRef é um Hook do React que cria uma referência mutável, que pode ser usada para acessar elementos DOM diretamente ou armazenar valores persistentes que não provocam re-renderizações quando são modificados. Ele é muito útil quando você precisa manipular um elemento DOM diretamente ou manter uma variável persistente entre renderizações, sem desencadear uma nova renderização.
*/

const Ref = () => {
  const [name, setName] = useState("")
  const count = useRef(0)

  useEffect(function () {
    console.log("Entrou na função")
    count.current = count.current + 1
  }, [name])
  return (
    <div>
      <h1>UseRef</h1>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <h3>O campo foi alterado: {count.current}</h3>
    </div>
  )
}

export default Ref