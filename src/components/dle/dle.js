import "./dle.css";
import "../utils/utils.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ModeContext } from "../utils/modesContext";
import Homebtn from "../utils/homebtn";
import Dlemenu from "./dlemenu";

function Dle(props) {
    const navigate = useNavigate();
    const modes = props.modes;
    const maxModes = modes.length;
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        import(`../../pages/${props.name}.css`);
    }, [props.name])

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

    return (
        <ModeContext.Provider value={{ changeMode }}>
            <div className={`dle dle-${props.name}`}>
                <Homebtn />
                <div style={{paddingBottom: "2vh"}}>
                    <img alt="logo" className="scale logo" src={`/assets/${props.name}-logo.png`} onClick={(e) => changeMode(0)} />
                </div>
                <Dlemenu name={props.name} menu={false} current={current} buttons={props.buttons} />
                {modes[current]}
            </div>
        </ModeContext.Provider>
    )
}

export default Dle;