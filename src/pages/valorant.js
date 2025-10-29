import fields from "../json/valorant_fields.json";
import Classic from "../components/classic/classic";
import Findmode from "../components/findmode/findmode";
import Dlemenu from "../components/dle/dlemenu";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dle from "../components/dle/dle";


function Valorant() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily agent"} logo="classic-valorant" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Name"} desc={"Guess the agent from his real name"} logo="name-valorant" index={2} />,
        <Dlemenubtn key={3} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture-valorant" index={3} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the daily Valorant agent" name="valorant" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"valorant"} mode="classic" desc={"Find the daily agent"} fields={fields} first_tips={{name: "Role", key: "role"}} second_tips={{name: "Patch", key: "release_patch"}} />,
        <Findmode key={'name'} name={"valorant"} mode="name" desc={"Guess the agent from his real name"} filter="real_name" />,
        <Findmode key={'picture'} name={"valorant"} mode="picture" desc={"Guess from a filtered image"} filter="image_url" />
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