import React, { createContext, useState, useContext } from 'react';

// Create a context for roles
export const RoleContext = createContext();

// Provider component for managing roles
export const RoleProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);

  // Function to add a new role
  const addRole = (roleName, permissions) => {
    const newRole = { id: Date.now(), name: roleName, permissions };
    setRoles([...roles, newRole]);
  };

  // Function to update a role
  const updateRole = (id, updatedRole) => {
    setRoles(roles.map(role => role.id === id ? { ...role, ...updatedRole } : role));
  };

  // Function to delete a role
  const deleteRole = (id) => {
    setRoles(roles.filter(role => role.id !== id));
  };

  return (
    <RoleContext.Provider value={{ roles, addRole, updateRole, deleteRole }}>
      {children}
    </RoleContext.Provider>
  );
};

// Custom hook to access RoleContext
export const useRoles = () => {
  return useContext(RoleContext);
};
