import "./Character.css";

export function Character({ baseImg, headImg, bodyImg, legsImg }) {
    return (
      <div className="character-container">
        <img className="character-base-img" src={baseImg} alt="Base character" /> 
      </div>
    )
}

