import React from 'react';
import Hero from '../components/Hero';
import ImportantDates from '../components/ImportantDates';
import KeynoteSpeakers from '../components/KeynoteSpeakers';

const Home = () => {
  return (
    <div>
      <Hero />
      <ImportantDates />
      <KeynoteSpeakers />
    </div>
  );
};

export default Home;