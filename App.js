import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {
 
const [users, setUsers] = useState([])

const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    setUsers(await response.json());
    
}

useEffect(() => {
    getUsers();
  },[])



  return (
    <div className='main'>
      <h2>Fetching data from fake api</h2>
<div className='container'>
  <div className='row'>

    {
users.map((curElem) => {
return (
  <div>
 <div className='content'>
      <img src={curElem.url} width='50px' height='50px' />
      <h3>{curElem.title}</h3>
      <span className=''className='id'>{curElem.id}</span>
      <span className='followers'>{curElem.thumbnailUrl}</span>
      <span className='rating'>rating</span>
    </div>
  </div>


)

})


    }
    </div>
  </div>
   


    </div>
  )
}

export default App;
