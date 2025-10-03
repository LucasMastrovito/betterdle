import { useNavigate } from "react-router-dom";

function Dlebtn(props) {
    const navigate = useNavigate();
    const click = (e) => {
        navigate(props.link);
    }
    return (
        <div className="dlebtn" onClick={click}>
            <img alt="logo" className="scale" src={props.logo} style={{maxWidth: "30vw", maxHeight: "20vh"}} />
        </div>
    )
}

export default Dlebtn;