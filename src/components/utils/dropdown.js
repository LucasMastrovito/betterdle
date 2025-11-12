import { useEffect, useState } from "react";

function findIndexByValue(elements, value) {
    return elements.findIndex(el => el.props?.value === value);
}

function Dropdown(props) {
    const [selected, setSelected] = useState(props.default ? findIndexByValue(props.options, props.default) : 0);

    useEffect(() => {
        setSelected(props.default ? findIndexByValue(props.options, props.default) : 0);
    }, [props.default, props.options]);

    const change = (e) => {
        props.change(e.target.value);
    };

    return (
        <div className="dropdown">
            <label htmlFor={props.name} className="outline">{props.name.toUpperCase()}</label>
            {props.name === "language" ?
                <select className="select" name={props.name} onChange={change} value={props.options[selected].props.value}>
                    {props.options}
                </select>
                :
                <select className="select" name={props.name} onChange={change}>
                    {props.options}
                </select>
            }
        </div>
    )
}

export default Dropdown;