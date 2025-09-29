import Field from "./field";

function Row(props) {
    const data = props.data;
    console.log(data)

    return (
        <div className="row">
            { Object.entries(data).map(([key, value], index) => (
                <Field key={index} name={value} />
            ))}
        </div>
    )
}

export default Row;