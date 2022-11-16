import React from "react";
import "../hojas-estilo/Testimonio.css";

function Testimonio(props) {
  return (
    <>
      {props.details.map((value, index) => (
        <div className="contenedor-testimonio" key={index}>
          <img
            className="imagen-testimonio"
            src={require(`../imagenes/${value.imagen}.png`)}
            alt={`Imagen de ${value.imagen}`}
          />
          <div className="contenedor-texto-testimonio">
            <p className="nombre-testimonio">
              <strong>{value.nombre}</strong> en {value.pais}
            </p>
            <p className="cargo-testimonio">
              {value.cargo} en <strong>{value.empresa}</strong>
            </p>
            <p className="texto-testimonio">"{value.testimonio}"</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Testimonio;
