import Classic from "../components/classic";
import data from "../json/sw_characters.json";
import fields from "../json/sw_fields.json";
import bg from "../assets/sw-bg.jpg";
import logo from "../assets/sw-logo.png";
import { useNavigate } from "react-router-dom";
import Findmode from "../components/findmode";
import Modemenu from "../components/modemenu";
import Modebtn from "../components/modebtn";
import { useState } from "react";
import { getRandomCharacter } from "../components/getrandom";

function Sw() {
    const navigate = useNavigate();
    const random = [getRandomCharacter(data, "classic"), getRandomCharacter(data, "picture")];
    const [current, setCurrent] = useState(0);
    const modes = [
        <Classic name={"sw"} mode="classic" data={data} random={random[0]} fields={fields} first_tips={{name: "Type", key: "type"}} second_tips={{name: "Family", key: "family"}} />,
        <Findmode name={"sw"} mode="picture" data={data} random={random[1]} filter="image_url" />,
        <Findmode />
    ];
    
    const changeMode = (index) => {
        setCurrent(index);
    };

    const home = (e) => {
        navigate('/');
    };

    return (
        <div className="dle" style={{backgroundImage: `url(${bg})`}}>
            <button className="home-btn" onClick={home}>Home</button>
            <img alt="logo" className="scale" src={logo} style={{maxWidth: "30vw", maxHeight: "20vh"}} />
            <Modemenu
                buttons={[
                    <Modebtn key={1} name="Classic" index={0} click={changeMode} />,
                    <Modebtn key={2} name="Picture" index={1} click={changeMode} />
                ]}
            />
            {modes[current]}
        </div>
    )
}

export default Sw;