import React, { useState } from 'react'

function Increase() {
    const [count,setCount]=useState(0)
    const fun=()=>{
        setCount(count+1)
    }
    const fun2=()=>{
        setCount(count-1)
    }
  return (
    <>
<h1>{count}</h1>
<button onClick={fun}>increase</button>
<button onClick={fun2}> decrease</button>

    </>
  )
}

export default Increase