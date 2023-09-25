import React from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/users';

async function getUsers(): Promise<any> {
  const response = await axios.get(API_URL);
  return response.data;
}

async function getUser(id: string): Promise<any> {
  const response = await axios.get(`${API_URL}/${id}`); 
  return response.data;
}

async function createUser(user: any): Promise<any> {
  const response = await axios.post(API_URL, user);
  return response.data;
}

async function updateUser(id: string, user: any): Promise<any> {
  const response = await axios.put(`${API_URL}/${id}`, user);
  return response.data;
}

async function deleteUser(id: string): Promise<any> {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
} 

async function loginUser(user: any): Promise<any> {
  const response = await axios.post(`${API_URL}/login`, user);
  return response.data;
}

export {
  getUsers,
  getUser,
  createUser,
  updateUser,  
  deleteUser,
  loginUser
};