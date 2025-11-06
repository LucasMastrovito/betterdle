import fields from "../json/mario_fields.json";
import Classic from "../components/classic/classic";
import Findmode from "../components/findmode/findmode";
import Dle from "../components/dle/dle";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dlemenu from "../components/dle/dlemenu";

function Mario() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily character"} logo="classic-mario" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Description"} desc={"Guess from a description"} logo="description-mario" index={2} />,
        <Dlemenubtn key={3} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture-mario" index={3} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the daily character" name="mario" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"mario"} mode="classic" desc={"Find the daily character"} fields={fields} first_tips={{ name: "Colors", key: "colors" }} second_tips={{ name: "Description", key: "description" }} />,
        <Findmode key={'description'} name={"mario"} mode="description" desc={"Guess from a description"} filter="description" />,
        <Findmode key={'picture'} name={"mario"} mode="picture" desc={"Guess from a filtered image"} filter="image_url" />
    ];

    return (
        <div>
            <Dle
                name="mario"
                buttons={buttons}
                modes={modes}
            />
        </div>
    )
}

export default Mario;