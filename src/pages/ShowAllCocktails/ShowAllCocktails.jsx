import {React, useState, useEffect} from 'react'
import axios from 'axios'
import './ShowAllCocktails.css'
let BACKEND_URL = 'http://localhost:9000/'


const ShowAllCocktails = () => {
    const [cocktails, setCocktails] = useState()
    useEffect(() => {
        axios.get(`${BACKEND_URL}cocktails/`)
        .then(data => setCocktails(data))
        .catch(err => console.log(err))
    }, [])
    console.log(cocktails)
  return (
    <>
        {cocktails?.data?.map((cocktail) => {
            return (<div className='container'>
                <h1>{cocktail.title}</h1>
                <p>{cocktail.description}</p>
                <img src={cocktail.image} alt='cocktail img'/>
            </div>)
        })}
    </>
  )
}

export default ShowAllCocktails