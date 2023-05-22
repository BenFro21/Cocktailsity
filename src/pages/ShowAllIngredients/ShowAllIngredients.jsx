import React, {useEffect, useState} from 'react'
import axios from 'axios'

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
      })
    }

  return (
    <>
    {ingredients?.data.map((ingredient) => {
      
        return (
            <>
            <h1 className='ingredientName'>{ingredient.name}</h1>
            <button className='deleteButton' onClick={() => deleteIngredient(ingredient.ingredient_id)}>Delete me</button>
            </>
        )
    })}
        
    </>
  )
}

export default ShowAllIngredients