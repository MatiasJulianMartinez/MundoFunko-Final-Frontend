import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL + "/users";

// Obtiene todos los usuarios desde el backend
export const getUsuarios = async (token) => {
  const { data } = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

// Crea un nuevo usuario con los datos proporcionados y devuelve el objeto creado
export const createUsuario = async (usuario, token) => {
  const { data } = await axios.post(API_URL, usuario, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

// Actualiza el usuario indicado por id con los nuevos datos y devuelve la respuesta
export const updateUsuario = async (id, usuario, token) => {
  const { data } = await axios.put(`${API_URL}/${id}`, usuario, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

// Elimina el usuario con el id proporcionado y devuelve la confirmación del backend
export const deleteUsuario = async (id, token) => {
  const { data } = await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
