import { useState } from "react";
import Tips from "./tips";

function Tipscard(props) {
    const [showTips, setShowTips] = useState(false);

    return (
        <div className={`tips-container`}>
            { props.first_tips ? 
            <span>
                <div style={{ display: showTips ? "flex" : "none", gap: "3em", paddingBottom: "1em" }}>
                    <Tips game={props.name} name={props.first_tips.name} tips={props.random ? props.random[props.first_tips.key] : ""} tries={5 - props.tries} field={props.first_tips.key}></Tips>
                    <Tips game={props.name} name={props.second_tips.name} tips={props.random ? props.random[props.second_tips.key] : ""} tries={10 - props.tries} field={props.second_tips.key}></Tips>
                </div>
                <button className={`btn-${props.name}`} onClick={(e) => setShowTips(!showTips)}>{!showTips ? 'Tips' : 'Hide'}</button>
            </span>
            :
            <span></span>
            }
        </div>
    )
}

export default Tipscard;