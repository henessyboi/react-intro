import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0); // COUNT = O
  
  const [photos, setPhotos] = useState();
  
  const myObject = {
    title: "title",
    body: "body",
  };
  const { title, body } = myObject; // object destructuring

  const retrieveData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
   
    setPhotos(data);
  };
  
  useEffect(() => {
    setCount(count+10) // side effect
    retrieveData(); // side effect
  }, []);

  return (
    <>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      <div>
        <h1> My amazing photos</h1>
        {
          photos?.map(({url}) =>(
            <img src={url} key={url}></img>
          ))
        }
      </div>
    </>
  );
}

export default App;
