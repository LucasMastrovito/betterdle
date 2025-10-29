import data from "../json/dragonball_characters.json";
import Classic from "../components/classic/classic";
import fields from "../json/dragonball_fields.json";
import Findmode from "../components/findmode/findmode";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dle from "../components/dle/dle";
import Dlemenu from "../components/dle/dlemenu";
import { filterByField } from "../components/utils/getrandom";

function Dragonball() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily character"} logo="classic-dragonball" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Technique"} desc={"Guess from an attack name"} logo="technique-dragonball" index={2} />,
        <Dlemenubtn key={3} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture-dragonball" index={3} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the Dragon Ball character" name="dragonball" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"dragonball"} mode="classic" desc={"Find the daily character"} data={data} fields={fields} first_tips={{ name: "Race", key: "race" }} second_tips={{ name: "First Appearance", key: "first_appearance" }} />,
        <Findmode key={'technique'} name={"dragonball"} mode="technique" desc={"Who is using this technique?"} data={filterByField(data, "attack")} filter="attack" />,
        <Findmode key={'picture'} name={"dragonball"} mode="picture" desc={"Guess from a filtered image"} data={data} filter="image_url" />
    ];

    return (
        <div>
            <Dle
                name="dragonball"
                buttons={buttons}
                modes={modes}
            />
        </div>
    )
}

export default Dragonball;