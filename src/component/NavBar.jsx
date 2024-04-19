import {NavLink} from "react-router-dom"
import react from "react"
const NavBar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Home</NavLink>
 
    <div  id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" style={({ isActive })=> isActive ?{ color:"green",fontweight:"bold"} : {color:"orange"}} to="/Mycard">mycard</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/Mycounter" style={({ isActive })=> isActive ?{ color:"green",fontweight:"bold"} : {color:"orange"}}>Mycounter</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Languages" style={({ isActive })=> isActive ?{ color:"green",fontweight:"bold"} : {color:"orange"}}>lang</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/About" style={({ isActive })=> isActive ?{ color:"green",fontweight:"bold"} : {color:"orange"}}>aboutus</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Student" style={({ isActive })=> isActive ?{ color:"green",fontweight:"bold"} : {color:"orange"}}>Student</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Product" style={({ isActive })=> isActive ?{ color:"green",fontweight:"bold"} : {color:"orange"}}>Product</NavLink>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
</div>
  )
}

export default NavBar