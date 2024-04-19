// import React from 'react'

// const Languages =() => {
//     let lang=["java","javascript","kotlin","python","c"]
//   return (
//     <div>
//         <h1>best programming language:</h1>
// <ul>
// {lang.map((item,index)=>(
// <li key={item}>{item}</li>


// ))}
// </ul>

//         </div>
//   )
// }

// export default Languages



const Languages =() => {
    let lang=[
    {id:1,name:"java"},
    {id:2,name:"python"},
    {id:3,name:"javascript"},
    {id:4,name:"kotlin"},
    {id:5,name:"c"},
];

var check=true;
  return (
    <div>
        <h1 className={check?"bg-warning":"bg-success text-white"}>
       </h1>
<ul>
{lang.map((item,index)=>(
<li key={item.id}>{item.name}</li>


))}
</ul>

        </div>
  )
}

export default Languages