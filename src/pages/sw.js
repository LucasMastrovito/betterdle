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
import Homebtn from "../components/homebtn";

function Sw() {
    const navigate = useNavigate();
    const random = [getRandomCharacter(data, "classic"), getRandomCharacter(data, "picture")];
    const [current, setCurrent] = useState(0);
    const maxModes = 2;
    const changeMode = (index) => {
        if (index === -1) {
            if (current + 1 >= maxModes) {
                navigate('/');
            } else {
                setCurrent(current + 1);
            }
        } else {
            setCurrent(index);
        }
    };
    const modes = [
        <Classic name={"sw"} mode="classic" data={data} random={random[0]} next={changeMode} fields={fields} first_tips={{name: "Type", key: "type"}} second_tips={{name: "Family", key: "family"}} />,
        <Findmode name={"sw"} mode="picture" data={data} random={random[1]} next={changeMode} filter="image_url" />,
        <Findmode />
    ];

    return (
        <div className="dle" style={{backgroundImage: `url(${bg})`}}>
            <Homebtn />
            <img alt="logo" className="scale logo" src={logo} />
            {modes[current]}
            <Modemenu
                buttons={[
                    <Modebtn key={1} name="Classic" index={0} click={changeMode} />,
                    <Modebtn key={2} name="Picture" index={1} click={changeMode} />
                ]}
            />
        </div>
    )
}

export default Sw;