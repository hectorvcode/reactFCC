import React from 'react';
import '../hojas-de-estilo/TareaFormulario.css'

function TareaFormulario(props) {
  return (
    <form className='tarea-formulario'>
      <input 
        className='tarea-input'
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
      />
      <button className='tarea-boton'>
        Agreagar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;