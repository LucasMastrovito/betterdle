import fields from "../json/toons_fields.json";
import Classic from "../components/classic/classic";
import Findmode from "../components/findmode/findmode";
import Dlemenu from "../components/dle/dlemenu";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dle from "../components/dle/dle";


function Toons() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily toons character"} logo="classic-toons" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Description"} desc={"Guess from a description"} logo="description-toons" index={2} />,
        <Dlemenubtn key={3} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture-toons" index={3} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the daily toons character" name="toons" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"toons"} mode="classic" desc={"Find the daily character"} fields={fields} first_tips={{ name: "Year", key: "year" }} second_tips={{ name: "Movie", key: "first_film" }} />,
        <Findmode key={'description'} name={"toons"} mode="description" desc={"Guess from a description"} filter="description" />,
        <Findmode key={'picture'} name={"toons"} mode="picture" desc={"Guess from a filtered image"} filter="image_url" />
    ];

    return (
        <div>
            <Dle
                name="toons"
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

export default Toons;