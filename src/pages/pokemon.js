import fields from "../json/pokemon_fields.json";
import Classic from "../components/classic/classic";
import Findmode from "../components/findmode/findmode";
import Dlemenu from "../components/dle/dlemenu";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dle from "../components/dle/dle";


function Pokemon() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily Pokemon"} logo="classic-pokemon" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Description"} desc={"Guess from the Pokedex description"} logo="description-pokemon" index={2} />,
        <Dlemenubtn key={3} menu={true} name={"Cries"} desc={"Guess from the Pokemon's cries"} logo="cries-pokemon" index={3} />,
        <Dlemenubtn key={4} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture-pokemon" index={4} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the daily anime character" name="pokemon" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"pokemon"} mode="classic" desc={"Find the daily Pokemon"} fields={fields} first_tips={{ name: "Year", key: "year" }} second_tips={{ name: "Anime", key: "anime" }} />,
        <Findmode key={'description'} name={"pokemon"} mode="description" desc={"Guess from the Pokedex description"} filter="description" />,
        <Findmode key={'cries'} name={"pokemon"} mode="cries" desc={"Guess from the Pokemon's cries"} filter="cry" first_tips={{ name: "Types", key: "types" }} second_tips={{ name: "", key: "anime" }} />,
        <Findmode key={'picture'} name={"pokemon"} mode="picture" desc={"Guess from a filtered image"} filter="image_url" />
    ];

    return (
        <div>
            <Dle
                name="pokemon"
                buttons={buttons}
                modes={modes}
            />
        </div>
    )
}

export default Pokemon;