"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const PostController = require("./../controllers/postController");
const router = express.Router();
router.get('/sum', PostController.sum);
exports.default = router;
