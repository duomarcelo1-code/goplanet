# GoPlanet

Sitio web de una agencia de viajes, desarrollado como proyecto final del curso de
Programación. Cuenta con un frontend público y un panel de administración protegido
con login para gestionar las promociones.

## Características

- **Node.js + Express** como servidor y **Handlebars (hbs)** como motor de plantillas.
- **Base de datos MySQL** con las cuatro operaciones básicas (alta, baja, modificación
  y consulta) sobre las promociones especiales.
- **Formulario de contacto** que envía mails mediante Nodemailer.
- **Panel de administración** en `/admin` con login por sesión y rutas protegidas.
- Secciones del sitio: destinos, información de viajes, promociones y testimonios.

## Tecnologías

| Herramienta | Uso |
|---|---|
| Express 4 | Servidor y ruteo |
| hbs | Motor de plantillas |
| mysql2 | Conexión a la base de datos |
| express-session | Manejo de sesiones del admin |
| nodemailer | Envío de mails |
| md5 | Hash de contraseñas |
| dotenv | Variables de entorno |
| Bootstrap 5 | Estilos del frontend |

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/duomarcelo1-code/goplanet.git
cd goplanet
```

### 2. Instalar las dependencias

```bash
npm install
```

### 3. Importar la base de datos

Importar el archivo `database.sql` desde phpMyAdmin (pestaña *Importar*) o por consola:

```bash
mysql -u root -p < database.sql
```

Esto crea la base `programacion` con las tablas `usuarios` y
`promocionesespeciales`, ya con datos de ejemplo.

### 4. Configurar las variables de entorno

Copiar el archivo de ejemplo y completarlo con las credenciales propias:

```bash
cp .env.example .env
```

| Variable | Descripción |
|---|---|
| `SMTP_HOST` / `SMTP_PORT` | Servidor de correo (por defecto, Mailtrap) |
| `SMTP_USER` / `SMTP_PASS` | Credenciales SMTP |
| `MYSQL_HOST` | Host de MySQL (normalmente `localhost`) |
| `MYSQL_DB_NAME` | Nombre de la base (`programacion`) |
| `MYSQL_USER` / `MYSQL_PASSWORD` | Credenciales de MySQL |

Las credenciales SMTP se obtienen creando una cuenta gratuita en
[Mailtrap](https://mailtrap.io) → *Inboxes* → *SMTP Settings*.

### 5. Levantar el servidor

```bash
npm start
```

El sitio queda disponible en [http://localhost:3000](http://localhost:3000).

## Uso del panel de administración

Ingresar a [http://localhost:3000/admin/login](http://localhost:3000/admin/login) con
el usuario de prueba incluido en `database.sql`:

- **Usuario:** `marcelo`
- **Contraseña:** `1234`

Desde el panel se pueden crear, editar y eliminar las promociones, que se reflejan
automáticamente en la sección *Promociones* del home.

## Estructura del proyecto

```
├── app.js                  Configuración de Express, sesiones y middlewares
├── bin/www                 Punto de entrada del servidor
├── database.sql            Base de datos exportada
├── models/
│   ├── bd.js               Pool de conexión a MySQL
│   ├── promocionesModel.js Consultas de promociones (ABM)
│   └── usuariosModels.js   Validación del login
├── public/stylesheets/     Hojas de estilo
├── routes/
│   ├── index.js            Home y formulario de contacto
│   └── admin/              Login y gestión de promociones
└── views/                  Plantillas Handlebars
```

## Autor

Marcelo Tomás Duo
