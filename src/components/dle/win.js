import { useState } from "react";
import { useMode } from "../utils/modesContext";

function Win(props) {
    const [display, setDisplay] = useState("flex");

    const { changeMode } = useMode();

    const click = (e) => {
        changeMode(-1);
        setDisplay("none");
    }

    const back = (e) => {
        setDisplay("none");
    }
    return (
        <div className="win" style={{display: display, animationDelay: `${props.delay}`}}>
            <div className="modal">
                <h1>Gratz !</h1>
                <h3>You found the daily character</h3>
                <div>
                    <img alt="img" src={props.data.image_url} className="win-img" />
                    <h2>{props.data.name}</h2>
                </div>
                <h3>{props.tries} tries</h3>
                <div style={{display:"flex", justifyContent: "center", gap: "1em"}}>
                    <button className="btn" onClick={back}>Back</button>
                    <button className="btn" onClick={click}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Win;