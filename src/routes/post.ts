import * as express from 'express'
import * as PostController from './../controllers/postController';

const router = express.Router();
router.get('/sum', PostController.sum);

export default router;
