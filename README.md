# RBAC System (Role-Based Access Control)
 This project is a simple Role-Based Access Control (RBAC) system built with React. It allows users to manage users and roles, including CRUD operations for both. The system demonstrates the use of React Context API, mock APIs, and modern component-based architecture.
# Features
  1 User Management:
Add, edit, and delete users.
Assign roles and statuses to users.
  2 Role Management:
Add, edit, and delete roles.
Define permissions (e.g., Read, Write, Delete) for each role.
Search and sort roles dynamically.
  3 Responsive Design:
Fully responsive interface optimized for both desktop and mobile devices.

# Project Structure
src/
├── components/
│   ├── RoleManagement.js       # Role management component
│   ├── UserModal.js            # Modal for adding/updating users
│   ├── UserTable.js            # Table for displaying users
├── context/
│   ├── RoleContext.js          # Context for roles
│   ├── UserContext.js          # Context for users
├── mockApi.js                  # Mock API for users and roles
├── styles.css                  # CSS file for styling
└── App.js                      # Main application file

# Technologies Used
- Frontend:
React
Context API
React Hooks (useState, useContext)
- Styling:
CSS3 (with responsive design principles)
- Mock Backend:
Axios
Custom mock API for simulating user and role data.
Easily replaceable with a real API.

# Setup and Installation
1.Clone the repository:
git clone https://github.com/your-username/rbac-system.git
cd rbac-system
2.Install dependencies:
npm install
3.Run the application:
npm start

# Usage
1. User Management
Navigate to the "User Management" tab.
Click "Add User" to create a new user.
Edit or delete users directly from the table.
2. Role Management
Navigate to the "Role Management" tab.
Create roles by defining a name and selecting permissions.
Search for roles using the search bar.
Sort roles by name or permissions.

# Acknowledgements
React Documentation: https://reactjs.org/docs/
CSS Tricks for Responsive Design: https://css-tricks.com/

# Project screenshots

![Screenshot 2024-11-25 205437](https://github.com/user-attachments/assets/4e776df4-321e-40ab-b07b-728e76e9e75a)
![Screenshot 2024-11-25 205420](https://github.com/user-attachments/assets/537db262-762f-4372-a3f9-d6f998f2ecac)

