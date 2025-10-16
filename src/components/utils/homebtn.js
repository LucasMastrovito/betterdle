import { useNavigate } from "react-router-dom";
import icon from "../../assets/home.png";

function Homebtn() {
    const navigate = useNavigate();
    
    const home = (e) => {
        navigate('/');
    };
    return (
        <button className="home-btn" onClick={home}>
            <p className="homebtn-text">Home</p>
            <img alt="home" src={icon} className="homebtn-icon" />
        </button>
    )
}

export default Homebtn;