import React from 'react';
import Hero from '../components/Hero';
import ImportantDates from '../components/ImportantDates';
import ConferenceLeadership from '../components/ConferenceLeadership';
import KeynoteSpeakers from '../components/KeynoteSpeakers';

const Home = () => {
  return (
    <div>
      <Hero />
      <ImportantDates />
      <ConferenceLeadership />
      <KeynoteSpeakers />
    </div>
  );
};

export default Home;