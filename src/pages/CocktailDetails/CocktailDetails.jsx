import React, { useEffect, useState } from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

let BACKEND_URL = 'http://localhost:9000/'

const CocktailDetails = () => {
    const [cocktail, setCocktail] = useState()
    const navigate = useNavigate()
   let {cocktailId} = useParams();
   console.log(cocktailId)
   useEffect(() => {
    axios.get(`${BACKEND_URL}cocktails/${cocktailId}`)
    .then(response => setCocktail(response))
    .catch(err => console.log(err))
   }, [])
   console.log(cocktail?.data)

   let deleteCocktail = () => {
    axios.delete(`${BACKEND_URL}cocktails/${cocktailId}`)
    navigate('/cocktails', {replace: true})
   }
  return (
    
    <>
        {cocktail?.data.map((c) => {
            return(
                <div>
                <h1>{c.title}</h1>
                <p>{c.description}</p>
                <p>{c.recipe}</p>
                <ul>
                {c.ingredients?.map((ingredient) => {
                    return (
                        <li>{ingredient}</li>
                    )
                })}
                </ul>
                <img src={c.image ? c.image : 'https://drive.google.com/uc?export=download&id=1WEDZeBgHnGUceTGksr4dlzMRDnoD6AOB'} alt='cocktail'/>
                <button className='cocktailsButton'><Link className='cocktailsLink' to={`/cocktails/edit/${cocktailId}`}>Edit</Link></button>
                <button className='cocktailsButton' onClick={deleteCocktail}>Delete</button>
                </div>
            )
        })}
    </>
    
  )
}

export default CocktailDetails