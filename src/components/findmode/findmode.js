import { useEffect, useState } from "react";
import { getTries, saveTry } from "../utils/save";
import Searchbar from "../dle/searchbar";
import Win from "../dle/win";
import CharacterRow from "./characterRow";
import Tipscard from "../dle/tipscard";
import "./findmode.css";
import { filterByField, getRandomCharacter, getYesterdayCharacter } from "../utils/getrandom";
import { isImg, isSound } from "../utils/utils";

function clamp(num, min, max) {
    return num <= min
        ? min
        : num >= max
            ? max
            : num
}

function Findmode(props) {
    const [loading, setLoading] = useState(true);
    const random = getRandomCharacter(filterByField(props.data, props.filter), props.mode + props.modeFilter);
    const yesterday = getYesterdayCharacter(props.data, props.mode + props.modeFilter);
    const filter = Array.isArray(random[props.filter]) ? getRandomCharacter(random[props.filter], props.mode) : random[props.filter];
    const [data, setData] = useState(filterByField(props.data, props.filter));
    const [rows, setRows] = useState([]);
    const [tries, setTries] = useState(0);
    const [find, setFind] = useState(false);
    const [pic, setPic] = useState(false);
    const [sound, setSound] = useState(false);
    //images
    const [grey, setGrey] = useState(true);
    const [blur, setBlur] = useState("6px");
    const [activeBlur, setActiveBlur] = useState(true);
    const [zoom, setZoom] = useState(true);
    const [scale, setScale] = useState("1.7");

    useEffect(() => {
        const loadGame = () => {
            const load = getTries(props.name, props.mode, props.modeFilter);
            const rowsBuffer = [];
            const dataBuffer = Object.assign([{}], filterByField(props.data, props.filter));
            var blurBuffer = 6;
            var scaleBuffer = 1.7;

            load.forEach((el) => {
                if (dataBuffer[el].name === random.name) {
                    setFind(true);
                }
                rowsBuffer.push(<CharacterRow key={dataBuffer[el].name} class={dataBuffer[el].name === random.name ? 'match' : 'wrong'} name={dataBuffer[el].name} img={dataBuffer[el].image_url} />);
                blurBuffer = clamp(parseFloat(blurBuffer) - 1, 0, 10);
                scaleBuffer = clamp(parseFloat(scaleBuffer) - 0.1, 1, 5);
                dataBuffer.splice(el, 1);
            });
            setRows(rowsBuffer.reverse());
            setTries(rowsBuffer.length);
            setBlur(`${blurBuffer}px`);
            setScale(`${scaleBuffer}`);
            setLoading(false);
            setData(dataBuffer);
        }
        if (data && loading && random) {
            setPic(isImg(filter));
            setSound(isSound(filter));
            loadGame();
        }
    }, [loading, random, props.name, props.data, props.mode, props.filter, props.modeFilter, data, filter]);

    const submit = (index) => {
        if (data[index].name === random.name) {
            setFind(true);
        }
        saveTry(props.name, props.mode, props.modeFilter, index);
        setBlur(`${clamp(parseFloat(blur) - 1, 0, 10)}px`);
        setScale(`${clamp(parseFloat(scale) - 0.1, 1, 5)}`);
        setRows([<CharacterRow key={data[index].name} class={data[index].name === random.name ? 'match' : 'wrong'} name={data[index].name} img={data[index].image_url} />, ...rows]);
        setTries(tries + 1);
        data.splice(index, 1);
    }

    return (
        <div className="classic">
            {
                pic ?
                    <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2em" }}>
                        <div className={`card card-${props.name}`}>
                            <h2 className="margin-no outline">{props.desc}</h2>
                            <div className={`img-container img-container-${props.name}`}>
                                <img alt="img" src={filter} className="img-to-find" style={{ filter: `grayscale(${grey ? '1' : '0'}) ${activeBlur ? `blur(${blur})` : ''}`, transform: `scale(${zoom ? scale : 1})` }} />
                            </div>
                            <div className={`findmode-card`} style={{ display: "flex" }}>
                                <h3 className="outline">Grayscale</h3>
                                <label className="switch">
                                    <input name="grey" type="checkbox" checked={grey} onChange={(e) => setGrey(!grey)} />
                                    <span className="slider"></span>
                                </label>
                                <h3 className="outline">Blur</h3>
                                <label className="switch">
                                    <input name="blur" type="checkbox" checked={activeBlur} onChange={(e) => setActiveBlur(!activeBlur)} />
                                    <span className="slider"></span>
                                </label>
                                <h3 className="outline">Zoom</h3>
                                <label className="switch">
                                    <input name="zoom" type="checkbox" checked={zoom} onChange={(e) => setZoom(!zoom)} />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        </div>
                    </span>
                    :
                    sound ?
                        <div className={`card card-${props.name}`}>
                            <h3 className="margin-no outline" style={{ marginBottom: '1em' }}>{props.desc}</h3>
                            <audio controls className={`audio-${props.name}`}>
                                <source src={filter} type="audio/ogg"></source>
                            </audio>
                            <Tipscard name={props.name} random={random} tries={tries} first_tips={props.first_tips} second_tips={props.second_tips} />
                        </div>
                        :
                        <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
                            <div className={`card card-${props.name}`}>
                                <h3 className="margin-no outline" style={{ marginBottom: '1em' }}>{props.desc}</h3>
                                <h1 className="outline">{props.array ?
                                    <div style={{ display: "flex" }}>
                                        {Array.from({ length: tries + 1 }, (_, i) => (
                                            <div key={i}>{random[props.filter][i]}</div>
                                        ))}
                                    </div> : filter}</h1>
                                <Tipscard name={props.name} random={random} tries={tries} first_tips={props.first_tips} second_tips={props.second_tips} />
                            </div>
                        </div>
            }
            <Searchbar data={data} submit={submit} name={props.name} find={find} />
            <div className="grid">
                <div className="row">
                    <p className="field-name outline">Character</p>
                </div>
                {rows}
            </div>
            <h2 className="outline" style={{ color: "white" }}>Yesterday, the character was <span style={{ color: "#ffbc2aff", fontSize: "large" }}>{yesterday.name}</span> !</h2>
            {find ? <Win data={random} tries={tries} next={props.next} delay="1s"></Win> : <span></span>}
        </div>
    )
}

export default Findmode;