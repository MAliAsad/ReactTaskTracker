import Btn from "./Buttons"
import {useLocation} from "react-router-dom"

const Header= (props)=>{
    const location=useLocation();
    return(
        <header className="header">
            <h1 >{props.title}</h1>
            {location.pathname==="/" &&(
            <Btn color={props.showAdd?"red":"green"} text={props.showAdd?"Close":"Add"} onClick={props.onAdd} />
            )}
            </header>
    );
}

Header.defaultProps={
    title: "Task Tracker"
}
export default Header;