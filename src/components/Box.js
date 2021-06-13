const Box = (props) => {
    const { onChange, onKeyDown, text } = props
    return (
        <input name = "newItemText"
        type = "text"
        value = {text}
        onChange = {onChange}
        onKeyDown = {onKeyDown}
        />
    );
}

export default Box;