import data from "../json/anime_characters.json";
import fields from "../json/anime_fields.json";
import Classic from "../components/classic/classic";
import Findmode from "../components/findmode/findmode";
import Dlemenu from "../components/dle/dlemenu";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dle from "../components/dle/dle";


function Anime() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily character"} logo="classic-anime" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture-anime" index={2} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the daily anime character" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"anime"} mode="classic" desc={"Find the daily anime character"} data={data} fields={fields} first_tips={{name: "Year", key: "year"}} second_tips={{name: "Anime", key: "anime"}} />,
        <Findmode key={'picture'} name={"anime"} mode="picture" desc={"Guess from a filtered image"} data={data} filter="image_url" />
    ];

    return (
        <div>
            <Dle
                name="anime"
                buttons={buttons}
                modes={modes}
            />
        </div>
    )
}

export default Anime;