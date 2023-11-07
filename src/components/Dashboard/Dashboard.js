import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';



function Dashboard() {
    const [queries, setQueries] = useState([]);
    const [newQuery, setNewQuery] = useState('');

    // Function to handle query submission
    const handleSubmit = () => {
        if (newQuery.trim() === '') {
            // Handle the case where the query is null or empty
            console.error('Query is empty');
            toast.error('Request message is empty');
            // You can display an error message to the user or return early
            return;
          }
        axios.post('http://localhost:3001/post-query', { queryText: newQuery })
          .then((response) => {
            if (response.status === 201) {
              console.log('Query posted successfully');
              setNewQuery('');
            } else {
              console.error('Failed to post query');
            }
          })
          .catch((error) => {
            console.error('Request failed:', error);
          });
      };
      

    // Use useEffect to fetch queries when the component mounts

    useEffect(() => {
        axios.get('http://localhost:3001/get-queries')
        .then((response) => {
          if (response.status === 200) {
            return response.data;
          } else {
            console.error('Failed to retrieve queries. Status:', response.status);
          }
        })
        .then((data) => {
          console.log('Data from server:', data);
          setQueries(data);
        })
        .catch((error) => {
          console.error('Request failed:', error);
        });
    }, []);


    return (
        <div>
            <h1>Dashboard</h1>
            <form>
                <input
                    type="text"
                    placeholder="Enter your query"
                    value={newQuery}
                    onChange={(e) => setNewQuery(e.target.value)}
                />
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
            Hi<br />
            <ul>
                {queries.map((query, index) => (
                    <li key={index}>{query}</li>
                ))}
            </ul>
            Bye
        </div>
    );

}

export default Dashboard;
