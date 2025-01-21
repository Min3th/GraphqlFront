import logo from './logo.svg';
import './App.css';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

function App() {

  

  const PROFILE_QUERY = gql`
      query{
        profile {
          name
          age
          city
        }
      }
    `;

  const {loading, error, data} = useQuery(PROFILE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const {name, age, city} = data.profile;
  return (
    <div className="App">
      <h1>Profile</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default App;
