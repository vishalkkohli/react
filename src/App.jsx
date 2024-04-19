
//import './App.css'
// import Languages fom './component/Languages'
// import Message fom './component/Message'
// import changename fom "./component/changename";
// function App() {
//   const [name,setname] = usestate("kiet");
//   const [sname,setsname] = usestate("mca");

// import Mycounter fom "./component/Mycounter";

// import Increase fom "./component/Increase";
// import Counter1 fom "./component/Counter1"
// import react,{useState} fom "react"
// import Mycard fom "./component/Mycard"
 

//   return (
//     <>
//      {/* <Message/>
//      <Languages/> */}

//      {/* <changename sname="java"/> */}

//      <changename name={name} onupdate={()=>setname("kiet mca")}/>
//      <changename name={sname} onupdate={()=>setname("mca kiet")}/>
//     </>
//   );
// }

// export default App
import {Route,Routes} from "react-router-dom";
import Homepage from "./component/Homepage";
import Mycard from "./component/Mycard";
import Mycounter from "./component/Mycounter";
import Languages from "./component/Languages";
import NavBar from "./component/NavBar";
import ErrorPage from "./component/ErrorPage";
import Student from "./component/Student";
import About from "./component/About";
import Product from "./component/Product";
import Product1 from "./component/Product1";
import Product2 from "./component/Product2";
import Product3 from "./component/Product3";


// import changename fom "./component/changename";
 function App() {
//   const [name,setname] = usestate("kiet");
//   const [sname,setsname] = usestate("mca");

 

  return (
    <>
<NavBar/>

     {/* <Message/>
     <Languages/> */}

     {/* <changename sname="java"/> */}

     {/* <changename name={name} onupdate={()=>setname("kiet mca")}/>
     <changename name={sname} onupdate={()=>setname("mca kiet")}/> */}
     {/* <Counter1/> */}
     {/* <Mycounter/> */}
     {/* <Mycard/> */}
     <Routes>
<Route path="/" element={<Homepage/>} />
<Route path="/Mycard" element={<Mycard />}/>
<Route path="/Mycounter" element={<Mycounter />}/>
<Route path="/Languages" element={<Languages />}/>
<Route path="/About" element={<About />}/>
<Route path="/Student" element={<Student/>}>

<Route path="/Student/:name" element={<Student />}/>
</Route>

<Route path="/Product" element={<Product />}>
<Route path="Product1" element={<Product1 />}/>
<Route path="Product2" element={<Product2 />}/>
<Route path="product3" element={<Product3/>}/>
</Route>
<Route path="*" element={<ErrorPage />}/>

     </Routes>
    </>
  );
}

export default App;
