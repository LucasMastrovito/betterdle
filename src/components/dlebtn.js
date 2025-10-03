import { useNavigate } from "react-router-dom";

function Dlebtn(props) {
    const navigate = useNavigate();
    const click = (e) => {
        navigate(props.link);
    }
    return (
        <div className="dlebtn">
            <img alt="logo" className="scale" onClick={click} src={props.logo} style={{maxWidth: "30vw", maxHeight: "20vh", cursor: 'pointer'}} />
        </div>
    )
}

export default Dlebtn;