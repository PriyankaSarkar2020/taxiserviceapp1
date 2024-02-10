import express from 'express';
import { RideController } from '../controllers/rideController';
import { BidController } from '../controllers/bidController';

const router = express.Router();

router.post('/request-ride', RideController.requestRide);
router.get('/view-ride-requests', RideController.viewRideRequests);

router.post('/make-bid', BidController.makeBid);
router.get('/view-bids/:rideRequestId', BidController.viewBids);
router.post('/accept-bid', BidController.acceptBid);

export default router;
