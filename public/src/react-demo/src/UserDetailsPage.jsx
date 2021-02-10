import UserDetails from './UserDetails.jsx';
import './App.css';
import { useEffect, useState } from 'react';

function UserDetailsPage() {
  const [myData, setMyData] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/users").then(response => response.json()).then(data => {
      console.log(data)  
      setMyData(data)

    
    })

  }, []);

  if (!myData) {
    return (<div> Waiting for data </div>)
  }

  return (myData.results.map(item=>{
     return <UserDetails user={item}/> }))
 };
export default UserDetailsPage;