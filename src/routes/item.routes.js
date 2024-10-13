import Router from "express";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { getItemById, getItemsByCategory, getAllCategories, advancedSearch } from "../controllers/item.controller.js";
 

const router = Router();

router.route('/:item_id').get(getItemById);
router.route('/getItemByCategory/:category').get(getItemsByCategory);
router.route('/getAllCategories').post(getAllCategories);

// New advanced search route
router.route('/search/advanced').get(advancedSearch);

export default router;
