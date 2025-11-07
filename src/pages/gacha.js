import fields from "../json/gacha_fields.json";
import Classic from "../components/classic/classic";
import Findmode from "../components/findmode/findmode";
import Dlemenu from "../components/dle/dlemenu";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dle from "../components/dle/dle";


function Gacha() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily character"} logo="classic" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture" index={2} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the daily gacha character" name="gacha" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"gacha"} mode="classic" desc={"Find the daily character"} fields={fields} first_tips={{ name: "Release Date", key: "release_date" }} second_tips={{ name: "Region", key: "region" }} />,
        <Findmode key={'picture'} name={"gacha"} mode="picture" desc={"Guess from a filtered image"} filter="image_url" />
    ];

    return (
        <div>
            <Dle
                name="gacha"
                buttons={buttons}
                modes={modes}
                lang={[
                    <option key={1} className="option" value="en">English</option>,
                    <option key={2} className="option" value="fr">Français</option>
                ]}
                filters={[
                    "game"
                ]}
            />
        </div>
    )
}

export default Gacha;