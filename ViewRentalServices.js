import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewRentalServices = () => {
  const [rentalServices, setRentalServices] = useState([]);

  // Fetch rental services from backend
  useEffect(() => {
    const fetchRentalServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/rental-services');
        setRentalServices(response.data);
      } catch (error) {
        console.error('Error fetching rental services:', error);
      }
    };

    fetchRentalServices();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/rental-services/${id}`);
      setRentalServices(rentalServices.filter((service) => service.id !== id)); // Update state to remove deleted service
    } catch (error) {
      console.error('Error deleting rental service:', error);
    }
  };

  const handleEdit = (id) => {
    // Implement edit functionality here
    console.log(`Editing rental service with ID: ${id}`);
    // Example: redirect to an edit page or show an edit form
  };

  return (
    <div>
      <h1>View Rental Services</h1>
      <table>
        <thead>
          <tr>
            
            <th>Hourly Package ID</th>
            <th>Base Fare</th>
            <th>Booking Fee</th>
            <th>Vehicle Type</th>
            <th>Per Km Rate</th>
            <th>Per Minute Rate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rentalServices.length > 0 ? (
            rentalServices.map((service) => (
              <tr key={service.id}>
                <td>{service.hourly_package}</td>
                <td>{service.base_fare}</td>
                <td>{service.booking_fee}</td>
                <td>{service.vehicle_type}</td>
                <td>{service.per_km_rate}</td>
                <td>{service.per_minute_rate}</td>
                <td>
                  <button onClick={() => handleEdit(service.id)}>Edit</button>
                  <button onClick={() => handleDelete(service.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No rental services available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewRentalServices;
