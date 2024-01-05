import express from "express";
import { home } from "../controllers/home.js";
import { about, aboutId } from "../controllers/about.js";
import { languagesList } from "../controllers/languages.js";
import { profileTitle } from "../controllers/ProfileTitle.js";

const router = express.Router();

router.get("/", home);
router.get("/about", about);
router.get("/about/:id", aboutId);
router.get("/profile/titles", profileTitle);
router.get("/foreign-lang-list", languagesList);

export default router;