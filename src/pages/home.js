import Dlebtn from "../components/dlebtn";
import anime from "../assets/anime-logo.png";
import op from "../assets/onepiece-logo.png";
import db from "../assets/dragonball-logo.png";
import sw from "../assets/sw-logo.png";

function Home() {
    return (
        <div className="home">
            <img alt="title" src="/title.png" style={{maxWidth: "50vw", maxHeight: "30vh", margin: "3em"}} />
            <div>
                {/* <Dlebtn logo={anime} link={'/anime'} /> */}
                <Dlebtn logo={op} link={'/onepiece'} />
                <Dlebtn logo={db} link={'/dragonball'} />
                <Dlebtn logo={sw} link={'/sw'} />
            </div>
        </div>
    )
}

export default Home;