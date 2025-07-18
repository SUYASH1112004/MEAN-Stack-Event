->MEAN-Stack Event Registration System

->Overview:
This project is a full-stack web application built using the MEAN stack (MongoDB, Express.js, Angular, Node.js). It is designed to manage event registrations for college students. The platform allows students to register for regular events without login and requires authentication for registering in special events, ensuring secure access using JWT-based login.

->Features & Functionality:
->Core Features:
1] Event Registration (Public):

Any student can register for an event by providing their name and college ID.

Students can view a list of events they've registered for by entering their college ID.

2] Special Events (Protected Access):

Special events require login.

3] Authentication is handled using JWT tokens, ensuring that only authorized users can register for these events.

4] User Authentication:

-> Secure login and registration for users who want access to special events.

-> JWT is used to maintain session integrity without exposing sensitive data.

->Tech Stack Used:
 
->Frontend:

Angular: For building a dynamic, reactive user interface with form validations and routing.

->Backend:

Node.js with Express.js: For handling RESTful APIs, routing, authentication logic, and server-side operations.

->Database:

MongoDB: To store and manage data related to students, events, and special event registrations.

->Authentication:

JWT (JSON Web Tokens): For secure login and protected route access.

->Workflow:

->Frontend Interaction:

Users interact via Angular-based forms to register for events or log in for special events.

->API Communication:

Angular sends HTTP requests to Express.js endpoints for actions like event registration, login, and data retrieval.

->Backend Processing:

Express.js handles validation, authentication, and interaction with the MongoDB database.

-> Database Management:

MongoDB stores user credentials , event details, and registration records.

->Key Highlights:

Implemented modular architecture using Angular services and routing.

Used JWT tokens effectively for session handling and role-based access (public vs. authenticated users).

Designed a clean and responsive UI for a smooth registration experience.

Ensured scalable API design for easy addition of new features like event categories or admin dashboards in the future.


->Conclusion:

This project illustrates a complete end-to-end web application using the MEAN stack. It not only demonstrates full-stack development skills but also showcases the implementation of secure authentication and real-time interaction with a NoSQL database. It’s a practical solution for managing college-level events and can be scaled to more complex event management systems in the future.
