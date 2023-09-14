import express from "express";
import postsRouter from "./routes/posts.router.js";

const app = express();
const PORT = 3306;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/posts", postsRouter);

app.listen(PORT, () => {
  console.log(PORT, `서버 열림`);
});