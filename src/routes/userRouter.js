import express from "express";
import path from "path";
// import { ensureAuthenticated } from "../middleware/authMiddleware.js"; // Make sure to import your middleware

const router = express.Router();

// const __dirname = path.dirname(new URL(import.meta.url).pathname);

const __dirname = path.join(process.cwd(), "src", "views");

// Define routes for login and register

router.get("/login", (req, res) => {
  res.render(path.join(__dirname, "../views/login.ejs"));
});

router.get("/register", (req, res) => {
  res.render(path.join(__dirname, "../views/register.ejs"));
});
// Example test route
// router.get('/test', ensureAuthenticated, (req, res) => {
//   res.status(200).json( {message:'You are authenticated!'});
// });

export default router;
