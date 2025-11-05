import Dlebtn from "../components/home/dlebtn.js";
import Dlelist from "../components/home/dlelist.js";
import "./home.css";

function Home() {
    return (
        <div className="home">
            <img alt="title" src="/title.png" style={{ maxWidth: "50vw", maxHeight: "30vh", margin: "3em" }} />
            <div className="dlebtn-container">
                <Dlelist
                    name="Animes / Manga"
                    buttons={[
                        <Dlebtn key={1} link={'/anime'} logo='anime' />,
                        <Dlebtn key={2} link={'/onepiece'} logo='onepiece' />,
                        <Dlebtn key={3} link={'/dragonball'} logo='dragonball' />
                    ]}
                />
                <Dlelist
                    name="Video Games"
                    buttons={[
                        <Dlebtn key={1} link={'/games'} logo='games' />,
                        <Dlebtn key={2} link={'/pokemon'} logo='pokemon' />,
                        <Dlebtn key={3} link={'/lol'} logo='lol' />,
                        <Dlebtn key={4} link={'/valorant'} logo='valorant' />,
                        <Dlebtn key={5} link={'/sw'} logo='sw' />,
                        <Dlebtn key={6} link={'/gacha'} logo='gacha' />,
                        <Dlebtn key={7} link={'/sonic'} logo='sonic' />
                    ]}
                />
                <Dlelist
                    name="Cinema"
                    buttons={[
                        <Dlebtn key={1} link={'/movie'} logo='movie' />,
                        <Dlebtn key={2} link={'/disney'} logo='disney' />
                    ]}
                />
            </div>
        </div>
    )
}

export default Home;