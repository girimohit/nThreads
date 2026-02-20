<div style="color:#877EFF" align="center">
  <h1>nThreads</h1>
</div>

## 📖 Overview

**nThreads** is a fully functional social media application inspired by Threads. Users can seamlessly create threads, reply with nested comments, explore communities, and manage their profiles in a highly responsive and modern interface. Built with the **Next.js App Router**, this project demonstrates scalable UI patterns, robust database relationships, and secure authentication.

---

## ✨ Key Features

- **🔐 Secure Authentication** — Email and social logins.
- **📝 Thread Management** — Create, reply, and delete threads seamlessly.
- **💬 Nested Comments** — Engage in conversations with deep, Reddit-style nested replies.
- **👥 Communities** — Join, manage, and engage within specific groups with dedicated member roles.
- **👤 User Profiles** — Customizable user pages displaying individual activity and threads.
- **🔍 Search & Explore** — Powerful search functionality with pagination for users and communities.
- **🖼️ Media Uploads** — Upload avatars and thread images using [UploadThing](https://uploadthing.com/).
- **⚡ Server Actions** — Optimized data mutation and fetching using Next.js Server Actions & API routes.

---

## 🛠️ Tech Stack

| Category           | Technology                                           |
| :----------------- | :--------------------------------------------------- |
| **Frontend**       | React, Next.js (App Router), Tailwind CSS, Shadcn UI |
| **Backend**        | Next.js Server Actions, API Routes                   |
| **Database**       | MongoDB, Mongoose                                    |
| **Authentication** | Clerk                                                |
| **File Storage**   | UploadThing                                          |
| **Type Safety**    | TypeScript, Zod                                      |

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### 1. Clone the repository

```bash
git clone https://github.com/girimohit/nThreads.git
cd nThreads
```

### 2. Install dependencies

```bash
npm install
```

> **Troubleshooting:**
> If installation fails due to dependency conflicts:

```bash
npm install next@15.2.3 react@18.2.0 react-dom@18.2.0 tailwindcss@^3.4.0
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory and add the following keys. You will need to obtain these from their respective platforms:

```env
# MongoDB Database
MONGODB_URL=

# Clerk Authentication
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
NEXT_CLERK_WEBHOOK_SECRET=

# UploadThing
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

> **Note:** Get your Keys from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), [Clerk Dashboard](https://dashboard.clerk.com/), and [UploadThing Dashboard](https://uploadthing.com/).

### 4. Run the Development Server

```bash
npm run dev
```

Navigate to `http://localhost:3000` in your browser to explore the app.

---

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
npm run start
```
