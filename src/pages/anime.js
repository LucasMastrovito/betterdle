import fields from "../json/anime_fields.json";
import Classic from "../components/classic/classic";
import Findmode from "../components/findmode/findmode";
import Dlemenu from "../components/dle/dlemenu";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dle from "../components/dle/dle";
import Setting from "../components/utils/setting";
import data from "../json/anime_characters_en.json";
import { getUniqueValues } from "../components/utils/utils";


function Anime() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily character"} logo="classic-anime" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Technique"} desc={"Find the character by his technique"} logo="technique-anime" index={2} />,
        <Dlemenubtn key={3} menu={true} name={"Emoji"} desc={"Guess the character with emojis"} logo="emoji-anime" index={3} />,
        <Dlemenubtn key={4} menu={true} name={"Quote"} desc={"Find the character by his quote"} logo="quote-anime" index={4} />,
        <Dlemenubtn key={5} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture-anime" index={5} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the daily anime character" name="anime" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"anime"} mode="classic" desc={"Find the daily anime character"} fields={fields} first_tips={{name: "Year", key: "year"}} second_tips={{name: "Anime", key: "anime"}} />,
        <Findmode key={'technique'} name={"anime"} mode="technique" desc={"Who uses this technique?"} filter="technique" first_tips={{name: "Year", key: "year"}} second_tips={{name: "Anime", key: "anime"}} />,
        <Findmode key={'emoji'} name={"anime"} mode="emoji" desc={"Guess from emojis"} filter="emoji" array={true} first_tips={{name: "Year", key: "year"}} second_tips={{name: "Anime", key: "anime"}} />,
        <Findmode key={'quote'} name={"anime"} mode="quote" desc={"Who said that?"} filter="quote" first_tips={{name: "Year", key: "year"}} second_tips={{name: "Anime", key: "anime"}} />,
        <Findmode key={'picture'} name={"anime"} mode="picture" desc={"Guess from a filtered image"} filter="image_url" />
    ];

    return (
        <div>
            <Dle
                name="anime"
                buttons={buttons}
                modes={modes}
                settings={
                    <Setting name="Animes List" content={getUniqueValues(data, "anime").map(el => <h3 key={el} className="outline">{el}</h3>)} />
                }
            />
        </div>
    )
}

export default Anime;