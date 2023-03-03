import React from 'react'
import "./NavbarD.scss"

const NavbarD = () => {
  return (
    <div className="navbarPanel">
      <div className="wrapperPanel">
        <div className="searchPanel">
          <input type="search" placeholder="Buscar..." />
         {/*  <SearchOutlineIcon className="icon" /> */}
        </div>
        <div className="items">

          <div className="item">Bienvenido ROMERO!</div>
          {/* <div className="item">
            <Image cloudName="dawjd5cx8" publicId={img}>
              <Transformation
                height="30"
                width="30"
                radius="max"
                aspectRatio="1.5"
                crop="fill"
              />
            </Image>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default NavbarD