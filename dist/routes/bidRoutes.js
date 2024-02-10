"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bidController_1 = require("../controllers/bidController");
const router = express_1.default.Router();
router.post('/makeBid', bidController_1.makeBid);
router.get('/viewBids/:id', bidController_1.viewBidsOnRide);
exports.default = router;
