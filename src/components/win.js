import { useState } from "react";

function Win(props) {
    const [display, setDisplay] = useState("flex");

    const click = (e) => {
        setDisplay("none");
    }
    console.log(props.data)
    return (
        <div className="win" style={{display: display}}>
            <div className="modal">
                <h2>Gratz !</h2>
                <p>You found the daily character</p>
                <div>
                    <img alt="img" src={props.data.image_url} className="win-img" />
                    <h2>{props.data.name}</h2>
                </div>
                <button className="btn" onClick={click}>Next</button>
            </div>
        </div>
    )
}

export default Win;