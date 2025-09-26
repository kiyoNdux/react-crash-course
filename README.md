# React Jobs – Crash Course Project

This project was built by following [Brad Traversy’s React Crash Course 2024](https://www.youtube.com/watch?v=LDB4uaJ87e0).
It’s a simple **jobs listing app** that demonstrates the fundamentals of React by fetching and managing job data from a mock backend.

---

## Features

* Built with **React** + **Vite** for a fast development workflow
* Uses **JSON Server** as a mock REST API backend
* Job listings with title, type, salary, location, and description
* Add and delete job functionality
* Component-based UI with props and state management
* Demonstrates React basics like hooks (`useState`, `useEffect`), props, conditional rendering, and event handling

---

## Tech Stack

* **React**
* **Vite** (development/build tool)
* **JSON Server** (mock backend)
* **TailwindCSS** (if you included it, otherwise just remove this line)

---

## Installation & Setup

Clone the repo:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

Install dependencies:

```bash
npm install
```

Start the JSON server (mock API):

```bash
npm run server
```

Run the React dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Project Structure

```
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components (Jobs, Add Job, etc.)
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── db.json             # Mock jobs data (used by JSON Server)
└── package.json
```

---

## What I Learned

* Setting up a React app with **Vite**
* Understanding **components, props, and state**
* Fetching and displaying data from an API
* Using **React hooks** (`useState`, `useEffect`)
* Handling forms and user input
* Managing component communication via props
* Creating a simple full-stack flow with a React frontend + mock backend

---

## Acknowledgements

* Thanks to [Traversy Media](https://www.youtube.com/c/TraversyMedia) for the React Crash Course 2024 tutorial.
