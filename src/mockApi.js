const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Inactive" },
  ];
  
  // Simulate an API call
  export const mockApi = {
    fetchUsers: () => Promise.resolve(users),
    addUser: (user) => {
      user.id = users.length + 1; // Simulate auto-increment ID
      users.push(user);
      return Promise.resolve(user);
    },
    updateUser: (updatedUser) => {
      const index = users.findIndex((user) => user.id === updatedUser.id);
      if (index === -1) return Promise.reject({ status: 404, message: "User not found" });
      users[index] = updatedUser;
      return Promise.resolve(updatedUser);
    },
    deleteUser: (id) => {
      const index = users.findIndex((user) => user.id === id);
      if (index === -1) return Promise.reject({ status: 404, message: "User not found" });
      users.splice(index, 1);
      return Promise.resolve();
    },
  };
  