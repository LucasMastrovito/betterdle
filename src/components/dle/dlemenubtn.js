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
            <div className={`modebtn`}>
                <h3 className="outline" style={{color: props.current === props.index ? "#ffbc2aff" : "white"}}>{props.name}</h3>
                <img alt="logo" className={`scale dlebtn-icon dlebtn-icon-${props.game}`} onClick={() => changeMode(props.index)} src={`/assets/${props.logo}.png`} style={{cursor: 'pointer', filter: `grayscale(${props.current === props.index ? '0' : '1'})`}} />
                <img alt="current" className={`${props.current === props.index ? `dlebtn-current dlebtn-current-${props.game}` : 'dlebtn-border'}`} src={`/assets/border-bot-${props.game}.png`} />
            </div>
    )
}

export default Dlemenubtn;