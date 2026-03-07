import { Link, Outlet } from "react-router-dom"

export default function Product() {
    return(
        <>
            <div>All the products will list here</div>
            
            <nav>
                <Link to='featured'>Featured</Link>
                <Link to='new'>New</Link>
            </nav>
            <Outlet/>
        </>
    ) 
}