import React, { useEffect, useState } from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import './CocktailDetails.css'

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
                <div className='cocktailContainer'>
                <h1 className='cocktailTitle'>{c.title}</h1>
                <img className='cocktailImg' src={c.image ? c.image : 'https://drive.google.com/uc?export=download&id=1WEDZeBgHnGUceTGksr4dlzMRDnoD6AOB'} alt='cocktail'/>
                <button className='cocktailsButton'><Link className='cocktailsLink' to={`/cocktails/edit/${cocktailId}`}>Edit</Link></button>
           
                <h1 className='cocktailTitle'>Description</h1>
                <p className='cocktailP'>{c.description}</p>
                <h1 className='cocktailTitle'>Recipe</h1>
                <p className='cocktailP'>{c.recipe}</p>
                <h1 className='cocktailTitle'>Ingredients</h1>
                <ul className='ingredientContainer'>
                {c.ingredients?.map((ingredient) => {
                    return (
                        <li className='ingredientLi'>{`${ingredient},`}</li>
                    )
                })}
                </ul>
                <button className='deleteBtn' onClick={deleteCocktail}>Delete</button>
                </div>
            )
        })}
    </>
    
  )
}

export default CocktailDetails