# Life Insurance Recommendation MVP

A modern full-stack web application that delivers personalized life insurance recommendations based on user input — built using **Next.js**, **Node.js**, **Prisma**, and **PostgreSQL**, and fully containerized with **Docker** for easy local setup and deployment.

---

## Key Features

- Collects age, income, dependents, and risk preference
- Recommends an insurance plan dynamically
- Clean, responsive UI built with Next.js
- Robust API using Node.js and Prisma ORM
- Integrated with PostgreSQL database
- Fully Dockerized — no manual installations required

---

##  Technology Stack

| Layer       | Technology                |
|-------------|----------------------------|
| Frontend    | Next.js (React, Node 18)   |
| Backend     | Node.js + Prisma ORM       |
| Database    | PostgreSQL                 |
| DevOps      | Docker & Docker Compose    |

---

## Prerequisites

Ensure the following are installed on your machine:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

> You **do not** need to install Node.js, npm, or PostgreSQL manually. Everything runs inside Docker containers.

---


## Clone the Repository

git clone <your-repo-url>
cd <project-directory>

Create the following .env files in your project:

backend/.env

PORT=4000
DATABASE_URL=postgresql://postgres:postgres@db:5432/life_insurance

frontend/.env
NEXT_PUBLIC_API_URL=http://localhost:4000

Run this command from the project root
docker-compose up --build

The frontend will be available at: http://localhost:3000