import data from "../json/sonic_characters.json";
import fields from "../json/sonic_fields.json";
import Classic from "../components/classic/classic";
import Findmode from "../components/findmode/findmode";
import Dlemenu from "../components/dle/dlemenu";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dle from "../components/dle/dle";


function Sonic() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily character"} logo="classic" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture" index={2} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the daily anime character" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"sonic"} mode="classic" data={data} fields={fields} first_tips={{name: "Age", key: "age"}} second_tips={{name: "Affiliation", key: "affiliation"}} />,
        <Findmode key={'picture'} name={"sonic"} mode="picture" data={data} filter="image_url" />
    ];

    return (
        <div>
            <Dle
                name="sonic"
                buttons={buttons}
                modes={modes}
            />
        </div>
    )
}

export default Sonic;