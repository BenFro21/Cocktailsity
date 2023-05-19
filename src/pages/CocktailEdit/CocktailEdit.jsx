import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
let BACKEND_URL = 'http://localhost:9000/'

const CocktailEdit = () => {
const [cocktail, setCocktail] = useState()
   let {cocktailId} = useParams();
   console.log(cocktailId)
   useEffect(() => {
    axios.get(`${BACKEND_URL}cocktails/${cocktailId}`)
    .then(response => setCocktail(response))
    .catch(err => console.log(err))
   }, [])
//           let {user_id, title, description, recipe, image} = req.body
  return (
    <div>cocktail edit page</div>
  )
}

export default CocktailEdit