import changename from "./component/changename";
function App() {
  const [name,setname] = usestate("kiet");
  const [sname,setsname] = usestate("mca");

 

  return (
    <>
     {/* <Message/>
     <Languages/> */}

     {/* <changename sname="java"/> */}

     <changename name={name} onupdate={()=>setname("kiet mca")}/>
     <changename name={sname} onupdate={()=>setname("mca kiet")}/>
    </>
  );
}

export default App