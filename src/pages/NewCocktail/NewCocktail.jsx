import React, {useState} from 'react'
import {Navigate} from 'react-router-dom'
import tokenService from '../../utils/tokenAuth'
import axios from 'axios'
let {getToken} = tokenService
let BACKEND_URL = 'http://localhost:9000/'
// let {title, description, recipe, image} = req.body
const NewCocktail = () => {
let token = getToken();
const initalState = {
    title: '',
    description: '',
    recipe: '',
    image: ''
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
            console.log(token)
            // Navigate('/cocktails', {replace:true})
        })
    }catch(err){
        console.log('From handleSubmit in new cocktail form', err)
    }
}
// let {title, description, recipe, image} = req.body

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label for='title'>Title</label>
        <input id='title' type='text' placeholder='title' value={formData.title} name='title' onChange={handleChange} />

        <label for='description'>Description</label>
        <input id='description' type='text' placeholder='description' value={formData.description} name='description' onChange={handleChange} />

        <label for='recipe'>Recipe</label>
        <input id='recipe' type='text' placeholder='recipe' value={formData.recipe} name='recipe' onChange={handleChange} />

        <label for='image'>Picture</label>
        <input id='image' type='text' placeholder='image' value={formData.image} name='image' onChange={handleChange} />

        <input type="submit" value="Submit" />
    </form>

    </>
  )
}

export default NewCocktail