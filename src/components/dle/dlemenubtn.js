import { useMode } from "../utils/modesContext";

function Dlemenubtn(props) {
    const { changeMode } = useMode();

    return (
         props.menu ?
            <div className="dlemenubtn scale" onClick={() => changeMode(props.index)}>
                <img alt="logo" src={props.logo} />
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.desc}</p>
                </div>
            </div>
        :
            <div className="dlebtn">
                <p>{props.name}</p>
                <img alt="logo" className="scale logo" onClick={() => changeMode(props.index)} src={props.logo} style={{cursor: 'pointer'}} />
            </div>
    )
}

export default Dlemenubtn;