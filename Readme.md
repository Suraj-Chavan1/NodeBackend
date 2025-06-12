# chai-backend

A comprehensive backend project built for educational purposes as part of the "chai aur code" YouTube series. This project demonstrates the construction of a full-featured video hosting platform (like YouTube) using modern JavaScript backend technologies.

## Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [Resources](#resources)
- [License](#license)

---

## About the Project

This backend project is designed to teach backend development concepts such as authentication, API design, and integration with databases and cloud services. It implements a video hosting platform with features typically found on platforms like YouTube: user authentication, video upload, comments, likes, playlists, and more.

The codebase follows best practices using JWT for authentication, bcrypt for password hashing, and robust route handling with Express.js.

> **Video Series:**  
> [chai aur code - Backend Series Playlist](https://www.youtube.com/watch?v=EH3vGeqeIAo&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW)  
> **Project Model:**  
> [System Design Model (Eraser)](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj?origin=share)

---

## Tech Stack

- **Node.js** (runtime)
- **Express.js** (web framework)
- **MongoDB** (database)
- **Mongoose** (ODM)
- **JWT** (authentication)
- **Bcrypt** (password hashing)
- **Cloudinary** (media storage)
- **CORS, Cookie-Parser, Dotenv** (utilities and middleware)

---

## Features

- **User Authentication:** Registration, login, logout, password change using JWT and refresh tokens.
- **Video Management:** Upload, view, and manage videos (Cloudinary for storage).
- **User Channels:** Profiles, watch history, channel statistics.
- **Subscriptions:** Subscribe/unsubscribe to channels.
- **Comments & Replies:** Add, update, and delete comments on videos.
- **Likes/Dislikes:** Like and dislike videos.
- **Playlists:** Create and manage playlists.
- **Dashboard:** Channel analytics and statistics.
- **Robust API structure:** Modular controllers and routes.

---

## Project Structure

```
src/
  ├── controllers/    # API controllers (user, video, comment, playlist, etc.)
  ├── models/         # Mongoose models (User, Video, Playlist, etc.)
  ├── routes/         # Express routers for different resources
  ├── middlewares/    # Auth and error handling
  ├── utils/          # Utility functions (error handling, async, etc.)
  ├── db/             # MongoDB connection logic
  ├── app.js          # Express app setup
  └── index.js        # Entry point
```

---

## Getting Started

### Prerequisites

- Node.js >= 14.x
- MongoDB instance (local or Atlas)
- Cloudinary account (for media uploads)

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/hiteshchoudhary/chai-backend.git
    cd chai-backend
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Setup environment variables**

    Create a `.env` file in the root directory and configure the following variables:

    ```
    PORT=8000
    MONGODB_URI=your_mongodb_connection_string
    DB_NAME=video_platform
    ACCESS_TOKEN_SECRET=your_access_token_secret
    REFRESH_TOKEN_SECRET=your_refresh_token_secret
    ACCESS_TOKEN_EXPIRY=1h
    REFRESH_TOKEN_EXPIRY=7d
    CORS_ORIGIN=http://localhost:3000
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    ```

4. **Run the server**
    ```bash
    npm run dev
    # or
    node src/index.js
    ```

The backend server should now be running on `http://localhost:8000`.

---

## API Endpoints

All API routes are prefixed with `/api/v1/`.

- `/users` - User registration, login, profile, password management
- `/videos` - Video upload, retrieval, management
- `/comments` - Comment on videos
- `/likes` - Like/dislike videos
- `/subscriptions` - Subscribe/unsubscribe to channels
- `/playlist` - Manage user playlists
- `/dashboard` - Channel statistics
- `/healthcheck` - Health status of server

> For detailed request/response formats, refer to the controller code or use an API tool like Postman.

---

## Contributing

You're welcome to contribute! This repo follows an assignment-based approach:

- Assignments are available in the `controller` folder as TODOs.
- Complete all the assignments before submitting a PR.
- Reach out on [Discord](https://hitesh.ai/discord) or [Twitter](https://twitter.com/@hiteshdotcom) after finishing.
- Once reviewed, your repo link may be added to the README.

---

## Resources

- [YouTube Playlist](https://www.youtube.com/watch?v=EH3vGeqeIAo&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW)
- [Discord Community](https://hitesh.ai/discord)
- [System Model (Eraser)](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj?origin=share)

---

## License

[MIT](LICENSE)

---

> **Happy Learning!**