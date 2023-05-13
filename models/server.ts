import express, { Application } from "express";
import userRoutes from "../routes/users";
import cors from "cors";

import db from "../db/connection";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    users: "/api/users",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    // Initial methods
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Body reader
    this.app.use(express.json());

    // Public folder
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.users, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default Server;
