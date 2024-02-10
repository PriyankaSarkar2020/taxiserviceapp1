"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BidController = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'taxi_service',
};
class BidController {
    static makeBid(req, res) {
        const { fleetId, rideRequestId, bidAmount } = req.body;
        const connection = mysql2_1.default.createConnection(dbConfig);
        connection.query('INSERT INTO bids (fleet_id, ride_request_id, bid_amount) VALUES (?, ?, ?)', [fleetId, rideRequestId, bidAmount], (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to make a bid' });
            }
            res.status(200).json({ message: 'Bid placed successfully' });
        });
        connection.end();
    }
    static viewBids(req, res) {
        const rideRequestId = req.params.rideRequestId;
        const connection = mysql2_1.default.createConnection(dbConfig);
        connection.query('SELECT * FROM bids WHERE ride_request_id = ?', [rideRequestId], (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to fetch bids' });
            }
            res.status(200).json({ bids: results });
        });
        connection.end();
    }
    static acceptBid(req, res) {
        const { rideRequestId, bidId } = req.body;
        const connection = mysql2_1.default.createConnection(dbConfig);
        connection.query('UPDATE ride_requests SET bid_accepted = ? WHERE id = ?', [bidId, rideRequestId], (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to accept bid' });
            }
            res.status(200).json({ message: 'Bid accepted successfully' });
        });
        connection.end();
    }
}
exports.BidController = BidController;
