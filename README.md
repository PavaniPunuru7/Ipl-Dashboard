# 🏏 IPL Dashboard

A full-stack web application that displays IPL team and match information. The backend is built using **Node.js**, **Express**, and **MongoDB**, while the frontend is built using **React.js**.

---

## 🚀 Live Demo

- **Frontend** (Website): [https://pavani-ipldashboard-bf020.netlify.app](https://pavani-ipldashboard-bf020.netlify.app)
- **Backend API**: [https://ipl-dashboard-1-22ut.onrender.com/api/teams](https://ipl-dashboard-1-22ut.onrender.com/api/teams)

---

## 📁 Project Structure

ipl-dashboard/backend/ # Express.js + MongoDB (Mongoose)    
│ ├── models/ # Mongoose schemas (Team, TeamMatch)  
│ ├── routes/ # API route handlers  
│ ├── .env # Backend environment variables (MongoDB URI)  
│ ├── app.js # App entry (express config)   
│ ├── server.js # Backend server    
│ └── package.json   
│  
├── frontend/ # React frontend (previously src/)  
│ ├── src/ # React components and pages  
│ ├── .env # Frontend environment variable for API URL  
│ ├── public/  
│ ├── package.json  
│ └── build/ # Production build (ignored by Git)  
│  
├── .gitignore # Git ignore rules  
├── README.md # Project documentation  
└── LICENSE (if any)  


---  

## 🛠 Technologies Used  

### Backend  

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Render for deployment

### Frontend

- React.js
- React Router
- Loader Spinner (Oval)
- Netlify for deployment

---

## 🌐 Environment Variables

### Backend `.env` (in `/backend`)

MONGODB_URI=your_mongodb_connection_string
PORT=4000

REACT_APP_BACKEND_URL=https://ipl-dashboard-1-22ut.onrender.com

📦 Deployment
Backend
Hosted on Render

Automatically connects to MongoDB Atlas

Frontend
Built using npm run build

Hosted on Netlify

API calls use REACT_APP_BACKEND_URL for dynamic public URL

📚 Learnings
Through this project, I gained valuable hands-on experience in building and deploying a full-stack web application. I learned how to create a responsive frontend using React.js, manage dynamic routing with React Router, and fetch data efficiently using asynchronous functions. On the backend, I developed RESTful APIs using Node.js and Express, and connected them to a MongoDB database hosted on Atlas using Mongoose. I also understood the importance of environment variables and how to manage them securely in .env files while avoiding exposure in version control using .gitignore. Deploying the backend on Render and the frontend on Netlify taught me how to connect multiple platforms, handle build errors, whitelist IPs, and configure environment variables for production. This project not only helped me improve my coding and debugging skills but also gave me the confidence to take on more advanced full-stack projects in the future.

🙋‍♀️ Author
Pavani Punuru
📧 punurupavani7@gmail.com
