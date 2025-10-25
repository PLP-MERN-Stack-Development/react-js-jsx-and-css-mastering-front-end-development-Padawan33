# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Focus Flow: Task Manager
Link to Focus Flow https://mastering-front-end-dev.vercel.app/


Focus Flow is a modern, single-page application (SPA) built with React and styled using Tailwind CSS. It functions as a robust task manager that allows users to create, track, categorize, and prioritize tasks with features like due dates, recurrence, subtasks, and a toggleable dark mode. The application uses component-based local state management for efficiency.

## Features

* **Custom Client-Side Routing:** Seamless navigation between Home, API Browser, Contact, Login, and Register pages without full page reloads.
* **Task Management:** Full CRUD (Create, Read, Update, Delete) functionality for tasks.
* **Task Reordering:** Users can manually move tasks up and down the list.
* **Detailed Task Attributes:** Includes due dates, categories, priority levels, recurrence, and reminders.
* **Subtasks:** Ability to add and track nested subtasks for complex items.
* **Filtering:** Filter tasks by "All," "Active," and "Completed."
* **Global Dark Mode:** Toggleable theme that persists across pages using the React Context API and Tailwind CSS utilities.
* **Responsive Layout:** Designed to look great on both desktop and mobile devices.

---

## Project Setup

This project requires **Node.js** and **npm** (or yarn/pnpm) to be installed on your system. We will assume you are using **VS Code** as your base editor, as per your instruction.

### 1. Cloning the Repository

First, clone the repository and navigate into the project directory.

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd focus-flow-task-manager

### 2. Install Dependencies

Install all the necessary project dependencies defined in package.json.

Bash

npm install
# OR
yarn install

### 3. Running the Application

Once the dependencies are installed, you can start the development server.

Bash

npm run dev
# OR
yarn dev

The application will typically be accessible in your browser at: http://localhost:5173 (or another port specified in your console).



Project Structure
The key files and directories for understanding and modifying the application are:

src/
├── components/          # Reusable UI components (e.g., Navbar, Card, Button)
│   ├── Card.jsx
│   ├── Layout.jsx       # Defines the app's overall structure (Header, Footer, Content)
│   ├── Navbar.jsx       # Handles navigation and theme toggle
│   └── LocalTaskManager.jsx # The main task interface logic
├── context/
│   └── TaskContext.jsx  # CRITICAL: Manages global state (tasks, theme, handlers)
├── pages/               # Top-level components for different routes
│   ├── HomePage.jsx     # Main task list view, imports LocalTaskManager
│   ├── Contacts.jsx     # The contact page content
│   ├── Login.jsx        # Login page placeholder
│   └── ...              # Other route pages (Api, Register)
├── App.jsx              # Main application logic for custom client-side routing
└── main.jsx             # Entry point, wraps App in React StrictMode



Custom Routing
The application uses a basic client-side routing system managed entirely within App.jsx using the useState hook.
** Mechanism: Navigation is handled by the onNavigate prop passed from App.jsx to Layout.jsx and then to Navbar.jsx. Clicking a NavLink updates the currentPage state in App.jsx, which triggers a re-render of the appropriate page component via the renderPage function.
**Supported Routes:
* home
* api
* contact
* login
* register
* contacts

State and Theme Management
Global state for tasks and the theme is managed using the React Context API defined in src/context/TaskContext.jsx.
** Task State: Tasks are stored in the local component state and persisted to the browser's localStorage.'
** Theme State: The current theme ('light' or 'dark') is also managed in TaskContext.jsx and persisted to localStorage.
** Dark Mode Implementation: The theme state is read in Layout.jsx, which conditionally applies the dark class to the main wrapper, enabling Tailwind's dark: utilities across the entire application.

'Technologies Used
* React (v18+)
* Tailwind CSS (for utility-first styling)
* Heroicons (for SVG icons)
* Vite (as the build tool)


Screenshots

Below are the screenshots from the `screenshots/` folder. If you want different filenames or order, tell me and I will update the README accordingly.

![Screenshot 1](screenshots/Screenshot%20%281%29.png)

![Screenshot 2](screenshots/Screenshot%20%282%29.png)

![Screenshot 3](screenshots/Screenshot%20%284%29.png)

![Screenshot 4](screenshots/Screenshot%20%285%29.png)

![Screenshot 5](screenshots/Screenshot%20%286%29.png)

![Screenshot 6](screenshots/Screenshot%20%287%29.png)

![Screenshot 7](screenshots/Screenshot%20%288%29.png)
