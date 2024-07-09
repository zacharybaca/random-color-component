/* eslint-disable react/prop-types */
import "./random-color.css";

export default function RandomColor(props) {
    return (
        <div className="random-color-container" style={{backgroundColor: props.color}}>
            
        </div>
    )
}