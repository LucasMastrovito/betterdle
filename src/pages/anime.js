import data from "../json/anime_characters.json";
import fields from "../json/anime_fields.json";
import Classic from "../components/classic/classic";
import Findmode from "../components/findmode/findmode";
import Dlemenu from "../components/dle/dlemenu";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dle from "../components/dle/dle";
import { filterByField } from "../components/utils/getrandom";


function Anime() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily character"} logo="classic-anime" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Technique"} desc={"Find the daily character"} logo="classic-anime" index={2} />,
        <Dlemenubtn key={3} menu={true} name={"Emoji"} desc={"Find the daily character"} logo="classic-anime" index={3} />,
        <Dlemenubtn key={4} menu={true} name={"Quote"} desc={"Find the daily character"} logo="classic-anime" index={4} />,
        <Dlemenubtn key={5} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture-anime" index={5} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the daily anime character" name="anime" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"anime"} mode="classic" desc={"Find the daily anime character"} data={data} fields={fields} first_tips={{name: "Year", key: "year"}} second_tips={{name: "Anime", key: "anime"}} />,
        <Findmode key={'technique'} name={"anime"} mode="technique" desc={"Guess from a filtered image"} data={filterByField(data, "technique")} filter="technique" />,
        <Findmode key={'emoji'} name={"anime"} mode="emoji" desc={"Guess from a filtered image"} data={data} filter="emoji" array={true} />,
        <Findmode key={'quote'} name={"anime"} mode="quote" desc={"Guess from a filtered image"} data={data} filter="quote" />,
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