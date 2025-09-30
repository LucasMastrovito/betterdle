import Field from "./field";

function Row(props) {
    const data = props.data;

    return (
        <div className="row">
            { Object.entries(data).map(([key, value], index) => (
                <Field key={index}  name={value} field={props.field[index]} random={props.random} />
            ))}
        </div>
    )
}

export default Row;