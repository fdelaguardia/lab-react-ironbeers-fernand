import { useState } from "react"

import { useNavigate } from "react-router-dom"

import axios from "axios"

const NewBeer = () => {

    const [ newDrink, setNewDrink ] = useState(
        {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: null,
            contributed_by: ''
        }
    )

    // const [ name, setName ] = useState('')
    // const [ tagline, setTagline ] = useState('')
    // const [ description, setDescription ] = useState('')
    // const [ first_brewed, setFirst] = useState('')
    // const [ brewers_tips, setTips] = useState('')
    // const [ attenuation_level, setAttenuation ] = useState(null)
    // const [ contributed_by, setContributed ] = useState('')

    // const body = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by}

    const navigate = useNavigate();



    const handleTextChange = (e) => {
        setNewDrink((recent) => ({...recent, [e.target.name]: e.target.value}))
    }

    const handleNumberChange = (e) => {
        setNewDrink((recent) => ({...recent, [e.target.name]: Number(e.target.value)}))
    }




    const handleSubmit = (e) => {

        e.preventDefault()

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newDrink)
            .then((result) => {
                console.log(result)
                navigate('/beers')
            })
            .catch((err) => {
                console.log(err)
            })

    }


    return (
        <div id="add">
            <h1>New</h1>
            
            <form onSubmit={handleSubmit}>

                <label>Name</label>
                <input type='text' name="name" value={newDrink.name} onChange={handleTextChange} />

                <label>Tagline</label>
                <input type='text' name="tagline" value={newDrink.tagline} onChange={handleTextChange}/>

                <label>Description</label>
                <input type='text' name="description" value={newDrink.description} onChange={handleTextChange}/>

                <label>First Brewed</label>
                <input type='text' name="first_brewed" value={newDrink.first_brewed} onChange={handleTextChange}/>

                <label>Brewers Tips</label>
                <input type='text' name="brewers_tips" value={newDrink.brewers_tips} onChange={handleTextChange}/>

                <label>Attentuation Level</label>
                <input type='number' name="attenuation_level" value={newDrink.attenuation_level} onChange={handleNumberChange}/>

                <label>Contributed By</label>
                <input type='text' name="contributed_by" value={newDrink.contributed_by} onChange={handleTextChange}/>

                <button type="submit">Add Beer</button>

            </form>

        </div>
    )
}

export default NewBeer