import Classic from "../components/classic";
import data from "../json/lol_characters.json";
import fields from "../json/lol_fields.json";
import bg from "../assets/lol-bg.jpg";
import logo from "../assets/lol-logo.png";
import Findmode from "../components/findmode";
import Modemenu from "../components/modemenu";
import { useState } from "react";
import Modebtn from "../components/modebtn";
import { getRandomCharacter } from "../components/getrandom";
import { useNavigate } from "react-router-dom";
import Homebtn from "../components/homebtn";
import Dlemenu from "../components/dlemenu";
import Dlemenubtn from "../components/dlemenubtn";

function Lol() {
    const navigate = useNavigate();
    const random = [getRandomCharacter(data, "classic"), getRandomCharacter(data, "title"), getRandomCharacter(data, "picture")];
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
        <Dlemenu key={'menu'} buttons={[
            <Dlemenubtn key={1} name={"Classic"} desc={"Find the daily character"} index={1} click={changeMode} />,
            <Dlemenubtn key={2} name={"Title"} desc={"Guess by the champion's title"} index={2} click={changeMode} />,
            <Dlemenubtn key={3} name={"Picture"} desc={"Guess from a filtered image"} index={3} click={changeMode} />
        ]} />,
        <Classic key={'classic-' + remount} name={"lol"} mode="classic" data={data} random={random[0]} next={changeMode} fields={fields} first_tips={{name: "Class", key: "class"}} second_tips={{name: "Regions", key: "regions"}} />,
        <Findmode key={'title-' + remount} name={"lol"} mode="title" data={data} random={random[1]} next={changeMode} filter="title" first_tips={{name: "Class", key: "class"}} second_tips={{name: "Regions", key: "regions"}} />,
        <Findmode key={'picture-' + remount} name={"lol"} mode="picture" data={data} random={random[2]} next={changeMode} filter="image_url" />
    ];

    return (
        <div className="dle" style={{backgroundImage: `url(${bg})`}}>
            <Homebtn />
            <img alt="logo" className="scale logo" src={logo} onClick={(e) => changeMode(0)} />
                {modes[current]}
                <Modemenu
                    current={current}
                    buttons={[
                        <Modebtn key={1} name="Classic" index={1} click={changeMode} />,
                        <Modebtn key={2} name="Title" index={2} click={changeMode} />,
                        <Modebtn key={3} name="Picture" index={3} click={changeMode} />
                    ]}
                />
        </div>
    )
}

export default Lol;