import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Cat } from './components/cat/Cat';

function App() {
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    const urlAPI = 'https://api.thecatapi.com/v1/images/search?limit=100&order=ASC&api_key=live_ciAhw3isyIP7HargSLCuFdNPO9nYHxmdIuNPBUSmbF7CDODrO3mhMrZc1aFxB8bJ';
    axios.get(urlAPI).then((res) => {
      setCatList(res.data);
      console.log(res.data);
    })
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <div className="cats-list">
        {
          catList.map((el) => {
            return <Cat key={el.id} img={el.url} id={el.id}/>
          })
        }
      </div>
    </div>
  )
}

export default App;