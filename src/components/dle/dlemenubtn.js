import { useMode } from "../utils/modesContext";

function Dlemenubtn(props) {
    const { changeMode } = useMode();

    return (
         props.menu ?
            <div className="dlemenubtn scale" onClick={() => changeMode(props.index)}>
                <img alt="logo" className="dlebtn-icon" style={{maxWidth: "80px", marginLeft: "15px"}} src={`/assets/${props.logo}.png`} />
                <div style={{width: "65%"}}>
                    <h2>{props.name}</h2>
                    <p>{props.desc}</p>
                </div>
            </div>
        :
            <div className={`modebtn ${props.current === props.index ? 'dlebtn-current' : ''}`}>
                <p className="outline" style={{color: props.current === props.index ? "#ecf076ff" : "white"}}>{props.name}</p>
                <img alt="logo" className="scale dlebtn-icon" onClick={() => changeMode(props.index)} src={`/assets/${props.logo}.png`} style={{cursor: 'pointer'}} />
            </div>
    )
}

export default Dlemenubtn;