import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CallForPapersPage from './pages/CallForPapersPage';
import CallForSpecialSessionPage from './pages/CallForSpecialSessionPage';
import SubmissionPage from './pages/SubmissionPage';
import RegistrationPage from './pages/RegistrationPage';
import CommitteePage from './pages/CommitteePage';
import ContactPage from './pages/ContactPage';
import ImportantDatesPage from './pages/ImportantDatesPage';
import KeynoteSpeakersPage from './pages/KeynoteSpeakersPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/call-for-papers" element={<CallForPapersPage />} />
          <Route path="/call-for-special-session" element={<CallForSpecialSessionPage />} />
          <Route path="/submission" element={<SubmissionPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/committee" element={<CommitteePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/important-dates" element={<ImportantDatesPage />} />
          <Route path="/keynote-speakers" element={<KeynoteSpeakersPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
