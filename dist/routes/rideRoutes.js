"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rideController_1 = require("../controllers/rideController");
const router = express_1.default.Router();
router.post('/request', rideController_1.requestRide);
router.get('/view', rideController_1.viewRideRequests);
exports.default = router;
