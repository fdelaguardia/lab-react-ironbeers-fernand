import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const ListBeers = () => {


    const [ beers, setBeers ] = useState([])

    const [ searchTerm, setSearchTerm ] = useState('')


    // const handleSearchSubmit = (e) => {
    //     e.preventDefault()
    //     axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchTerm}`)
    //         .then((result) => {
    //             console.log(result.data)
    //             setBeers(result.data)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }


    useEffect(() => {

        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                console.log("All Beers", response.data)
                setBeers(response.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])
//     https://ih-beers-api2.herokuapp.com/beers

//     image
// name
// tagline
// contributed_by
// Also, add the link to check the details of each beer. The link should navigate to /beers/:beerId

let filtered = searchTerm ? beers.filter((beer) => {
    return beer.name.includes(searchTerm)
}) : beers


    return (
        <div>
            <h1>All Beers</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>Filter Beers</label>
                <input type='text' name="searchTerm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <button type="submit">Search</button>
            </form>

            {
                filtered.length ? 

                <div>

                    {
                        filtered.map((beer) => {
                            return (
                                <div key={beer._id}>
                                    <Link to={`/beers/${beer._id}`}>

                                        <img src={beer.image_url} alt="beer"/>
                                        <h3>{beer.name}</h3>
                                        <p>{beer.tagline}</p>
                                        <p>Created by: {beer.contributed_by}</p>

                                    </Link>
                                </div>
                            )
                        })
                    }

                </div>

                :

                <h4>Loading...</h4>
            }

        </div>
    )
}

export default ListBeers