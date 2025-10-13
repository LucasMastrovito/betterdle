import { useEffect, useState } from "react";
import Row from "./row";
import "./classic.css";
import Win from "./win";
import Tips from "./tips";
import Indicator from "./indicator";
import { getTries, saveTry } from "./save";
import Searchbar from "./searchbar";

function Classic(props) {
  const random = props.random;
  const [data, setData] = useState(props.data);
  const fields = props.fields;
  const [rows, setRows] = useState([]);
  const [find, setFind] = useState(false);
  const [tries, setTries] = useState(0);
  const [showTips, setShowTips] = useState(false);
  const [loading, setLoading] = useState(true);

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
      <div className="tips-container card">
        <h3 className="outline" style={{ marginTop: '0' }}>Tips</h3>
        <div style={{ display: showTips ? "flex" : "none", gap: "3em", paddingBottom: "1em" }}>
          <Tips name={props.first_tips.name} tips={random ? random[props.first_tips.key] : ""} tries={5 - tries}></Tips>
          <Tips name={props.second_tips.name} tips={random ? random[props.second_tips.key] : ""} tries={10 - tries}></Tips>
        </div>
        <button onClick={(e) => setShowTips(!showTips)}>{!showTips ? 'Show' : 'Hide'}</button>
      </div>
      <Searchbar data={data} submit={submit} find={find} />
      <div className="grid">
        <div className="row">
          {fields.map((field, index) => (
            <p key={index} className="field-name outline">{field.title}</p>
          ))}
        </div>
        {rows}
      </div>
      <Indicator />
      {find ? <Win data={random} tries={tries}></Win> : <span></span>}
    </div>
  )
}

export default Classic;