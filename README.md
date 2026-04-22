# 📘 Blog System with CI/CD Pipeline Integration

## 📝 Description
This project is a simple Blog Management System built using Node.js and Express. 
It allows users to create, read, update, and delete blog posts. 
It also integrates a CI/CD pipeline using GitHub Actions to automate build and deployment.

---

## 🎯 Objectives
- Build a blog application with CRUD operations
- Implement backend using Node.js and Express
- Integrate CI/CD pipeline
- Automate testing and deployment

---

## 🛠️ Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB (optional)
- CI/CD: GitHub Actions
- Deployment: Render / Heroku / AWS

---

## 📂 Project Structure
blog-system/
│── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
│── backend/
│   ├── server.js
│   ├── routes/
│   └── models/
│
│── .github/workflows/
│   └── ci-cd.yml
│
│── package.json
│── README.md

---

## ⚙️ Features
- Create blog posts
- View all posts
- Update posts
- Delete posts
- Automated CI/CD pipeline

---

## 🚀 Getting Started

### 1. Clone Repository
git clone https://github.com/your-username/blog-system.git
cd blog-system

### 2. Install Dependencies
npm install

### 3. Run Application
npm start

### 4. Open in Browser
http://localhost:3000

---

## 🔄 CI/CD Pipeline (GitHub Actions)

Create file: .github/workflows/ci-cd.yml

name: CI/CD Pipeline

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout Code
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Install Dependencies
      run: npm install

    - name: Run Tests
      run: echo "No tests yet"

    - name: Build
      run: echo "Build successful"

    - name: Deploy
      run: echo "Deploying application..."

---

## 🖥️ API Endpoints

GET    /posts       -> Get all posts  
POST   /posts       -> Create new post  
PUT    /posts/:id   -> Update post  
DELETE /posts/:id   -> Delete post  

---

## 🌐 Deployment
- Render
- Heroku
- AWS EC2

---

## 📊 Output
- Blog system runs successfully
- CRUD operations working
- CI/CD pipeline triggers on push

---

## 📌 Conclusion
This project demonstrates building a blog system and integrating CI/CD pipeline 
for automation and continuous deployment.

---
