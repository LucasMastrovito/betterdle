function Dlelist(props) {
    return (
        <div className="dlelist">
            <h1 className="title">{props.name}</h1>
            {/* <img alt="name" className="dlelist-name" src={`/${props.name}.png`} /> */}
            <div className="card dlelist-btns">
                {props.buttons}
            </div>
        </div>
    )
}

export default Dlelist;