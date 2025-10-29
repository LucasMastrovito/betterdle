import Dropdown from "./dropdown";
import { getUniqueValues } from "./utils";

function Datafilter(props) {
    const options = getUniqueValues(props.data, props.filter);

    const change = (value) => {
        props.change(props.filter, value);
    };

    return (
        <Dropdown
            name={props.filter}
            options={options.map((option, index) =>
                <option key={index} className="option" value={option}>{option}</option>
            )}
            change={change} />
    )
}

export default Datafilter;