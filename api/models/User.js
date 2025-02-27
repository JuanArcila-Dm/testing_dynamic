import { json } from 'express';
import { connection } from '../config/db.js';
import { promisify } from "util";

const UserModel = {
  // Método para obtener todos los usuarios
  getAllUsers: () => {
    const query = 'SELECT * FROM usuarios'; // Consulta SQL para obtener todos los usuarios
    return new Promise((resolve, reject) => {
      connection.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
}

 const getUserForId = (id) => {
    const query = `SELECT * FROM usuarios WHERE id_usuarios = ${id}`;
    return new Promise((resolve, reject) => {
      connection.query(query, (err, results) => {
        if (err) {
          return reject(err); 
        }
        resolve(results);
      });
    });
  }


  const createUser = async (nombre, correo, contraseña, rol) => {
    const query = `INSERT INTO usuarios (id_usuarios, nombre, correo, contraseña, rol) VALUES (NULL, ?, ?, ?, ?)`;
    
    return new Promise((resolve, reject) => {
      connection.query(query, [nombre, correo, contraseña, rol], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  }
  
  const updateUser = (id, nombre, correo, contraseña, rol) => {
    const query = `UPDATE usuarios SET nombre = ?, correo = ?, contraseña = ?, rol = ? WHERE id_usuarios = ?`;
    return new Promise((resolve, reject) => {
      connection.query(query, [nombre, correo, contraseña, rol, id], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  };



  const deleteUserModel = async (id) => {
    try {
      // Convertir connection.query en una función basada en promesas
      const query = promisify(connection.query).bind(connection);
  
      // Verificar si el usuario existe
      const selectQuery = "SELECT * FROM usuarios WHERE id_usuarios = ?";
      const user = await query(selectQuery, [id]);
  
      if (user.length === 0) {
        throw new Error("El usuario no existe.");
      }
  
      // Eliminar al usuario
      const deleteQuery = "DELETE FROM usuarios WHERE id_usuarios = ?";
      const result = await query(deleteQuery, [id]);
  
      return result;
    } catch (err) {
      // Manejo de errores
      throw err;
    }
  };
  
  
  
export { UserModel,getUserForId,createUser, updateUser,deleteUserModel }
