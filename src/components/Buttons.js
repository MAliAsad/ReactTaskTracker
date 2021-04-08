import propTypes from "prop-types";

const Button = ({color,text,onClick})=>{
    
    return (
        <div>
            <button onClick={onClick} style={{background: color}} className="btn">{text}</button>
        </div>
    )
}
Button.defaultProps={
    color:"blue"
}
Button.propTypes={
    text: propTypes.string,
    color:propTypes.string,
    onClick:propTypes.func.isRequired
}

export default Button;