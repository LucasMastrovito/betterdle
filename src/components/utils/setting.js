import { useState } from "react";

function Setting(props) {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button onClick={() => setShow(!show)}>{props.name}</button>
            <div className="setting-content" style={{display: show ? "flex" : "none"}}>
                {props.content}
            </div>
        </div>
    )
}

export default Setting