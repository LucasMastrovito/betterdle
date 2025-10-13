import { useNavigate } from "react-router-dom";

function Dlebtn(props) {
    const navigate = useNavigate();
    const click = (e) => {
        navigate(props.link);
    }
    return (
        <div className="dlebtn">
            <img alt="logo" className="scale logo" onClick={click} src={props.logo} style={{cursor: 'pointer'}} />
        </div>
    )
}

export default Dlebtn;