Primera aplicación en Angular en ViewNext
alce65@hotmail.es (curso)
git iconotraining (repositorio)
Recordar usar clases y herencias
Angular cli herramienta de creación de los proyectos
Usar un mismo espacio de trabajo para compartir los node_modules, ...
Recordar usar modulos angular, export ya lo convierte 
en un módulo para los navegadores (type=module) ES6
Vamos a trabajar con TypeScript (tipos y anotaciones)
Instalar npm install -g ts-node and typescript
Programación de observables en angular esta basado en reactivex
e2e test endpoint
SVG incrustada directamente como cadena.
Las librerías de css, en este caso bootstrap, se recomienda instalar 
dentro de la carpeta del proyecto (no de manera global). Se añade dentro
del angular.json (links en la web, tanto script, como css)
Crear componentes con schematics, usar ng g (para ver que podemos crear)
Modulo comun a todo la aplicación dentro de app.
    modulo central (module core)
    modulo exportable se ve toda la app.
    Componente ng g c core/head --dry-run
ng new -p  (asignar prefijo a la app)
con la opción --dry-run (hace una simulación de lo que vas a crear)
ng new primeraAppAngular --strict=false --prefix=vwn --routing=true --style=scss (responde directamente a las preguntas)
bootstrap trabaja con lineas
Cuando pones [] es cuando estás accediendo a propiedades.
Se recomienda inicializar las variables en el onInit del Componente
Hay que crear el modulo de enrutamiento en un vector, poner las rutas, en routing.ts.
Lazy-Load es que carga cuando lo necesitas (en los componentes mediante los import)