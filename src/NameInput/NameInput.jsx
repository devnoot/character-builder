export function NameInput({className, ...rest}) {
    return (
        <div className={className}>
            <label>Name?</label>
            <div className="flex-row">
                <input {...rest} />
            </div>
        </div>
    )
}