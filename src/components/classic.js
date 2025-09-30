import { useEffect, useState } from "react";
import Submit from "./submit";
import Row from "./row";
import "./classic.css";

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

function getRandomCharacter(data) {
    const startDate = new Date("2023-01-01");
    const today = new Date();
    const diffDays = Math.floor(
        (today - startDate) / (1000 * 60 * 60 * 24)
    );
    const index = diffDays % data.length;
    return data[index];
}

function Classic(props) {
    const data = props.data;
    const fields = props.fields;
    const [search, setSearch] = useState("");
    const [btns, setBtns] = useState([]);
    const [rows, setRows] = useState([]);
    const [random, setRandom] = useState(null);

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
            <form className="form" onSubmit={submit}>
                <input type="text" className="searchbar" placeholder="Type a name or alias" value={search} onChange={update}></input>
                { btns }
            </form>
            <div className="row">
                { fields.map((field, index) => (
                    <p key={index} className="field-name outline">{ field.title }</p>
                ))}
            </div>
            { rows }
        </div>
    )
}

export default Classic;