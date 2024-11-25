# RBAC System (Role-Based Access Control)
The RBAC System is a simple Role-Based Access Control application built using React. This app allows administrators to manage users and roles with CRUD (Create, Read, Update, Delete) functionalities. It uses React Context API for state management and simulates a backend with a mock API. The UI is styled to be responsive, making it suitable for both desktop and mobile use.

# Features
  - User Management:
      - Add new users by entering their name, email, role, and status.
      - Update existing user details or modify their assigned roles.
      - Delete users from the system.
      - Display a paginated table (or list) of users with sorting options.
  - Role Management:
       - Create new roles with specific permissions (e.g., Read, Write, Delete).
       - Edit existing roles to update permissions.
       - Delete roles that are no longer needed.
       - Filter roles based on names or permissions.
       - Sort roles alphabetically or by the number of assigned permissions.
- Responsive Design:
      - The interface dynamically adjusts for smaller screens (mobile-friendly).
      - Buttons, input fields, and modals are optimized for touch devices.

# Project Structure
src/
- components/
    - RoleManagement.js: Role management component.
     - UserModal.js: Modal for adding/updating users.
     - UserTable.js: Table for displaying users.
- context/
     - RoleContext.js: Context for managing roles.
      - UserContext.js: Context for managing users.
- mockApi.js: Mock API for simulating user and role operations.
- styles.css: CSS file for styling the app.
- App.js: Main application file.

# Technologies Used
- React: Component-based library for building the user interface.
- React Context API: For managing global state (roles and users).
- CSS3: Styling with responsive design principles.
- Mock Backend:
Axios
Custom mock API for simulating user and role data.
Easily replaceable with a real API.

# Setup and Installation
- Pre-requisites:
   - Ensure you have the following installed on your system:
   - Node.js (v14 or higher)
   - npm (Node Package Manager)
- Clone the repository:
git clone https://github.com/your-username/rbac-system.git
- cd rbac-system
- Install dependencies:
npm install
- Run the application:
npm start

# Usage
1. User Management
- Navigate to the "User Management" tab.
- Click "Add User" to create a new user.
- Edit or delete users directly from the table.
2. Role Management
- Navigate to the "Role Management" tab.
- Create roles by defining a name and selecting permissions.
- Search for roles using the search bar.
- Sort roles by name or permissions.

# Acknowledgements
- React Documentation: https://reactjs.org/docs/
- CSS Tricks for Responsive Design: https://css-tricks.com/

# Project screenshots

![Screenshot 2024-11-25 205437](https://github.com/user-attachments/assets/4e776df4-321e-40ab-b07b-728e76e9e75a)
![Screenshot 2024-11-25 205420](https://github.com/user-attachments/assets/537db262-762f-4372-a3f9-d6f998f2ecac)

