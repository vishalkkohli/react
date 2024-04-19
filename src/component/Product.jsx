
import {NavLink,Outlet} from "react-router-dom"
export const Product = () => {
  return (
    <div>
        <h2>product name page</h2>
        <div className='d-flex flex-row '>
            <NavLink to="Product1" className="p-2">Product1</NavLink>
            <NavLink to="Product2" className="p-2">Product2</NavLink>
            <NavLink to="Product3" className="p-2">Product3</NavLink>

        </div>
<Outlet/>
    </div>
  )
}
export default Product;