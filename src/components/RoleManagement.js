import React, { useState } from 'react';
import { useRoles } from '../context/RoleContext'; // Use RoleContext

export const RoleManagement = () => {
  const { roles, addRole, updateRole, deleteRole } = useRoles();
  const [roleName, setRoleName] = useState('');
  const [permissions, setPermissions] = useState([]);
  const [editingRole, setEditingRole] = useState(null);

  const [sortOrder, setSortOrder] = useState('asc'); // "asc" for ascending, "desc" for descending
  const [filter, setFilter] = useState(''); // Filter by role name or permissions

  // Add or update role
  const handleSaveRole = () => {
    if (editingRole) {
      updateRole(editingRole.id, { name: roleName, permissions });
      setEditingRole(null); // Reset after saving
    } else {
      addRole(roleName, permissions);
    }
    setRoleName('');
    setPermissions([]);
  };

  // Handle permission toggling
  const handlePermissionsChange = (permission) => {
    setPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((perm) => perm !== permission)
        : [...prev, permission]
    );
  };

  // Sort roles
  const sortedRoles = [...roles].sort((a, b) => {
    const order = sortOrder === 'asc' ? 1 : -1;
    return a.name.toLowerCase() > b.name.toLowerCase() ? order : -order;
  });

  // Filter roles
  const displayedRoles = sortedRoles.filter((role) => {
    return (
      role.name.toLowerCase().includes(filter.toLowerCase()) ||
      role.permissions.some((permission) =>
        permission.toLowerCase().includes(filter.toLowerCase())
      )
    );
  });

  return (
    <div>
      <h2>Role Management</h2>

      {/* Role Name Input */}
      <input
        type="text"
        placeholder="Role Name"
        value={roleName}
        onChange={(e) => setRoleName(e.target.value)}
      />

      {/* Permissions Checkboxes */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={permissions.includes('Read')}
            onChange={() => handlePermissionsChange('Read')}
          />
          Read
        </label>
        <label>
          <input
            type="checkbox"
            checked={permissions.includes('Write')}
            onChange={() => handlePermissionsChange('Write')}
          />
          Write
        </label>
        <label>
          <input
            type="checkbox"
            checked={permissions.includes('Delete')}
            onChange={() => handlePermissionsChange('Delete')}
          />
          Delete
        </label>
      </div>

      
      <button onClick={handleSaveRole}>
        {editingRole ? 'Update Role' : 'Add Role'}
      </button>

      
     

      
      <div className='sort'>
        <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
          Toggle Sort Order ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
        </button>
        <input className='inp'
        type="text"
        placeholder="Search by role name or permissions"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      </div>

      {/* Display Roles */}
      <h3>Existing Roles</h3>
      <ul>
        {displayedRoles.map((role) => (
          <li key={role.id}>
            <strong>{role.name}</strong> - Permissions: {role.permissions.join(', ')}
            <button
              onClick={() => {
                setEditingRole(role); // Set role to edit
                setRoleName(role.name); // Set name to edit
                setPermissions(role.permissions); // Set permissions to edit
              }}
            >
              Edit
            </button>
            <button onClick={() => deleteRole(role.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
