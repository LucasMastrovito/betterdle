import { useState } from "react";
import Submit from "./submit";

function getIndexByName(data, name) {
  return data.findIndex((item) => item.name === name);
}

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

function Searchbar(props) {
  const data = props.data;
  const [search, setSearch] = useState("");
  const [btns, setBtns] = useState([]);

  const update = (e) => {
    const results = filterByNameOrAlias(data, e.target.value);

    setSearch(e.target.value);
    if (e.target.value !== "") {
      setBtns(
        results.map((element, index) => (
          <Submit key={index} item={element} name={props.name} />
        )));
    } else {
      setBtns([]);
    }
  };

  const submit = (e) => {
    const index = getIndexByName(data, e.nativeEvent.submitter.value);

    e.preventDefault();
    props.submit(index);
    setSearch("");
    setBtns([]);
  };

  return (
    <div className="searchbar-container">
      <form className="form" onSubmit={submit}>
        <input name="search" type="text" className="searchbar" autoComplete="off" placeholder="Type a name or alias" value={search} onChange={update} disabled={props.find}></input>
        <div className="submit-container">{btns}</div>
      </form>
    </div>
  )
}

export default Searchbar;