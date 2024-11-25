import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";

const permissionsList = ["Read", "Write", "Delete"];

export const RoleModal = ({ open, onClose, onSave, role }) => {
  const [form, setForm] = useState({ roleName: "", permissions: [] });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (role) {
      setForm({ roleName: role.roleName, permissions: role.permissions || [] });
      setFormErrors({});
    } else {
      setForm({ roleName: "", permissions: [] });
    }
  }, [role]);

  const validate = () => {
    const errors = {};
    if (!form.roleName.trim()) errors.roleName = "Role Name is required.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePermissionChange = (e) => {
    const { name, checked } = e.target;
    setForm((prevForm) => {
      const updatedPermissions = checked
        ? [...prevForm.permissions, name]
        : prevForm.permissions.filter((permission) => permission !== name);
      return { ...prevForm, permissions: updatedPermissions };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = () => {
    if (!validate()) return;
    onSave(form);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{role ? "Edit Role" : "Add Role"}</DialogTitle>
      <DialogContent>
        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Role Name"
            name="roleName"
            value={form.roleName}
            onChange={handleChange}
            fullWidth
            error={!!formErrors.roleName}
            helperText={formErrors.roleName}
          />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {permissionsList.map((permission) => (
              <FormControlLabel
                key={permission}
                control={
                  <Checkbox
                    name={permission}
                    checked={form.permissions.includes(permission)}
                    onChange={handlePermissionChange}
                  />
                }
                label={permission}
              />
            ))}
          </Box>
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
