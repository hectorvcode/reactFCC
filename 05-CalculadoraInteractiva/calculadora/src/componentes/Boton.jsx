import React from "react";
import '../hojas-de-estilo/Boton.css'

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  /* if(esOperador(props.children)) {
    return (
      <div
        className='boton-contenedor operador'
        onClic={() => props.manejaClic(props.children)}>
        {props.children}
      </div>
    );
  } else {
    <div
        className='boton-contenedor'
        onClic={() => props.manejaClic(props.children)}>
        {props.children}
      </div>
  } */

  return (
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
    onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;