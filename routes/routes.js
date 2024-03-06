import express from "express";
import vocabController
    from
        "../controllers/VocabController/VocabController.js";
import homeController
    from
        "../controllers/HomeController/HomeController.js";
import aboutController
    from
        "../controllers/AboutController/About/AboutController.js";
import aboutIDController
    from
        "../controllers/AboutController/AboutId/AboutIDController.js";
import navbarItemsController
    from
        "../controllers/NavbarItemsController/NavbarItemsController.js";
import profileTitleController
    from
        "../controllers/ProfileTitleController/ProfileTitleController.js";

/**
 * A router serves as a container for various routes used
 *
 * @type { Router }
 */
const router = express.Router();

router.get("/", homeController.get);
router.get("/profile/titles", profileTitleController.get);
router.get("/global/navbar/items", navbarItemsController.get);
router.get("/project/memory-language", vocabController.get);

router.get("/about", aboutController.get);
router.get("/about/:id", aboutIDController.get);

export default router;