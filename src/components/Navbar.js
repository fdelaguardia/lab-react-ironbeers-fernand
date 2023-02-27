import { Link } from "react-router-dom"

const Navbar = () => {


    return (
        <nav>

            <Link to={'/'}>Home</Link>
            <Link to={"/beers"}>All Beers</Link>
            <Link to={'/random-beer'}>Random Beer</Link>
            <Link to={'/new-beer'}>Add a Beer</Link>

        </nav>
    )
}

export default Navbar