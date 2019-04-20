## Aplicación de Ejemplo de NodeJS

Curso de Udemy 

[Node: De cero a experto](https://www.udemy.com/node-de-cero-a-experto/)

Rest, despliegues, heroku, mlab, git, github, sockets, subida de archivos, jwt y mucho más para ser un experto en Node
Created by `Fernando Herrera`

### Ejemplo de la sección 6 `Section 5: Aplicación de Clima`

Nota: recuérdese ejecutar
```sh
npm install
```
para descargar todas las librerías y dependencias

Ejemplo de ejecución:
```sh
$ node app --help
Opciones:
  --version        Muestra número de versión                          [booleano]
  --direccion, -d  Dirección de la ciudad para obtener la información del clima
                                                                     [requerido]
  --help           Muestra ayuda                                      [booleano]

$ node app -d "Alcorcon, Spain"
Alcorcon,%20Spain
DATOS: Alcorcon, Spain 40.349998 -3.820000
Coordenadas:  { direccion: 'Alcorcon, Spain',
  lat: '40.349998',
  lng: '-3.820000' }
Los datos de clima actual en la dirección de 'Alcorcon, Spain' son:
 { temperatura: '13.44 ºC',
  temperatura_minima: '12.78 ºC',
  temperatura_maxima: '14.44 ºC',
  presion: '1018 mmHg',
  humedad: '58 %' }

```
