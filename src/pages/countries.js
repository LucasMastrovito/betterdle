import fields from "../json/countries_fields.json";
import Classic from "../components/classic/classic";
import Findmode from "../components/findmode/findmode";
import Dle from "../components/dle/dle";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dlemenu from "../components/dle/dlemenu";

function Countries() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily country"} logo="classic-countries" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture-countries" index={2} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the daily country" name="countries" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"countries"} mode="classic" desc={"Find the daily country"} fields={fields} first_tips={{ name: "Type", key: "type" }} second_tips={{ name: "Family", key: "family" }} />,
        <Findmode key={'picture'} name={"countries"} mode="picture" desc={"Guess from a filtered image"} filter="image_url" />
    ];

    return (
        <div>
            <Dle
                name="countries"
                buttons={buttons}
                modes={modes}
            />
        </div>
    )
}

export default Countries;