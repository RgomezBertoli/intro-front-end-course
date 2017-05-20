intro-front-end-course
==========

Un repositorio con el código que usaré para mi curso de Fron-End

El mundo del Front-End se concentra principalmente en el desarrollo de aplicaciones Web y aplicaciones para dispositivos portatiles como móviles y tablets.
Dentro de este mundo hay diferentes roles que aportar al desarrollo Front-End:

<ul>
    <li>Diseño - UX/UI</li>
    <li>Maquetación</li>
    <li>Implementación</li>
    <li>Seguridad</li>
    <li>SEO</li>
</ul>

El __diseño__ agrupa las tareas de creación de las interfaces gráficas de nuestras aplicaciónes a nivel visual. Dentro de esto, una parte importante es crear un una experiencia de usuario de la aplicación que tenga una buena usabilidad dentro del grupo de usuarios para el que está destinada la aplicación, es decir, que un usuario se sienta cómodo usando la aplicación y que sea intuitiva.

La __maquetación__ es el trabajo de traducir los diseños creados a HTML y CSS. En el proceso de traducción, es importante que la maqueta creada siga las normas de accesibilidad para aquellos usuarios con algún tipo de discapcidad puedan navegar con facilidad.

Las normas de accesibilidad para las aplicaciones web están recogidas en la siguiente web:

[Normativa de la W3C de Accesibilidad del contenido web](http://www.sidar.org/traducciones/wcag20/es/)

La __implementación__ es el proceso de dar la lógica de negocio a la maqueta antes creada. Dependiendo de la decisión técnica de las librerías y/o los frameworks seleccionados, en muchas ocasiones tienen que traducir esta maquetación a un tercer lenguaje de programación y crear una serie de componentes para facilitar la reutilización y acceleración del desarrollo.

La __seguridad__, como el nombre indica, se ocupa de las tareas de protección de los datos que los usuarios introduccen en la aplicación y que nadie ajeno tenga acceso a ellos. Hay diferentes tipos de algoritmos para la codificación de estos datos.

Por último, el __SEO__ se encarga de mejorar el posicionamiento de la web en los motores de búsqueda y de la optimización de la web con el objetivo de aumentar la visibilidad del sitio web en los resultados de los diferentes navegadores.

Una vez introducidos los principales apartados en los que se engloba el mundo Front-End, hablaremos de los lenguajes de programación más usados para el desarrollo de las aplicaciones web:

- [HTML](./HTML.md)
- [CSS](./css/README.md)
- [JavaScript](./src/README.md)

A partir de esas tres guías podreís aprender todo lo necesario para empezar a desarrollar aplicaciones web sin ningún problema, pero si quereis seguir aprendiendo y profundizando más al respecto, aquí teneis los siguientes recursos:

- [MDN Introducción al JavaScript](https://developer.mozilla.org/es/docs/Learn)
- [Lista de cursos gratuitos de Udacity (En Inglés)](https://www.udacity.com/courses/web-development)
- [Libro de Eloquent Javascript](http://eloquentjavascript.net/)
- [Libro de Spekaing Javascript](http://speakingjs.com/)

Además de toda esta gran cantidad de información, hay preparados una serie de ejericios que os permitirán practicar lo que vais viendo en las diferentes guías de iniciación. Los enunciados y tags correspondientes a esos ejercicios son:


- En este ejericio os dejo una pequeña estructura para que creeís una página de Login con una cabezera con  el titulo, un cuerpo de página con un formulario con dos cajas de texto y un botón y un pie de pagina con información de contacto:
    - [Ejericio HTML](https://github.com/RgomezBertoli/intro-front-end-course/tree/HTML-Exercise)
    - [Solucion HTML](https://github.com/RgomezBertoli/intro-front-end-course/tree/HTML-Solution)

- Una vez que ya le habeís pillado el tranquilo al HTML, vamos a probar suerte con el CSS, la idea es que le deis el estilo que más os apetezca a vuestra página de Login:
    - [Mi propuesta de estilo](https://github.com/RgomezBertoli/intro-front-end-course/tree/CSS-Solution)

- Ahora vamos a practicar a hacer una página desde 0. Tomaremos como referencia el formato de una página como Wordpress [El Abismo de Null](https://elabismodenull.wordpress.com/). Y siguiendo esa colocacíón de elementos creamos nuestra página:
    - [Solución Obtenida](https://github.com/RgomezBertoli/intro-front-end-course/tree/Exercise-WordPress)

- Ya le hemos pillado un poco de carrerilla a esto del HTML y del CSS, vamos a crear una página simple y vamos a añadirle un poquito de Javascript para modificar nuestro HTML. Creamos una pagina con una caja de texto y un botón que al pulsarlo cree un elemento que añadiremos a una lista para visualizarlo en pantalla:
    - [Solucion Ejercicio DOM](https://github.com/RgomezBertoli/intro-front-end-course/tree/Exercise-JS)

- Y por último, practiquemos esas llamadas a servidor, cogiendo como referencia la página del segundo ejercicio, vamos a hacer que pulsando el botón del formulario se envien las credenciales a un servidor en la red:
    - [Solución Ejercicio XHR](https://github.com/RgomezBertoli/intro-front-end-course/tree/Exercise-XHR)

Los datos de la llamada al servidor son los siguientes:

- URL: 'https://to-do-course.herokuapp.com/'
- Método HTTP: 'POST'
- Cabecera necesaria: 'Content-Type=application/json'
- Cuerpo de la petición:

```json
{
    "username": "rgomezbertoli",
    "pass": "asdf1234"
}
```
Si utilizais otros datos, el servidor os responderá con un Status 500.

Por último deciros que espero que hayais aprendido mucho en este pequeño curso de introducción y que no os haya explotado la cabeza con tanta info.

![MindBlow](http://www.reactiongifs.com/wp-content/uploads/2013/10/tim-and-eric-mind-blown.gif)

<hr>
Hola, me llamo Rubén y este es mi repositorio. Os dejo mis datos de contacto por si teneis alguna dudilla:

 - Twitter: [@rGomezBertoli](https://twitter.com/rGomezBertoli?lang=es)

Hasta otra

![GoodBye](https://media.giphy.com/media/CrvOibrvHOjOo/giphy.gif)
