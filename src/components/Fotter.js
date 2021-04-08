import {Link} from "react-router-dom"

const Fotter = () => {
    return (
        <footer style={{textAlign:"center", marginTop:"10px"}}>
            <p>Copyright &copy; 2021</p>
            <Link to="/About">About</Link>
        </footer>
    )
}

export default Fotter
