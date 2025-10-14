import Classic from "../components/classic";
import data from "../json/onepiece_characters.json";
import fields from "../json/onepiece_fields.json";
import bg from "../assets/onepiece-bg.jpg";
import logo from "../assets/onepiece-logo.png";
import Findmode from "../components/findmode";
import Modemenu from "../components/modemenu";
import { useState } from "react";
import Modebtn from "../components/modebtn";
import { filterByField, getRandomCharacter } from "../components/getrandom";
import { useNavigate } from "react-router-dom";
import Homebtn from "../components/homebtn";


function Onepiece() {
    const navigate = useNavigate();
    const random = [getRandomCharacter(data, "classic"), getRandomCharacter(data, "picture"), getRandomCharacter(filterByField(data, "fruit_name"), "fruit")];
    const [current, setCurrent] = useState(0);
    const [remount, setRemount] = useState(0);
    const maxModes = 3;
    const changeMode = (index) => {
        if (index === -1) {
            if (current + 1 >= maxModes) {
                navigate('/');
            } else {
                setCurrent(current + 1);
            }
        } else {
            setRemount(remount + 1);
            setCurrent(index);
        }
    };
    const modes = [
        <Classic key={'classic-' + remount} name={"onepiece"} mode="classic" data={data} random={random[0]} next={changeMode} fields={fields} first_tips={{name: "First Arc", key: "first_arc"}} second_tips={{name: "First Episode", key: "first_episode"}} />,
        <Findmode key={'picture-' + remount} name={"onepiece"} mode="picture" data={data} random={random[1]} next={changeMode} filter="image_url" remount={remount} />,
        <Findmode key={'fruit-' + remount} name={"onepiece"} mode="fruit" data={filterByField(data, "fruit_name")} random={random[2]} next={changeMode} filter="fruit_name" remount={remount} first_tips={{name: "Fruit Type", key: "devil_fruit_type"}} second_tips={{name: "Traduction", key: "english_name"}} />
    ];

    return (
        <div className="dle" style={{backgroundImage: `url(${bg})`}}>
            <Homebtn />
            <img alt="logo" className="scale logo" src={logo} />
            {modes[current]}
            <Modemenu
                buttons={[
                    <Modebtn key={1} name="Classic" index={0} click={changeMode} />,
                    <Modebtn key={2} name="Picture" index={1} click={changeMode} />,
                    <Modebtn key={3} name="Fruit" index={2} click={changeMode} />
                ]}
            />
        </div>
    )
}

export default Onepiece;