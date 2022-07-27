import React, { useEffect } from 'react'

function Deneme() {
 useEffect(() => {


 fetch("https://restcountries.com/v2/all")
 .then((res) => res.json())
 .then((data) => console.log(data));
 }, []);
 
  return (
    <div>deneme</div>
  )
}

export default Deneme;