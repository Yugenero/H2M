import React, { useState } from 'react';
import axios from 'axios';
import './styles/home.css'; // Import the CSS file for styling

function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/query', {
        params: { query }
      });
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="home_page">
      <header className="home_header">
        <h1>Genome Data Query</h1>
        <form onSubmit={handleQuerySubmit} className="query_form">
          <input
            type="text"
            value={query}
            onChange={handleQueryChange}
            placeholder="Enter your SQL query"
            className="query_input"
          />
          <button type="submit" className="query_button">Submit</button>
        </form>
        <div className="results_section">
          <h2>Results</h2>
          <pre className="results_pre">{JSON.stringify(results, null, 2)}</pre>
        </div>
      </header>
    </div>
  );
}

export default Home;