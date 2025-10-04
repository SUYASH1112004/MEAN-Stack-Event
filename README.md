# MEAN Stack Event Management System

A full-stack **Event Management Application** built using the **MEAN stack (MongoDB, Express.js, Angular, Node.js)**.  
It allows users to **register, log in, browse events, and sign up for special events** with secure authentication and backend APIs.

---

## 🚀 Features

- 👥 **User Authentication**
  - Signup & Login with **JWT-based authentication**
  - Passwords secured using **bcrypt hashing**

- 📅 **Event Management**
  - View list of events
  - Register for events
  - Access special events (only for logged-in users)

- 🔐 **Secure Backend**
  - Node.js + Express REST APIs
  - MongoDB for persistent storage

- 🌐 **Frontend**
  - Angular application with clean UI
  - Form validation with Reactive Forms

---

## 🏗️ Project Structure

MEAN-Stack-Event/
│
├── client/ # Angular Frontend
│ ├── src/
│ │ ├── app/
│ │ │ ├── components/ # Angular components
│ │ │ ├── services/ # API integration services
│ │ │ ├── guards/ # Route guards for auth
│ │ │ └── models/ # Interfaces & data models
│ └── ...
│
├── server/ # Node.js + Express Backend
│ ├── routes/ # API routes
│ ├── models/ # Mongoose schemas
│ ├── middleware/ # Auth middleware (JWT)
│ └── server.js # Entry point
│
└── README.md

| Layer       | Technology |
|-------------|------------|
| Frontend    | Angular 18+ |
| Backend     | Node.js & Express |
| Database    | MongoDB (Compass) |
| Auth        | JSON Web Token (JWT), bcrypt |
