CSS (Cascading Style Sheets)
==========

Este lenguaje es el encargado de dar los estilos a nuestra página. Dentro de estos estilos se encuentra la posición de los elementos, los colores y formas del texto, el tamaño del elemento, su padding interno, sus márgenes y sus bordes, si el elemento se muestra o no e incluso se encarga de las animaciones de los elementos.

Su sintaxis es sencilla, se compone de un selector con el cual elegimos el elemento sobre el que aplicaremos el estilo y una serie de propiedades que definiran que será modificado del elmento.

![Imagen de ejemplo CSS](https://en-support.files.wordpress.com/2011/09/css-selectors-lrg.png)

En cuanto a los **selectores**, hay diferentes formas de crearlos, a continuación pondré una serie de ejemplos de selectores y a continuación su equivalencia al elemento HTML al que afectaría:

- Selector de etiqueta:
```css
p {...}

/* HTML */

<p>...</p>
```
- Selector de clase:
```css
.content {...}

/* HTML */

<element class="content">...</element>
```
- Selector de ID
```css
#titulo {...}

/* HTML */

<element id="titulo">...</elements>
```
- Selector de atributo
```css
[align-left] {...}

/* HTML */

<element align-left>...</element>
```
- Selector de atributo especificando valor
```css
[type="text"] {...}

/* HTML */

<element type="text">...</element>
```

Haciendo combinaciones de estos diferentes selectores, podemos escoger de forma más exclusiva a que elemento va a afectar nuestro estilo, por ejemplo:

```css

.header .subtitulo[align-center] {...}

/* HTML */

<element class="header">
    ...
    <element class="subtitulo" align-center></element>
    ...
</element>
```

Al separar los diferentes selectores por un espacio, le estamos indicando a CSS que el selector que viene a continuación solo ha de buscarse dentro de los elementos que cumplan el primer selector. Si no ponemos ningun espacio entre los selectores este sería el resultado:

```css
.header.subtitulo[align-center] {...}

/* HTML */

<element class="header subtitulo" align-center></element>
```

Sin embargo, si separamos los selectores por comas, el estilo se aplicará sobre cualquier elemento que cumpla uno de los selectores separados por coma, resultando así:

```css
.header, .subtitulo, [align-center] {...}

/* HTML */

<element class="header"></element>

<element class="subtitulo"></element>

<element align-center></element>
```

Las **propiedades** son las encargadas de modificar el aspecto de nuestros elementos. De entre todas las propiedades de CSS que puedes consultar en el siguiente enlace, explicaré a continuación las más corrientes al uso:

[Propiedades CSS](https://developer.mozilla.org/es/docs/Web/CSS/Referencia_CSS)

- Propiedades de tamaño:
```css
selector {
    width: 50px; /* Indica el ancho del elemento */
    height: 50px; /* Indica el alto del elemento*/
    font-size: 1rem; /* Indica el tamaño de la fuente del texto que se encuente dentro de ese elemento */
    padding: 10px; /* Incluirá el tamaño indicado como separacion entre el borde del elemento y el contenido */
    margin: 10px; /* Indica la separación de este elemento y los elementos contiguos a él */
}
```

- Propiedades de color:
```css
selector {
    color: #FFF; /* Selecciona el color del texto del texto que se encuentre dentro de ese elemento */
    background-color: #E3E3E3; /* Indica el color de fondo del elemento en cuestión */
    border-color: #A0A0A0; /* Indica el color del borde del elemento si a este se le ha asignado uno */
}
```
- Propiedades de tipo de elemento:
```css
selector {
    display: inline; /* Hace que el elemento se comporte como un elemento inline*/
    display: block; /* Hace que el elemento se comporte como un elemento de bloque*/
    display: inline-block; /* Hace que el elemento se comporte tanto de bloque como un elemento inline*/
    display: none; /* Oculta el elemento, pero lo mantiene en el arbol de elementos HTML */
    display: flex; /* Hace que el elemento sea flexible (mirar guía de Flexbox) */
}
```
=> [Guía de Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- Propiedades de Posición:
```css
selector {
    position: absolute; /* Hace que el elemento se coloque respecto al ultimo elemento padre
    con la propiedad css => position: relative, y de no haber ninguno, respecto a la ventana*/
    position: relative; /* El elemento se colocara respecto su posición normal */
    position: fixed; /* El elemento se posiciona respecto a la ventana */

    /* Todas las propiedades anteriores necesitan de las siguientes para modificar su posición */
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    /* Ponen la distancia indicada entre el elemento y la referencia que se haya marcado */
}
```
- Propiedades modificadoras del texto:
```css
selector {
    font-family: 'Sans Serif'; /* Indica el tipo de letra a usar en ese elemento */
    font-weight: 300; /* Indica cuan gruesa es la letra */
    font-style: italic; /* Dice si la letra sera itálica o cursiva */
    text-decoration: overline; /* Subraya, tacha o pone una linea encima del texto */
    text-transform: uppercase; /* Permite hacer conversiones en el texto */
}
```

Estas son las propiedades CSS más usadas normalmente en una hoja de estilos. En los siguientes enlaces podeis encontrar todas las propiedades que existen actualmente en CSS:

- [Guá de CSS de la MDN](https://developer.mozilla.org/es/docs/Web/CSS/Referencia_CSS)
- [Guía de Referencia de la W3CSchools](https://www.w3schools.com/cssref/default.asp)