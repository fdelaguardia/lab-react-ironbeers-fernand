
const Beer = ({ beer }) => {

    return (
        <div>

            <img src={beer.image_url} alt="beer"/>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenutaion_level}</p>
            <p>{beer.description}</p>
            <p>Created by: {beer.contributed_by}</p>


        </div>
    )
}

export default Beer