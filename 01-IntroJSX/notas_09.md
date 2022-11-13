# Self-Closing Tags

Es un elemento que solo posee una etiqueta de apertura ya que no contiene texto u otros elementos

En html
```html
<img src="logo.png" alt="Mi imagen" />
```
En React debe siempre colocarse la barra de cierre

# JavaScript en JSX

Cuando veas { }, tendremos código de JavaScript allí dentro

```JSX
let adjetivo = "Interesante";

<p>React es {adjetivo}</p>

```


Puedes escribir cualquier expresión válida de JavaScript entre las llaves y su valor será reemplazado.

```JSX
<p>El resultado es: {5 * 6}</p>
```

Ejm
```JSX
let nombre = "Gino";
<p>Su nombre es: {nombre.toUpperCase()}</p>
```

