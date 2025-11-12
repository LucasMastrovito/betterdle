import { formatValue } from "../utils/utils";

function Tips(props) {
    const text = typeof (props.tips) === "string" ? props.tips.replace(/;/g, ", ") : props.tips !== null ? formatValue(props.tips, props.field) : "Unknown";

    return (
        <div className={`card card-${props.game} tips-container`} style={{ padding: "1em" }}>
            <h3 className="outline" style={{ marginTop: "0" }}>{props.name}</h3>
            {props.tries > 0 ?
                <div>
                    <p className="margin-no outline">{props.tries} more tries</p>
                </div>
                :
                <div>
                    <p className="margin-no outline">{text}</p>
                </div>
            }
        </div>
    )
}

export default Tips;