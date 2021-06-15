import {GENDER} from "../const";

export function GenderSelect({onSelect, whitelist, gender, ...rest}) {
    return (
        <div {...rest}>
            <div>
                <label>
                    <input 
                        type="radio" 
                        className="nes-radio is-dark gender-radio" 
                        value={GENDER.FEMALE}
                        checked={gender === GENDER.FEMALE}
                        disabled={gender === GENDER.FEMALE || !whitelist.includes(GENDER.FEMALE)} 
                        onChange={e => onSelect(e.target.value)}
                    />
                    <span style={{ color: gender === GENDER.FEMALE ? "gold": "inherit" }}>Female&#9792;</span>
                </label>
            </div>
            <div>
                <label>
                    <input 
                        type="radio" 
                        className="nes-radio is-dark gender-radio" 
                        value={GENDER.MALE}
                        checked={gender === GENDER.MALE}
                        disabled={gender === GENDER.MALE || !whitelist.includes(GENDER.MALE)}
                        onChange={e => onSelect(e.target.value)}
                    />
                    <span style={{ color: gender === GENDER.MALE ? "gold" : "inherit "}}>Male&#9794;</span>
                </label>
            </div>
        </div>
    )
}