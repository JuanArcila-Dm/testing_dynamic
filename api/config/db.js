import mysql from 'mysql2';

// Crea la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testing_dynamic'
});

const connectionDB = async () => {
  try {
    connection.connect((err) => {
      if (err) {
        console.error('Error conectando a MySQL:', err.stack);
        return;
      }
      console.log('Conectado a MySQL con ID:', connection.threadId);
    });
  } catch (error) { 
    console.log(error);
  }
};

// Exporta tanto la conexión como la función de conexión
export { connection, connectionDB };
export default connectionDB;