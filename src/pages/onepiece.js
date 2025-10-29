import fields from "../json/onepiece_fields.json";
import Classic from "../components/classic/classic";
import Findmode from "../components/findmode/findmode";
import Dle from "../components/dle/dle";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dlemenu from "../components/dle/dlemenu";


function Onepiece() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily character"} logo="classic-onepiece" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Fruit"} desc={"Guess by the champion's title"} logo="fruit" index={2} />,
        <Dlemenubtn key={3} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture-onepiece" index={3} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the daily One Piece character" name="onepiece" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"onepiece"} mode="classic" desc={"Find the daily character"} fields={fields} first_tips={{ name: "First Arc", key: "first_arc" }} second_tips={{ name: "First Episode", key: "first_episode" }} />,
        <Findmode key={'fruit'} name={"onepiece"} mode="fruit" desc={"Who ate this devil fruit?"} filter="fruit_name" first_tips={{ name: "Fruit Type", key: "devil_fruit_type" }} second_tips={{ name: "Traduction", key: "english_name" }} />,
        <Findmode key={'picture'} name={"onepiece"} mode="picture" desc={"Guess from a filtered image"} filter="image_url" />
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