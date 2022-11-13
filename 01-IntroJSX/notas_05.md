# Introducción a JSX

## JSX (JavaScript XML)

Extensión de React para la sintaxis de JavaScript

Nos permite describir en JavaScript cómo se verán los componentes usando una estructura similar a HTML

Es opcional, pero te va a ayudar a escribir código más conciso y fácil de entender.

```javascript
const elemento = <h1>¡Hola, Mundo!</h1>;
```

## Ventajas

* Estructura más fácil de visualizar
* Errores y advertencias más útiles

## Ejemplo

```javascript
import React from 'react';
import '../hojas-de-estilo/Contador.css';

function Contador({ numClics }){
    return (
        <div className="contador">
            {numClics}
        </div>
    );
}

export default Contador;
```
# Elementos en JSX

## Elemento

Unidades más pequeñas en React
Definen lo que se ve en pantalla

## Elementos vs Componentes

Los componentes en React están hechos de elementos
