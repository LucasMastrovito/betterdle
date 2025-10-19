import { useMode } from "../utils/modesContext";

function Dlemenubtn(props) {
    const { changeMode } = useMode();

    return (
         props.menu ?
            <div className={`dlemenubtn dlemenubtn-${props.game} scale`} onClick={() => changeMode(props.index)}>
                <img alt="logo" className={`dlemenubtn-icon dlemenubtn-icon-${props.game}`} src={`/assets/${props.logo}.png`} />
                <div className={`dlemenubtn-text dlemenubtn-text-${props.game}`} style={{width: "65%"}}>
                    <h2>{props.name}</h2>
                    <p>{props.desc}</p>
                </div>
            </div>
        :
            <div className={`modebtn ${props.current === props.index ? 'dlebtn-current' : ''}`}>
                <p className="outline" style={{color: props.current === props.index ? "#ffbc2aff" : "white"}}>{props.name}</p>
                <img alt="logo" className={`scale dlebtn-icon dlebtn-icon-${props.game}`} onClick={() => changeMode(props.index)} src={`/assets/${props.logo}.png`} style={{cursor: 'pointer'}} />
            </div>
    )
}

export default Dlemenubtn;