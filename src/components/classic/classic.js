import { useEffect, useRef, useState } from "react";
import Row from "./row";
import "./classic.css";
import Win from "../dle/win";
import Indicator from "../dle/indicator";
import { getTries, saveTry } from "../utils/save";
import Searchbar from "../dle/searchbar";
import Tipscard from "../dle/tipscard";
import { getRandomCharacter, getYesterdayCharacter } from "../utils/getrandom";

function Classic(props) {
  const random = getRandomCharacter(props.data, props.mode + props.modeFilter);
  const yesterday = getYesterdayCharacter(props.data, props.mode + props.modeFilter);
  const [data, setData] = useState(props.data);
  const fields = props.fields;
  const [rows, setRows] = useState([]);
  const [find, setFind] = useState(false);
  const [tries, setTries] = useState(0);
  const [loading, setLoading] = useState(true);
  const rowRef = useRef(null);
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const el = rowRef.current;
      if (!el) return;
      setHasScroll(el.scrollWidth > el.clientWidth);
    };
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  useEffect(() => {
    const loadGame = () => {
      const load = getTries(props.name, props.mode, props.modeFilter);
      const rowsBuffer = [];
      const dataBuffer = Object.assign([{}], props.data);

      load.forEach((el) => {
        const newObj = {};
        if (dataBuffer[el].name === random.name) {
          setFind(true);
        }
        fields.forEach(key => {
          if (dataBuffer[el].hasOwnProperty(key.key)) {
            newObj[key.key] = dataBuffer[el][key.key];
          }
        });
        rowsBuffer.push(<Row key={dataBuffer[el].name} character={dataBuffer[el].name} data={newObj} field={fields} random={random} />);
        dataBuffer.splice(el, 1);
      });
      setRows(rowsBuffer.reverse());
      setTries(rowsBuffer.length);
      setLoading(false);
      setData(dataBuffer);
    }
    if (data && loading && random) {
      loadGame();
    }
  }, [loading, random, props.name, props.data, props.mode, props.modeFilter, data, fields]);

  const submit = (index) => {
    const newObj = {};

    if (data[index].name === random.name) {
      setFind(true);
    }

    fields.forEach(key => {
      if (data[index].hasOwnProperty(key.key)) {
        newObj[key.key] = data[index][key.key];
      }
    });
    saveTry(props.name, props.mode, props.modeFilter, index);
    setRows([<Row key={data[index].name} character={data[index].name} data={newObj} field={fields} random={random} />, ...rows]);
    setTries(tries + 1);
    data.splice(index, 1);
  }

  return (
    <div className="classic">
      <div className={`card card-${props.name}`}>
        <h2 className="margin-no outline">{props.desc}</h2>
        <Tipscard name={props.name} random={random} tries={tries} first_tips={props.first_tips} second_tips={props.second_tips} />
      </div>
      <Searchbar data={data} submit={submit} find={find} name={props.name} />
      <div className="grid">
        <div ref={rowRef} className={`row ${hasScroll ? "has-scroll" : ""}`}>
          {fields.map((field, index) => (
            <p key={index} className="field-name outline">{field.title}</p>
          ))}
        </div>
        {rows}
      </div>
      <h2 className="outline" style={{ color: "white" }}>Yesterday, the character was <span style={{ color: "#ffbc2aff", fontSize: "large" }}>{yesterday.name}</span> !</h2>
      <Indicator name={props.name} />
      {find ? <Win data={random} tries={tries} delay="5s"></Win> : <span></span>}
    </div>
  )
}

export default Classic;