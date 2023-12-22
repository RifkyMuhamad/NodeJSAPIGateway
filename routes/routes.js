import express from "express";
import { home } from "../controllers/home.js";
import { about, aboutId } from "../controllers/about.js";
import { languagesList } from "../controllers/languages.js";

const router = express.Router();

// for route https://dyonestrankers-nodejs-api.vercel.app/
router.get("/", home);

// for route https://dyonestrankers-nodejs-api.vercel.app/about
router.get("/about", about);

// for route https://dyonestrankers-nodejs-api.vercel.app/about/:id
router.get("/about/:id", aboutId);

router.get("/foreign-lang-list", languagesList);

export default router;