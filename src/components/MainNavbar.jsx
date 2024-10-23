import { NavLink } from "react-router-dom"
function MainNavbar() {
  return (
    <div className="bg-slate-100 p-4">
        <ul className="container mx-auto flex gap-4 text-xl">
            <li><NavLink to="/">All Accounts</NavLink></li>
            <li><NavLink to="/add">Add Accounts</NavLink></li>
            <li><NavLink to="/edit">Edit Accounts</NavLink></li>
        </ul>
    </div>
  )
}

export default MainNavbar