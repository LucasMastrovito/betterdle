import Classic from "../components/classic";
import data from "../json/anime_characters.json";
import fields from "../json/anime_fields.json";
import bg from "../assets/anime-bg.jpg";
import logo from "../assets/anime-logo.png";
import Findmode from "../components/findmode";
import Modemenu from "../components/modemenu";
import { useState } from "react";
import Modebtn from "../components/modebtn";
import { getRandomCharacter } from "../components/getrandom";
import { useNavigate } from "react-router-dom";
import Homebtn from "../components/homebtn";


function Anime() {
    const navigate = useNavigate();
    const random = [getRandomCharacter(data, "classic"), getRandomCharacter(data, "picture")];
    const [current, setCurrent] = useState(0);
    const [remount, setRemount] = useState(0);
    const maxModes = 2;
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
        <Classic key={'classic-' + remount} name={"anime"} mode="classic" data={data} random={random[0]} next={changeMode} fields={fields} first_tips={{name: "First Arc", key: "first_arc"}} second_tips={{name: "First Episode", key: "first_episode"}} />,
        <Findmode key={'picture-' + remount} name={"anime"} mode="picture" data={data} random={random[1]} next={changeMode} filter="image_url" />
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

export default Anime;