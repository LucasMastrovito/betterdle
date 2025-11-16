import fields from "../json/hp_fields.json";
import Classic from "../components/classic/classic";
import Findmode from "../components/findmode/findmode";
import Dle from "../components/dle/dle";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dlemenu from "../components/dle/dlemenu";

function Hp() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily wizard"} logo="classic-hp" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Actor"} desc={"Guess from the actor"} logo="actor-hp" index={2} />,
        <Dlemenubtn key={3} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture-hp" index={3} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the daily wizard" name="hp" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"hp"} mode="classic" desc={"Find the daily wizard"} fields={fields} first_tips={{ name: "Affiliations", key: "loyalty" }} second_tips={{ name: "Patronus", key: "patronus" }} />,
        <Findmode key={'actor'} name={"hp"} mode="actor" desc={"Guess from the actor"} filter="actor" first_tips={{ name: "Affiliations", key: "loyalty" }} second_tips={{ name: "Patronus", key: "patronus" }} />,
        <Findmode key={'picture'} name={"hp"} mode="picture" desc={"Guess from a filtered image"} filter="image_url" />
    ];

    return (
        <div>
            <Dle
                name="hp"
                buttons={buttons}
                modes={modes}
                lang={[
                    <option key={1} className="option" value="en">English</option>,
                    <option key={2} className="option" value="fr">Français</option>
                ]}
            />
        </div>
    )
}

export default Hp;