import Classic from "../components/classic";
import data from "../json/sw_characters.json";
import fields from "../json/sw_fields.json";
import bg from "../assets/sw-bg.jpg";
import logo from "../assets/sw-logo.png";

function Sw() {
    return (
        <div className="dle" style={{backgroundImage: `url(${bg})`}}>
            <img alt="logo" className="scale" src={logo} style={{maxWidth: "30vw", maxHeight: "20vh"}} />
            <Classic name={"sw"} data={data} fields={fields} first_tips={{name: "First Arc", key: "first_arc"}} second_tips={{name: "First Episode", key: "first_episode"}} />
        </div>
    )
}

export default Sw;