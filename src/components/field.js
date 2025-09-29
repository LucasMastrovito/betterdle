function Field(props) {
    return (
        <div className="field">
            { typeof props.name === "string" && props.name.includes(".png") ?
            <img alt={props.name} src={props.name} style={{height: "5vw", width: "5vw"}} /> :
            <p>{ props.name }</p> }
        </div>
    )
}

export default Field;