import React from 'react'

function Card(props) {


  console.log('props in card :>> ', props);
  
  return (
    <li>
        <button onClick={() => props.removeContact(props.id)} className="btn-delete"> Delete </button>
        <button onClick={() => props.addContact()} className="btn-add"> add_random </button>
        
     
      <img src = {props.pictureUrl}/>
      <h4>Name: {props.name}</h4>
      <p>Popularity: {props.popularity} </p>

    </li>
  )
}

export default Card

