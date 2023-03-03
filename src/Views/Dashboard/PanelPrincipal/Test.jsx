import React from 'react'
import Sidebar from "../../../Components/Layout/SiderBar/Sidebar";
import NavbarD from "../../../Components/Layout/Navbar_Dashboard/NavbarD";
import Inventario from '../Inventario/Inventario';
import 'Test.scss'

const Test = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <NavbarD />
        <Inventario/>
      </div>
    </div>
  )
}

export default Test