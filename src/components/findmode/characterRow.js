function CharacterRow(props) {
    return (
        <div className={`characterrow ${props.class} scale`}>
            <img alt="img" className="submit-img"  src={props.img} style={{position: "absolute"}} />
            <h3 className="outline" style={{width: "100%"}}>{props.name}</h3>
        </div>
    )
}

export default CharacterRow;