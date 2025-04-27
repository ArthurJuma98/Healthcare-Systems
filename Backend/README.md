# 🏥 Health Information System API

A simple RESTful API built with Node.js and Express for managing clients and health programs/services. Designed for use by healthcare professionals to register clients, enroll them in health programs, and expose profile data securely via API.

---

## 🚀 Features

- Create and manage health programs (TB, Malaria, HIV...)
- Register and search clients
- Enroll clients in one or more programs
- View a client’s full profile (including enrolled programs)
- API-first design for easy integration with other systems
- Clean codebase with MVC/MRC structure

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Environment**: dotenv
- **Logging**: Morgan
- **API Testing**: Postman
- **Security**: CORS enabled

---

## 📁 Project Structure

```
backend/
├── controllers/
├── models/
├── routes/
├── config/
├── app.js
├── server.js
├── .env
└── package.json
```

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Healthcare-Systems.git
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root:

   ```
   PORT=5000
   MONGO_URI=your mongo uri
   ```

4. **Run the server**
   ```bash
   npm run dev
   ```

---

## 🌐 API Endpoints

### 🏥 Programs

| Method | Endpoint           | Description                 |
|--------|--------------------|-----------------------------|
| POST   | `/api/programs`     | Create a new health program |
| GET    | `/api/programs`     | List all programs           |

### 👤 Clients

| Method | Endpoint                    | Description                          |
|--------|------------------------------|--------------------------------------|
| POST   | `/api/clients`               | Register a new client                |
| GET    | `/api/clients?search=Jake`   | Search clients by name               |
| GET    | `/api/clients/:id`           | View a client's full profile         |
| POST   | `/api/clients/:id/enroll`    | Enroll a client into health programs |

---

## 📸 Example Client JSON

```json
{
  "name": "Mark Johnson",
  "age": 28,
  "gender": "Male",
  "phone": "0712345078"
}
```

---

## 🔐 Security & Best Practices

- Input sanitization (recommended to add `express-validator`)
- CORS enabled for API access control
- Secrets and sensitive data stored in `.env` (not committed to GitHub)

---

## 📽️ Prototype Demonstration link

(video) - https://drive.google.com/file/d/16pUipmkmb0QqjcJDy92UG1C2A1Ie3ZWP/view?usp=drive_link

---

## 📽️ Powerpoint presentation link
(structure) - https://docs.google.com/presentation/d/1--PmGd9vGNfAuxZpziKGkrpWSFqs9qNr/edit?usp=drive_link&ouid=112183997985551338282&rtpof=true&sd=true

---

## 🤝 Contributions

Contributions, issues, and feature requests are welcome!

---

## 👨‍💻 Author

**Arthur Ochilo**  
[GitHub](https://github.com/ArthurJuma98) • [LinkedIn](https://linkedin.com/)

---
