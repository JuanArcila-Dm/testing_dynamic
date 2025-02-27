import express from 'express';
import connectionDB from './config/db.js'; // Función para conectar a la base de datos
import userRoute from './routes/userRoute.js'; // Rutas de usuarios

const app = express();

// Conectar a la base de datos
connectionDB();

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas de usuarios con el prefijo /api/users
app.use('/api/users', userRoute);

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
