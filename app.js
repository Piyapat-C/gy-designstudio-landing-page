import express from "express";
import path from "path";
import router from "./routes/myRouter.js";
const __dirname = path.resolve();
const app = express();
const port = process.env.PORT;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Strat server at port ${port}`);
});
