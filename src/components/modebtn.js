function Modebtn(props) {
    const click = (e) => {
        props.click(props.index);
    };
    return (
        <div>
            <button onClick={click}>{props.name}</button>
        </div>
    )
}

export default Modebtn;