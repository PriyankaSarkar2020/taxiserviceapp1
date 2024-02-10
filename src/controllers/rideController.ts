import { Request, Response } from 'express';
import { Ride } from '../models/rideModel';
import mysql from 'mysql2';

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'taxi_service',
};

export class RideController {
  public static requestRide(req: Request, res: Response): void {
    const { clientId, pickupLocation, dropOffLocation, proposedPrice } = req.body as Ride;
    const connection =  mysql.createConnection(dbConfig);
    connection.query(
      'INSERT INTO ride_requests (client_id, pickup_location, drop_off_location, proposed_price) VALUES (?, ?, ?, ?)',
       [clientId, pickupLocation, dropOffLocation, proposedPrice],
      (err) => {
        if (err) {
          //console.error('Error inserting ride requests:', err);
          return res.status(500).json({ error: 'Failed to request a ride' });
        }
        //console.log('inserted ride');
        res.status(200).json({ message: 'Ride requested successfully' });
      }
    );
    connection.end();
  }
  

  public static viewRideRequests(req: Request, res: Response): void {
    const connection =  mysql.createConnection(dbConfig);
    connection.query('SELECT * FROM ride_requests', (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to fetch ride requests' });
      }
      res.status(200).json({ rideRequests: results });
    });
    connection.end();
  }  
}