import api from "./axios";

export const getBooks = () => api.get("/books");
export const getBookById = (id: number) => api.get(`/books/${id}`);
