import data from "../json/valorant_characters.json";
import fields from "../json/valorant_fields.json";
import Classic from "../components/classic/classic";
import Findmode from "../components/findmode/findmode";
import Dlemenu from "../components/dle/dlemenu";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dle from "../components/dle/dle";
import { filterByField } from "../components/utils/getrandom";


function Valorant() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily character"} logo="classic" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Name"} desc={"Guess the agent from his real name"} logo="classic" index={2} />,
        <Dlemenubtn key={3} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture" index={3} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the daily Valorant agent" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"valorant"} mode="classic" data={data} fields={fields} first_tips={{name: "Role", key: "role"}} second_tips={{name: "Patch", key: "release_patch"}} />,
        <Findmode key={'name'} name={"valorant"} mode="name" data={filterByField(data, "real_name")} filter="real_name" />,
        <Findmode key={'picture'} name={"valorant"} mode="picture" data={data} filter="image_url" />
    ];

    return (
        <div>
            <Dle
                name="valorant"
                buttons={buttons}
                modes={modes}
            />
        </div>
    )
}

export default Valorant;