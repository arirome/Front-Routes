
import "./login.css";
import imagenLogo from '../../Components/Assets/Imgs/keys.png'
import { useForm } from "../../Components/hooks/useForm";


//REDUX
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { loginUser } from "../../Redux/Actions/login.actions";
import PropTypes from 'prop-types'
import { Redirect} from "react-router-dom"
import { useEffect } from "react";
/* import {Redirect } from "react-router-dom"; */

//LOGIN
const Login = ({ loginUser,isAuthenticated }) => {
  //REDUX

  /* CARGAR DATOS */

  const [formLoginValues, handleLoginInputChange] = useForm({
    correo: "",
    password: "",
  });

  //const navigate = useNavigate();

  const { correo, password } = formLoginValues;

  const handleLogin = async (e) => {
    e.preventDefault();

    loginUser(correo, password);
   
   
  };


  if (isAuthenticated)  return <Redirect to='/panel' />


 



   

  return (
    <>
      <div className="containerLogin">
        <div className="wrapperLogin fadeInDown">
          <div id="formContent">
            <br />

            <div className="fadeIn first">
              <img src={imagenLogo} alt="" className="itemImg" />
            </div>

            <h1 className="active"> BIENVENIDO </h1>

            <form onSubmit={handleLogin} className="form-login">
              <input
                type="text"
                id="login"
                className="fadeIn second"
                name="correo"
                value={correo}
                onChange={handleLoginInputChange}
                placeholder="Correo"
              />

              <input
                type="password"
                id="password"
                className="fadeIn third"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={handleLoginInputChange}
              />
            
              <input
                type="submit"
                id="submit"
                className="fadeIn fourth"
                value="Enviar"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

//SACAR DEL ESTADO
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

//{login} LO PASAMOS ARRIBA
//connect ES EL QUE SE ENCARGA DE CONECTAR LAS ACCIONES CON EL COMPONENTE
export default connect(mapStateToProps, { loginUser })(Login);
