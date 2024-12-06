import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar component
import Sidebar from './components/Sidebar'; // Sidebar component

import Income from './pages/Income'; // Income Page
import Expenses from './pages/Expenses'; // Expenses Page
import Messaging from './Pages/Messaging';
import Inventory from './Pages/Inventory';
import TPAManagement from './Pages/TPAManagement'; // Import TPA Management Page
import './App.css'; // Custom styles
import AddExpensePage from "./Pages/AddExpensePage";
import AppointmentReports from "./Reports/AppointmentReports";
import PathologyReports from './Reports/PathologyReports';
import TPAReports from './Reports/TPAReports';
import OTReports from './Reports/OTReports';
const App = () => {
  return (
    <Router>
      <div className="App" style={{ display: 'flex', height: '100vh' }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div style={{ marginLeft: '250px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Navbar */}
          <Navbar />

          {/* Content */}
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
            <Routes>
              {/* Define Routes */}
              <Route path="/billing" element={<div>Billing Page</div>} />
              <Route path="/income" element={<Income />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/expenses/add" element={<AddExpensePage />} />
              <Route path="/messaging" element={<Messaging />} />
              <Route path="/inventory" element={<Inventory />} />
              
              
              <Route path="/tpa-management" element={<TPAManagement />} />
              <Route path="/reports/appointment" element={<AppointmentReports />} />
              <Route path="/reports/pathology" element={<PathologyReports />} />
              <Route path="/reports/tpa" element={<TPAReports />} />
              <Route path="/reports/ot" element={<OTReports />} />
              {/* Other routes */}
              <Route path="/appointment" element={<div>Appointment Page</div>} />
              <Route path="/opd" element={<div>OPD Page</div>} />
              <Route path="/pharmacy" element={<div>Pharmacy Page</div>} />
              <Route path="/pathology" element={<div>Pathology Page</div>} />
              <Route path="/radiology" element={<div>Radiology Page</div>} />
              <Route path="/blood-bank" element={<div>Blood Bank Page</div>} />
              <Route path="/ambulance" element={<div>Ambulance Page</div>} />
              <Route path="/front-office" element={<div>Front Office Page</div>} />
              <Route path="/birth-record" element={<div>Birth Record Page</div>} />
              <Route path="/death-record" element={<div>Death Record Page</div>} />
              <Route path="/human-resource" element={<div>Human Resource Page</div>} />
              <Route path="/duty" element={<div>Duty Page</div>} />
              <Route path="/annual-calendar" element={<div>Annual Calendar Page</div>} />
              <Route path="/referral" element={<div>Referral Page</div>} />
              <Route path="/upload-content" element={<div>Upload/Share Content Page</div>} />
              <Route path="/content-share-list" element={<div>Content Share List Page</div>} />
              <Route path="/content-type" element={<div>Content Type Page</div>} />
              <Route path="/patient-id-card" element={<div>Patient ID Card Page</div>} />
              <Route path="/staff-id-card" element={<div>Staff ID Card Page</div>} />
              <Route path="/front-cms" element={<div>Front CMS Page</div>} />
              <Route path="/live-consultation" element={<div>Live Consultation Page</div>} />
              <Route path="/reports" element={<div>Reports Page</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
