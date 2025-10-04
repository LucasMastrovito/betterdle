import { useEffect, useState } from "react";
import Submit from "./submit";
import Row from "./row";
import "./classic.css";
import Win from "./win";
import Tips from "./tips";
import Indicator from "./indicator";
import { useNavigate } from "react-router-dom";

function filterByNameOrAlias(arr, search) {
  const lowerSearch = search.toLowerCase();

  return arr
    .map(item => {
      const matches = [];

      if (item.name && item.name.toLowerCase().includes(lowerSearch)) {
        matches.push(item.name);
      }

      if (
        item.aliases &&
        item.aliases.toLowerCase().includes(lowerSearch)
      ) {
        matches.push(item.name);
      }

      return matches.length > 0 ? { ...item, matches } : null;
    })
    .filter(Boolean)
    .sort((a, b) => {
      const aStarts = a.name.toLowerCase().startsWith(lowerSearch);
      const bStarts = b.name.toLowerCase().startsWith(lowerSearch);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;

      return a.name.localeCompare(b.name);
    });
}

function getIndexByName(data, name) {
  return data.findIndex((item) => item.name === name);
}

function hashStringToNumber(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function seededShuffle(array, seed) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = (seed + i) % arr.length;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getRandomCharacter(data) {
  const today = new Date().toISOString().slice(0, 10);
  const seed = hashStringToNumber(today);

  const shuffled = seededShuffle(data, seed);
  return shuffled[0];
}

function saveTry(game, tryValue) {
  const stored = localStorage.getItem("dleData");
  let data = stored ? JSON.parse(stored) : {};

  if (!data[game]) {
    data[game] = { tries: [] };
  }
  data[game].tries.push(tryValue);
  localStorage.setItem("dleData", JSON.stringify(data));
}

function getTries(game) {
  const stored = localStorage.getItem("dleData");
  if (!stored) return [];

  const data = JSON.parse(stored);
  return data[game]?.tries || [];
}

function Classic(props) {
  const navigate = useNavigate();
  const data = props.data;
  const fields = props.fields;
  const [search, setSearch] = useState("");
  const [btns, setBtns] = useState([]);
  const [rows, setRows] = useState([]);
  const [random, setRandom] = useState(null);
  const [find, setFind] = useState(false);
  const [tries, setTries] = useState(0);
  const [showTips, setShowTips] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!random) {
      setRandom(getRandomCharacter(data));
    }
    const loadGame = () => {
      const load = getTries(props.name);
      const rowsBuffer = [];
      console.log(random)

      load.forEach((el) => {
        const newObj = {};
        if (data[el].name === random.name) {
          setFind(true);
        }
        fields.forEach(key => {
          if (data[el].hasOwnProperty(key.key)) {
            newObj[key.key] = data[el][key.key];
          }
        });
        rowsBuffer.push(<Row key={data[el].name} character={data[el].name} data={newObj} field={fields} random={random} />);
        data.splice(el, 1);
      });
      setRows(rowsBuffer.reverse());
      setTries(rowsBuffer.length);
      setLoading(false);
    }
    if (loading && random) {
      loadGame();
    }
  }, [loading, random, props.name, data, fields]);

  const update = (e) => {
    const results = filterByNameOrAlias(data, e.target.value);

    setSearch(e.target.value);
    if (e.target.value !== "") {
      setBtns(
        results.map((element, index) => (
          <Submit key={index} item={element} />
        )));
    } else {
      setBtns([]);
    }
  };

  const home = (e) => {
    navigate('/');
  }

  const submit = (e) => {
    const newObj = {};
    const index = getIndexByName(data, e.nativeEvent.submitter.value);

    e.preventDefault();

    if (e.nativeEvent.submitter.value === random.name) {
      setFind(true);
    }

    fields.forEach(key => {
      if (data[index].hasOwnProperty(key.key)) {
        newObj[key.key] = data[index][key.key];
      }
    });
    saveTry(props.name, index);
    setSearch("");
    setBtns([]);
    setRows([<Row key={e.nativeEvent.submitter.value} character={data[index].name} data={newObj} field={fields} random={random} />, ...rows]);
    setTries(tries + 1);
    data.splice(index, 1);
  };

  return (
    <div className="classic">
      <button className="home-btn" onClick={home}>Home</button>
      <div className="tips-container card">
        <h3 className="outline" style={{ marginTop: '0' }}>Tips</h3>
        <div style={{ display: showTips ? "flex" : "none", gap: "3em", paddingBottom: "1em" }}>
          <Tips name={props.first_tips.name} tips={random ? random[props.first_tips.key] : ""} tries={5 - tries}></Tips>
          <Tips name={props.second_tips.name} tips={random ? random[props.second_tips.key] : ""} tries={10 - tries}></Tips>
        </div>
        <button onClick={(e) => setShowTips(!showTips)}>{!showTips ? 'Show' : 'Hide'}</button>
      </div>
      <form className="form" onSubmit={submit}>
        <input name="search" type="text" className="searchbar" autoComplete="off" placeholder="Type a name or alias" value={search} onChange={update} disabled={find}></input>
        <div className="submit-container">{btns}</div>
      </form>
      <div className="grid">
        <div className="row">
          {fields.map((field, index) => (
            <p key={index} className="field-name outline">{field.title}</p>
          ))}
        </div>
        {rows}
      </div>
      <Indicator></Indicator>
      {find ? <Win data={random}></Win> : <span></span>}
    </div>
  )
}

export default Classic;