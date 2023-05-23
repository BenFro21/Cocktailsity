import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import tokenService from '../../utils/tokenAuth'
import axios from 'axios'
import './NewCocktail.css'
let {getToken} = tokenService
let BACKEND_URL = 'http://localhost:9000/'
// let {title, description, recipe, image} = req.body
const NewCocktail = () => {
let token = getToken();
let navigate = useNavigate()
const initalState = {
    title: '',
    description: '',
    recipe: '',
    image: '',
 
}
let [formData, setFormData] = useState(initalState)

let handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
}

let handleSubmit = async (e) => {
    e.preventDefault()
    try {
        axios.post(`${BACKEND_URL}cocktails/`, formData, {headers: {'content-type': 'application/json', token: token}})
        .then(res => {
            setFormData(initalState)
            navigate('/cocktails', {replace:true})
        })
    }catch(err){
        console.log('From handleSubmit in new cocktail form', err)
    }
}
  return (
    <>
    <form className='cocktailForm' onSubmit={handleSubmit}>
        <label className='cocktailLabel' htmlFor='title'>Title</label>
        <input className='cocktailInput' id='title' type='text' placeholder='title' value={formData.title} name='title' onChange={handleChange} />

        <label className='cocktailLabel' htmlFor='description'>Description</label>
        <input className='cocktailInput' id='description' type='text' placeholder='description' value={formData.description} name='description' onChange={handleChange} />

        <label className='cocktailLabel' htmlFor='recipe'>Recipe</label>
        <input className='cocktailInput' id='recipe' type='text' placeholder='recipe' value={formData.recipe} name='recipe' onChange={handleChange} />

        <label className='cocktailLabel' htmlFor='image'>Picture</label>
        <input className='cocktailInput' id='image' type='text' placeholder='image' value={formData.image} name='image' onChange={handleChange} />

        <input className='cocktailSubmit' type="submit" value="Submit" />
    </form>

    </>
  )
}

export default NewCocktail