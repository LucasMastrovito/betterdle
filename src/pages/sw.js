import data from "../json/sw_characters.json";
import fields from "../json/sw_fields.json";
import Classic from "../components/classic/classic";
import Findmode from "../components/findmode/findmode";
import Dle from "../components/dle/dle";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dlemenu from "../components/dle/dlemenu";

function Sw() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily monster"} logo="classic" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture" index={2} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the daily monster" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"sw"} mode="classic" desc={"Find the daily monster"} data={data} fields={fields} first_tips={{ name: "Type", key: "type" }} second_tips={{ name: "Family", key: "family" }} />,
        <Findmode key={'picture'} name={"sw"} mode="picture" desc={"Guess from a filtered image"} data={data} filter="image_url" />
    ];

    return (
        <div>
            <Dle
                name="sw"
                buttons={buttons}
                modes={modes}
            />
        </div>
    )
}

export default Sw;