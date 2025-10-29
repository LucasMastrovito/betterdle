import "./dle.css";
import "../utils/utils.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { ModeContext } from "../utils/modesContext";
import Homebtn from "../utils/homebtn";
import Dlemenu from "./dlemenu";
import Dropdown from "../utils/dropdown";
import Datafilter from "../utils/datafilter";
import { filterByExactField } from "../utils/getrandom";

function Dle(props) {
    const navigate = useNavigate();
    const modes = props.modes;
    const maxModes = modes.length;
    const [key, setKey] = useState(0);
    const [data, setData] = useState(null);
    const [baseData, setBaseData] = useState(null);
    const [filter, setFilter] = useState("all");
    const [fieldFilter, setFieldFilter] = useState("");
    const [language, setLanguage] = useState("en");
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        import(`../../pages/${props.name}.css`);
    }, [props.name]);

    useEffect(() => {
        import(`../../json/${props.name}_characters_${language}.json`)
            .then(module => {
                setData(filter === "all" ? module.default : filterByExactField(module.default, fieldFilter, filter));
                setBaseData(module.default);
                setKey(prev => prev + 1);
            })
            .catch(err => console.error("Erreur de chargement JSON :", err));
    }, [language, props.name, fieldFilter, filter]);

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

    const changeLanguage = (value) => {
        setLanguage(value);
    };

    const applyFilter = (field, value) => {
        setData(value === "all" ? baseData : filterByExactField(baseData, field, value));
        setFilter(value);
        setFieldFilter(field);
        setKey(prev => prev + 1);
    }

    return (
        <ModeContext.Provider value={{ changeMode }}>
            <div className={`dle dle-${props.name}`}>
                <Homebtn />
                <div style={{ paddingBottom: "2vh" }}>
                    <img alt="logo" className="scale logo" src={`/assets/${props.name}-logo.png`} onClick={(e) => changeMode(0)} />
                </div>
                <div className={`card card-${props.name} settings`} style={{ display: props.settings || props.lang ? "flex" : "none" }}>
                    {props.lang ?
                        <Dropdown name="lang" options={props.lang} change={changeLanguage} />
                        :
                        <span />
                    }
                    {data && props.filters ?
                        props.filters.map((field, index) =>
                            <Datafilter key={index} data={baseData} filter={field} change={applyFilter} />
                        )
                        :
                        <span />
                    }
                    {props.settings}
                </div>
                <Dlemenu name={props.name} menu={false} current={current} buttons={props.buttons} />
                {
                    React.cloneElement(modes[current], {
                        data: data,
                        modeFilter: filter,
                        key: key
                    })
                }
            </div>
        </ModeContext.Provider>
    )
}

export default Dle;