function Button({ id, clickHandler, label }) {
    return (
        <button id={id} onClick={clickHandler}>
            {label}
        </button>
    )
}

export default Button