# Manual Técnico de la API

## Introducción

Esta API proporciona endpoints para gestionar usuarios y tareas. Utiliza NestJS como framework para construir aplicaciones web escalables y mantenibles en Node.js.

## Requisitos Previos

Asegúrate de tener instalado Node.js en tu sistema antes de comenzar. También necesitarás tener una base de datos compatible con Prisma, ya que esta API utiliza Prisma como ORM.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias del proyecto:
```JavaScript
npm install
```
5. Configura tu base de datos en el archivo `.env` proporcionado.
6. Ejecuta el siguiente comando para iniciar el servidor:
```JavaScript
npm run dev
```
## Endpoints

### Users

- **POST /users**: Crea un nuevo usuario.
- **GET /users**: Obtiene todos los usuarios.
- **GET /users/:id**: Obtiene un usuario por su ID.
- **PATCH /users/:id**: Actualiza un usuario existente.
- **DELETE /users/:id**: Elimina un usuario existente.

### Auth

- **POST /auth/login**: Inicia sesión de usuario.
- **POST /auth/register**: Registra un nuevo usuario.

### Tasks

- **POST /tasks**: Crea una nueva tarea.
- **GET /tasks**: Obtiene todas las tareas.
- **GET /tasks/:id**: Obtiene una tarea por su ID.
- **PATCH /tasks/:id**: Actualiza una tarea existente.
- **DELETE /tasks/:id**: Elimina una tarea existente.

## Seguridad

Esta API utiliza hashing de contraseñas utilizando bcrypt para almacenar contraseñas de usuarios de forma segura. También se manejan adecuadamente los errores de autenticación y autorización.

## Contribución

Si deseas contribuir a este proyecto, ¡te damos la bienvenida! Puedes abrir problemas para informar sobre errores o sugerir nuevas características. También puedes enviar solicitudes de extracción con mejoras o correcciones de errores.

## Licencia

Este proyecto está bajo la Licencia MIT. Para obtener más información, consulta el archivo `LICENSE`.

Este es un resumen de alto nivel del funcionamiento y los aspectos importantes de la API. Asegúrate de revisar el código fuente para obtener detalles más específicos sobre la implementación.
