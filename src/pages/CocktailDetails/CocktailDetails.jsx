import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'

let BACKEND_URL = 'http://localhost:9000/'

const CocktailDetails = () => {
const [cocktail, setCocktail] = useState()
   let {cocktailId} = useParams();
   console.log(cocktailId)
   useEffect(() => {
    axios.get(`${BACKEND_URL}cocktails/${cocktailId}`)
    .then(response => setCocktail(response))
    .catch(err => console.log(err))
   }, [])
   console.log(cocktail?.data)
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
                <img src={c.image} alt='cocktail'/>
                <button><Link to={`/cocktails/edit/${cocktailId}`}>Edit</Link></button>
                </div>
            )
        })}
    </>
    
  )
}

export default CocktailDetails