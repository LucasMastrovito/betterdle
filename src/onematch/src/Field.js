import { useEffect, useState } from "react";

function Field(props) {
    const [value, setValue] = useState(props.value);

    useEffect(() => {
        setValue(props.value);
    }, [props.value])

    const update = (e) => {
        setValue(e.target.value);
        props.update(props.name, e.target.value, props.title);
    }

    return (
        <div className="field">
            <h2 style={{color: "coral"}}>{props.name}:</h2>
            { props.value != null ?
            <h3>{props.value}</h3>
            :
            props.required ? 
            <h2 style={{color: 'red'}}>A REMPLIR</h2>
            : <span></span> }
            <input type="text" value={value ? value : ''} onChange={update}></input>
        </div>
    )
}

export default Field;