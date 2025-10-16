function Dlemenubtn(props) {
    return (
        <div className="dlemenubtn scale" onClick={(e) => props.click(props.index)}>
            <img alt="logo" src={props.logo} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Dlemenubtn;