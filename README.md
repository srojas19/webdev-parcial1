# Parcial 1 – WebDev Uniandes

https://srojas19-parcial1.herokuapp.com

Santiago Rojas Herrera  
201512371  
[Programación con tecnologías web](http://johnguerra.co/classes/webDevelopment_fall_2017/)  
Universidad de los Andes

## Propósito
Esta aplicación permite ver los seguidores que un usuario tiene en github y sus datos principales. También, permite navegar sobre los subsecuentes seguidores, manteniendo un historial accesible desde la barra de *breadcrumbs* en el encabezado de la página.  
Aplicación construida para el parcial 1 de la materia Programación con tecnologías web, de la Universidad de los Andes.

## ¿Cómo instalar?
~~~
git clone https://github.com/srojas19/webdev-parcial1.git  
cd webdev-parcial1/  
npm install  
npm start
~~~

En otra pestaña de terminal se debe instalar e iniciar la aplicacion de react

~~~
cd front/
npm install
npm start
~~~

Finalmente abrir la página en: `localhost:3000`

## ¿Cómo usar?
* Ingresar el handle del usuario que se quiere consultar en la barra de búsqueda
* Si se quiere revisar un seguidor, dar clic en su imágen
* Si se quiere volver a un usuario que ya se revisó, dar clic en su handle en la barra de _breadcrumbs_
* Si se quiere ver el perfil de github del usuario, dar clic en el botón con label github. El perfil se abre en una pestaña nueva.

## Salsa Secreta
La aplicación depliesga los detalles del usuario al que se quieren consultar sus seguidores (botones a blog y github) en una carta, junto al número de veces que se ha revisado a este usuario globalmente en la aplicación.

## Uso de MongoDB
Almacena los registros de la cantidad de veces que se ha revisado (referenciado) a un usuario en la página.
