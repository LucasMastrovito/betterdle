import "./dle.css";
import "../utils/utils.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ModeContext } from "../utils/modesContext";
import Homebtn from "../utils/homebtn";
import Dlemenu from "./dlemenu";

function Dle(props) {
    const navigate = useNavigate();
    const modes = props.modes;
    const maxModes = modes.length;
    const [key, setKey] = useState(0);
    const [data, setData] = useState(null);
    const [language, setLanguage] = useState("en");
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        import(`../../pages/${props.name}.css`);
    }, [props.name]);

    useEffect(() => {
        import(`../../json/${props.name}_characters_${language}.json`)
            .then(module => {
                setData(module.default);
                setKey(prev => prev + 1);
            })
            .catch(err => console.error("Erreur de chargement JSON :", err));
    }, [language]);

    const changeMode = (index) => {
        if (index === -1) {
            if (current + 1 >= maxModes) {
                navigate('/');
            } else {
                setKey(prev => prev + 1);
                setCurrent(current + 1);
            }
        } else {
            setKey(prev => prev + 1);
            setCurrent(index);
        }
    };

    return (
        <ModeContext.Provider value={{ changeMode }}>
            <div className={`dle dle-${props.name}`}>
                <Homebtn />
                <div style={{ paddingBottom: "2vh" }}>
                    <img alt="logo" className="scale logo" src={`/assets/${props.name}-logo.png`} onClick={(e) => changeMode(0)} />
                </div>
                {/* <div className="card">
                    <label htmlFor="lang"></label>
                    <select name="lang" id="lang" onChange={(e) => setLanguage(e.target.value)}>
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                    </select>
                </div> */}
                <Dlemenu name={props.name} menu={false} current={current} buttons={props.buttons} />
                {
                    React.cloneElement(modes[current], {
                        data: data,
                        key: key
                    })
                }
            </div>
        </ModeContext.Provider>
    )
}

export default Dle;