import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './ShowAllIngredients.css'


let BACKEND_URL = 'http://localhost:9000/'


const ShowAllIngredients = () => {


    const [ingredients, setIngredients] = useState()
    useEffect(() => {
        axios.get(`${BACKEND_URL}ingredients/`)
        .then(data => setIngredients(data))
        .catch(err => console.log(err))
    }, [])

    let deleteIngredient = (id) => {
      axios.delete(`${BACKEND_URL}ingredients/${id}`)
      .then((res) => {
        console.log(res)
        window.location.reload(true)
      })
    }

  return (
    <>
    {ingredients?.data.map((ingredient) => {
      
        return (
            <>
            <div className='ingredientContainer'>
            <h1 className='ingredientName'>{ingredient.name}</h1>
            <button className='deleteBtn' onClick={() => deleteIngredient(ingredient.ingredient_id)}>Delete</button>
            </div>
            </>
        )
    })}
        
    </>
  )
}

export default ShowAllIngredients