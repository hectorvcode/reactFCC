# Estructura de un componente

Al igual que en HTML, los elementos puedes ser anidados en JSX para formar estructuras más complejas

## Renderizar Componentes

En nuestro archivo HTML tendremos un elemento con id root

```JSX
<div id="root"></div>
```

En este ejemplo se va a mostrar un elemento específico dentro de otro elemento:

```JSX
const elemento =  <h1>¡Hola, Mundo!</h1>;

ReactDOM.render(
    elemento,
    document.getElementById('root')
);
```

Para usar ReactDOM debemos importarlo
```JSX
import ReactDOM from 'react-dom';
```
