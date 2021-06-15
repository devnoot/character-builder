export function NameInput(props) {
    return (
        <div className="nes-field">
            <label for="name_field">Name?</label>
            <input type="text" id="name_field" className="nes-input is-dark" {...props} />
        </div>
    );
}