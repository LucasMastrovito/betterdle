import Dlebtn from "../components/dle/dlebtn.js";

function Home() {
    return (
        <div className="home">
            <img alt="title" src="/title.png" style={{maxWidth: "50vw", maxHeight: "30vh", margin: "3em"}} />
            <div className="dlebtn-container">
                <Dlebtn link={'/anime'} logo='anime' />
                <Dlebtn link={'/onepiece'} logo='onepiece' />
                <Dlebtn link={'/dragonball'} logo='dragonball' />
                <Dlebtn link={'/lol'} logo='lol' />
                <Dlebtn link={'/sw'} logo='sw' />
                <Dlebtn link={'/gacha'} logo='gacha' />
                <Dlebtn link={'/sonic'} logo='sonic' />
            </div>
        </div>
    )
}

export default Home;