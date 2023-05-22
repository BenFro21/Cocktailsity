import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import tokenService from '../../utils/tokenAuth'

let BACKEND_URL = 'http://localhost:9000/'
let {getToken} = tokenService

const CocktailEdit = () => {
  let navigate = useNavigate();
  let token = getToken()
const [cocktail, setCocktail] = useState()
   let {cocktailId} = useParams();
   console.log(cocktailId)
   useEffect(() => {
    axios.get(`${BACKEND_URL}cocktails/${cocktailId}`)
    .then(response => setCocktail(response))
    .catch(err => console.log(err))
   }, [])

   const initalState = {
    title: cocktail?.data[0].title,
    description: cocktail?.data[0].description,
    recipe: cocktail?.data[0].recipe,
    image: cocktail?.data[0].image,
    
}
   let [formData, setFormData] = useState(initalState)
 
   let handleChange = (e) => {
      setFormData({...initalState})
       setFormData({...formData, [e.target.name] : e.target.value})
   }
   
   let handleSubmit = async (e) => {
       e.preventDefault()
       try {
           axios.put(`${BACKEND_URL}cocktails/${cocktail?.data[0].cocktail_id}`, formData, {headers: {'content-type': 'application/json', token: token}})
           .then(res => {
               setFormData(initalState)
               navigate('/cocktails', {replace:true})
           })
       }catch(err){
           console.log('From handleSubmit in new cocktail form', err)
       }
   }

console.log(cocktail?.data[0].cocktail_id)
console.log(formData?.title)
console.log(initalState)
  
//           let {user_id, title, description, recipe, image} = req.body
  return (
    <>
    <h1>{cocktail?.data[0].title}</h1>
    <form className='cocktailForm' onSubmit={handleSubmit}>
        <label className='cocktailLabel' htmlFor='title'>Title</label>
        <input className='cocktailInput' id='title' type='text' placeholder={cocktail?.data[0].title} value={formData?.title} name='title' onChange={handleChange} />

        <label className='cocktailLabel' htmlFor='description'>Description</label>
        <input className='cocktailInput' id='description' type='text' placeholder={cocktail?.data[0].description} value={formData?.description} name='description' onChange={handleChange} />

        <label className='cocktailLabel' htmlFor='recipe'>Recipe</label>
        <input className='cocktailInput' id='recipe' type='text' placeholder={cocktail?.data[0].recipe} value={formData?.recipe} name='recipe' onChange={handleChange} />

        <label className='cocktailLabel' htmlFor='image'>Picture</label>
        <input className='cocktailInput' id='image' type='text' placeholder={cocktail?.data[0].image} value={formData?.image} name='image' onChange={handleChange} />

        <input className='cocktailSubmit' type="submit" value="Submit" />
    </form>

    </>
  )
}

export default CocktailEdit