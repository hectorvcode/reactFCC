# Conceptos básicos

## Componente

Parte de la interfaz de usuario que es independiente y reusable

Cada componente va a tener cierto estado y funcionalidad específica

Los componentes actúan como legos

Pueden dividirse en componentes funcionales y de clase

## Componente Funcional

Función de JavaScript/ES6 que retorna un elemento de React(JSX).

```javascript
function Saludo(props){
    return <h1>Hola, {props.nombre}!</h1>;
}
```
### Características

* Debe retornar un elemento de React(JSX)
* Debe comenzar con una letra mayúscula
* Puede recibir valores si es necesario

## Props

Argumentos que puede recibir un componente de React

Solo pueden ser enviados de padre a hijo

## Componente de Clase

Clase de ES6 (JavaScript moderno) que retorna un elemento JSX

```javascript
class Saludo extends React.Component {
    render() {
        return <h1>Hola, {this.props.nombre}!</h1>;
    }
}
```

## Características

* Debe extender React.Component
* Debe tener un método render() para retornar  un elemento de JSX
* Puede recibir valores si es necesario

