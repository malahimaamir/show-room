
# 🚗 Show‑Room

A dynamic **vehicle exploration and rental** platform where users can browse, compare, favorite, and **book cars, bikes, and electric rides**. Includes a secure user experience and powerful admin management.

---

## 🔍 Features

- Browse vehicles by category: Car, Bike, Electric  
- View detailed specs (engine, transmission, seats, fuel/range, etc.)  
- Availability calendar and rental booking  
- Add favourites for later decision-making  
- User dashboard: manage bookings, favorites, and profile  
- Admin dashboard: add/edit listings, review bookings, manage users  
- Secure authentication with JWT  
- Responsive design for mobile and desktop  

---

## 🛠 Tech Stack

- **Frontend**: React.js + Tailwind CSS  
- **Backend**: Node.js + Express  
- **Database**: MongoDB (e.g., Atlas or local)  
- **Auth**: JWT-based authentication  
- **Image Upload**: Cloudinary or static hosting  
- **Deployment**: Vercel (frontend), [render.com](https://render.com) / Railway / Heroku (backend)

---

## 📁 Repository Structure

```

├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # UI components (cards, forms, modals)
│   │   ├── pages/        # Main pages (Home, Vehicles, Details, Dashboard)
│   │   └── utils/        # API calls, constants, auth helpers
│   └── public/           # Static assets (images, icons)
├── server/               # Node.js + Express backend
│   ├── models/           # Mongoose schemas (Vehicle, Booking, User)
│   ├── routes/           # API endpoints
│   ├── middleware/       # Auth, error handling
│   └── config/           # DB & JWT setups
└── README.md             # Project overview (this file)


## 🚀 Getting Started

### 1. Clone the repository

git clone https://github.com/malahimaamir/show-room.git
cd show-room


### 2. Setup Backend

cd server
npm install

* Create a `.env` file:

```env
PORT=5000  
MONGO_URI=<your-mongo-url>  
JWT_SECRET=<your-secret-key>  
CLOUDINARY_URL=<optional-if-using-image-upload>


* Start the backend:

```bash
npm run dev
# or
npm start
```

### 3. Setup Frontend

```bash
cd ../client
npm install
```

* Create a `.env`:

```env
REACT_APP_API_URL=http://localhost:5000


* Start the React app:


npm start


Visit `http://localhost:3000` in your browser.



## 🔐 Authentication Flow

* JWT tokens are issued during login/signup via email/password.
* For protected routes, include token in `Authorization: Bearer <token>` header.



## 📋 API Endpoints Overview

| Endpoint                  | Method | Description                    |
| ------------------------- | ------ | ------------------------------ |
| `/api/auth/register`      | POST   | Register new users             |
| `/api/auth/login`         | POST   | Login and receive JWT          |
| `/api/vehicles`           | GET    | List vehicles                  |
| `/api/vehicles/:id`       | GET    | Fetch single vehicle details   |
| `/api/bookings`           | POST   | Create a booking               |
| `/api/users/me`           | GET    | Fetch authenticated user info  |
| `/api/admin/vehicles`     | POST   | (Admin) Add new vehicle        |
| `/api/admin/vehicles/:id` | PUT    | (Admin) Edit vehicle details   |
| `/api/admin/vehicles/:id` | DELETE | (Admin) Remove vehicle listing |



## ⚙️ Deployment

1. **Push** your project to GitHub.
2. **Connect** frontend & backend to Vercel (frontend) and preferred host (backend).
3. **Set environment variables** in each platform’s settings.
4. **Deploy** using the inline dashboard or CLI:


cd client
vercel  # follow prompts
vercel --prod


Repeat for backend.



## ✨ Future Ideas

* In-app chat between user and admin
* Booking cancellation/refund system
* Reviews and rating for vehicles
* Multi-city pickup/drop-off
* Payment integration (Stripe / PayPal)
* Admin reports & analytics UI

---

## 🧑‍💻 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b my-feature`
3. Commit changes: `git commit -m "Add new feature"`
4. Push: `git push origin my-feature`
5. Open a Pull Request



## 📞 Contact

**Malahima Amir** – [Portfolio](https://malahima-amir.vercel.app)
Feel free to reach out for questions, collaboration, or feedback!



*Happy coding — drive safe!* 🚗

