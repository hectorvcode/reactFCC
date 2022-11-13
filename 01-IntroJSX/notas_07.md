# Atributos

Puedes agregar atributos a tus elementos en JSX para especificar ciertas características.

Pero algunos atributos se escriben de forma distinta si los comparamos con HTML.

En html
```html
<h1 class="titulo-azul"></h1>
```

En JSX
```jsx
<h1 className="titulo-azul"></h1>
```

Debemos cambiar el nombre e clase porque **class** es una palabra resservada en JavaScript que podemos usar para crear una clase. Por eso necesitamos escribir ese atributo de forma distinta.

En html
```html
<label for="css">CSS</label>
```

En JSX
```jsx
<label htmlFor="CSS">CSS</label>
```

El atributo **style** acepta un objeto JavaScript con propiedades CSS escritas en camelCase.

En CSS
```css
backgroud-image
font-family
```

En JSX
```jsx
backgroundImage
fontFamily
```

## Ejemplo

```jsx
const estiloDiv = {
    color: 'yellow',
    backgroundColor: 'black'
};
```

```JSX
<div style={estiloDiv}>¡Hola, Mundo!</div>
```

## Otra alternativa

Usando llaves dobles:

```JSX
<div style={{color: "yellow"}}>¡Hola, Mundo!</div>
```

## Atributos del DOM reconocidos por React

Puedes consultarlos [aqui](https://reactjs.org/docs/dom-elements.html#:~:text=Some%20of%20the%20DOM%20attributes%20supported%20by%20React%20include%3A)

