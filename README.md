# Wanderlust 🌍

Wanderlust is a full-stack travel and property listing web application where users can explore places, create their own listings, and share reviews.

I built this project to get hands-on experience with Node.js, Express, MongoDB, EJS, authentication, authorization, MVC architecture, and server-side rendering.

## Features

### 🏡 Listings
- View available travel/property listings
- Open detailed listing pages
- Create new listings after logging in
- Edit and delete your own listings
- Store title, description, price, location, country, and image

### 👤 Authentication
- User signup and login
- Logout functionality
- Passport.js local authentication
- Session-based authentication
- Protected routes
- Owner-based authorization

### ⭐ Reviews
- Add reviews to listings
- Ratings from 1 to 5
- Review comments
- Reviews linked to users and listings
- Reviews removed when their listing is deleted

### 🛡️ Validation & Error Handling
- Joi validation
- Custom error handling
- Authentication and authorization middleware
- Flash messages
- Custom 404/error page

## Tech Stack

**Backend:** Node.js, Express.js, MongoDB, Mongoose

**Frontend:** EJS, EJS-Mate, HTML, CSS, JavaScript

**Authentication:** Passport.js, Passport Local Strategy, Passport Local Mongoose, Express Session, Connect Flash

**Validation:** Joi

## Project Structure

```text
Wanderlust/
├── controllers/
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── public/
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── utils/
├── views/
├── app.js
├── middleware.js
├── schema.js
├── package.json
└── README.md
```

## How It Works

The application follows an MVC-style structure:

```text
User
  ↓
Routes
  ↓
Middleware
  ↓
Controllers
  ↓
Models
  ↓
MongoDB
  ↓
EJS Views
  ↓
Browser
```

For example, creating a listing follows this flow:

```text
Create Listing
      ↓
Authentication Check
      ↓
Joi Validation
      ↓
Listing Controller
      ↓
Mongoose Model
      ↓
MongoDB
      ↓
Listing Page
```

## Database Models

### User
Stores user email and authentication data through `passport-local-mongoose`.

### Listing
Contains:
- Title
- Description
- Image
- Price
- Location
- Country
- Owner
- Reviews

### Review
Contains:
- Rating
- Comment
- Author
- Creation date

Listings and reviews use MongoDB ObjectId references.

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### 1. Clone the repository

```bash
git clone https://github.com/hariomsingh045/Wanderlust.git
cd Wanderlust
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start MongoDB

By default, the application connects to:

```text
mongodb://127.0.0.1:27017/wanderlust
```

You can also use your own MongoDB connection string through `MONGO_URL`.

### 4. Start the application

```bash
npm start
```

Open:

```text
http://localhost:8080
```

## Environment Variables

Example:

```env
MONGO_URL=mongodb://127.0.0.1:27017/wanderlust
SESSION_SECRET=your_secret_key
PORT=8080
```

Keep real credentials and secret keys out of GitHub.

## Main Routes

### Listings

```text
GET     /listings
GET     /listings/new
POST    /listings
GET     /listings/:id
GET     /listings/:id/edit
PUT     /listings/:id
DELETE  /listings/:id
```

### Authentication

```text
GET     /signup
POST    /signup
GET     /login
POST    /login
GET     /logout
```

### Reviews

```text
/listings/:id/reviews
```

## Security & Access Control

The project uses authentication and authorization middleware.

Users must be logged in to create listings, and only the owner of a listing can edit or delete it.

Authentication is handled with Passport Local and `passport-local-mongoose`. Sessions are managed using `express-session`, with HTTP-only cookies configured in the application.

## Error Handling

The application includes:
- Custom `ExpressError`
- Async route handling with `wrapAsync`
- Custom 404 handling
- Joi validation
- Flash messages
- Centralized Express error middleware

## What I Learned

Building Wanderlust helped me practice:

- Express application development
- MongoDB and Mongoose
- CRUD operations
- MVC architecture
- Authentication with Passport.js
- Authorization middleware
- Session management
- MongoDB references
- EJS server-side rendering
- Joi validation
- Error handling
- Git and GitHub workflow

## Future Improvements

- Cloudinary image uploads
- Interactive maps
- Better search and filtering
- Location-based search
- Booking functionality
- Wishlist/favorites
- Improved responsive UI
- Stronger production security
- Production MongoDB deployment

## Author

**Hariom Singh**

Computer Science Undergraduate | Cybersecurity & Full-Stack Development Enthusiast

GitHub: https://github.com/hariomsingh045

LinkedIn: https://www.linkedin.com/in/hariom-singh-75244b328/

## License

This project is currently intended for learning and personal development.
