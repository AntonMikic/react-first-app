import { Outlet } from "react-router-dom"
import MainNavbar from "../components/MainNavbar"
import { useState } from "react"
import fake_data from "../../fake_data.json"

function MainLayout() {
    const [accounts,setAccounts] = useState(fake_data)
    console.log(accounts);
    
  return (
    <div>
        <MainNavbar />
        <Outlet context={[accounts,setAccounts]}/>
    </div>
  )
}

export default MainLayout