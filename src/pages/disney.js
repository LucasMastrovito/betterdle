import fields from "../json/disney_fields.json";
import Classic from "../components/classic/classic";
import Findmode from "../components/findmode/findmode";
import Dlemenu from "../components/dle/dlemenu";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dle from "../components/dle/dle";


function Disney() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily Disney character"} logo="classic-disney" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture-disney" index={2} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the daily Disney character" name="disney" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"disney"} mode="classic" desc={"Find the daily character"} fields={fields} first_tips={{ name: "Year", key: "year" }} second_tips={{ name: "Movie", key: "first_film" }} />,
        <Findmode key={'picture'} name={"disney"} mode="picture" desc={"Guess from a filtered image"} filter="image_url" />
    ];

    return (
        <div>
            <Dle
                name="disney"
                buttons={buttons}
                modes={modes}
                lang={[
                    <option key={1} className="option" value="en">English</option>,
                    <option key={2} className="option" value="fr">Français</option>
                ]}
                filters={[
                    "studio"
                ]}
            />
        </div>
    )
}

export default Disney;