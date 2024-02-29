import express from "express";
import { aboutController, aboutIdController } from "../controllers/AboutController/AboutController.js";
import { languagesListController } from "../controllers/LanguageListController/LanguagesListController.js";
import { profileTitleController } from "../controllers/ProfileTitleController/ProfileTitleController.js";
import { navbarItemsController } from "../controllers/NavbarItemsController/NavbarItemsController.js";
import { profileImageController } from "../controllers/ProfileImageController/ProfileImageController.js";
import { homeController } from "../controllers/HomeController/HomeController.js";
import vocabController from "../controllers/VocabController/VocabController.js";
import { uploadController } from "../controllers/UploadControlller/UploadController.js";

/**
 * A router serves as a container for various routes used
 *
 * @type { Router }
 */
const router = express.Router();

router.get("/", homeController);
router.get("/about", aboutController);
router.get("/about/:id", aboutIdController);
router.get("/navbar/items", navbarItemsController);
router.get("/profile/titles", profileTitleController);
router.get("/profile/image/python-api-gateway", profileImageController);
router.get("/foreign-lang-list", languagesListController);
router.get("/project/memory-language", vocabController.get);









// import multer from 'multer';
// import path from "path";
//
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/images');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
// });
//
// const upload = multer({
//     storage: storage
// })
//
//
// router.post("/upload", upload.single('image'), uploadController);

export default router;