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
                        <Dlebtn key={5} link={'/mario'} logo='mario' />,
                        <Dlebtn key={6} link={'/sonic'} logo='sonic' />,
                        <Dlebtn key={7} link={'/sw'} logo='sw' />,
                        <Dlebtn key={8} link={'/gacha'} logo='gacha' />
                    ]}
                />
                <Dlelist
                    name="Cinema"
                    buttons={[
                        <Dlebtn key={1} link={'/movie'} logo='movie' />,
                        <Dlebtn key={2} link={'/actors'} logo='actors' />,
                        <Dlebtn key={3} link={'/disney'} logo='disney' />,
                        <Dlebtn key={4} link={'/toons'} logo='toons' />,
                        <Dlebtn key={5} link={'/hp'} logo='hp' />
                    ]}
                />
                <Dlelist
                    name="Comics"
                    buttons={[
                        <Dlebtn key={1} link={'/marvel'} logo='marvel' />
                    ]}
                />
                {/* <Dlelist
                    name="Geography"
                    buttons={[
                        <Dlebtn key={1} link={'/countries'} logo='countries' />
                    ]}
                /> */}
            </div>
        </div>
    )
}

export default Home;