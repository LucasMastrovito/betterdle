import { useState } from "react";
import Tips from "./tips";

function Tipscard(props) {
    const [showTips, setShowTips] = useState(false);

    return (
        <div className="tips-container card">
            { props.first_tips ? 
            <span>
                <h3 className="outline" style={{ marginTop: '0' }}>Tips</h3>
                <div style={{ display: showTips ? "flex" : "none", gap: "3em", paddingBottom: "1em" }}>
                    <Tips name={props.first_tips.name} tips={props.random ? props.random[props.first_tips.key] : ""} tries={5 - props.tries}></Tips>
                    <Tips name={props.second_tips.name} tips={props.random ? props.random[props.second_tips.key] : ""} tries={10 - props.tries}></Tips>
                </div>
                <button onClick={(e) => setShowTips(!showTips)}>{!showTips ? 'Show' : 'Hide'}</button>
            </span>
            :
            <span></span>
            }
        </div>
    )
}

export default Tipscard;