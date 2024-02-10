"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rideController_1 = require("../controllers/rideController");
const bidController_1 = require("../controllers/bidController");
const router = express_1.default.Router();
router.post('/request-ride', rideController_1.RideController.requestRide);
router.get('/view-ride-requests', rideController_1.RideController.viewRideRequests);
router.post('/make-bid', bidController_1.BidController.makeBid);
router.get('/view-bids/:rideRequestId', bidController_1.BidController.viewBids);
router.post('/accept-bid', bidController_1.BidController.acceptBid);
exports.default = router;
