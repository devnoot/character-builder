import {useState} from "react";
import {NameInput} from "./NameInput/NameInput.jsx";
import {GENDER, RACES} from "./const.js";
import {RaceSelect} from "./RaceSelect/RaceSelect";
import {GenderSelect} from "./GenderSelect/GenderSelect";
import "./Global.css";
import "./App.css";

function App() {

  const defaultRace = RACES.CENTAUR;
  const defaultGender = GENDER.FEMALE;

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
            <h1 className="character-name">{name || "SET NAME"}</h1>
            {race && (<h2 className="character-description">The <span className={`character-gender-${gender.toLowerCase()}`}>{gender}</span> {race.name}</h2>)}
        </div>

        <RaceSelect defaultRace={race} onSelect={selectRace} gender={gender} />
        <GenderSelect className="gender-select" gender={gender} onSelect={setGender} whitelist={race.genders} />
        <NameInput className="name-input" value={name} onChange={e => setName(e.target.value)} />

    </div>
  );
}

export default App;
