import UserProfile from './UserProfile.jsx';
import './App.css';
import { useEffect, useState } from 'react';

function UserProfilePage() {
  const [myData, setMyData] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3001/users/1`).then(response => response.json()).then(data => { //:userId doesnt work so unsure how to generate page for any user
      console.log(data)  
      setMyData(data)

    
    })

  }, []);

  if (!myData) {
    return (<div> Waiting for data </div>)
  }

 return ( 
 
    <UserProfile profile={myData} />
    
   
    
    )
};
//   return (myData.posts.map(item=>{
//      return <UserProfile userposts={item} profile={myData}/> }))
//  };
export default UserProfilePage;