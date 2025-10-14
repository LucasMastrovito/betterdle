import { useEffect, useRef, useState } from "react";
import Row from "./row";
import "./classic.css";
import Win from "./win";
import Indicator from "./indicator";
import { getTries, saveTry } from "./save";
import Searchbar from "./searchbar";
import Tipscard from "./tipscard";

function Classic(props) {
  const random = props.random;
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
      const load = getTries(props.name, props.mode);
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
    if (loading && random) {
      loadGame();
    }
  }, [loading, random, props.name, props.data, props.mode, data, fields]);

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
    saveTry(props.name, props.mode, index);
    setRows([<Row key={data[index].name} character={data[index].name} data={newObj} field={fields} random={random} />, ...rows]);
    setTries(tries + 1);
    data.splice(index, 1);
  }

  return (
    <div className="classic">
      <Tipscard random={random} tries={tries} first_tips={props.first_tips} second_tips={props.second_tips} />
      <Searchbar data={data} submit={submit} find={find} />
      <div className="grid">
        <div ref={rowRef} className={`row ${hasScroll ? "has-scroll" : ""}`}>
          {fields.map((field, index) => (
            <p key={index} className="field-name outline">{field.title}</p>
          ))}
        </div>
        {rows}
      </div>
      <Indicator />
      {find ? <Win data={random} tries={tries} next={props.next} delay="5s"></Win> : <span></span>}
    </div>
  )
}

export default Classic;