# Marathon_FE
 Proyecto que contiene el frontend de un crud hecho con angular
# Guía de Instalación y Prueba

## Requisitos Previos
- Java Development Kit (JDK) 17 o superior instalado en tu máquina local.
- Node.js y Angular CLI instalados en tu máquina local.
- MySQL instalado en tu máquina local o en un servidor remoto.
- Un IDE de tu elección para trabajar con el código (por ejemplo, IntelliJ IDEA, Eclipse, Visual Studio Code, etc.).

## Pasos de Configuración

1. **Clona los repositorios desde GitHub:**

   - Backend (Spring Boot): [https://github.com/Chrissrcd/Marathon_BE](https://github.com/Chrissrcd/Marathon_BE)
   - Frontend (Angular): [https://github.com/Chrissrcd/Marathon_FE](https://github.com/Chrissrcd/Marathon_FE)

2. **Backend (Spring Boot):**

   - Abre el proyecto backend en tu IDE.
   - Configura las propiedades de conexión a la base de datos en el archivo `src/main/resources/application.properties`.
   - Importa el archivo SQL proporcionado en el proyecto backend. Puedes usar Workbench para importar el archivo SQL a tu base de datos. Asegúrate de que la base de datos se llame "marathon_store".
   - Ejecuta la aplicación Spring Boot desde tu IDE o mediante el siguiente comando en la terminal dentro del directorio del proyecto:

     ```
     mvn spring-boot:run
     ```

3. **Frontend (Angular):**

   - Abre la carpeta del proyecto frontend en tu IDE o en un editor de texto.
   - Abre una terminal dentro del directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias:

     ```
     npm install
     ```

   - Una vez finalizada la instalación, ejecuta el siguiente comando para iniciar la aplicación Angular:

     ```
     ng serve
     ```

4. **Accede a la aplicación:**

   - Abre un navegador web y navega a `http://localhost:4200` para acceder a la interfaz de usuario de la aplicación CRUD.

## Prueba de la Aplicación

Utiliza la interfaz de usuario de la aplicación para realizar las siguientes acciones:

- Agregar una nueva empresa.
- Ver la lista de empresas existentes.
- Editar los detalles de una empresa.
- Eliminar una empresa.

La aplicación interactuará con la base de datos MySQL y mostrará los resultados en tiempo real en la interfaz de usuario.

Recuerda que estos pasos son para configurar y probar la aplicación en un entorno de desarrollo local. Si deseas implementar la aplicación en un entorno de producción, consulta la sección correspondiente de la documentación o ponte en contacto con el administrador del sistema para obtener asistencia.

¡Disfruta probando la aplicación CRUD! Si tienes alguna pregunta o enfrentas algún problema, no dudes en abrir un problema en el repositorio de GitHub o contactar al equipo de desarrollo.
