import {React, useState, useEffect} from 'react'
import axios from 'axios'
import './ShowAllCocktails.css'
import {Link} from 'react-router-dom'
let BACKEND_URL = 'http://localhost:9000/'


const ShowAllCocktails = () => {
    const [cocktails, setCocktails] = useState()
    useEffect(() => {
        axios.get(`${BACKEND_URL}cocktails/`)
        .then(data => setCocktails(data))
        .catch(err => console.log(err))
    }, [])
    // console.log(cocktails.data.cocktail_id)
    cocktails?.data?.map((c) => {
       return console.log(c)
    })
  return (
    <>
        {cocktails?.data?.map((cocktail, index) => {
           
            return (<div className='container'>
                
                <h1>{cocktail.title}</h1>
                <p>{cocktail.description}</p>
                <img src={cocktail.image} alt='cocktail img'/>
                
                <button><Link to={`/cocktails/${cocktail?.cocktail_id}`}>See more</Link></button>
            </div>)
        })}
    </>
  )
}

export default ShowAllCocktails