import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";

export const UserModal = ({ open, onClose, onSave, user }) => {
  const [form, setForm] = useState({ name: "", email: "", role: "", status: "" });
  const [formErrors, setFormErrors] = useState({});

  // Pre-fill form when editing a user
  useEffect(() => {
    if (user) {
      setForm(user);
      setFormErrors({});
    } else {
      setForm({ name: "", email: "", role: "", status: "" });
    }
  }, [user]);

  // Validate inputs
  const validate = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = "Name is required.";
    if (!form.email.trim()) errors.email = "Email is required.";
    if (!form.role.trim()) errors.role = "Role is required.";
    if (!form.status) errors.status = "Status is required.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" }); // Clear error on input change
  };

  const handleSubmit = () => {
    if (!validate()) return; // Stop submission if validation fails
    onSave(form);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{user ? "Edit User" : "Add User"}</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2, // Spacing between inputs
          }}
        >
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            error={!!formErrors.name}
            helperText={formErrors.name}
          />
          <TextField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            error={!!formErrors.email}
            helperText={formErrors.email}
          />
          <TextField
            label="Role"
            name="role"
            value={form.role}
            onChange={handleChange}
            fullWidth
            error={!!formErrors.role}
            helperText={formErrors.role}
          />
          <FormControl fullWidth error={!!formErrors.status}>
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={form.status}
              onChange={handleChange}
              fullWidth
              label="Status"
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
            {formErrors.status && (
              <p style={{ color: "red", fontSize: "0.75rem" }}>{formErrors.status}</p>
            )}
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
