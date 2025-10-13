import Classic from "../components/classic";
import data from "../json/onepiece_characters.json";
import fields from "../json/onepiece_fields.json";
import bg from "../assets/onepiece-bg.jpg";
import logo from "../assets/onepiece-logo.png";
import Findmode from "../components/findmode";
import Modemenu from "../components/modemenu";
import { useState } from "react";
import Modebtn from "../components/modebtn";
import { getRandomCharacter } from "../components/getrandom";
import { useNavigate } from "react-router-dom";


function Onepiece() {
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
        <Classic name={"onepiece"} mode="classic" data={data} random={random[0]} next={changeMode} fields={fields} first_tips={{name: "First Arc", key: "first_arc"}} second_tips={{name: "First Episode", key: "first_episode"}} />,
        <Findmode name={"onepiece"} mode="picture" data={data} random={random[1]} next={changeMode} filter="image_url" />,
        <Findmode />
    ];

    const home = (e) => {
        navigate('/');
    };

    return (
        <div className="dle" style={{backgroundImage: `url(${bg})`}}>
            <button className="home-btn" onClick={home}>Home</button>
            <img alt="logo" className="scale" src={logo} style={{maxWidth: "30vw", maxHeight: "20vh"}} />
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

export default Onepiece;