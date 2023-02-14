import {useState} from 'react';
import axios from "axios";

function App() {

  const [number, setNumber] = useState(1);

  const userData = async (number) =>{
    const {data : user} = await axios.get('https://jsonplaceholder.typicode.com/users/'+number);
    const {data: userPost} = await axios.get('https://jsonplaceholder.typicode.com/posts?userId='+number);
    console.log(user, userPost);
  }

  
  return (
    <div className="App">
      <input value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <button onClick={()=>userData(number)}>GET DATA</button>
    </div>
  );
}

export default App;
