import React from 'react'
import "./Siderbar.scss";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">saf-admin</span>
      </div>
      
      <div className="center">
        <ul>
          <p className="title">Inventario</p>
          <Link style={{ textDecoration: "none" }} to="/">
            <li>
              <InventoryIcon className="icon" />
              <span>Inventario click</span>
            </li>
          </Link>
        </ul>
      </div>
    
    </div>
  )
}
