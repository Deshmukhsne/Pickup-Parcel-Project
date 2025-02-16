import React, { useState } from 'react';
import axios from 'axios';

const AddPackage = () => {
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/add-package', { distance, time });
      alert('Package added successfully');
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Package</h3>
      <label>Distance (KM):</label>
      <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} required />
      <label>Time (Hours):</label>
      <input type="number" value={time} onChange={(e) => setTime(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPackage;
