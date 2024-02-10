"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideController = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'taxi_service',
};
class RideController {
    static requestRide(req, res) {
        const { clientId, pickupLocation, dropOffLocation, proposedPrice } = req.body;
        const connection = mysql2_1.default.createConnection(dbConfig);
        connection.query('INSERT INTO ride_requests (client_id, pickup_location, drop_off_location, proposed_price) VALUES (?, ?, ?, ?)', [clientId, pickupLocation, dropOffLocation, proposedPrice], (err) => {
            if (err) {
                //console.error('Error inserting ride requests:', err);
                return res.status(500).json({ error: 'Failed to request a ride' });
            }
            //console.log('inserted ride');
            res.status(200).json({ message: 'Ride requested successfully' });
        });
        connection.end();
    }
    static viewRideRequests(req, res) {
        const connection = mysql2_1.default.createConnection(dbConfig);
        connection.query('SELECT * FROM ride_requests', (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to fetch ride requests' });
            }
            res.status(200).json({ rideRequests: results });
        });
        connection.end();
    }
}
exports.RideController = RideController;
