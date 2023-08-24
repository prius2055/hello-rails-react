import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <h1>Welcome to greetings app</h1>
      <Link to="/greeting">Click here to view a random Greeting</Link>
    </main>
  );
}

export default Home;
