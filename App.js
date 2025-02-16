import React, { useState } from 'react';
import Navbar from './Navbar';
import AddPackage from './AddPackage';
import ViewPackages from './ViewPackages';
import AddRentalService from './AddRentalService';
import ViewRentalServices from './ViewRentalServices';
import './App.css';

function App() {
  const [activeForm, setActiveForm] = useState('addPackage');

  return (
    <div>
      <Navbar setActiveForm={setActiveForm} />
      {activeForm === 'addPackage' && <AddPackage />}
      {activeForm === 'viewPackages' && <ViewPackages />}
      {activeForm === 'addRentalService' && <AddRentalService />}
      {activeForm === 'viewRentalServices' && <ViewRentalServices />}
    </div>
  );
}

export default App;
