import React from 'react'

const CallButtons = (props) => {
    console.log("Render...")
  return (
    <div>
        <button onClick={() => props.inc(6)}>+6</button>
        <button onClick={() => props.inc(12)}>+12</button>
        <button onClick={() => props.inc(18)}>+18</button>
    </div>
  )
}

export default React.memo(CallButtons)
// export default CallButtons