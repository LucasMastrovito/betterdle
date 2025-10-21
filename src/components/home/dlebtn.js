import { useNavigate } from "react-router-dom";

function Dlebtn(props) {
    const navigate = useNavigate();
    const click = (e) => {
        navigate(props.link);
    }
    return (
        <div className="dlebtn">
            <img alt="logo" className="scale dlebtn-logo" onClick={click} src={`/assets/${props.logo}-logo.png`} />
        </div>
    )
}

export default Dlebtn;