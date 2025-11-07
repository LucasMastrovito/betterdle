import fields from "../json/actors_fields.json";
import Classic from "../components/classic/classic";
import Findmode from "../components/findmode/findmode";
import Dle from "../components/dle/dle";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dlemenu from "../components/dle/dlemenu";

function Actors() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily actor"} logo="classic-actors" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture-actors" index={2} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the daily actor" name="actors" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"actors"} mode="classic" desc={"Find the daily actor"} fields={fields} first_tips={{ name: "Place", key: "place of birth" }} second_tips={{ name: "Greatest Performances", key: "greatest performances" }} />,
        <Findmode key={'picture'} name={"actors"} mode="picture" desc={"Guess from a filtered image"} filter="image_url" />
    ];

    return (
        <div>
            <Dle
                name="actors"
                buttons={buttons}
                modes={modes}
            />
        </div>
    )
}

export default Actors;