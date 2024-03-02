import express from "express";
// eslint-disable-next-line max-len
import vocabController from "../controllers/VocabController/VocabController.js";
import homeController from "../controllers/HomeController/HomeController.js";
// eslint-disable-next-line max-len
import aboutController from "../controllers/AboutController/About/AboutController.js";
// eslint-disable-next-line max-len
import aboutIDController from "../controllers/AboutController/AboutId/AboutIDController.js";
// eslint-disable-next-line max-len
import navbarItemsController from "../controllers/NavbarItemsController/NavbarItemsController.js";
// eslint-disable-next-line max-len
import profileTitleController from "../controllers/ProfileTitleController/ProfileTitleController.js";
// eslint-disable-next-line max-len
import profileImageController from "../controllers/ProfileImageController/ProfileImageController.js";

/**
 * A router serves as a container for various routes used
 *
 * @type { Router }
 */
const router = express.Router();

router.get("/", homeController.get);
router.get("/about", aboutController.get);
router.get("/about/:id", aboutIDController.get);
router.get("/global/navbar/items", navbarItemsController.get);
router.get("/profile/titles", profileTitleController.get);
router.get("/profile/image/python-api-gateway", profileImageController.get);
router.get("/project/memory-language", vocabController.get);


// import multer from 'multer';
// import path from "path";
//
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/images');
//     },
//     filename: function (req, file, cb) {
//         cb(null,
//            file.fieldname +
//            '-' +
//            Date.now() +
//            path.extname(file.originalname)
//         );
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