import axios from 'axios';

// URL base para los endpoints de login y registro de usuarios
const API_URL = import.meta.env.VITE_BACKEND_URL + "/users";

// Envia email y contraseña al endpoint /login y devuelve los datos de la respuesta
export const loginUsuario = async (email, password) => {
  const res = await axios.post(`${API_URL}/login`, { email, password });
  return res.data;
};

// Envia los datos del nuevo usuario al endpoint /register y devuelve los datos creados
export const registrarUsuario = async (datos) => {
  const res = await axios.post(`${API_URL}/register`, datos);
  return res.data;
};

