// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import { userRouter } from "./routes/users.js";
// import { detailsRouter } from "./routes/details.js";
// import { chatRouter } from "./routes/chat.js";

// dotenv.config();

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.use("/auth", userRouter);
// app.use("/details", detailsRouter);
// app.use("/chat", chatRouter);

// const PORT = process.env.PORT || 5001;

// mongoose.connect(process.env.MONGODB_URL);

// app.listen(PORT, () => console.log(`Server running at PORT: ${PORT}`));
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./routes/users.js";
import { detailsRouter } from "./routes/details.js";
import { chatRouter } from "./routes/chat.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/details", detailsRouter);
app.use("/chat", chatRouter);

const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB database");
  app.listen(PORT, () => console.log(`Server running at PORT: ${PORT}`));
});
