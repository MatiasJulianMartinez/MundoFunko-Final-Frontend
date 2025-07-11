import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL + "/categorias";

// Obtiene todas las categorías desde el backend
export const getCategorias = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

// Crea una nueva categoría, enviando el token en headers para autorización
export const createCategoria = async (categoria, token) => {
  const { data } = await axios.post(API_URL, categoria, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

// Actualiza la categoría indicada por id, usando los datos y el token
export const updateCategoria = async (id, categoria, token) => {
  const { data } = await axios.put(`${API_URL}/${id}`, categoria, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

// Elimina la categoría indicada por id, enviando el token para autorización
export const deleteCategoria = async (id, token) => {
  const { data } = await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
