import { Link } from "react-router-dom"


const Home = () => {

    return (
        <div>

            <h1>Home</h1>

            <Link to={"/beers"}>All Beers</Link>
            <Link to={'/random-beer'}>Random Beer</Link>
            <Link to={'/new-beer'}>Add a Beer</Link>

        </div>
    )
}

export default Home