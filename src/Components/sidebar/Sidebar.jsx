import "./sidebar.scss";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EggIcon from "@mui/icons-material/Egg";
import InventoryIcon from "@mui/icons-material/Inventory";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import PaymentIcon from "@mui/icons-material/Payment";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SettingsIcon from "@mui/icons-material/Settings";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import StyleIcon from "@mui/icons-material/Style";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../Redux/Actions/login.actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
const Sidebar = ({logout}) => {

/* const { rol } = useSelector((state) => state.authReducer); */
 const { user  } = useSelector((state) => state.auth);
  //console.log(user)

  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">saf-admin</span>
      </div>
      {/* <hr /> */}
      <div className="center">
        <ul>
          {/* {rol === "Admin" && (<> */}
                    <p className="title">Principal</p>
                    <Link style={{ textDecoration: "none" }} to="/admin/">
                      <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                      </li>
                    </Link>
                     <p className="title">Listas</p>
                    <Link style={{ textDecoration: "none" }} to="/usuarios">
                      <li>
                        <PersonOutlineIcon className="icon" />
                        <span>Usuarios</span>
                      </li>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/usuarios">
                      <li>
                        <StoreMallDirectoryIcon className="icon" />
                        <span>Puntos</span>
                      </li>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/admin/categorias">
                      <li>
                        <StyleIcon className="icon" />
                        <span>Categoría</span>
                      </li>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/admin/productos">
                      <li>
                        <EggIcon className="icon" />
                        <span>Productos</span>
                      </li>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/admin/ventas">
                      <li>
                        <ListAltIcon className="icon" />
                        <span>Ventas</span>
                      </li>
                    </Link>
               {/*      </>
          )} */}

          {/* <li>
            <QueryStatsIcon className="icon" />
            <span>Estadistícas</span>
          </li> */}
          <p className="title">Inventario</p>
          <Link style={{ textDecoration: "none" }} to="/admin/stock">
            <li>
              <InventoryIcon className="icon" />
              <span>Inventario</span>
            </li>
          </Link>
          {/* {rol === "personalsaf" && (<> */}
            <p className="title">Parte del día</p>
          <Link style={{ textDecoration: "none" }} to="/admin/parte">
            <li>
              <PaymentIcon className="icon" />
              <span>Parte</span>
            </li>
          </Link>
          {/* </>)} */}
          {/* {rol === "admin" && (<> */}
            <p className="title">Facturación</p>
          <Link style={{ textDecoration: "none" }} to="/admin/pos">
            <li>
              <PaymentIcon className="icon" />
              <span>Cajero</span>
            </li>
          </Link>
        {/*   </>)} */}
          <p className="title">Usuario</p>
          <Link
            style={{ textDecoration: "none" }}
            /* to={`/admin/usuarios/${uid}`} */
          >
            <li>
              <AccountCircleIcon className="icon" />
              <span>Perfil</span>
            </li>
          </Link>
{/*           <li>
            <SettingsIcon className="icon" />
            <span>Configuración</span>
          </li> */}

          <Link
            className="nav-link"
            style={{ textDecoration: "none" }}
            to="/"
            onClick={() => {
              dispatch(startLogout());
            }}
          >
            <li>
              <LogoutIcon className="icon" />
              <span><a onClick={logout} > Cerrar Sesión </a></span>
            </li>
          </Link>
        </ul>
      </div>
      {/* <div className="bottom">Algo</div> */}
    </div>
  );
};

Sidebar.propTypes = {
  logout : PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
}) 

export default connect(mapStateToProps, {logout})(Sidebar);
