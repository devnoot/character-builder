import {useState, useEffect} from "react";
import {GENDER, RACES} from "../const";
import "./RaceSelect.css";

export function RaceSelect({onSelect, defaultRace, gender}) {
    const [selected, setSelected] = useState(defaultRace);

    const selectNext = () => {
        const keys = Object.keys(RACES);
        const len = keys.length;
        const idx = keys.indexOf(selected.key);
        idx + 1 >= len 
            ? setSelected(RACES[keys[0]])
            : setSelected(RACES[keys[idx + 1]])
    }

    const selectPrev = () => {
        const keys = Object.keys(RACES);
        const idx = keys.indexOf(selected.key);
        idx > 0
            ? setSelected(RACES[keys[idx - 1]])
            : setSelected(RACES[keys[keys.length - 1]])
    }

    useEffect(() => {
        onSelect(selected);
    }, [onSelect, selected]);

    function getGenderImgKeu() {
        switch (gender) {
            case GENDER.FEMALE:
                return "defaultFemale";
            case GENDER.MALE:
                return "defaultMale";
            case GENDER.UNKNOWN:
            default:
                return "default";
        }
    }

    return (
        <div className="race-select">
            <button 
                type="button" 
                className="nes-btn is-dark" 
                onClick={selectPrev}>&#8592;</button>
            <img 
                className="race-select-img"
                src={`/sprites/player/base/${selected.images[getGenderImgKeu()]}`} 
                alt={selected.name}     
            />
            <button 
                type="button" 
                className="nes-btn is-dark" 
                onClick={selectNext}>&#8594;</button>
        </div>
    )
}