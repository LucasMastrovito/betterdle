import data from "../json/onepiece_characters.json";
import fields from "../json/onepiece_fields.json";
import Classic from "../components/classic/classic";
import Findmode from "../components/findmode/findmode";
import { filterByField } from "../components/utils/getrandom";
import Dle from "../components/dle/dle";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dlemenu from "../components/dle/dlemenu";


function Onepiece() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily character"} logo="classic" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Fruit"} desc={"Guess by the champion's title"} logo="fruit" index={2} />,
        <Dlemenubtn key={3} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture" index={3} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the daily One Piece character" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"onepiece"} mode="classic" data={data} fields={fields} first_tips={{ name: "First Arc", key: "first_arc" }} second_tips={{ name: "First Episode", key: "first_episode" }} />,
        <Findmode key={'fruit'} name={"onepiece"} mode="fruit" data={filterByField(data, "fruit_name")} filter="fruit_name" first_tips={{ name: "Fruit Type", key: "devil_fruit_type" }} second_tips={{ name: "Traduction", key: "english_name" }} />,
        <Findmode key={'picture'} name={"onepiece"} mode="picture" data={data} filter="image_url" />
    ];

    return (
        <div>
            <Dle
                name="onepiece"
                buttons={buttons}
                modes={modes}
            />
        </div>
    )
}

export default Onepiece;