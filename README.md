<p align="center" margin="0">
   <img src="./src/assets/Futbol App-icon.svg" width="300px" height="100px">
</p>

# Trabajo práctico Syloper
#### Integrantes:
   * Serafin Emmanuel Scabuzzo
   * Giovanni Barolin 
### Link a la aplicación:
https://main--chic-duckanoo-ad7ca7.netlify.app/

FUTBOL APP es una aplicación web diseñada con el objetivo de brindar información relacionada al fútbol. Los fanáticos de este deporte podrán acceder al estado de los torneos y equipos del mundo, como así también acceder a datos de los jugadores.

La aplicación está diseñada con el framework Angular en su versión 14.

## INSTALACIÓN
Para instalar la app es necesario descargar los archivos del repositorio o bien, si se utiliza la aplicación Git, se puede clonar el repositorio directamente desde consola.

A través del siguiente link se puede acceder al proyecto: [a link] https://github.com/Giovi-22/Futbol-App

Una vez dentro del repositorio se puede hacer click en el botón "<>Code" en donde se descarga el proyecto en formato .zip como así también se puede copiar el link para realizar el clonado a través de Git.

Descargado el proyecto, abrir la consola de comandos, ingresar a la carpeta principal del proyecto y ejecutar los siguientes comandos:

    * $ cd <dirección a la carpeta principal del proyecto> 
    * $ npm install - para instalar la aplicación y sus dependencias. 
    * ....
    * Una vez completada la instalación ejecute el comando 
    * $ ng serve - para correr la aplicación y poder verla en el navegador. 

## USANDO LA APLICACIÓN
Dentro de la app encontrará la barra de navegación superior para navegar a través de las siguientes secciones: 

      * Leagues - se desplegará un menú con las ligas disponibles.
      * About us - contiene información relacionada a los creadores de la aplicacion.
      * Home/logo - navega hacia la pagína de inicio. 
      * una barra de busqueda en donde podrá buscar por nombre de equipos.
      * Sign in - para iniciar sesion en su cuenta de Futbol App
      * Sign up - para registrarse en Futbol App
### HOME
La pantalla inicial o de bienvenida muestra los equipos mas buscados así también como las competencias mas populares.
Se puede hacer click, tanto en las competencias como en los equipos para ver la información correspondiente.

### LEAGUES
Haciendo click en el boton leagues en la barra de navegación se desplegará un menú que contiene las ligas disponibles para consultar.
Seleccionada la liga, la aplicación redirige la navegación a una pantalla en donde se muestra los equipos que participan en la temporada actual. Se puede seleccionar, a través del boton standings, la vista de posiciones de los equipos con respecto a los puntos obtenidos en los partidos disputados. También se pueden ver los próximos partidos a disputar haciendo click en el botón Matches.
Se puede buscar los equipos y resultados de una temporada específica seleccionando el año de inicio de la temporada a travéz de un botón desplegable en el que se muestra inicialmente, la temporada en curso.

Si desea ver la formación de un equipo, debe hacer click en el equipo deseado. la aplicación redirigira hacia la vista de equipos, en donde se muestran los jugadores y la formación inicial.

### BUSQUEDA
En esta versión de la aplicación, el buscador solo permite buscar por nombre de equipo. El buscador busca en el servidor de Futbol App todas las coincidencias con el nombre y devuelve los resultados. Los resultados se muestran en una lista desplegable en donde se puede hacer click para seleccionar el equipo deseado y se redirigirá a la pantalla que muestra la informacion de este.

### SESION
Un usuario puede iniciar sesion en la aplicación o registrarse en esta.
Para iniciar sesion, haga clic en el boton SIGN IN. Ingrese su email y contraseña, si los datos son correctos, el usuario tendrá acceso a poder guardar equipos en su lista de favoritos. Solo los usuarios registrados tienen acceso a este servicio.

Para registrarse en la aplicación haga clic en el boton SIGN UP, debe completar todos los campos requeridos. Una finalizado el registo, se enviará un email al usuario con sus datos.

Si un usuario olvida su contraseña, puede solicitar renovarla. Para hacer esto, debe dirigirse a la seccion de SIGN IN hacer click en Forgot Password?, se le pedirá que ingrese su email. Si el email es correcto recibirá un correo con un link para cambiar la contraseña.
ATENCIÓN!!! SOLO DISPONE DE 5 min PARA RENOVAR EL PASSWORD

## TECNOLOGÍAS USADAS
  * @ngrx/store - Se utilizó para guardar de forma global los datos de la app.
  * bootstrap   - Se utilizó para dar estilo a los componentes   
  * moment      - Se utilizó para formatear las fechas
  * ngx-toastr  - Se utilizó para mostrar comentarios de retroalimentación al usuario

