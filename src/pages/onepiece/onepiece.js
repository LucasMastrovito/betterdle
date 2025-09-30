import Classic from "../../components/classic";
import data from "../../json/onepiece_characters.json";
import fields from "../../json/onepiece_fields.json";
import logo from "../../assets/onepiece-logo.png";

function Onepiece() {
    return (
        <div id="onepiece">
            <img alt="logo" className="scale" src={logo} style={{maxWidth: "30vw", maxHeight: "20vh"}} />
            <Classic data={data} fields={fields} />
        </div>
    )
}

export default Onepiece;