import { useState } from "react";

function Win(props) {
    const [display, setDisplay] = useState("flex");

    const click = (e) => {
        props.next(-1);
        setDisplay("none");
    }

    const back = (e) => {
        setDisplay("none");
    }
    return (
        <div className="win" style={{display: display, animationDelay: `${props.delay}`}}>
            <div className="modal">
                <h2>Gratz !</h2>
                <p>You found the daily character</p>
                <div>
                    <img alt="img" src={props.data.image_url} className="win-img" />
                    <h2>{props.data.name}</h2>
                </div>
                <p>{props.tries} tries</p>
                <div style={{display:"flex", justifyContent: "center", gap: "1em"}}>
                    <button className="btn" onClick={back}>Back</button>
                    <button className="btn" onClick={click}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Win;