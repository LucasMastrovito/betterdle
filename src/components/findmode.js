import { useEffect, useState } from "react";
import { getTries, saveTry } from "./save";
import Searchbar from "./searchbar";
import Win from "./win";
import CharacterRow from "./characterRow";

function clamp(num, min, max) {
  return num <= min 
    ? min 
    : num >= max 
      ? max 
      : num
}

function Findmode(props) {
    console.log(props.data)
    const [loading, setLoading] = useState(true);
    const random = props.random;
    const filter = random[props.filter];
    const [data, setData] = useState(props.data);
    const [rows, setRows] = useState([]);
    const [tries, setTries] = useState(0);
    const [find, setFind] = useState(false);
    const [pic, setPic] = useState(false);
    //images
    const [grey, setGrey] = useState(true);
    const [blur, setBlur] = useState("8px");
    const [activeBlur, setActiveBlur] = useState(true);
    const [zoom, setZoom] = useState(true);
    const [scale, setScale] = useState("2");

    useEffect(() => {
        const loadGame = () => {
            const load = getTries(props.name, props.mode);
            const rowsBuffer = [];
            const dataBuffer = Object.assign([{}], props.data);

            load.forEach((el) => {
                if (dataBuffer[el].name === random.name) {
                    setFind(true);
                }
                rowsBuffer.push(<CharacterRow key={dataBuffer[el].name} class={dataBuffer[el].name === random.name ? 'match' : 'wrong'} name={dataBuffer[el].name} img={dataBuffer[el].image_url} />);
                dataBuffer.splice(el, 1);
            });
            setRows(rowsBuffer.reverse());
            setTries(rowsBuffer.length);
            setLoading(false);
            setData(dataBuffer);
        }
        if (loading && random) {
            loadGame();
        }
        setPic(filter.includes(".png") || filter.includes(".jpg"));
    }, [loading, random, props.name, props.data, props.mode, data, filter]);
    
    const submit = (index) => {
        if (data[index].name === random.name) {
            setFind(true);
        }
        saveTry(props.name, props.mode, index);
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
                <span style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "2em"}}>
                    <div className="img-container">
                        <img alt="img" src={filter} className="img-to-find" style={{filter: `grayscale(${grey ? '1' : '0'}) ${activeBlur ? `blur(${blur})` : ''}`, transform: `scale(${zoom ? scale : 1})`}} />
                    </div>
                    <div className="card findmode-card" style={{display: "flex"}}>
                        <h3>Grayscale</h3>
                        <label className="switch">
                            <input type="checkbox" checked={grey} onChange={(e) => setGrey(!grey)} />
                            <span className="slider"></span>
                        </label>
                        <h3>Blur</h3>
                        <label className="switch">
                            <input type="checkbox" checked={activeBlur} onChange={(e) => setActiveBlur(!activeBlur)} />
                            <span className="slider"></span>
                        </label>
                        <h3>Zoom</h3>
                        <label className="switch">
                            <input type="checkbox" checked={zoom} onChange={(e) => setZoom(!zoom)} />
                            <span className="slider"></span>
                        </label>
                    </div>
                </span>
                :
                <div className="card">
                    <h1 className="outline">{filter}</h1>
                </div>
            }
            <Searchbar data={data} submit={submit} />
            <div className="grid">
                <div className="row">
                    <p className="field-name outline">Character</p>
                </div>
                {rows}
            </div>
            {find ? <Win data={random} tries={tries} next={props.next} delay="1s"></Win> : <span></span>}
        </div>
    )
}

export default Findmode;