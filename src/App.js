import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [post,setPost] = useState([])
  useEffect(
    ()=>{fetch("https://pixabay.com/api/?key=27310553-5d677a81a33fdb5a5eb04704e&q=yellow+flowers&image_type=photo")
    .then(res => res.json())
    .then(data => setPost(data.hits))
    },[])
    
  return (
    <div className="App">
      {post.map(item => {
        return(
        <img key={item.id} src = {item.previewURL} alt = "bird"/>
        )
      })}
    </div>
  );
}

export default App;
