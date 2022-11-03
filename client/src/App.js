import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Registration from './Pages/Registration';
import HomeScreen from './Pages/HomeScreen';
import SignIn from './Pages/SignIn';
import PreRegistration from './Pages/PreRegistration';
import PatientQrCode from './Pages/PatientQrCode';
import DoctorHome from './Pages/DoctorHome';
import PatientDetails from './Pages/PatientDetails';
import QRS from './Pages/QRscanner';

function App() {
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/" element={<HomeScreen />} />
      <Route path="/:role/signIn" element={<SignIn />} />
      <Route path="/paramedic/*" element={<PreRegistration />} />
      <Route path="/patient/QR/:id" element={<PatientQrCode />} />
      <Route path="/doctor/*" element={<DoctorHome />} />
      <Route
        path="/doctor/patient-details/:uhid"
        element={<PatientDetails />}
      />
      {/* <Route path="/doctor/qrs" element={<QRS />} /> */}
    </Routes>
  );
}

export default App;
