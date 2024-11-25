// src/context/UserContext.js
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/users').then((res) => setUsers(res.data));
  }, []);

  const addUser = (user) => {
    try {
        console.log("Adding user:", user); // Debug the user data
        const newUser = { id: users.length + 1, ...user }; // Simulate ID generation
        setUsers((prev) => [...prev, newUser]); // Update state
      } catch (error) {
        console.error("Error adding user:", error.message);
      }
  };

  const updateUser = (updatedUser) => {
    try {
        console.log("Updating user:", updatedUser); // Debug
        setUsers((prev) =>
          prev.map((user) => (user.id === updatedUser.id ? updatedUser : user))
        ); // Replace the old user with the updated one
      } catch (error) {
        console.error("Error updating user:", error.message);
      }
  };

  const deleteUser = (id) => {
    try {
        console.log("Deleting user with ID:", id); // Debug
        setUsers((prev) => prev.filter((user) => user.id !== id)); // Remove user by ID
      } catch (error) {
        console.error("Error deleting user:", error.message);
      }
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
