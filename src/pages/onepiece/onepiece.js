import Classic from "../../components/classic";
import data from "../../json/onepiece_characters.json";
import fields from "../../json/onepiece_fields.json";
import logo from "../../assets/onepiece-logo.png";

/* {
    "key" : "",
    "title" : "",
    "null" : ""
} */

function Onepiece() {
    return (
        <div id="onepiece">
            <img alt="logo" src={logo} style={{width: "30vw"}} />
            <Classic data={data} fields={fields} />
        </div>
    )
}

export default Onepiece;