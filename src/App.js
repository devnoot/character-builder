import {useState} from "react";
import {NameInput} from "./NameInput/NameInput.jsx";
import {GENDER, RACES} from "./const.js";
import {RaceSelect} from "./RaceSelect/RaceSelect";
import {GenderSelect} from "./GenderSelect/GenderSelect";
import "./Global.css";
import "./App.css";
import "nes.css/css/nes.min.css";

function App() {

  const defaultRace = RACES.CENTAUR;
  const defaultGender = GENDER.FEMALE;

  const [showConfirm, setShowConfirm] = useState(false);
  const [name, setName] = useState("");
  const [race, setRace] = useState(defaultRace);
  const [gender, setGender] = useState(defaultGender);
  const [error] = useState("");

  const Error = (msg) => {
    return (
      <div className="Error">{msg}</div>
    ) 
  }

  const selectRace = race => {
    setRace(race);
    if (!race.genders.includes(gender)) {
        setGender(race.genders[0]);
    }
  }

  return (
    <div className="App">
        {error && <Error msg={error} />}

        <div className="title-container">
            <h1 className={`character-name ${name ? "nes-text is-primary" : ""}`}>{name || "SET NAME"}</h1>
            {race && (<h2 className="character-description">The <span className={`character-gender-${gender.toLowerCase()}`}>{gender}</span> {race.name}</h2>)}
        </div>

        <RaceSelect 
          defaultRace={race} 
          onSelect={selectRace} 
          gender={gender} 
        />

        <GenderSelect 
          gender={gender} 
          onSelect={setGender} 
          whitelist={race.genders} 
        />

        <NameInput 
          value={name} 
          onChange={e => setName(e.target.value)} 
        />

        <button 
          type="button" 
          className={`nes-btn is-primary confirm-button ${name === "" ? "is-disabled" : ""}`} 
          disabled={name === ""}
          onClick={() => setShowConfirm(true)}>New Game</button>

        {showConfirm && <div className="backdrop">
          <div className="modal nes-dialog">
            <p>Are you ready to begin your journey, <span className="nes-text is-primary">{name}</span>?</p>
              <menu className="dialog-menu">
                <button className="nes-btn" onClick={() => setShowConfirm(false)}>Cancel</button>
                <button className="nes-btn is-primary">Confirm</button>
              </menu>
          </div>
        </div>}

    </div>
  );
}

export default App;
