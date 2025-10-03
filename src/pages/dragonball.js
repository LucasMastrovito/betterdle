import Classic from "../components/classic";
import data from "../json/dragonball_characters.json";
import fields from "../json/dragonball_fields.json";
import logo from "../assets/dragonball-logo.png";
import bg from "../assets/dragonball-bg.jpg";

function Dragonball() {
    return (
        <div className="dle" style={{backgroundImage: `url(${bg})`}}>
            <img alt="logo" className="scale" src={logo} style={{maxWidth: "30vw", maxHeight: "20vh"}} />
            <Classic data={data} fields={fields} first_tips={{name: "First Arc", key: "first_arc"}} second_tips={{name: "First Episode", key: "first_episode"}} />
        </div>
    )
}

export default Dragonball;