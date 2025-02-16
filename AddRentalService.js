// frontend/src/AddRentalService.js
import React, { useState } from 'react';
import axios from 'axios';

function AddRentalService() {
  const [hourlyPackageId, setHourlyPackageId] = useState('');
  const [baseFare, setBaseFare] = useState('');
  const [bookingFee, setBookingFee] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [perKmRate, setPerKmRate] = useState('');
  const [perMinuteRate, setPerMinuteRate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { hourlyPackageId, baseFare, bookingFee, vehicleType, perKmRate, perMinuteRate };
    try {
      await axios.post('http://localhost:5000/add-rental-service', data);
      alert('Rental Service added successfully');
    } catch (err) {
      alert('Error adding rental service');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Rental Service</h2>
      <input type="number" placeholder="Hourly Package ID" value={hourlyPackageId} onChange={(e) => setHourlyPackageId(e.target.value)} required />
      <input type="number" placeholder="Base Fare" value={baseFare} onChange={(e) => setBaseFare(e.target.value)} required />
      <input type="number" placeholder="Booking Fee" value={bookingFee} onChange={(e) => setBookingFee(e.target.value)} required />
      <input type="text" placeholder="Vehicle Type" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} required />
      <input type="number" placeholder="Per KM Rate" value={perKmRate} onChange={(e) => setPerKmRate(e.target.value)} required />
      <input type="number" placeholder="Per Minute Rate" value={perMinuteRate} onChange={(e) => setPerMinuteRate(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddRentalService;
