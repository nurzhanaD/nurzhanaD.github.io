import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Navbar } from '../../components/navbar/Navbar';
import { Cat } from '../../components/cat/Cat';
import './Liked.css';

export default function Liked() {
  const [catsList, setCatsList] = useState([]);
  useEffect(() => {
    const urlAPI = 'https://api.thecatapi.com/v1/images/search?limit=60&order=ASC&api_key=live_ciAhw3isyIP7HargSLCuFdNPO9nYHxmdIuNPBUSmbF7CDODrO3mhMrZc1aFxB8bJ';
    axios.get(urlAPI).then((res) => {
      let temp = [];
      for(let i = 0; i < localStorage.length; i++) {
        for(let j = 0; j < res.data.length; j++) {
          if(res.data[j].id === localStorage.key(i)) {
            temp.push(res.data[j]);
          }
        }
      }
      setCatsList(temp);
    });
  }, [])
  
  return (
    <div className="liked">
      <Navbar/>
      <div className="liked-cats-list">
        {
          catsList.map((el) => {
            return <Cat key={el.id} img={el.url} id={el.id}/>
          })
        }
      </div>
    </div>
  )
}
