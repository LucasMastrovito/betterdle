import Dlebtn from "../components/home/dlebtn.js";
import Dlelist from "../components/home/dlelist.js";
import "./home.css";

function Home() {
    return (
        <div className="home">
            <img alt="title" src="/title.png" style={{ maxWidth: "50vw", maxHeight: "30vh", margin: "3em" }} />
            <div className="dlebtn-container">
                <Dlelist
                    name="animesmanga"
                    buttons={[
                        <Dlebtn key={1} link={'/anime'} logo='anime' />,
                        <Dlebtn key={2} link={'/onepiece'} logo='onepiece' />,
                        <Dlebtn key={3} link={'/dragonball'} logo='dragonball' />
                    ]}
                />
                <Dlelist
                    name="videogames"
                    buttons={[
                        <Dlebtn key={1} link={'/lol'} logo='lol' />,
                        <Dlebtn key={2} link={'/valorant'} logo='valorant' />,
                        <Dlebtn key={3} link={'/sw'} logo='sw' />,
                        <Dlebtn key={4} link={'/gacha'} logo='gacha' />,
                        <Dlebtn key={5} link={'/sonic'} logo='sonic' />
                    ]}
                />
            </div>
        </div>
    )
}

export default Home;