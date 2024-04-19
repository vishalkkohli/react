import React from 'react'

const changename = () => {
    let {name,onupdate}=props;
    
  return (
    <div className="container mt-3">
        <div>{name}</div>
    <button className="btn btn-warning" on onClick={onupdate}>
change name
</button>
    </div>
  )
}

export default change