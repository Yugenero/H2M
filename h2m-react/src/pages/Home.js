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

      <div className='home_page_left_container'>
      <div className="home_header">
        <h1>
          <span className='home_human'>Human</span>2<span className='home_mouse'>Mouse</span>
        </h1>
        <p>Modeling human variants in the mouse genome</p>
        <form onSubmit={handleQuerySubmit} className="query_form">
          <input
            type="text"
            value={query}
            onChange={handleQueryChange}
            placeholder="Enter your SQL query"
            className="query_input"
          />
            <button type="button" 
              class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark
            </button>
          </form>

        <div className="results_section">
          <h2>Results</h2>
          <pre className="results_pre">{JSON.stringify(results, null, 2)}</pre>
        </div>

      </div>
      </div>
      <div className='home_page_right_container'>

      </div>
    </div>
  );
}

export default Home;