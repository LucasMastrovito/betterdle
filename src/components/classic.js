import { useEffect, useState } from "react";
import Submit from "./submit";
import Row from "./row";
import "./classic.css";
import Win from "./win";

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

function Classic(props) {
    const data = props.data;
    const fields = props.fields;
    const [search, setSearch] = useState("");
    const [btns, setBtns] = useState([]);
    const [rows, setRows] = useState([]);
    const [random, setRandom] = useState(null);
    const [find, setFind] = useState(false);

    useEffect(() => {
        setRandom(getRandomCharacter(data));
    }, [data]);

    const update = (e) => {
        const results =  filterByNameOrAlias(data, e.target.value);
        
        setSearch(e.target.value);
        if (e.target.value !== "") {
            setBtns(
                results.slice(0, 10).map((element, index) => (
                <Submit key={index} item={element} />
            )));
        } else {
            setBtns([]);
        }
    };

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
        setSearch("");
        setBtns([]);
        setRows([<Row key={e.nativeEvent.submitter.value} data={newObj} field={fields} random={random} />, ...rows]);
        data.splice(index, 1);
    };

    return (
        <div className="classic">
            <div className="tips">

            </div>
            <form className="form" onSubmit={submit}>
                <input name="search" type="text" className="searchbar" autoComplete="off" placeholder="Type a name or alias" value={search} onChange={update} disabled={find}></input>
                { btns }
            </form>
            <div className="grid">
                <div className="row">
                    { fields.map((field, index) => (
                        <p key={index} className="field-name outline">{ field.title }</p>
                    ))}
                </div>
                { rows }
            </div>
            <div className="legend" style={{display: 'none'}}>
                <h2>Indicators</h2>
                <div className="row" style={{gap: "2em"}}>
                    <div className="field-indicator">
                        <div className="field match" style={{opacity: '1'}}></div>
                        <p>Correct</p>
                    </div>
                    <div className="field-indicator">
                        <div className="field wrong" style={{opacity: '1'}}></div>
                        <p>Wrong</p>
                    </div>
                    <div className="field-indicator">
                        <div className="field partial" style={{opacity: '1'}}></div>
                        <p>Partial</p>
                    </div>
                    <div className="field-indicator">
                        <div className="field after" style={{opacity: '1'}}></div>
                        <p>Before</p>
                    </div>
                    <div className="field-indicator">
                        <div className="field before" style={{opacity: '1'}}></div>
                        <p>After</p>
                    </div>
                    <div className="field-indicator">
                        <div className="field superior" style={{opacity: '1'}}></div>
                        <p>Inferior</p>
                    </div>
                    <div className="field-indicator">
                        <div className="field inferior" style={{opacity: '1'}}></div>
                        <p>Superior</p>
                    </div>
                </div>
                
            </div>
            { find ? <Win data={random}></Win> : <span></span> }
        </div>
    )
}

export default Classic;