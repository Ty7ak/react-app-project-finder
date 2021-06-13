const Item = (props) => {
    const text = props.text.split('/')
    return(
    <div className = 'item-list'>
        <div className = 'item-name'>
            {text[0]}
        </div>
        <div className = 'item-desc'>
            {text[1]}
        </div>
    </div>)
}

export default Item;