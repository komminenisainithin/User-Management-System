# FullStack User Management System

A FullStack CRUD Application for managing users.  
This project demonstrates integration of **React frontend** with a **Spring Boot backend** and **MySQL database**.

---

## 🚀 Tech Stack
- **Frontend:** React, React Router, Bootstrap, Axios
- **Backend:** Spring Boot, Spring Data JPA, Hibernate
- **Database:** MySQL
- **Build Tools:** Maven, Vite (for React)

---

## 📌 Features
- Add new users
- View all users in a table
- Edit user details
- Delete users
- RESTful APIs with Spring Boot
- CORS-enabled backend for React communication



## REGISTER USER

![Register User](images/Screenshot%202025-09-01%20at%206.49.05%20PM.png)

## View Page

![View Page](images/Screenshot%202025-09-01%20at%206.57.55%20PM.png)

## Home Page

![Home Page](images/Screenshot%202025-09-01%20at%206.56.35%20PM.png)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/fullstack-user-management.git
cd fullstack-user-management



Open in IntelliJ / VS Code / Eclipse

Configure MySQL in application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/userdb
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update

Run the Spring Boot Application:
mvn spring-boot:run

Navigate to frontend folder:
cd frontend
npm install
npm run dev

##Frontend will run on: http://localhost:5173








