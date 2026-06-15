# 🚀 Docker Auto Deploy - CI/CD Project

## 📌 Overview

This project is a simple but complete CI/CD pipeline using GitLab, Docker, and Docker Compose.

When code is pushed, the pipeline automatically:

- Builds a Docker image
- Pushes it to GitLab Container Registry
- Deploys it using Docker Compose

---

## 🧱 Architecture

```
Developer
   ↓
Git Push
   ↓
GitLab CI Pipeline
   ↓
Docker Build
   ↓
GitLab Container Registry
   ↓
Docker Compose
   ↓
Running Application
```

---

## ⚙️ Technologies

- Node.js
- Docker
- Docker Compose
- GitLab CI/CD
- GitLab Runner
- GitLab Container Registry

---

## 🔄 Pipeline Stages

### 1. Validate
Install dependencies and prepare app

### 2. Build
Create Docker image

### 3. Push
Push image to GitLab registry

### 4. Deploy
Pull image and run using Docker Compose

---

## 📦 Application

The application shows:

- Application name
- Version (commit SHA)
- Container hostname
- Timestamp

---

## 🐳 Run Locally

```bash
docker-compose up -d
```

---

## 🚀 CI/CD Flow

Every push to main branch triggers:

- Build
- Push
- Deploy

Fully automatic deployment.

---

## 👨‍💻 Author

Ali Saghafi 
