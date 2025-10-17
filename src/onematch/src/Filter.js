import { useEffect, useState } from 'react';
import './App.css';
import dataJson from './dragonball_characters.json';
import Field from './Field';

function getIndexByName(data, name){
    return data.findIndex((item) => item.name === name);
}

function Filter() {
  const [i, setI] = useState(0);
  const [display, setDisplay] = useState(dataJson);

  const back = (e) => {
    setI(i - 1);
  }

  const next = (e) => {
    setI(i + 1);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        next();
      }
      if (e.key === "ArrowLeft") {
        back()
      }
    };

    window.addEventListener("keydown", handleKeyDown);
     return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next]);

  const update = (key, value, name) => {
    display[getIndexByName(display, name)][key] = value;
  };

  const downloadJson = () => {
    const jsonString = JSON.stringify(display, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "onepiece_characters.json";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="App">
      <header>
      </header>
      <div className='body'>
        { display[i] ?
        <div className='container'>
          <div className='card-container'>
            <div style={{paddingLeft: "5vw"}}>
              <h1>{display[i].name}</h1>
              <img style={{width: "10vw"}} src={display[i].image_url.split(".png")[0] + ".png"} alt='img'></img>
              <div className='btns'>
                <button onClick={back}>Retour</button>
                <button onClick={next}>Next</button>
              </div>
              <button onClick={downloadJson}>Export</button>
            </div>
            <div className='card'>
              <Field name='aliases' title={display[i].name} value={display[i].aliases} required={false} update={update}></Field>
              <Field name='first_arc_or_film' title={display[i].name} value={display[i].first_arc_or_film} required={true} update={update}></Field>
              <Field name='gender' title={display[i].name} value={display[i].gender} required={true} update={update}></Field>
              <Field name='height' title={display[i].name} value={display[i].height} required={true} update={update}></Field>
              <Field name='race' title={display[i].name} value={display[i].race} required={true} update={update}></Field>
              <Field name='allegiance' title={display[i].name} value={display[i].allegiance} required={true} update={update}></Field>
              <Field name='transformation' title={display[i].name} value={display[i].transformation_count} update={update}></Field>
            </div>
          </div>
        </div>
        : 
          <button onClick={downloadJson}>Export</button>
          }
      </div>
    </div>
  );
}

export default Filter;
