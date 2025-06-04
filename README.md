# Course Selling Application

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application for buying and selling online courses. It features user authentication, course browsing, cart and checkout, and an admin dashboard for managing courses and users.

## Features

- Browse and search courses easily  
- User signup and login with JWT authentication  
- Buy courses and complete purchases  
- Admin panel for managing courses and users  
- Responsive UI for both desktop and mobile devices  
- Secure RESTful API backend with Express.js  

## Technologies Used

- MongoDB for database  
- Express.js for backend server and API  
- React.js using VITE for frontend UI  
- Node.js runtime environment  
- JWT for user authentication  
- Nodemailer for OTP verification
- (Optional) Bootstrap or Tailwind CSS for styling  

## Getting Started

### Prerequisites

- Install [Node.js](https://nodejs.org/)  
- Set up MongoDB locally or create an account on MongoDB Atlas  

### Installation and Setup

1. Clone the repository and navigate into it:
   git clone https://github.com/AniruddhaM18/Course-App.git
   cd Course-App
  
2. Install dependencies separately for backend and frontend:
   cd backend
   npm install
   cd ../frontend
   npm install
3. Create .env files in both backend and frontend folders with your environment variables.
   Backend .env example:
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key      
 
4. Start the backend server:
   cd backend
   npm start

   Start the frontend development server:
   cd ../frontend
   npm run dev
5. Open http://localhost:3000 in your browser to use the app.
6. Folder structure
     Course-App/
    ├── backend/          # Backend Express server and APIs
    ├── frontend/         # React frontend application
    ├── README.md         # Project documentation
    └── .gitignore        # Files ignored by Git

   

