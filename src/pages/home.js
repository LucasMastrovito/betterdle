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
                        <Dlebtn key={1} link={'/pokemon'} logo='pokemon' />,
                        <Dlebtn key={2} link={'/lol'} logo='lol' />,
                        <Dlebtn key={3} link={'/valorant'} logo='valorant' />,
                        <Dlebtn key={4} link={'/sw'} logo='sw' />,
                        <Dlebtn key={5} link={'/gacha'} logo='gacha' />,
                        <Dlebtn key={6} link={'/sonic'} logo='sonic' />
                    ]}
                />
                <Dlelist
                    name="Cinema"
                    buttons={[
                        <Dlebtn key={1} link={'/disney'} logo='disney' />
                    ]}
                />
            </div>
        </div>
    )
}

export default Home;