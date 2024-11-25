// src/components/UserTable.js
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

export const UserTable = ({ onEdit }) => {
  const { users, deleteUser } = useContext(UserContext);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Role</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.status}</TableCell>
            <TableCell>
            <Button onClick={() => onEdit(user)}>Edit</Button>
              <Button onClick={() => deleteUser(user.id)} color="secondary">
                Delete
                </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
