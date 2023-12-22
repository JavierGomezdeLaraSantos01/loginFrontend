import React, { useState } from "react";
import axios from "axios";

function App() {
  const [usuario, setUsuario] = useState({ username: "", password: "" });
  const [mensaje, setMensaje] = useState("");

  function handleChange(e) {
    let nombre = e.target.name;
    let valor = e.target.value;
    setUsuario({ ...usuario, [nombre]: valor });
  }


  function handleRegister() {
    axios.post('https://serverlogin-3geb.onrender.com/register',usuario).then(response =>{

      setMensaje(response.data.message);

    });
  }

  function handleLogin() {
    axios.post('https://serverlogin-3geb.onrender.com/login',usuario).then(response=>{
      
      setMensaje(response.data.message);

    })
  }

  return (
    <>
      <form action="#" method="post">
        <label htmlFor="usu">Nombre de usuario: </label>
        <input type="text"id="usu"name="username"onChange={handleChange}/>
        <br />
        <label htmlFor="pass">Contraseña: </label>
        <input type="password" name="password" id="pass" onChange={handleChange}/>
        <br />
        <button type="button" onClick={handleLogin}>Login</button>
        <button type="button" onClick={handleRegister}>Registrarse</button>
      </form>
      <p>{mensaje}</p>
    </>
  );
}

export default App;
