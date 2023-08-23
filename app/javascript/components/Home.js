import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <Link to="/greetings">
        View Greetings
      </Link>
      <h1>Rails React App. Happy to meet you</h1>
      <h1>Oh super happy</h1>
    </main>
  );
}

export default Home;
