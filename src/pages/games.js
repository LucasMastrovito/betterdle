import fields from "../json/games_fields.json";
import Classic from "../components/classic/classic";
import Findmode from "../components/findmode/findmode";
import Dlemenu from "../components/dle/dlemenu";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dle from "../components/dle/dle";


function Games() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily games"} logo="classic-games" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture-games" index={2} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the daily games" name="games" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"games"} mode="classic" desc={"Find the daily games"} fields={fields} first_tips={{name: "Year", key: "year"}} second_tips={{name: "Developper", key: "developer"}} />,
        <Findmode key={'picture'} name={"games"} mode="picture" desc={"Guess from a filtered image"} filter="image_url" />
    ];

    return (
        <div>
            <Dle
                name="games"
                buttons={buttons}
                modes={modes}
            />
        </div>
    )
}

export default Games;