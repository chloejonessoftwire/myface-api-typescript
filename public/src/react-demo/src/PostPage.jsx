
import Post from './Post.jsx';
import './App.css';
import { useEffect, useState } from 'react';

function PostPage() {
  const [myData, setMyData] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/posts").then(response => response.json()).then(data => {
      console.log(data)  
      setMyData(data)

    
    })

  }, []);

  if (!myData) {
    return (<div> Waiting for data </div>)
  }

  return (myData.results.map(item=>{
     return <Post post={item}/> }))
 };
export default PostPage;