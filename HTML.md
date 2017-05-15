HTML (HyperText Markup Language)
=======

HTML es el lenguaje de marcado utilizado para la creación de las interfaces web mediante diferentes elementos que nos proporciona el lenguaje.

Todas las etiquetas de HTML tienen la misma estructura:

![HTML-Example](https://citsf221.community.uaf.edu/files/2009/08/taganatomy.png)

Hay diferentes tipos de elementos en HTML:


* **Elementos de Bloque**: Son aquellos que dentro de una pagina HTML ocupan lo equivalente a una fila en el documento. A nivel de espacio, tienen tanto margenes alrededor de todo el elemento y se les puede asignar tanto alto como ancho al elemento. Los elementos de bloque más conocidos son:

    * body
    * header
    * nav
    * main
    * div
    * section
    * article
    * form
    * ul -> li
    * table
    * p
    * footer
    * h1, h2, h3..., h6


* **Elementos inline**: Son aquellos que permiten que haya más elementos en una misma fila del documento. A nivel de espacios, este elemento sólo tiene margenes a los lados. Los elementos inline más usados son:

    * span
    * input
    * button
    * a
    * img
    * label
    * select
    * time
    * strong
    * i

<img src="http://trickcollab.com/wp-content/uploads/2015/06/block-inline-tags.jpg"
 style="height:15rem" alt="Tipos de elementos">

Todo documento HTML tiene la siguiente estructura:

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Etiquetas meta para aumentar la meta-información 
    que se muesra al buscar la página en el buscador -->

    <!-- Links a los archivos CSS -->
    
    <title>Título de la página</title>
</head>

<body>
    <!-- El cuerpo de la página -->
</body>
    <!-- Etiquetas scripts para enlazar los archivos JS 
    (Se ponen aquí para evitar la ralentización de la carga de la página) -->
</html>
```

Cada etiqueta HTML suele tener una funcionalidad dentro de una página web.

- Para crear una lista de navegación, se suele usar la etiqueta ```<nav>``` con una etiqueta ```<a>``` por cada enlace, creando una estructura similar a la siguiente:

```HTML
<nav>
    <a href="url1">Enlace 1</a>
    <a href="url2">Enlace 2</a>
</nav>
```

- Si lo que se quiere es crear una lsita de elementos, la mejor elección es la etiqueta ```<ul>``` para declarar la lista y ```<li>``` para declarar cada elemento de la lista:

 ```HTML
 <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
 ```

- Para crear un formulario se utiliza la etiqueta ```<form>``` para declarar el formulario, y utilizar las diferentes etiquetas para permitirle al usuario introducir sus datos, y por último, poner un ```<button>``` para permitir hacer un submit del formulario. Aquí un ejemplo:

```HTML
<form class="login-form">
    <label>Usuario</label>
    <input type="text" placeholder="Username">
    <label>Password</label>
    <input type="password" placeholder="Password">

    <input type="checkbox"> Texto del checkbox

    <select name="seleccion" id="selector">
        <opt id="1">Opción 1</opt>
        <opt id="2">Opción 2</opt>
        <opt id="3">Opción 3</opt>
        <opt id="4">Opción 4</opt>
    </select>

    <button>Sign In</button>
</form>
```

Por último, es importante a la hora de crear la maqueta de la página es tener en cuenta la Semántica de la Web y la Accesibilidad Web, porque de esta forma la siguiente persona que lea vuestro código entienda para que sirve cada bloque de elementos, y con una buena semántica, además, se mejora la accesibilidad de la página.