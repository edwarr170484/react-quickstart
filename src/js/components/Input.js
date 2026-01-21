function Input({text, onChange, placeholder, style}) {
    return (
        <input
            value={text}
            onChange={onChange}
            placeholder={placeholder}
            style={style}
          />
    )
}

export default Input;