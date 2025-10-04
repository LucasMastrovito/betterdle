import Classic from "../components/classic";
import data from "../json/onepiece_characters.json";
import fields from "../json/onepiece_fields.json";
import bg from "../assets/onepiece-bg.jpg";
import logo from "../assets/onepiece-logo.png";

function Onepiece() {
    return (
        <div className="dle" style={{backgroundImage: `url(${bg})`}}>
            <img alt="logo" className="scale" src={logo} style={{maxWidth: "30vw", maxHeight: "20vh"}} />
            <Classic name={"onepiece"} data={data} fields={fields} first_tips={{name: "First Arc", key: "first_arc"}} second_tips={{name: "First Episode", key: "first_episode"}} />
        </div>
    )
}

export default Onepiece;