function Dropdown(props) {
    const change = (e) => {
        props.change(e.target.value);
    };

    return (
        <div className="dropdown">
            <label htmlFor={props.name} className="outline">{props.name.toUpperCase()}</label>
            <select className="select" name={props.name} onChange={change}>
                {props.options}
            </select>
        </div>
    )
}

export default Dropdown;