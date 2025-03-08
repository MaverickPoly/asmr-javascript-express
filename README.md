# ASMR JavaScript Express

A collection of **20 simple Express.js projects** using **Mongoose** and **MongoDB**. These projects cover various concepts, from basic API development to authentication, file uploads, and database interactions.

## 🚀 Features
- Basic Express.js API development
- Middleware usage
- File handling (static files, image uploads)
- CRUD operations with Mongoose and MongoDB
- Authentication (cookies, basic auth)
- Query parameters and URL redirection
- Error handling and logging

## 📂 Project List

1. **Basic Hello World API** - Returns `"Hello World"` on visiting `/`.
2. **Static File Server** - Serves static HTML, CSS, and JavaScript files.
3. **Simple Contact Form** - Accepts name, email, and message; logs it.
4. **Simple JSON API** - Returns a JSON list of books/products.
5. **Query String Parameters** - Accepts query parameters (e.g., `/greet?name=John`).
6. **Simple Task API** - CRUD operations on an in-memory task list.
7. **Redirect Service** - Short URL redirection.
8. **Simple Calculator API** - Basic arithmetic operations using query parameters.
9. **Date and Time API** - Returns the current date and time.
10. **Basic Authentication API** - Simple authentication with hardcoded credentials.
11. **Error Handling Example** - Demonstrates different error handling techniques.
12. **JSON Placeholder API** - Returns mock JSON data (users, posts, etc.).
13. **Image Upload API** - Allows users to upload images and returns image URLs.
14. **Basic Form Handling** - Submits user data via an HTML form.
15. **Simple Feedback API** - Collects user feedback and stores it temporarily.
16. **Simple Voting System** - Tracks votes for different options.
17. **Basic Authentication with Cookies** - Uses cookies to track login status.
18. **Random Password Generator** - Generates passwords based on criteria.
19. **IP Address Info API** - Retrieves visitor IP information using an external API.
20. **Simple Movie API** - CRUD operations on movies using Mongoose and MongoDB.

## Not Implemented Projects yet.
- Voting System (16)
- Simple Authentication with Cookies (17)

These Simple Projects Are yet to be *implemented in the future*.

## 🛠 Technologies Used
- **Node.js** - Backend runtime
- **Express.js** - Web framework
- **Mongoose** - ODM for MongoDB
- **MongoDB** - NoSQL database
- **Body-parser** - Middleware for request parsing
- **Multer** - File uploads
- **EJS** - Templating Engine
- **Cookie-parser** - Cookie handling
- **dotenv** - Environment variable management
- **Nodemon** - Hot Reloading.

## ⚡ Prerequisites
Make sure you have the following installed:
- **Node.js** (v16+)
- **MongoDB** (local or cloud database)
- **NPM** (or Yarn)

## 📥 Installation
```sh
# Clone the repository
git clone https://github.com/MaverickPoly/asmr-javascript-express.git

# Navigate to the project directory
cd asmr-javascript-express

# Navigate to individual sub-project
cd 20.MovieAPI

# Install dependencies
npm install

# Create a .env file and add necessary environment variables

# Start the server
npm run dev
```

## 🚀 Usage
- Run `npm run dev` or `npm run start` to start the Express server depending on the project.
- Use **Postman** or **Thunder Client** to test the APIs.
- Connect to a **MongoDB** instance before running Mongoose-based projects.

## 🤝 Contributing
Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch.
3. Commit your changes and push the branch.
4. Open a pull request.
