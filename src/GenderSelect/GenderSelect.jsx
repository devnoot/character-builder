import {GENDER} from "../const";

export function GenderSelect({onSelect, whitelist, gender, ...rest}) {
    return (
        <div {...rest}>
            <button className={`button gender-button ${gender === GENDER.MALE ? "selected" : "dim"}`} onClick={() => onSelect(GENDER.MALE)} disabled={gender === GENDER.MALE || !whitelist.includes(GENDER.MALE)}>Male&#9794;</button>
            <button className={`button gender-button ${gender === GENDER.FEMALE ? "selected" : "dim"}`} onClick={() => onSelect(GENDER.FEMALE)} disabled={gender === GENDER.FEMALE || !whitelist.includes(GENDER.FEMALE)}>Female&#9792;</button>
        </div>
    )
}