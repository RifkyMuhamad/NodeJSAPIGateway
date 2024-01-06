import express from "express";
import { home } from "../controllers/home.js";
import { about, aboutId } from "../controllers/about.js";
import { languagesList } from "../controllers/languages.js";
import { profileTitle } from "../controllers/ProfileTitle.js";
import { navbarItems } from "../controllers/NavbarItems.js";
import { ProfileImage } from "../controllers/profileImg/ProfileImg.js";

const router = express.Router();

router.get("/", home);
router.get("/about", about);
router.get("/about/:id", aboutId);
router.get("/navbar/items", navbarItems);
router.get("/profile/titles", profileTitle);
router.get("/profile/image/python-api-gateway", ProfileImage);
router.get("/foreign-lang-list", languagesList);

export default router;