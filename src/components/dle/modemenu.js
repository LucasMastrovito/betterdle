function Modemenu(props) {
    return (
        <div className="card modemenu" style={{display: props.current === 0 ? "none" : "flex"}}>
            <h2 className="outline" style={{marginTop: '0'}}>Modes</h2>
            <div style={{display: "flex", gap: "1em"}}>
                {props.buttons}
            </div>
        </div>
    )
}

export default Modemenu;