import React, { useState } from 'react';
import { UserProvider, UserContext } from './context/UserContext';
import { RoleProvider } from './context/RoleContext'; // Import RoleProvider
import { UserTable } from './components/UserTable';
import { UserModal } from './components/UserModal';
import { RoleManagement } from './components/RoleManagement';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [activeView, setActiveView] = useState("user"); // Default to user management

  return (
    <UserProvider>
      <RoleProvider> {/* Wrap app in RoleProvider for role management */}
        <UserContext.Consumer>
          {({ addUser, updateUser }) => (
            <div style={{ padding: '20px' }}>
              <h1>RBAC System</h1>

              {/* Toggle between user management and role management */}
              <button className="toggle" onClick={() => setActiveView("user")}>User Management</button>
              <button className="toggle" onClick={() => setActiveView("role")}>Role Management</button>

              {activeView === "user" && (
                <div>
                  <button onClick={() => setIsModalOpen(true)}>Add User</button>
                  <UserTable
                    onEdit={(user) => {
                      setEditingUser(user);
                      setIsModalOpen(true);
                    }}
                  />
                </div>
              )}

              {activeView === "role" && (
                <div>
                  {/* Role Management */}
                  <RoleManagement />
                </div>
              )}

              <UserModal
                open={isModalOpen}
                onClose={() => {
                  setIsModalOpen(false);
                  setEditingUser(null);
                }}
                user={editingUser}
                onSave={(form) => {
                  if (editingUser) {
                    updateUser(form);
                  } else {
                    addUser(form);
                  }
                  setIsModalOpen(false);
                  setEditingUser(null);
                }}
              />
            </div>
          )}
        </UserContext.Consumer>
      </RoleProvider>
    </UserProvider>
  );
};

export default App;
