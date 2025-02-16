import React, { useEffect, useState } from 'react';

const ViewPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/packages')
      .then((response) => response.json())
      .then((data) => setPackages(data))
      .catch((error) => console.error('Error fetching packages:', error));
  }, []);

  const handleEdit = (id) => {
    // Handle edit logic (for example, navigate to edit page or show a modal)
    console.log('Edit package with ID:', id);
  };

  const handleDelete = (id) => {
    // Handle delete logic (for example, make an API call to delete the package)
    console.log('Delete package with ID:', id);
    // Optionally, remove package from the state after deletion
    setPackages(packages.filter((pkg) => pkg.id !== id));
  };

  return (
    <div>
      <h2>View Packages</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Distance(KM)</th>
            <th>Time(Hours)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {packages.length > 0 ? (
            packages.map((pkg) => (
              <tr key={pkg.id}>
                <td>{pkg.id}</td>
                <td>{pkg.distance}</td>
                <td>{pkg.time}</td>
                <td>
                  <button onClick={() => handleEdit(pkg.id)}>Edit</button>
                  <button onClick={() => handleDelete(pkg.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No packages found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewPackages;
