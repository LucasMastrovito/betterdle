import data from "../json/dragonball_characters.json";
import Classic from "../components/classic/classic";
import fields from "../json/dragonball_fields.json";
import Findmode from "../components/findmode/findmode";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dle from "../components/dle/dle";
import Dlemenu from "../components/dle/dlemenu";

function Dragonball() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily character"} index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Picture"} desc={"Guess from a filtered image"} index={2} />
    ];

    const modes = [
        <Dlemenu key={'menu'} menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"dragonball"} mode="classic" data={data} fields={fields} first_tips={{ name: "First Arc", key: "first_arc" }} second_tips={{ name: "First Episode", key: "first_episode" }} />,
        <Findmode key={'picutre'} name={"dragonball"} mode="picture" data={data} filter="image_url" />
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