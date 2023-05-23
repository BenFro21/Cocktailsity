import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import tokenService from '../../utils/tokenAuth'
import axios from 'axios'
import './NewIngredient.css'

let {getToken} = tokenService
let BACKEND_URL = 'http://localhost:9000/'

const NewIngredient = () => {
    let token = getToken();
    let navigate = useNavigate()
    const initalState = {
       name: ''
    }
    let [formData, setFormData] = useState(initalState)
    
    let handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }
    
    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            axios.post(`${BACKEND_URL}ingredients/`, formData, {headers: {'content-type': 'application/json', token: token}})
            .then(res => {
                setFormData(initalState)
                navigate('/ingredients', {replace:true})
            })
        }catch(err){
            console.log('From handleSubmit in new cocktail form', err)
        }
    }


  return (
    
        <>
        <form className='cocktailForm' onSubmit={handleSubmit}>
            <label className='ingredientLabel' htmlFor='name'>Ingredient Name</label>
            <input className='ingredientInput' id='name' type='text' placeholder='name' value={formData.title} name='name' onChange={handleChange} />

            <input className='ingredientSubmit' type="submit" value="Submit" />
        </form>
    
        </>
      
  )
}

export default NewIngredient