import Router from "express"   

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { getGodown} from "../controllers/godown.controller.js";

const router = Router()

router.route('/allgodown').post(getGodown)


export default router;

