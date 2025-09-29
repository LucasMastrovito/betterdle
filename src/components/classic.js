import { useState } from "react";
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

      if (item.aliases && item.aliases.toLowerCase().includes(lowerSearch)) {
        matches.push(item.name);
      }

      return matches.length > 0 ? { ...item, matches } : null;
    })
    .filter(Boolean);
}

function getIndexByName(data, name) {
    return data.findIndex((item) => item.name === name);
}

function Classic(props) {
    const data = props.data;
    const fields = props.fields;
    const [search, setSearch] = useState("");
    const [btns, setBtns] = useState([]);
    const [rows, setRows] = useState([]);

    const update = (e) => {
        const results =  filterByNameOrAlias(data, e.target.value);
        
        setSearch(e.target.value);
        if (e.target.value !== "") {
            setBtns(
                results.slice(0, 10).map((element, index) => (
                <Submit key={index} name={element.name} />
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
            if (data[index].hasOwnProperty(key)) {
                newObj[key] = data[index][key];
            }
        });
        setSearch("");
        setBtns([]);
        setRows([...rows, <Row key={e.nativeEvent.submitter.value} data={newObj} />])
    };

    return (
        <div className="classic">
            <form onSubmit={submit}>
                <input type="text" value={search} onChange={update}></input>
                { btns }
            </form>
            <div className="row">
                { fields.map((field, index) => (
                    <p key={index}>{field}</p>
                ))}
            </div>
            { rows }
        </div>
    )
}

export default Classic;