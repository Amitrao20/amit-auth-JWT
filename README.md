# JWT Authentication System (Node.js)

A secure authentication system built with Node.js, Express, MongoDB, JWT, OTP verification, session management, and email authentication.

## Features

* User Registration & Login
* JWT Authentication (Access Token & Refresh Token)
* Secure Password Hashing using Crypto
* OTP Verification via Email
* Email Sending with Nodemailer
* Session Management
* Protected Authentication Flow
* Environment Variable Configuration using Dotenv
* Request Logging with Morgan
* Cookie Handling using Cookie Parser

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* Nodemailer
* Crypto
* Dotenv
* Morgan
* Cookie Parser

## Dependencies

```json
{
  "cookie-parser": "^1.4.7",
  "dotenv": "^17.4.2",
  "express": "^5.2.1",
  "jsonwebtoken": "^9.0.3",
  "mongoose": "^9.6.3",
  "morgan": "^1.10.1",
  "nodemailer": "^8.0.9",
  "nodemon": "^3.1.14"
}
```

## Authentication Flow

1. User registers with email and password.
2. Password is securely hashed.
3. OTP is generated and sent to the user's email.
4. User verifies OTP.
5. After verification, user can log in.
6. Access Token and Refresh Token are generated using JWT.
7. Session is created and maintained.
8. Protected routes are accessed using authentication tokens.

## Project Setup

### Clone Repository

```bash
git clone <your-repository-url>
cd <project-folder>
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

EMAIL_USER=your_email
EMAIL_PASS=your_email_password_or_app_password
```

### Run Development Server

```bash
npm run dev
```

Server runs on:

```txt
http://localhost:3000
```

## API Features

* Register User
* Login User
* OTP Verification
* Token-Based Authentication
* Refresh Token Handling
* Session Creation & Validation

## Security Features

* Password Hashing
* JWT Access Token
* JWT Refresh Token
* OTP Email Verification
* Environment Variable Protection
* Session Management

## Future Improvements

* Role-Based Authentication
* Password Reset with OTP
* Rate Limiting
* Account Lockout Protection
* Redis Session Store
* API Documentation with Swagger

## Author

Amit Kumar
