function Submit(props) {
    return (
        <div className={`submit submit-${props.name}`} onClick={() => document.getElementById(props.item.name).click()}>
            <img className="submit-img" src={props.item.image_url} alt={props.item.name} />
            <div className="submit-text">
                <input id={props.item.name} className="submit-input" type="submit" value={props.item.name}></input>
                <p>
                    {props.item.aliases ? props.item.aliases.replace(/;/g, " -") : ""}
                </p>
            </div>
        </div>
    )
}

export default Submit;