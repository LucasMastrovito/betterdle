import { useNavigate } from "react-router-dom";
import icon from "../../assets/home.png";

function Homebtn() {
    const navigate = useNavigate();
    
    const home = (e) => {
        navigate('/');
    };
    return (
        <div className="home-btn scale" onClick={home}>
            <img alt="home" src={"/title.png"} className="homebtn-text" />
            <img alt="home" src={icon} className="homebtn-icon" />
        </div>
    )
}

export default Homebtn;