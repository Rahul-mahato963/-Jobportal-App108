import express from "express";
import { login, logout, register, updateProfile } from "../controllers/usercontroller.js";
import isAuthenticated from "../auth/isAuthenticated.js";
import {singleUpload}  from "../middleware/multer.js";

const router = express.Router();

router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/logout").delete(logout);
router.route("/profile/update").post( isAuthenticated ,singleUpload,updateProfile);

export default router;
