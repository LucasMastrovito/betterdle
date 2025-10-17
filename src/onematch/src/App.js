import { useCallback, useEffect, useState } from 'react';
import './App.css';
import dataJson from './disney_characters.json';

function getIndexByName(data, name){
    return data.findIndex((item) => item.name === name);
}

function App() {
  const [i, setI] = useState(0);
  const [data, setData] = useState({});
  const [display, setDisplay] = useState(dataJson);
  const [add, setAdd] = useState(false);
  console.log(dataJson.length)

  const filterJson = (json) => {
    return json.filter(
      (item) =>
        !item.name.includes("Chapter") &&
        !item.name.includes("Episode") &&
        !item.name.includes("One Piece") &&
        !item.name.includes("SBS")
    );
  };

  useEffect(() => {
    setData(filterJson(dataJson));
    setDisplay(filterJson(display));
  }, []);

  const back = (e) => {
    setI(i - 1);
    setAdd(true);
  }

  const smash = (e) => {
    setI(i + 1);
    if (add) {
      setData((prev) => [...prev, display[i]]);
      setAdd(false);
    }
  };

  const pass = useCallback(() => {
    const index = getIndexByName(data, display[i].name);
    setData((prev) => prev.filter((_, c) => c !== index));
    setI(i + 1);
  }, [data, i]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        smash();
      }
      if (e.key === "ArrowLeft") {
        pass()
      }
    };

    window.addEventListener("keydown", handleKeyDown);
     return () => window.removeEventListener("keydown", handleKeyDown);
  }, [smash, pass]);

  const downloadJson = () => {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "disney_characters.json";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="App">
      <header>
      </header>
      <div className='body'>
        <div className='container'>
          <h2>{display.length}</h2>
          { display[i] ? 
          <div>
            <h1>{display[i].name}</h1>
            <h2>{display[i].films}</h2>
            {
              display[i].image_url? 
              <img src={display[i].image_url.includes(".png") ? display[i].image_url.split(".png")[0] + ".png" : display[i].image_url.split(".jpg")[0] + ".jpg"} alt='img'></img> :
              <p>Pas d'image</p>
            }
            <div className='btns'>
              <button onClick={pass}>Pass</button>
              <button onClick={smash}>Smash</button>
            </div>
            <button onClick={back}>Retour</button>
            <button onClick={downloadJson}>Exporter en JSON</button>
          </div>
          :
          <div>
            <h1>{display[i-1].name}</h1>
            <button onClick={downloadJson}>Exporter en JSON</button>
          </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
