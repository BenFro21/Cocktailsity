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

  return (
    <>
    <h1 className='bigCocktails'>Cocktails</h1>
        {cocktails?.data?.map((cocktail, index) => {
           
            return (
                <div className='cocktailsContainer'>
                <h1 className='cocktailsTitle' >{cocktail.title}</h1>
                <p className='cocktailsP'>{cocktail.description}</p>
                <button className='cocktailsButton'><Link className='cocktailsLink' to={`/cocktails/${cocktail?.cocktail_id}`}>Cocktail Details</Link></button>
                <br/>
                <img className='cocktailsImg' src={cocktail.image ? cocktail.image : 'https://drive.google.com/uc?export=download&id=1WEDZeBgHnGUceTGksr4dlzMRDnoD6AOB'} alt='cocktail'/>
            </div>)
        })}
    </>
  )
}

export default ShowAllCocktails