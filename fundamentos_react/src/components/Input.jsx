import React, { useState } from 'react'

const Input = () => {
    const [name, setName] = useState("")
    // function MudarValor(e) {
    //     setName(e.target.value)
    // }
  return (
    <div>
        <input type="text" onChange={e => setName(e.target.value)} value={name}/>
    </div>
  )
}

export default Input