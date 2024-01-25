import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import RecipeRoutes from "./routes/RecipeRoutes.js";

import db from "./config/db.js";

dotenv.config();

db();

const app = express();

const corsoptions= {
    origin:
        process.env.NODE_ENV === "production"
        ? process.env.CLIENT
        : "http://localhost:3000"
}


app.use(cors(corsoptions));
app.use(express.json()); // handle body object from requests

app.use("/users", userRoutes);
app.use("/recipes", RecipeRoutes);

app.use("/images", express.static("./server/uploads"));

app.listen(process.env.PORTNUM, () => console.log("Server is up and running at port 5000"));