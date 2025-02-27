import bcrypt from "bcrypt";

import { UserModel, getUserForId,createUser, updateUser, deleteUserModel } from '../models/User.js';

// Controlador para obtener todos los usuarios
const getAllUsers = (req, res) => {
  UserModel.getAllUsers() // Asumiendo que getAllUsers está definido en UserModel.js
    .then((results) => {
      res.status(200).json(results); // Enviar los resultados como respuesta JSON
    })
    .catch((error) => {
      console.error('Error al obtener usuarios:', error);
      res.status(500).json({ message: 'Error al obtener los usuarios', error: error });
    });
};

const getUserId = async (req,res) =>{
  try {
    const result = await getUserForId(req.params.id);
    return res.json(result); // Enviar la respuesta y asegurar el retorno
  } catch (error) {
    return res.status(500).json({ error: error.message }); // Asegura que solo envíe respuesta una vez
  }
};

const newUser = async (req, res) => {
  try {
    const { nombre, correo, contraseña, rol } = req.body;

    // Encriptar la contraseña
    const saltRounds = 10; // Nivel de encriptación
    const hashedPassword = await bcrypt.hash(contraseña, saltRounds);

    // Crear el usuario con la contraseña encriptada
    const newUserId = await createUser(nombre, correo, hashedPassword, rol);

    return res.status(201).json({ message: "Usuario creado exitosamente", newUserId });
  } catch (error) {
    console.error("Error al crear usuario:", error);
    return res.status(500).json({ message: "Error al crear usuario", error: error.message });
  }
};

const updateUserController = async (req, res) => {
  try {
    console.log("test update");
    const { id } = req.params;
    let { nombre, correo, contraseña, rol } = req.body;

    // Encriptar la nueva contraseña solo si se proporciona
    if (contraseña) {
      const saltRounds = 10; // Nivel de encriptación
      contraseña = await bcrypt.hash(contraseña, saltRounds);
    }

    const result = await updateUser(id, nombre, correo, contraseña, rol);
    return res.status(200).json({ message: "Usuario actualizado exitosamente", result });
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    return res.status(500).json({ message: "Error al actualizar usuario", error: error.message });
  }
};


const deleteUser = async (req,res)=>{
  try {
      const { id } = req.params;
      const result = await deleteUserModel(id);
      return res.status(200).json({message:"User eliminado correctamente"});
  } catch (error) {
    console.log(error)
  }
}



export {
  getAllUsers,
  getUserId,
  newUser,
  updateUserController,
  deleteUser
};
