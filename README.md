#          ![Futbol App-icon](https://github.com/Giovi-22/Futbol-App/assets/98109747/272efad7-e91c-448f-a51b-479b62ad5000)

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
En esta versión de la aplicación, el buscador solo permite buscar por nombre de equipo
# Angular Template

This template was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.8

---

## Development server

Run `yarn start` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Development server options

to serve normal use this configuration:

```
  yarn start || npm run start
```

to serve and automatically open the browser use this configuration:

```
  yarn start:open || npm run start:open
```

to serve and access from a local network use this configuration:

```
  yarn start:host || npm run start:host
```

to serve as `production` run use this configuration:

```
  yarn start:prod || npm run start:prod
```

<!-- ## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`. -->

---

## Build

Run `yarn build:option` or `npm run build:option` to build the project. The build artifacts will be stored in the `dist/` directory.

### Build options

to compile for `development` use this configuration:

```
  yarn build:dev || npm run build:dev
```

to compile for `production` use this configuration:

```
  yarn build:prod || npm run build:prod
```

to compile for `webpack-bundle-analyzer` use this configuration:

```
  yarn build:stats || npm run build:stats
```

---

## Linter

Run `yarn lint` or `npm run lint` to show in the terminal the error that linter finds according to the configuration

### Linter options

to show error use this configuration:

```
  yarn lint || npm run lint
```

to show error and automatically fix it use this configuration:

```
  yarn lint:fix || npm run lint:fix
```

to run linter default inside angular use this configuration:

```
  yarn lint:ng || npm run lint:ng
```

to show error and automatically fix it use ng configuration:

```
  yarn lint:ng:fix || npm run lint:ng:fix
```

---

## Husky

At the end of the installation of all the packages, husky will be installed, a tool that will allow us to automatically run `git hooks`, in our case to run the `commitlint` and `eslint` linters before committing.

---

## Tools

### Webpack Bundle Analyzer

`Webpack-bundle-analyzer` is a tool that allows us to graphically see when our application weighs and segmented by modules, this helps us to discover failures in the application's performance

to use `webpack-bundle-analyzer`, before you must use this command `yarn build:stats` or `npm run build:stats` which generates the stats files that allow webpack-bundle-analyzer to work properly

```
  yarn analyze || npm run analyze
```

<!-- ## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). -->

<!-- ## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities. -->
