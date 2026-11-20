# React Routing & Firebase Authentication

A simple React app with 5 pages, a Navbar, Firebase Email/Password login, and protected routes.

| Page      | Route        | Access    |
|-----------|--------------|-----------|
| Home      | `/`          | Public    |
| Login     | `/login`     | Public    |
| Register  | `/register`  | Public    |
| Dashboard | `/dashboard` | Protected |
| Profile   | `/profile`   | Protected |

**Tools used:** React 18, Vite, React Router v6, Firebase Authentication v11.

## How to run it

1. Install [Node.js](https://nodejs.org) (version 18 or newer).
2. Download this project and open a terminal inside the folder.
3. Install the packages:
   ```bash
   npm install
   ```
4. Start the app:
   ```bash
   npm run dev
   ```
5. Open **http://localhost:5173** in your browser.

## One-time Firebase setup (required)

Register and Login will not work until Email/Password sign-in is turned on:

1. Go to https://console.firebase.google.com and open the project **basic-auth-d8a32**.
2. In the left menu click **Build → Authentication**, then click **Get started**.
3. Open the **Sign-in method** tab, click **Email/Password**, switch **Enable** on, and click **Save**.

If you skip this, the app shows: *"Email/Password sign-in is not enabled in the Firebase Console."*

## Project structure

```
src/
├── main.jsx                  Starting point: turns on routing and auth
├── App.jsx                   All routes (which URL shows which page)
├── firebase.js               Connects to Firebase (initializeApp, getAuth)
├── index.css                 Simple styling
├── context/AuthContext.jsx   Remembers who is logged in (onAuthStateChanged)
├── components/
│   ├── Navbar.jsx            Menu links; shows Login or Logout
│   └── ProtectedRoute.jsx    Sends logged-out users to /login
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx             signInWithEmailAndPassword
│   ├── Register.jsx          createUserWithEmailAndPassword
│   ├── Dashboard.jsx         "Welcome to Dashboard" + email
│   └── Profile.jsx           Email + Logout button (signOut)
└── utils/errorMessages.js    Turns Firebase error codes into simple messages
```

For a full beginner-friendly explanation of how everything works, read **[EXPLANATION.md](EXPLANATION.md)**.

## Screenshots

See the [`screenshots/`](screenshots) folder.
