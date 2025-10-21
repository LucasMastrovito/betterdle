function Dlelist(props) {
    return (
        <div className="dlelist">
            <img alt="name" className="dlelist-name" src={`/${props.name}.png`} />
            <div className="card dlelist-btns">
                {props.buttons}
            </div>
        </div>
    )
}

export default Dlelist;