import { Router } from "express";
import { renderIndex } from "../controllers/indexController";
import { statsPagination} from "../controllers/statsController";
import { blacklistedUsers } from "../controllers/blacklistedController";
import { ranking } from "../controllers/rankingsController";
import { adminList } from "../controllers/adminsController";

const router = Router();

// GET

router.get("/", renderIndex);
router.get("/stats/:page", statsPagination )
router.get("/blacklisted", blacklistedUsers)
router.get("/rankings", ranking)
router.get("/admins", adminList);

export default router;